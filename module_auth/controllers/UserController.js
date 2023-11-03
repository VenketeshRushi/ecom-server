const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { BadRequest } = require("../utils/errors");
const prisma = require("../../db.server.postgres");

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

  const isAdmin = email.includes(".admin") || email.includes("admin");

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        isAdmin: isAdmin,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Email Address Not Found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    delete user.password

    const token = jwt.sign({ user }, "1234");

    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const isAdmin = email.includes(".admin") || email.includes("admin");

  let firstName = name.trim().split(" ")[0];
  let lastName = name.trim().split(" ")[1];

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(401).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { firstName, lastName, email, password: hashedPassword, isAdmin },
    });

    return res.status(200).json({ message: "User signed up successfully" });

  } catch (error) {
    next(error);
  }
};

exports.saveLocation = async (req, res, next) => {
  const { latitude, longitude } = req.body;

  try {
    const location = await prisma.location.create({
      data: { lat: latitude, long: longitude },
    });

    return res
      .status(201)
      .json({ status: true, message: "Location Saved successfully", location });
  } catch (error) {
    next(error);
  }
};

exports.getLocation = async (req, res, next) => {
  try {
    const location = await prisma.location.findMany();

    return res.status(201).json({
      status: true,
      message: "Users Locations Found successfully",
      location,
    });
  } catch (error) {
    next(error);
  }
};

exports.checkMailAndSendOTP = async (req, res, next) => {
  const { data } = req.body;
  const email = data;
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User Not Found" });
    }

    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);

    await transport.sendMail({
      to: user.email,
      subject: "Password reset OTP",
      from: "venketsh@gmail.com",
      text: `Your password reset otp is ${otp}. This OTP will be valid for 5 minutes.`,
      html: `<html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          .image_block img + div {
            display: none;
          }
    
          @media (max-width: 620px) {
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .row-content {
              width: 100% !important;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          margin: 0;
          background-color: #091548;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #091548;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-color: #091548;
                    background-image: url('https://i.ibb.co/rHGjjKP/background-2.png');
                    background-position: center top;
                    background-repeat: repeat;
                  "
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000;
                            width: 600px;
                            margin: 0 auto;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 15px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 5px;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block block-1"
                                  style="
                                    height: 8px;
                                    line-height: 8px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-2"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Main Image"
                                          src="https://i.ibb.co/nz3f9Rf/header3.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            max-width: 232px;
                                            width: 100%;
                                          "
                                          title="Main Image"
                                          width="232"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 14px;
                                            font-family: 'Varela Round',
                                              'Trebuchet MS', Helvetica, sans-serif;
                                            mso-line-height-alt: 16.8px;
                                            color: #ffffff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 16.8px;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              >OTP for rest password</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="5"
                                  cellspacing="0"
                                  class="text_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 14px;
                                            font-family: 'Varela Round',
                                              'Trebuchet MS', Helvetica, sans-serif;
                                            mso-line-height-alt: 21px;
                                            color: #ffffff;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 21px;
                                            "
                                          >
                                            We received a request to reset your
                                            password. Don’t worry,
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 21px;
                                            "
                                          >
                                            This is your OTP to rest password.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="button_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 20px;
                                        padding-left: 15px;
                                        padding-right: 15px;
                                        padding-top: 20px;
                                        text-align: center;
                                      "
                                    >
                                    <div align="center" class="alignment">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:40px;width:216px;v-text-anchor:middle;" arcsize="60%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#091548; font-family:'Trebuchet MS', sans-serif; font-size:15px"><![endif]-->
    <div style="
        text-decoration: none;
        display: inline-block;
        color: white;
        margin-top: 10px;
        border-radius: 24px;
        width: auto;
        border-top: 0px solid transparent;
        font-weight: undefined;
        border-right: 0px solid transparent;
        border-bottom: 0px solid transparent;
        border-left: 0px solid transparent;
        padding-top: 5px;
        padding-bottom: 5px;
        font-family: 'Varela Round', 'Trebuchet MS', Helvetica, sans-serif;
        font-size: 18px;
        text-align: center;
        mso-border-alt: none;
        word-break: keep-all;
        background-color: #091548;
    " target="_blank">
        <span style="
            padding-left: 25px;
            padding-right: 25px;
            font-size: 18px;
            display: inline-block;
            letter-spacing: normal;
            color: white;
        ">
            <span style="word-break: break-word">
                <span data-mce-style="" style="line-height: 30px">
                    ${otp}
                </span>
            </span>
        </span>
    </div>
</div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_block block-6"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div align="center" class="alignment">
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="60%"
                                        >
                                          <tr>
                                            <td
                                              class="divider_inner"
                                              style="
                                                font-size: 1px;
                                                line-height: 1px;
                                                border-top: 1px solid #5a6ba8;
                                              "
                                            >
                                              <span> </span>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-7"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 25px;
                                        padding-right: 25px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 14px;
                                            font-family: 'Varela Round',
                                              'Trebuchet MS', Helvetica, sans-serif;
                                            mso-line-height-alt: 21px;
                                            color: #7f96ef;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 21px;
                                            "
                                          >
                                            <strong
                                              >Didn’t request a password
                                              reset?</strong
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 21px;
                                            "
                                          >
                                            You can safely ignore this message.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <div
                                  class="spacer_block block-8"
                                  style="
                                    height: 30px;
                                    line-height: 30px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000;
                            width: 600px;
                            margin: 0 auto;
                          "
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  padding-bottom: 15px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 15px;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="5"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="
                                          line-height: 10px;
                                          color: white;
                                          font-weight: 600;
                                        "
                                      >
                                        NIKE CLONE
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_block block-2"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 15px;
                                      "
                                    >
                                      <div align="center" class="alignment">
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="60%"
                                        >
                                          <tr>
                                            <td
                                              class="divider_inner"
                                              style="
                                                font-size: 1px;
                                                line-height: 1px;
                                                border-top: 1px solid #5a6ba8;
                                              "
                                            >
                                              <span> </span>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="html_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div
                                        align="center"
                                        style="
                                          font-family: 'Varela Round',
                                            'Trebuchet MS', Helvetica, sans-serif;
                                          text-align: center;
                                        "
                                      >
                                        <div
                                          style="
                                            height-top: 20px;
                                            color: whitesmoke;
                                          "
                                        >
                                           
                                        Build By Venketesh Rushi
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>`,
    });

    return res.status(201).json({ email: user.email, otp });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  const { email, password } = req.body.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return res.status(200).json({
      message:
        "Password updated successfully. You can now login with your new password.",
    });
  } catch (error) {
    next(error);
  }
};
