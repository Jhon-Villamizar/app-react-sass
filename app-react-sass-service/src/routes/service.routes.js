//Route configuration
const express = require('express');
const router = express.Router();
const service = require('../controllers/service.controller');

/* method to obtain data */
router.get('/base', service.getBases);
router.get('/base/:id', service.getBase);
/* method to create data*/
router.post('/base', service.postBase);
/* method to update data */
router.put('/base/:id', service.putBase);
/* method to delete data */
router.delete('/base/:id', service.deleteBase);


/* method to obtain data */
router.get('/balcon', service.getBalcones);
router.get('/balcon/:id', service.getBalcon);
/* method to create data*/
router.post('/balcon', service.postBalcon);
/* method to update data */
router.put('/balcon/:id', service.putBalcon);
/* method to delete data */
router.delete('/balcon/:id', service.deleteBalcon);

module.exports = router;