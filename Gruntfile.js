module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        "clean": {
          "build": [
            "./.tmp",
            "./dist"
          ],
          "release": [
            "./.tmp",
            "./dist"
          ]
        },
        "babel": {
          "options": {
            "modules": 'common',
            "sourceMap": true,
            "experimental": true
          },
          "dist": {
            "files": [{
              "expand": true,
              "cwd": 'src',
              "src": ['**/*.js'],
              "dest": '.tmp/scripts'
            }]
          }
        },
        "browserify": {
          "dist": {
            "files": {
              'dist/bungieNetPlatform.js': [
                'src/dimBungieNetPlatform.module.js'
              ],
            },
            "options": {
              "transform": [
                'browserify-shim',
                'babelify'
              ]
            }
          }
        }
      });

      grunt.registerTask('default', [
        'clean:build',
        'browserify'
      ]);
    };
