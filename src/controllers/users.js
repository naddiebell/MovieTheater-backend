const express = require('express');
const User = require('../models/user');

const router = express.Router();

// get all users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      res.status(204).json({ message: 'No users found' });
    } else {
      return res.json(allUsers);
    }
  } catch (err) {
    return res.status(500).send();
  }
});

//get one user by ID

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });

    if (!user) {
      res.status(404).json({ message: 'user ID does not exist' });
    } else {
      return res.json(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//post user without tickets

router.post('/', async (req, res) => {
  try {

    
  } catch (error) {
    
  }
})

//put / update user

//delete user

module.exports = router;
