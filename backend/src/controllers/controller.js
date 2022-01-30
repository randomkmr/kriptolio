const usersEntity = require('../database/entities/users')
const favouritesEntity = require('../database/entities/favourites')
const portfolioEntity = require('../database/entities/portfolio')

// Auth register
exports.register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body
    const data = await usersEntity.registerUser(full_name, email, password)
    res.status(201).json({message: "Successfully Registered", status: 201})
  } catch (error) {
    res.status(500).json({ error });
    }
  }

// Auth login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await usersEntity.loginUser(email, password)
    res.cookie('authtoken', token, {
      httpOnly: true,
      secure: true,
      maxAge: 90000,
    })
    res.status(201).json({message: "Successfully Logged in", status: 201})
  } catch (error) {
    res.status(500).json({ error });
  }
}

// Post Favourites
exports.postFavourites = async (req, res) => {
    try {
        const { asset_code } = req.body
        const user_id = Object.values(req.user)[0]
        const data = await favouritesEntity.postFav(user_id, asset_code)
    } catch (error) {
        res.status(500).json({error})
    }
}

// Get Favourites
exports.getFavourites = async (req, res) => {
    try {
        const user_id = Object.values(req.user)[0]
        const data = await favouritesEntity.getFav(user_id)
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({error})
    }
}

// Post Portfolio
exports.postPortfolio = async (req, res) => {
    try {
        const { asset_code, buying_price, amount } = req.body
        const user_id = Object.values(req.user)[0]
        const data = await portfolioEntity.postAsset(user_id, asset_code, buying_price, amount)
    } catch (error) {
        res.status(500).json({error})
    }
}

// Get Portfolio
exports.getPortfolio = async (req, res) => {
    try {
        const user_id = Object.values(req.user)[0]
        const data = await portfolioEntity.getAssets(user_id)
        console.log('Portfolio')
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({error})
    }    
}

// Get Description

