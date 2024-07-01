const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Book = require("../models/Book");
const fs = require("fs");


const uploadsDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageCtrl = {
  upload: async (req, res) => {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.json({ status: err.message });
      }

      const imageName = req.file.filename;
      const { bookId } = req.body; 

      try {
        const book = await Book.findById(bookId);
        if (!book) {
          return res.status(404).json({ status: "Book not found" });
        }
        book.image = imageName;
        await book.save();
        res.json({ status: "ok", data: book });
      } catch (error) {
        res.json({ status: error.message });
      }
    });
  },

  get: async (req, res) => {
    try {
      const books = await Book.find({});
      res.json({ status: "ok", data: books });
    } catch (error) {
      res.json({ status: error.message });
    }
  },
};

module.exports = imageCtrl;
