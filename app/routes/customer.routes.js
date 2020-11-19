module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    // By Ashish Ji 
    app.post("/addBankDetail", customers.addBankDetail);
    app.post("/bankDetails", customers.showDetails);   //customers ->contrller, showDetails->method
    app.post("/productApi", customers.findAllProducts);
    app.post("/bankverify",customers.bankverify);
    app.post("/bankverify2",customers.bankverify2);
    app.get("/users/:emailId", customers.findOne1users);
    app.get("/getNSEBank", customers.getnsebank);
    app.post("/readFatca1",customers.readFatca1_nov);
     app.get("/purchase",customers.purchase);//
    app.get("/purchase_sip",customers.purchase_sip);//
    app.get("/test",customers.test);//
   app.get("/changePbank",customers.changePbank);
   app.get("/deletebank",customers.deletebank);
};
