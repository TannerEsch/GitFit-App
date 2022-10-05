// const express = require('express');
// const router = express.Router();
// const db = require('../models');
// const isLoggedIn = require('../middleware/isLoggedIn');
// const axios = require('axios');
// const { response } = require('express');
// const apiKey = process.env.API_KEY;
// const appId = process.env.APP_ID;

// router.get('/:id', (req, res) => {
//     res.render("details")
//     })

//     router.get('/', isLoggedIn, (req, res) => {
//         db.nutrition.findAll({
//             where: {
//                 userId: req.user.id
//             }
//         })
//             .then(nutritions => {
//                 res.render('nutrition', {
//                     nutritions: nutritions,
    
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         });



// //nutrition post route
// router.post('/', isLoggedIn, (req, res) => {
//     axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${apiKey}&nutrition-type=logging&ingr=${req.body.ingredient}`)
//     .then(response => {
//         if (response.status !== 200) throw Error
//         const nutrition = response.data;
//         const date = new Date().toISOString()
//         db.nutrition.create({
//             userId: req.user.id,
//             name: req.body.ingredient,
//             calories: nutrition.totalNutrients.ENERC_KCAL.quantity, 
//             fats: nutrition.totalNutrients.FAT.quantity,
//             carbs: nutrition.totalNutrients.CHOCDF.quantity,
//             protein: nutrition.totalNutrients.PROCNT.quantity,
//             createdAt: date,
//             updatedAt: date
//         }) 
//         .then(create => {
//             res.redirect('/nutrition')
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     })
//     .catch(error => {
//         console.log(error)
//     })
// });

// module.exports = router;