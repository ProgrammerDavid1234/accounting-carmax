const downloadPdf = require('@/handlers/downloadHandler/downloadPdf');
const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/:directory/:file').get(function (req, res) {
  try {
    const { directory, file } = req.params;

    // Validate file extension
    if (path.extname(file) !== '.pdf') {
      return res.status(400).json({
        success: false,
        message: 'Invalid file type. Only PDF files are allowed.',
      });
    }

    // Sanitize directory input
    const sanitizedDirectory = path.normalize(directory).replace(/^(\.\.(\/|\\|$))+/, '');
    const id = file.slice(sanitizedDirectory.length + 1).slice(0, -4); // Extract id from file name
    downloadPdf(req, res, { directory: sanitizedDirectory, id });
  } catch (error) {
    console.error('Error while downloading PDF:', error); // Log error
    return res.status(500).json({
      success: false,
      result: null,
      message: error.message,
      error: error,
    });
  }
});

module.exports = router;
