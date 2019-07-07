const router = require('express').Router()
const corsWhiteList = require('./corsWhiteList');

const marvelEn = require('./data/en/marvel');
const marvelRu = require('./data/ru/marvel');

const dcEn = require('./data/en/dc');
const dcRu = require('./data/ru/dc');


router.get('/ru/all', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(marvelRu.concat(dcRu));
});

router.get('/en/all', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(marvelEn.concat(dcEn));
})

router.get('/ru/marvel', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(marvelRu);
})

router.get('/en/marvel', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(marvelEn);
})


router.get('/ru/dc', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(dcRu);
})

router.get('/en/dc', (req, res, next) => {
    if(corsWhiteList.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.status(200).json(dcEn);
})

module.exports = router