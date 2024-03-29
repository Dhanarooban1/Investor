const jwt = require("jsonwebtoken");

//Getting data from backend as newUser and here passing it as newUser
const generate = (newUser, res) => {
  const token = jwt.sign(
    {
      id: newUser.id,
      firstName: newUser.firstName,
      email: newUser.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1000 * 3600 * 240,
  });
};

module.exports.generateToken = generate;
