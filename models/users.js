const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
      } 
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;