const Customer = require("../models/customer.model.js");
const substrings = require("../../node_modules/substrings");
// const substr = require("../../node_modules/substr");
//  const parser = require('../../node_modules/xml2json');
//onst https = require('../../node_modules/https');
var mysql = require('../../node_modules/mysql');
var jsonxml  = require('../../node_modules/xml2js');
var jsonxml  = require('../../node_modules/jsontoxml');
var convert = require('../../node_modules/xml-js');

const axios = require('../../node_modules/axios');

var fs = require('fs');
const { ECONNABORTED } = require("constants");
const dbConfig = require("../config/db.config.js");


  ///////////////////////////////////////////////////////////////  
   exports.changePbank = (req, res) => {
    //console.log(linkvar)
      console.log("")
      const postarray= { 
        email:req.body.email,
        bank_id:req.body.bank_id
      }
      Customer.change_bank(postarray.email,postarray.bank_id,(err, data) => {

       
       
       res.send(data);
        return;     

      });
   }; 
   //////////////////////////////////////////////////////////////////////////
   exports.deletebank = (req, res) => {
    //console.log(linkvar)
      console.log("")
      const postarray= { 
        email:req.body.email,
        bank_id:req.body.bank_id
      }
      Customer.delete_bank(postarray.email,postarray.bank_id,(err, data) => {
         
       res.send(data);
        return;     

      });
   }; 
