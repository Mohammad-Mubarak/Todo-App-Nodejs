const User = require("../model/user")


exports.signup = async (req, res) => {
	// destructing
	const { email, name, password } =req.body ;
	
	if (!email || !password || !name) {
		return res.send("some field is missing please send");
	}
	/// storing in database
	const saveuser = new User({
		email,
		name,
		password,
	});
	const user = await saveuser.save();
	req.user = user;
	res.redirect("/")
};
