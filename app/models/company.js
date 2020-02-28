var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var companySchema = mongoose.Schema({
    local: {
        username : String,
        password : String,
    },
    companyName: String,
    Position: String,
    requirements: String,
    description: String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', companySchema);