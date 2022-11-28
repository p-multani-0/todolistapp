const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STATUS_ENUM = ["SCHEDULED", "DOING", "DONE"];

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: STATUS_ENUM },
  deadline: { type: Date },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  userId: { type: Schema.ObjectId, ref: "User" },
});

TodoSchema.pre("save", function (next) {
  if (!this.create_at) {
    this.create_at = new Date();
  }
  this.update_at = new Date();
  next();
});

module.exports = mongoose.model("Todo", TodoSchema);
