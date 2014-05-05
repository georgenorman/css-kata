/*
 * css-kata build file.
 *
 * Copyright (c) 2014 George Norman
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *   http://www.apache.org/licenses/LICENSE-2.0
 */
module.exports = function(grunt) {
  'use strict';

  var bannerTemplate = '/*!\n' +
        '  ~ cssKata-<%= pkg.version %>.${EXT}\n' +
        '  ~ Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        '  ~ Licensed under the <%= pkg.license.type %>: <%= pkg.license.url %>\n' +
        '*/\n\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // https://github.com/gruntjs/grunt-contrib-clean
    clean: ["target"],

    // https://github.com/gruntjs/grunt-contrib-concat/blob/master/docs/concat-examples.md
    concat: {
      // concat all third-party libs, vendor libs, external libs, to: 'lib-fragment.[js,css]'
      libFragments: {
        files: {
          'target/js/lib-fragment.js': '<%= pkg.cssKataFiles.libJs %>',
          'target/css/lib-fragment.css': '<%= pkg.cssKataFiles.libCss %>'
        }
      },

      // concat all css-kata specific files to: 'cssKata-fragment.[js,css]'
      cssKataFragments: {
        files: {
          'target/js/cssKata-fragment.js': '<%= pkg.cssKataFiles.cssKataFragmentsJs %>',
          'target/css/cssKata-fragment.css': '<%= pkg.cssKataFiles.cssKataFragmentsCss %>'
        }
      },

      // concat all fragments, with prepended banner, to: 'cssKata-VERSION.[js,css]'
      cssKataCssFinal: {
        files: {
          'target/css/cssKata-<%= pkg.version %>.css': ['target/css/lib-fragment.css', 'target/css/cssKata-fragment.css']
        },
        options:{
          banner: bannerTemplate.replace(/\${EXT}/g, "css")
        }
      },
      cssKataJsFinal: {
        files: {
          'target/js/cssKata-<%= pkg.version %>.js': ['target/js/lib-fragment.js', 'target/js/cssKata-fragment.js']
        },
        options:{
          banner: bannerTemplate.replace(/\${EXT}/g, "js")
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      cssKata: {
        files: {
          'target/js/cssKata-<%= pkg.version %>-min.js': ['target/js/cssKata-<%= pkg.version %>.js']
        }
      },
      options: {
        preserveComments: 'some',
        sourceMap: true
      }
    },

    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
      cssKata: {
        src: 'target/css/cssKata-<%= pkg.version %>.css',
        dest: 'target/css/cssKata-<%= pkg.version %>.css'
      }
    },

    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      cssKata: {
        files: {
          'target/css/cssKata-<%= pkg.version %>-min.css': ['target/css/cssKata-<%= pkg.version %>.css']
        }
      }
    },

    // https://github.com/yoniholmes/grunt-text-replace
    replace: {
      cssKata: {
        src: ['src/*.html'],
        dest: 'target/',
        // NOTE: release JS and CSS file names are all lowercase
        replacements: [{
          // use single minified file for PRD
          from: 'css/all-css.css',
          to: 'css/csskata-<%= pkg.version %>-min.css'
        }, {
          // use single minified file for PRD
          from: 'js/all-javascript.js',
          to: 'js/csskata-<%= pkg.version %>-min.js'
        }]
      }
    },

    // https://www.npmjs.org/package/grunt-contrib-copy
    copy: {
      // NOTE: release JS and CSS file names are all lowercase
      release: {
        files: [
          {expand: true, flatten: true, src: ['target/js/csskata-<%= pkg.version %>.js', 'target/js/csskata-<%= pkg.version %>-min.js'], dest: 'releases/<%= pkg.version %>/js/'},
          {expand: true, flatten: true, src: ['target/css/csskata-<%= pkg.version %>.css', 'target/css/csskata-<%= pkg.version %>-min.css'], dest: 'releases/<%= pkg.version %>/css/'},
          {expand: true, flatten: true, src: ['target/*.html'], dest: 'releases/<%= pkg.version %>/'},
          {expand: true, flatten: true, src: ['src/img/logo/*'], dest: 'releases/<%= pkg.version %>/img/logo/'}
        ]
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-text-replace');

  // register sub-tasks
  grunt.registerTask('assemble-fragments', ['concat:cssKataFragments', 'concat:libFragments']);
  grunt.registerTask('assemble-final', ['concat:cssKataCssFinal', 'concat:cssKataJsFinal']);

  // register main task(s)
  grunt.registerTask('release', ['assemble-fragments', 'assemble-final', 'uglify:cssKata', 'autoprefixer:cssKata', 'cssmin:cssKata', 'replace:cssKata', 'copy:release']);

  // register default task
  grunt.registerTask('default', ['clean', 'release']);
};
