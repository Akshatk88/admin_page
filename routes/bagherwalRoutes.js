const router = require('express').Router();
const c = require('../controllers/bagherwalController');

router.get('/', c.getContent);
router.put('/', c.updateContent);
router.post('/members', c.addMember);
router.delete('/members/:id', c.deleteMember);

module.exports = router;
