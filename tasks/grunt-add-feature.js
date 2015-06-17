module.exports = function(grunt) {
  grunt.registerTask('addFeature', 'Adds an angular feature to the project', function(name) {
    grunt.log.writeln("Now adding a feature named " + name);
    var conf = grunt.config('addFeature');
    var featureRoot = conf.root || "app/features/";

    if (!grunt.file.exists(featureRoot)) {
      grunt.file.mkdir(featureRoot);
    }

    var path = featureRoot + name;
    if (grunt.file.exists(path)) {
      grunt.log.error('A feature named ' + name + ' already exists!');
      return false;
    }

    var nameParts = name.split("/");
    var templateName = nameParts.join(".");
    var featureName = nameParts[nameParts.length - 1];

    var templateData = {
      appName: "app",
      featureName: featureName,
      templateName: templateName,
      randomColor: Math.floor(Math.random()*16777215).toString(16)
    };

    var path = featureRoot + name;
    grunt.log.writeln("\tcreating folder");
    grunt.file.mkdir(path);

    grunt.log.writeln("\tgenerating behavior");
    var behaviorTemplate = grunt.file.read('tasks/grunt-add-feature/behavior.us');
    var behavior = grunt.template.process(behaviorTemplate, {data: templateData});

    grunt.log.writeln("\tgenerating style");
    var styleTemplate = grunt.file.read('tasks/grunt-add-feature/style.us');
    var style = grunt.template.process(styleTemplate, {data: templateData});

    grunt.log.writeln("\tgenerating template");
    var templateTemplate = grunt.file.read('tasks/grunt-add-feature/template.us');
    var template = grunt.template.process(templateTemplate, {data: templateData});

    grunt.log.writeln("\tgenerating spec");
    var specTemplate = grunt.file.read('tasks/grunt-add-feature/spec.us');
    var spec = grunt.template.process(specTemplate, {data: templateData});


    grunt.file.write(path + "/behavior.js", behavior);
    grunt.file.write(path + "/style.less", style);
    grunt.file.write(path + "/template.html", template);
    grunt.file.write(path + "/spec.js", spec);

    grunt.log.writeln("Feature " + name + " stubbed out and ready for you.");
  });
};