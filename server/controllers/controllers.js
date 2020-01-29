const mongoose = require('mongoose');

const Project = mongoose.model('Project');
const Ticket = mongoose.model('Ticket');

module.exports = {
    // Projects
    getAllProj: (req,res) => {
        Project.find()
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },

    getOneProj: (req,res) => {
        Project.findOne({_id: req.params.id})
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },
    createProj: (req,res) => {
        Project.create(req.body)
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },
    updateProj: (req,res) => {
        Project.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, new: true})
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },
    addTicket: (req,res) => {
        Ticket.create(req.body)
            .then(newTic => {
                Project.findOneAndUpdate({_id:req.params.id}, {$push: {tickets: newTic}}, {runValidators: true, new: true})
                    .then(data => {
                        res.json({msg: 'success', results: data});
                    })
                    .catch(err => {
                        res.json({msg: 'error', results: err});
                    })
            })
            .catch(err => {
                res.json({msg: 'error', results: err});
            })
    },
    deleteProj: (req,res) => {
        Project.findOneAndDelete({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },

    // Tickets
    getAllTic: (req,res) => {
        Ticket.find()
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },
    getOneTicket: (req,res) => {
        Ticket.findOne({_id: req.params.id})
            .then(data => {
                res.json({msg: 'success', results: data})
            })
            .catch(err => {
                res.json({msg: 'error', results: err})
            })
    },
    updateTicket: (req,res) => {
        Project.findOneAndUpdate({'tickets._id': req.params.id}, {$set: {'tickets.$.title':req.body.title, 'tickets.$.status':req.body.status, 'tickets.$.priority':req.body.priority, 'tickets.$.tic_desc':req.body.tic_desc, 'tickets.$.type':req.body.type, }}, { runValidators: true, new: true })
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    deleteTicket: (req,res) => {
        Project.findOneAndUpdate({}, {$pull: {'tickets': {'_id':req.params.id}}})
        .then(data => {
            res.json({ message: "success", results: data});
            Ticket.findOneAndDelete({_id: req.params.id})
                .then(data => {
                    res.json({ message: "success", results: data});
        
                })
                .catch(err => {
                    res.json({ message: "error", results: err });
                })
        })
        .catch(err => {
            res.json({ message: "error", results: err });
        })
    }


}