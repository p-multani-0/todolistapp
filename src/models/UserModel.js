const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: false,
    index: { unique: true, dropDups: true },
  },
  password: { type: String, required: false },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  if (!this.create_at) {
    this.create_at = new Date();
  }
  this.update_at = new Date();
  next();
});

module.exports = mongoose.model("User", UserSchema);
