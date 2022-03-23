const { Section } = require('../models/Section')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const sectionList = await Section.find()

    if (!sectionList) {
        res.status(500).json({success: false})
    }
    res.send(sectionList)
})


module.exports = router