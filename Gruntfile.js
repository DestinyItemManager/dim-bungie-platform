module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        modules: 'common',
        sourceMap: true,
        optional: ['es7.asyncFunctions', 'runtime']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.es6.js'],
          dest: 'app/scripts'
        }]
      }
    }
  });

  grunt.registerTask('default', ['babel']);
};
