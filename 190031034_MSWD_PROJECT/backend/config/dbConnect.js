const mongoose = require('mongoose');
const dbConnect = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://levi:rd37EAbMDqb5BdQY@cluster0.lcgu8.mongodb.net/InstagramDB',
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
