//require
const db = require('../models')

//controllers
// index filter show create update destroy
const index = (req, res) => {
    db.Comment.find({}, (err, foundComments) => {
        if (err) console.log(`error in Comments#index: ${err}`)
        //res.send('Comments index called!')
        res.status(200).json({comments: foundComments})
    })
}

const show = (req,res) => {
    db.Comment.findById(req.params.id, (err, foundComment) => {
        if (err) console.log(`error in Comments#show: ${err}`)
        //res.send(`Comment show called`)
        res.status(200).json({comment: foundComment})
    })
}

const create = (req, res) => {
    db.Comment.create(req.body, (err,createdComment) => {
        if (err) console.log(`error in Comments#create: ${err}`)
        //res.send(`Comment create called`)
        res.status(200).json({comment: createdComment})
    })
}

const update = (req, res) => {
    db.Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment) => {
        if (err) console.log(`error in Comments#update: ${err}`)
        //res.send(`Comment update called`)
        res.status(200).json({
            comment: updatedComment,
            //message: `${updatedComment.Commentname} updated succesfully`
        })
    })
}

const destroy = async (req, res) => {
    db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
        if (err) {
            console.log(`error in Comments#destroy: ${err}`)
            res.send(`Comment destroy error`)
        } else {
            res.send(`Comment deleted successfully`)
        }
    })
}

//export
// index filter show create update destroy
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}