const { json } = require("express")
const User = require("../model/user");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		// check for presence of email and password
		if (!email || !password) {
			return res.json({
				message: "please fill all data",
			});
		}
		const existingUser = await User.findOne({ email }).select("+password");

		// not registered in database
		if (!existingUser) {
			return res.render("login", {
				isLogin: true,
				message: "You are not Registered",
			});
		}
		const finaluser = await bcrypt.compare(password, existingUser.password);

		// if not match
		if (!finaluser) {
			return res.send("wrong password");
		}

		const UserId=existingUser._id

		
		// Stroing in session
		req.session.userid = UserId;
		
		res.redirect("/user/todo")
	} catch (error) {
		res.status(500).send("Server Error");
	}
};
