var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local: {
        username : String,
        password : String,
    },
    age: Number,
    location: String,
    phoneNo: String,
    skills: [String],
    suggestedjobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Suggested Jobs"
    }],
    appliedjobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applied Jobs",
        status: String
    }]

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);