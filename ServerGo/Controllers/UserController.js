const UserControll = require('../Models/UserModels');
// import {
//     User
// } from '../Models/UserModels'
exports.all = function (req, res) {
    UserControll.all(function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);

    });
}
exports.finduserget = function (req, res) {
    User.find((err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
}

exports.finduserpost = function (req, res) {
    User.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(User);
    });
}

exports.finduserput = function (req, res) {
    (err, userId) => {

        if (err) return res.status(500).send(err);
        return res.send(userId);
    }
}
exports.finduserdelete = function (req, res) {
    if (err) return res.status(500).send(err);
    const response = {
        message: " successfully deleted",
        id: user._id
    };
    return res.status(200).send(response);
}