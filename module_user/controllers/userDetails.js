const prisma = require("../../db.server");

exports.addUserImage = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded.");
    }

    const url = "https://nike-clone-tcmw.onrender.com";
    const uploadedFile = url + "/public/uploads/" + req.file.filename;
    const user = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        profilePic: uploadedFile,
      },
    });
    res.status(201).json({
      message: "Done upload!",
      uploadedFile: uploadedFile,
      user: user,
    });
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
