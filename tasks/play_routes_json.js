/*
 * grunt-play-routes-json
 * https://github.com/charliedowler/grunt-play-routes-json
 *
 * Copyright (c) 2014 charliedowler
 * Licensed under the MIT license.
 */

'use strict';

var playToJSON = require('play-routes-to-json');
var playFromJSON = require('play-routes-from-json');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('play_routes_json', 'Convert your play routes file to a nicer json formas', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(path) {
          return grunt.file.read(path);
        });
      src.forEach(function(source) {
        var contents = options.toJSON ? playToJSON(source) : playFromJSON(JSON.parse(source).routes);
        // Write the destination file.
        grunt.file.write(file.dest, new Buffer(contents));

        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
      });
    });
  });

};
