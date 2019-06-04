var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)

var commentSchema = new Schema({
    userId: {type:String, required: true},
    postedDate: {type: Date, default: Date.now},
    body: {type: String}
});
commentSchema.index({userId: 'text'});
module.exports = mongoose.model('Comment', commentSchema);
