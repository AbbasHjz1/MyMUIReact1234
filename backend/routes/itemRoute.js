const express = require('express');
const router = express.Router();
const {uploadItem,getAllItem,deleteItem, updateItem } = require('../controllers/itemController');
const { protect } = require('../middleware/authMiddleware');
const {upload} = require('../helpers/image_helper');





router.post('/', protect,upload.single('file'), uploadItem);
router.get('/', getAllItem);
router.delete('/:id',protect, deleteItem);
router.put('/:id',upload.single('file'), updateItem);



module.exports = router