const GoogleStrategy = require("passport-google-oauth20").Strategy;
const prisma = require("../../db.server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "533218171501-o36j7gb96ra5dlqljnudfbcm4abflcb3.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://nike-clone-tcmw.onrender.com/auth/google/callback",
      scope: ["profile", "email"],
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
          const token = jwt.sign({ user: existingUser }, "1234");
          // req.user = { user: existingUser, token: token };
          return done(null, { user: existingUser, token: token });
        }

        // User doesn't exist, create a new one
        // const hashedPassword = await bcrypt.hash("some_password", 10);
        const newUser = await prisma.user.create({
          data: {
            firstName: displayName.split(" ")[0],
            email,
            lastName: displayName.split(" ")[1],
            // password: hashedPassword,
          },
        });

        // Create a JWT token for the new user
        const token = jwt.sign({ user: newUser }, "1234");

        // req.user = { user: newUser, token: token };

        return done(null, { user: newUser, token: token });
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
