const mongoose = require("mongoose");
require("dotenv").config();

//it come's form dotenv file

//mendatory for new mongodb update
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Db Connection Successfull");
  })
  .catch((err) => console.log(err));
