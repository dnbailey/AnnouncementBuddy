module.exports = function(app) {
  var announcement = require('../controller/controller.js');
  // add ann
  app.post('/createAnn', announcement.add);
  // delete announcement
  app.delete('/deleteAnn/:annId', announcement.delete);
  // modify announcement
  app.put('/modifyAnn/:annId', announcement.modify);

}
