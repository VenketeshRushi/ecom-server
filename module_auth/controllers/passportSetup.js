const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = require("../../db.server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function initialize(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_ORIGIN}/auth/google/callback`,
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          const { id, emails, displayName } = profile;
          const email = emails[0].value; // Assuming Google provides at least one email

          console.log("google data", emails, displayName);

          // Check if the user already exists based on their email
          const existingUser = await prisma.user.findUnique({
            where: { email },
          });

          if (existingUser) {
            // User already exists
            return done(null, existingUser);
          }

          // User doesn't exist, create a new one
          const hashedPassword = await bcrypt.hash("some_password", 10);
          const newUser = await prisma.user.create({
            data: {
              firstName: displayName,
              email,
              password: hashedPassword,
            },
          });

          // Create a JWT token for the new user
          const token = jwt.sign({ user: newUser }, "your-secret-key");

          return done(null, newUser);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id); // Serialize user by user.id
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user || !user.enabled) {
        return done(null, false);
      }

      // Remove sensitive data like password
      user.password = undefined;

      // Customize user object as needed
      // For example, handling avatars or additional data

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
}

module.exports = initialize;
