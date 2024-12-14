const Menu = require("../models/mainMenu");
const MenuItem = require("../models/menuItems");


module.exports={

    addMenu:async(req,res)=>{
        try {
            const {name,description}=req.body;

            if(!name||!description){
                return res.status(400).json({message:"name and description are required"})

            }


            //adding menu

            const menu = new Menu({
                name,description
            })
            await menu.save()


            res.status(201).json({message:"menu created ",menu})
            
        } catch (error) {
            console.error("Error on adding menu",error)
                
        }
    },


    //Get MainMenus

    getAllMenus:async(req,res)=>{

        try {
            const menus = await Menu.find()
            res.status(200).json({message:"Getting all menus", menus})
        } catch (error) {
            console.error("Error getting menus:", error);
            res.status(500).json({ message: "Failed to get menu." });
            
        }


    },

    //POST menu items into Main menu

    menuItemsAdding:async(req,res)=>{


        try {
            const {Id}=req.params;
            const {name,description,price}=req.body
    
            if(!name|!description|!price){
                return res.status(401).json({message:"name, description ,and price are required"})
    
            }
    
            const menu = new MenuItem({
                Id,
                name,
                description,
                price:parseFloat(price),
            });
    
            await menu.save()
            res.status(201).json({ message: "Menu item created successfully", menu });
    
    
        }
        catch(error){
            console.error("Error in adding menu items:", error);

        }

            
    },

    menuItemsGetting:async(req,res)=>{
        try {
            const { Id } = req.params;
            const menuItems = await MenuItem.find({Id})
    
            if(menuItems){
                res.status(200).json({message:"menu items are getting",menuItems})
    
            }

        } catch (error) {
            console.error("Error showing from getting menu items",error)
            res.status(500).json({ message: "Failed to get menu items." });
            
        }


    },

    deleteMenu:async(req,res)=>{
        const { id } = req.params;

  try {
    const deletedItem = await Menu.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully', Menu: deletedItem });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Server error' });
  }


    }

    


};