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

exports.addBook = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const { title, description, author, genre, department, count, vendor, vendor_id, publisher, publisher_id } = req.body;
    const image = req.file ? req.file.filename : "";

    const newBook = new Book({
      title,
      description,
      author,
      genre,
      department,
      count,
      vendor,
      vendor_id,
      publisher,
      publisher_id,
      image,
    });

    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
