const controllers = require('../controllers/controllers');
const path = require('path');

module.exports = (app) => {
    // For Projects
    app.get('/home', controllers.getAllProj);
    app.get('/projects/:id', controllers.getOneProj);
    app.post('/projects', controllers.createProj);
    app.put('/projects/:id', controllers.updateProj);
    app.put('/projects/:id/addticket', controllers.addTicket);
    app.delete('/delproj/:id', controllers.deleteProj);
    
    // For Tickets
    app.get('/tickets', controllers.getAllTic);
    app.get('/tickets/:id', controllers.getOneTicket);
    app.put('/tickets/:id', controllers.updateTicket);
    app.delete('/deltic/:id', controllers.deleteTicket);

    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}