const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudosSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Username is Required"
      },
      
      from: {
        type: String,
        trim: true,
        required: "Username is Required"
      },
      
      to: {
        type: String,
        trim: true,
        required: "Username is Required"
      },

      message: {
        type: String,
        trim: true,
        required: "Username is Required"
      } 
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;