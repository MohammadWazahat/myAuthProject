const jwt = require("jsonwebtoken");

const myAuthMiddle = (req, res, next) => {
  console.log("i m middleware");
  // console.log(req.headers.authorization.split(' ')[1])
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try {
    // console.log(jwt.verify(token,process.env.JWT_SECRET))
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    // console.log(req.user)
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: " invalid token " });
  }
};

module.exports = myAuthMiddle;