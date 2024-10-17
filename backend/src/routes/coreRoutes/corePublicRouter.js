const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.route('/:subPath/:directory/:file').get(function (req, res) {
  try {
    const { subPath, directory, file } = req.params;

    // Sanitize inputs to prevent directory traversal attacks
    const sanitizedSubPath = path.normalize(subPath).replace(/^(\.\.(\/|\\|$))+/, '');
    const sanitizedDirectory = path.normalize(directory).replace(/^(\.\.(\/|\\|$))+/, '');

    const options = {
      root: path.join(__dirname, `../../public/${sanitizedSubPath}/${sanitizedDirectory}`),
    };
    const filePath = path.join(options.root, file);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).json({
          success: false,
          result: null,
          message: 'File not found: ' + file,
        });
      }

      return res.sendFile(file, options, function (error) {
        if (error) {
          return res.status(500).json({
            success: false,
            result: null,
            message: 'Error sending file: ' + error.message,
          });
        }
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: null,
      message: 'An unexpected error occurred: ' + error.message,
      error: error,
    });
  }
});

module.exports = router;
