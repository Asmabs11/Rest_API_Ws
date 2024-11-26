const express = require("express")
const router = express.Router()
const User1 = require ("../Models/User.js")


router.post('/addUser1', async (req, res) => {
    try {
      const { Name, Age, Email, Adress } = req.body;
      const savedUser1 = await User1.create({  Name, Age, Email, Adress  });
      res.status(201).json(savedUser1);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
    router.get("/getIdUser1/:id", async (req,res)=>{
        try {
            const id = req.params.id
            const result = await User1.findById(id);
          if (!result) {
            return res.status(404).json({ error: "User not found" }); 
        }

        
        res.status(200).json(result); 
    } catch (error) {
        console.log(error); 
        
       
        res.status(500).json({ error: "Internal Server Error" });
    }
});
    

    router.put('/User1/:id', async (req, res) => {
        try {
          const User1Id = req.params.id;
          const {Adress}  = req.body; 
          const updatedUser1 = await User1.findByIdAndUpdate(User1Id,
            { $set: { Adress: Adress } }, 
            { new: true }                         
          );
          
          if (!updatedUser1) {
            return res.status(404).json({ error: 'User not found' });
          }
      
          
          res.status(200).json(updatedUser1);
        } catch (err) {
          
          res.status(500).json({ error: err.message });
        }
      });
    
      router.delete('/deleteUser1/:id', async (req, res) => {
        try {
          const User1Id = req.params.id;
          const deletedUser1 = await User1.findByIdAndDelete(User1Id);
          if (!deletedUser1) {return res.status(404).json({ error: 'User not found' })};
          res.status(200).json({ message: 'User deleted', deletedUser1 });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
    
    module.exports = router
    