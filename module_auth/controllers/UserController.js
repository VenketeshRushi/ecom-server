const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { BadRequest } = require("../utils/errors");
const prisma = require("../../db.server");

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.NODEMAILERUSER,
    pass: process.env.NODEMAILERPASSWORD,
  },
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new BadRequest("Invalid Credentials");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new BadRequest("Invalid Credentials");
    }

    const token = jwt.sign({ user }, "1234");

    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let firstName = name.trim().split(" ")[0];
  let lastName = name.trim().split(" ")[1];

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      throw new BadRequest("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { firstName, lastName, email, password: hashedPassword },
    });

    const token = jwt.sign({ user }, "your-secret-key");

    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.checkMailAndSendOTP = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new BadRequest("User not found");
    }

    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);

    await transport.sendMail({
      to: user.email,
      subject: "Password reset OTP",
      from: "venketsh@gmail.com",
      text: `Your password reset otp is ${otp}. This OTP will be valid for 5 minutes.`,
    });

    res.status(201).json({ email: user.email, otp });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    res.status(200).json({
      message:
        "Password updated successfully. You can now login with your new password.",
    });
  } catch (error) {
    next(error);
  }
};
