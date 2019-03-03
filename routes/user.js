var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
      contractNo: {
            type: String,
            trim: true,
            default: '',
            required: true
      }
      
});
mongoose.model('sendimagetomanager', UserSchema);

module.exports = mongoose.model('sendimagetomanager');
