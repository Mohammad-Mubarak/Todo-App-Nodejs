const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [40, "Name should be under 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
   
  },
  password: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
});

//encrypt password before save - HOOKS
userSchema.pre("save", async function (next) {
    // if not modifed than dont do anything
    if (!this.isModified("password")) {
      return next();
    }
    // if modfied than do this
    this.password = await bcrypt.hash(this.password, 10);
  });
  

// validate the password with passed on user password
userSchema.methods.isValidatedPassword = async function (usersendPassword) {
    return await bcrypt.compare(usersendPassword, this.password);
  };




module.exports = mongoose.model("User", userSchema);

