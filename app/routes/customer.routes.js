module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    // By Ashish Ji 
    
    app.get("/changePbank",customers.changePbank);
    app.get("/deletebank",customers.deletebank);
};
