# feature-driven angular development
This is a lineman application stub. Once you've checked this out, type `npm install` to get your dependencies and then type `lineman run` to run it. You can then open your browser to `http://localhost:8000` to see the application work.

# feature-driven?
Yes, feature driven. To develop within this template, type `lineman grunt addFeature:myFeature`. Look at your source code. In app/features you'll see a new folder, `myFeature`, with four files.

  1. behavior.js contains a directive definition and a linking function stubbed out into a service and injected into the directive. The directive's name is `myFeature` and it's designated as an element directive, meaning you'll use it by adding <my-feature></my-feature> in your HTML somewhere. Do you want it to be an attribute or comment directive? Change it. Do you not need a template? Get rid of it. Do you want a controller instead of (I'm shaking my head) or in addition to (I'm nodding) a linking function? No sweat, add it. This is just a stub.
  1. template.html contains a simple html template for your feature. You'll probably want to change this to actually show what you want it to show.
  1. style.less contains a LESS stub for your template. It uses your feature name as a class. All of your nested styles should just go inside of this stub. They'll automatically be compiled into your build later.
  1. spec.js starts your testing party. It shows you how to mock stuff up, how to inject your linking function, how to structure your jasmine file and how to write a few passing tests. Anything you put into a spec.js file within a feature will automatically be included when you run `lineman spec`.

Do you have some stuff you want to add that doesn't fit neatly into this workflow? That's fine, you can always manually add files to app/js, app/css, app/static or whatever. Feel free. This is just meant to be helpful, because in my experience angular apps are best developed directive-first with encapsulated logic. YMMV, but if you find yourself never using the feature-oriented aspects of this project then maybe you should be using a different project structure?

Third party dependencies should be dumped into the appropriate folder in /vendor. If you find yourself adding `<script>` tags for javascript or `<link>` tags for css then you've misunderstood the way the whole tool works. All that stuff gets baked in for you as long as you drop it into the right folder. All you should really be focusing on is (1) creating features, and (2) adding those features to other features or to index.html using their associated directives.

Anyway. Updates to your files will be captured while `lineman run` is running, tests will automatically update while `lineman spec` is running, etc. Type `lineman build` to create a minified uglified deployable application that you'll find in the /dist folder.
