const users = require('mongodb://27017/serverdb');

exports.all = function (cb) {
    users.get().collection('User').find().toArray(function (err, doc) {
        cb(err, doc);
    });
}

exports.finduserget = function (id, cb) {
    users.find({ name: "Bob", laste_name: "Bobrush", email: "bobrush@gmail.com", password: "2008" }, (err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
    cb(err, doc);
}

exports.finduserpost = function (User, cb) {
    const User = new Users(req.body);
    cb(err, doc);
}

exports.finduserput = function (User, cb) {
    User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
    );
    cb(err, doc);
}

exports.finduserdelete = function (User, cb) {
    User.findByIdAndRemove(req.params.userId, (err, user) => {
        cb(err, doc);
    });
}
