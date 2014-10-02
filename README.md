# grunt-play-routes-json

> Convert your play routes file to a nicer json formas

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-play-routes-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-play-routes-json');
```

## The "play_routes_json" task

### Overview
In your project's Gruntfile, add a section named `play_routes_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  play_routes_json: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.toJSON
Type: `Boolean`

Convert a routes file to JSON.

#### options.fromJSON
Type: `Boolean`

Convert a json file to routes.

### Usage Examples

#### toJSON

```js
grunt.initConfig({
  play_routes_json: {
    options: {
        toJSON: true
    },
    files: {
      'dest/routes.json': ['routes'],
    },
  },
})
```

#### fromJSON

```js
grunt.initConfig({
  play_routes_json: {
    options: {
      fromJSON: true
    },
    files: {
      'dest/routes': ['routes.json'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 charliedowler. Licensed under the MIT license.