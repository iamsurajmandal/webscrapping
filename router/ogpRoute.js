const openGraphWebScrapping = require('../controller/openGraphWebScrapping')
module.exports=(app)=>{
   app.get('/ogp',openGraphWebScrapping.webscrapping)
}