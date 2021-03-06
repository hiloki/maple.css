module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Start a static web server. 
    connect: {
      // Reload assets live in the browser
      livereload: {
        options: {
          port: 8000,
          base: '../../'
        }
      }
    },
    // Compile Compass to CSS. 
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    csso: {
      app: {
        files: [
          {src: ['../css/maple.css'], dest: '../css/maple.min.css'}
        ]
      }
    },
    // Validate files with JSHint.
    jshint: {
   
    },
    // Concatenate files.
    concat: {

    },
    // Copy files and folders.
    copy: {
      js: {
        files: [
          {src: ['../js/app.js'], dest: '../js/app.min.js'}
        ]
      }
    },
    // Minify files with UglifyJS.
    uglify: {

    },
    // Run tasks whenever watched files change.
    watch: {
      css: {
        files: ['../css/**/*.scss'],
        tasks: ['compass', 'csso']
      }
    },
    webfont: {
      icons: {
        src: '../font/svg/*.svg',
        dest: '../font/',
        destCss: '../font/',
        options: {
          font: 'petpic',
          types: ['woff','ttf'],
          stylesheet: 'scss',
          htmlDemo: false,
          syntax: 'bootstrap'
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-webfont');

  // Default task.
  grunt.registerTask('default', ['']);

  // Indivisual Tasks.
  grunt.registerTask('develop', ['connect', 'watch']);
  grunt.registerTask('minify', ['compass', 'copy:css', 'csso']);
};