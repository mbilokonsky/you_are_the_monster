module.exports = function(grunt) {
  grunt.registerTask('addRoute', 'Adds a ui-router style route to the project', function(routeName, feature) {
    grunt.log.writeln("Now adding a route for state " + routeName + ", bound to this feature as a view:", feature);
    var conf = grunt.config('addRoute');
    var routeRoot = conf.root || "app/routes/";

    if (!grunt.file.exists(routeRoot)) {
      grunt.file.mkdir(routeRoot);
    }

    var path = routeRoot + routeName.replace("\.", "/");
    if (grunt.file.exists(path.replace("\.", "/"))) {
      grunt.log.error('A route for ' + routeName + ' already exists!');
      return false;
    }

    var routeParts = routeName.split(".");

    var parentPath = routeRoot;
    for (var i = 0; i < routeParts.length - 1; i++) {
      parentPath += routeParts[i] + "/"
      if (!grunt.file.exists(parentPath)) {
        grunt.log.error('Your specified route requires a parent route to exist, but ' + parentPath + ' is not defined.');
        return false;
      }
    }

    var url = "/" + routeParts[routeParts.length - 1];

    var templateData = {
      appName: "app",
      fullStateName: routeName,
      url: url,
      feature: feature
    };

    grunt.log.writeln("\tcreating folder");
    grunt.file.mkdir(path);

    grunt.log.writeln("\tgenerating route");
    var routeTemplate = grunt.file.read('tasks/grunt-add-route/route.us');
    var route = grunt.template.process(routeTemplate, {data: templateData});
    grunt.file.write(path + "/route.js", route);

    grunt.log.writeln("Route " + routeName + " created and bound to feature " + feature + ".");
  });
};