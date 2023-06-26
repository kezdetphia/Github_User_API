var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')


const token = process.env.GITHUB_TOKEN

const ROOT_URL = 'https://api.github.com';

/* GET home page. */
router.get('/', async (req, res, next)=> {
  const username = req.query.username

  if(!username) return res.render('index', {userData:null})

  const options = {
    headers: {
      Authorization : `token${token}`,
    }
  }
  try{
    const userData = await fetch(`${ROOT_URL}/users/${username}`, options)
    .then(res=>res.json())

    userData.repos = await fetch(userData.repos_url, options)
    .then(res=>res.json())
    res.render('index', {userData});
  }catch(err){
    console.log(err)
  }
});








module.exports = router;
