const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserModel = new Schema({
    UserEmail: { type: String, require: true },
    UserName: { type: String, require: true },
    UserPassword: { type: String, require: true },
});

UserModel.statics.hashPassword = function hashPassword(UserPassword) {
    return bcrypt.hashSync(UserPassword, 10);
}

UserModel.methods.isValid = function hashPassword(hashedPassword) {
    return bcrypt.compareSync(hashedPassword, this.UserPassword);
}

module.exports = mongoose.model('Users', UserModel)