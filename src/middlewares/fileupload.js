const express = require('express')
const multer  = require('multer')
const path=require("path")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname.join("../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now()
      cb(null,uniqueprefix + '-' + file.fieldname)
    }
  })


const options={
    storage:storage,
    limit:1024*1024*5
}

const upload=multer(options)

module.exports=upload