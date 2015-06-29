module.exports = function(grunt) {

  grunt.initConfig({
    typescript: {
      base: {
        src: ['src/**/*.ts'],
        dest: '.tmp',
        options: {
          module: 'commonjs', //or commonjs
          target: 'es5', //or es3
          sourceMap: true,
          declaration: true,
          references: [
            'bower_components/DefinitelyTyped/angularjs/angular.d.ts'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typescript');

  grunt.registerTask('default', ['typescript']);

};
