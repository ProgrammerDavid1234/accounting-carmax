const express = require('express');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');

// Routers and Controllers
const coreAuthRouter = require('./routes/coreRoutes/coreAuth');
const coreApiRouter = require('./routes/coreRoutes/coreApi');
const coreDownloadRouter = require('./routes/coreRoutes/coreDownloadRouter');
const corePublicRouter = require('./routes/coreRoutes/corePublicRouter');
const adminAuth = require('./controllers/coreControllers/adminAuth');
const errorHandlers = require('./handlers/errorHandlers');
const erpApiRouter = require('./routes/appRoutes/appApi');
const fileUpload = require('express-fileupload');

// Create Express app
const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://accounting-carmax-frontend.onrender.com', // Frontend URL
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// File Upload middleware
app.use(fileUpload());

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', coreAuthRouter);
app.use('/api', adminAuth.isValidAuthToken, coreApiRouter);
app.use('/api', adminAuth.isValidAuthToken, erpApiRouter);
app.use('/download', coreDownloadRouter);
app.use('/public', corePublicRouter);

// 404 and error handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.productionErrors);

// Start the server
const PORT = process.env.PORT || 8889;
const server = app.listen(PORT, () => {
  console.log(`Express running → On PORT : ${PORT}`);
});

module.exports = app;
