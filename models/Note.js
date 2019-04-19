var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create a CommentSchema object
var NoteSchema = new Schema({
  note: String
});
// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);
// Export the Comment model
module.exports = Note;