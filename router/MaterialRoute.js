const express = require('express');
const materialController = require('../controller/materialController')
const router = express.Router(); 
const uploads= require('../middleware/upload')


router
.route('/')
.get(materialController.getMaterial)
.post(uploads,materialController.createMaterial)

module.exports=router;