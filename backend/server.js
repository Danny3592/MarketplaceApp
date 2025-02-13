const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utilies/db');

require('dotenv').config();

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/dashboard/categoryRoutes'));


const port = process.env.PORT;

dbConnect();

app.get('/', (req, res) => res.send('dqwdw'));

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
