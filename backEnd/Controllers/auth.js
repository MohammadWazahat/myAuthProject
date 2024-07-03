const generateToken = require("../Auth/Auth");
const Auth = require("../Models/auth");

//Handlers or controllers : they will go in the controller file
const handleSignUp = async (req, res) => {
  try {
    const body = req.body;
    const result = await Auth.create({
      username: body.username,
      password: body.password,
      gender: body.gender,
      email: body.email,
    });

    // creating payload
    const payload = {
      username: result.username,
    };

    //Generating token
    const token = generateToken(payload);

    console.log("result", result);
    return res
      .status(201)
      .json({ msg: "success", result: result, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get or Read all users
const handleGetAllUsers = async (req, res) => {
  const user = await Auth.find({});
  res.json(user);
};

module.exports = {
  handleSignUp,
  handleGetAllUsers,
};
