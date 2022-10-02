const Menu = require('../models/itemModel')

const uploadItem = async (req, res, next) => {
    try {
        const menu = await Menu.create({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            desc: req.body.desc,
            file: {
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: fileSizeFormatter(req.file.size, 2)
            }
        })
        res.status(201).json(menu)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllItem = async (req, res, next) => {
    try {
        const items = await Menu.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json(error)
    }
}
const deleteItem = async (req, res, next) => {
    const item = await Menu.findById(req.params.id)

    if(!item){
        res.status(400)
        throw new Error('Item Not Found')
    }else {
        await item.remove()
        res.status(200).json({id: req.params.id})
    }
    
}
const updateItem = async (req, res, next) => {
    const item = await Menu.findById(req.params.id)

    try{if(!item){
        res.status(400)
        throw new Error('Item Not Found')
    }else {
        const updatedItem = await Menu.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                category: req.body.category,
                price: req.body.price,
                desc: req.body.desc,
                file: {
                    fileName: req.file.originalname,
                    filePath: req.file.path,
                    fileType: req.file.mimetype,
                    fileSize: fileSizeFormatter(req.file.size, 2)
                }}}, {new:true})
        res.status(200).json(updatedItem)
    }}
    catch(err){
        res.status(500)
        throw new Error("Somethings Wrong")
    }
    
}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}


module.exports = {
    uploadItem,
    getAllItem,
    deleteItem,
    updateItem
}