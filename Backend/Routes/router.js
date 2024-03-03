// const express = require("express");
// const router = express.Router();
// const DataModel = require("./datamodel");


// const {
//   validateRegister,
//   validateLogin,
// } = require("./Validation/Registration");
// const userModel = require("./Validation/userModel");

// router.use(express.json());

// router.get("/", (req, res) => {
//   res.status(201).send("<h1>Hello</h1>");
// });

// // router.post("/register", async (req, res) => {
// //   try {
// //     const { firstName, lastName, email, password } = req.body;

// //     // Validate data
// //     const { error, value } = validateRegister({
// //       firstName,
// //       lastName,
// //       email,
// //       password,
// //     });

// //     if (error) {
// //       return res.status(400).json({ error: error.details[0].message });
// //     }

// //     // Check if user already exists
// //     const existingUser = await userModel.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).send("User already exists");
// //     }

// //     // Create new user
// //     const newUser = await userModel.create({ FirstName, email, password });
// //     return res.status(200).json(newUser);
// //   } catch (err) {
// //     return res.status(500).json({ error: err.message });
// //   }
// // });

// // router.post("/login", async (req, res) => {
// //   const data = req.body;

// //   const { error, value } = validateLogin(data);

// //   if (error) {
// //     return res.status(400).json({ error: error.details[0].message });
// //   }

// //   const email = await userModel.findOne({ email: data.email });
// //   if (!email) {
// //     return res.status(400).send("no User found Create new");
// //   }
// // });





// router.get("/getById/:id", async (req, res) => {
//   try {
//     const data = await DataModel.findById(req.params.id);
//     res.status(200).send(data);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });


// router.put("/UpdateUsers", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await DataModel.findByIdAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });
//     res.status(200).send(data);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });


// router.delete("/delete-data", (req, res) => {
//   res.status(200).json({
//     message: "Deleted a request",
//   });
// });


// module.exports = router;
