const bcrypt = require("bcrypt");
const {
  generateToken,
} = require("../utils/helpers/generate_Token_and_cookies");
const DataModel = require("../datamodel");

const {
  validateRegister,
  validateLogin,
} = require("../Validation/Registration");

const userModel = require("../Validation/userModel");
const postModel = require("../datamodel");

const signupUser = async (req, res) => {
  try {
    const { firstName, email, password ,bio, ProfilePic} = req.body;
    const { error, value } = validateRegister(req.body);
    if (error) {
      return res.status(404).json({ error: "Cannot get data from joi" });
    }
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      console.log(error);
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      firstName,
      email,
      password: hashedPassword,
      ProfilePic,
      bio,a
    });
    await newUser.save();
    if (newUser) {
      generateToken(newUser, res);
      res.status(201).json({
        message: "Signup successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          bio: newUser.bio,
          ProfilePic: newUser.ProfilePic
        },
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in signupUser:", error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = validateLogin(req.body);
    if (error) {
      console.log(error);
      return res.status(404).send(error.message);
    }
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).json({ error: "Invalid Email" });
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect)
      return res.status(401).json({ error: "Wrong password" });
    generateToken(user.firstName, res);
    res
      .status(201)
      .json({ message: "Login successfully", firstName: user.firstName });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await DataModel.find({});
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const { FirstName, email, password, profilePic, Bio } = req.body;
//     const { user } = req; // Destructuring user from req
//     let fetchedUser = await userModel.findById(user._id); // Renamed variable to fetchedUser
//     if (!fetchedUser) return res.status(400).json({ error: "User not found" });
//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       fetchedUser.password = hashedPassword;
//     }
//     if (FirstName) fetchedUser.firstName = FirstName;
//     if (email) fetchedUser.email = email;
//     // if (profilePic) fetchedUser.profilePic = profilePic;
//     // if (Bio) fetchedUser.bio = Bio;
//     fetchedUser = await fetchedUser.save();
//     res.status(200).json({ message: "Profile updated successfully", user: fetchedUser });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const getUserPosts = async (req, res) => {
  try {
    const { decoded } = req;
    console.log(decoded);
    const user = await userModel.findById(decoded.id).select("-password");
    if (!user) {
      // return res.status(404).json({ error: "User not found" });
    }
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "User logged out successfully" });
    console.log("Error from getUserPosts:", error.message);
  }
};

module.exports = { signupUser, loginUser, logoutUser, getData, getUserPosts };
