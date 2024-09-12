import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to Mongodb')
  })
  .catch((err) => {
    console.log('Error in connection to database: ', err);
  })

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", userRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})



