const axios = require('axios'),
    openGraphScrapper = require('open-graph-scraper');

const webscrapping = (req, res) => {
    (async () => {
        try {
            if ((req.query).hasOwnProperty('url') === false || typeof (req.query.url) !== 'string') {
                res.status(400).json({ message: 'BAD_URL' })
            }
            else {
                openGraphScrapper({ url: req.query.url, 'timeout': 8000 }, (err, results,response) => {
                    if (err) {
                        res.status(400).json({ message: 'FAILED_TO_FETCH_THE_DATA' })
                    }
                    else {
                        // console.log('response',response)
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(results, null, 3));
                    }

                }
                );

            }


            // axios({ method, url }).then((
            //     succss
            // ) => {
            //     res.send(succss)
            // }).catch((err) => {

            //     console.log('error while scrapping the page details ', err)
            // })

        }
        catch (err) {
            console.log('server is failing', err)
        }
    })();


}
module.exports = {
    webscrapping
}