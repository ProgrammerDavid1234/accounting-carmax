require('module-alias/register');
const mongoose = require('mongoose');
const { globSync } = require('glob');
const path = require('path');
const cors = require('cors'); // Import the cors package

// Ensure we are running node 20 or greater
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 20) {
  console.log('Please upgrade your node.js version at least 20 or greater. 👌\n ');
  process.exit();
}

// Import environmental variables
require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => {
    console.log(`1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`);
    console.error(`2. 🚫 Error → : ${error.message}`);
  });

// Load models
const modelsFiles = globSync('./src/models/**/*.js');
for (const filePath of modelsFiles) {
  require(path.resolve(filePath));
}

// Start our app
const app = require('./app');

// Use CORS to allow requests from your frontend URL
app.use(cors({
  origin: 'https://accounting-carmax-frontend.onrender.com', // Allow requests from your frontend
}));

app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});
