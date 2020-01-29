const mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
    title: {type: String, required: true},
    tic_desc: {type: String, required: true},
    type: {type: String, required: true},
    priority: {type: String, default: 'High'},
    status: {type: String, default: 'Open'}
}, {timestamps: true});

var ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    tickets: [TicketSchema]
}, {timestamps: true});

mongoose.model('Ticket', TicketSchema);
mongoose.model('Project', ProjectSchema);