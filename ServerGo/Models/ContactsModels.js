const cont = require('localhost:8080/api/contacts/');

exports.all = function (cb) {
    cont.get().collection('contacts').find().toArray(function (err, doc) {
        cb(err, doc);
    });
}

exports.findById = function (id, cb) {
    cont.get().collection('contacts').findOne({ _id: reqId(id) })(function (err, doc) {
        const reqId = id;
        let contact = contacts.filter(contact => {
            return contact.id == reqId;
        });
    });
    cb(err, doc);
}

exports.findByFirstName = function (first_name, cb) {
    cont.get().collection('contacts').findOne({ Name: reqName(first_name) })(function (err, doc) {
        const reqName = first_name;
        let contact = contacts.filter(contact => {
            return contact.first_name == reqName;
        });
    });
    cb(err, doc);
}

exports.findByLasteName = function (laste_name, cb) {
    cont.get().collection('contacts').findOne({ LasteName: reqLasteName(laste_name) })(function (err, doc) {
        const reqLasteName = laste_name;
        let contact = contacts.filter(contact => {
            return contact.laste_name == reqLasteName;
        });
    });
    cb(err, doc);
}

exports.findByEmail = function (email, cb) {
    cont.get().collection('contacts').findOne({ Email: reqEmail(email) })(function (err, doc) {
        const reqEmail = email;
        let contact = contacts.filter(contact => {
            return contact.email == reqEmail;
        });
    });
    cb(err, doc);
}

exports.create = function (contacts, cb) {
    let contact = {
        id: contacts.length + 1,
        first_name: req.body.first_name,
        laste_name: req.body.laste_name,
        email: req.body.email,
        password: req.body.password
    }

    contacts.push(contact);
    res.json(contact);

    cb(err, doc);
}

exports.update = function (id, cb) {
    const reqId = req.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];

    const index = contacts.indexOf(contact);
    const keys = Object.keys(req.body);

    keys.forEach(key => {
        contact[key] = req.body[key];
    });
    contacts[index] = contact;

    res.json(contacts[index]);

    cb(err, doc);
}

exports.delete = function (id, cb) {
    const reqId = id;
    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    res.json({ message: `User ${reqId} deleted.` });

    cb(err, doc);
}