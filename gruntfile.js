/**
 * Created by Nathan on 21/06/2015.
 */
module.exports = function(grunt){
    grunt.initConfig({

    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerInitTask("default", ["jshint"]);
}