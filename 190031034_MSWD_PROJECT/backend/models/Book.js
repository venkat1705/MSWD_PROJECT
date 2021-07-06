const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required:true
    },
    time:{
      type:String,
      required:true
    },
    date:{
      type:String,
      required:true
    },
    doctor:{
      type:String,
      required:true
    },
    hospital:{
      type:String,
      required:true
    },
    dob:{
      type:String,
      required:true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
