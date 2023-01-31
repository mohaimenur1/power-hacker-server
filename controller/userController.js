const userModel = require("../modal/userModal");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await userModel.findOne({ email });

  if (userExist) {
    return res.status(200).send({ success: false, msg: "user Already exist" });
  } else {
    try {
      const newUser = await userModel.create(req.body);
      res.status(200).json({
        success: true,
        result: newUser.length,
        newUser,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        msg: error,
      });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.find({ email, password });
    if (user) {
      return res.status(200).send({
        success: true,
        msg: "login Successfully",
      });
    } else {
      return res.send({ success: false, msg: "Invaild Credentials" });
    }
  } catch (error) {
    return res.send(error);
  }
};

module.exports = { createUser, loginUser };
