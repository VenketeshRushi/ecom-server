const prisma = require("../../db.server");
const fs = require('fs');

exports.addUserImage = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded.");
    }

    const url = "https://nike-clone-tcmw.onrender.com";
    const uploadedFile = url + "/public/uploads/" + req.file.filename;

    const checkProfilePic = await prisma.user.findUnique({
      where: {
        id: req.user.id
      }
    });

    if (checkProfilePic.profilePic !== null && checkProfilePic.profilePic !== "") {
      
      const profilePicName = checkProfilePic.profilePic.split("uploads/")[1];

      fs.unlink(`public/uploads/${profilePicName}`, async function (err) {
        if (err) {
          next(err);
        } else {
          console.log('File deleted!');
          const user = await prisma.user.update({
            where: {
              id: req.user.id,
            },
            data: {
              profilePic: uploadedFile,
            },
          });
          return res.status(201).json({
            message: "Done upload!",
            uploadedFile: uploadedFile,
            user: user,
          });
        }
      });
    } else {
      const user = await prisma.user.update({
        where: {
          id: req.user.id,
        },
        data: {
          profilePic: uploadedFile,
        },
      });
      return res.status(201).json({
        message: "Done upload!",
        uploadedFile: uploadedFile,
        user: user,
      });
    }
  } catch (error) {
    next(error);
  }
};


exports.updateUserDetails = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
