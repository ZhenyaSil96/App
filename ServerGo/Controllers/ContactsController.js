const contacts = require('../Models/ContactsModels');

exports.all = function (req, res) {
    contacts.all(function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}
exports.findById = function (req, res) {
    contacts.findById(req.params.id, function (err, doc) {
        if (!contact) {
            res.status(404).json({ message: 'No contact found' });
        }
        res.json(contact[0]);
    })
}

exports.findByFirstName = function (req, res) {
    contacts.findByFirstName(req.params.first_name, function (err, doc) {
        if (!contact) {
            res.status(404).json({ message: 'No contact Name found' });
        }
        res.json(contact[0]);
    });
}


exports.findByLasteName = function (req, res) {
    contacts.findByLasteName(req.params.laste_name, function (err, doc) {
        if (!contact) {
            res.status(404).json({ message: 'No contact LasteName found' });
        }
        res.json(contact[0]);
    });
}

exports.findByEmail = function (req, res) {
    contacts.findByEmail(req.params.email, function (err, doc) {
        if (!contact) {
            res.status(404).json({ message: 'No contact Email found' });
        }
        res.json(contact[0]);
    });
}
exports.create = function (req, res) {
    let contacts = {
        name: req.body.name
    };
    contacts.create(contacts, function (err, contact) { });
    if (!contact) {
        res.status(404).json({ message: 'No contact create found' });
    }
    res.send(contacts);
}
exports.update = function (req, res) {
    contacts.update(req.params.id, { name: req.body.name }, function (err, contact) {
        if (!contact) {
            res.status(404).json({ message: 'No contact update found' });
        }
        res.send(contacts);
    });
}

exports.delete = function (req, res) {
    contacts.delete(req.params.id, function (err, doc) {
        if (!contact) {
            res.status(404).json({ message: 'No contact update found' });
        }
        res.send(contacts);
    });
}