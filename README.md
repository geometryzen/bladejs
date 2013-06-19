# Blade.JS

JavaScript Geometric Algebra library

## Getting Started

Install nodejs

Install grunt-cli globally via npm install grunt-cli

Clone the Blade.JS GitHub repository:

  ```sh
  $ git clone git@github.com:geometryzen/bladejs.git
  ```

Change to the Blade.JS directory:

  ```sh
  $ cd bladejs
  ```

### Install project dependencies.

There are no dependencies at the moment, but we use Bower as the package management system.

Bower is important for registering our library as a Bower package.

  ```sh
  $ bower install
  ```

### Install local tools.

Node package manager is used to manage the provisioning of our tools such as Grunt contributions.

  ```sh
  $ npm install
  ```

### Perform the build

The default command for building Blade.JS is

  ```sh
  $ grunt
  ```

This will create blade.js and blade.min.js in the build folder.

In development it will be more convenient to have Continuous Integration with

  ```sh
  $ grunt watch
  ```

This will watch for changes to the main source file (blade.coffee) and will trigger the build process.

## Commits and Tagging

Because Blade.JS is provide as a Bower package, there are some obligations to manage the versions.

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "build" subdirectory as they are generated via Grunt. You'll find source code in the "src" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 David Holmes  
Licensed under the MIT license.

## Developer Notes
