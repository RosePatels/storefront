const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const ProductRoutes = require('./routes/api/products')
const path = require('path')
const UserRoutes = require('./routes/api/users')
const db = require('./config/keys').mongoURI;

require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    })

}

app.use('/api/products', ProductRoutes)
app.use('/api/users', UserRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))