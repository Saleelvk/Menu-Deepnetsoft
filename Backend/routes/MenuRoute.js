const express = require('express');
const { addMenu, getAllMenus, menuItemsAdding, menuItemsGetting,deleteMenu } = require('../controllers/menuControllers');
const router = express.Router();


    
//menu 
router.post('/',addMenu);
router.get('/',getAllMenus);

//menu items
router.post('/:Id/menuItem',menuItemsAdding);
router.get('/:Id/menuItem',menuItemsGetting);

//delete menu
router.delete('/menuItem/:id',deleteMenu)

module.exports = router;
