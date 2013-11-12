# grunt-cssjanus

Grunt plugin to convert CSS stylesheets between left-to-right and right-to-left

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install /path/to/grunt-cssjanus --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssjanus');
```

### Options

#### options.swapLtrRtlInUrl
Type: `Boolean`
Default value: `true`

Whether to replace 'ltr' with 'rtl' and vice versa in urls.

#### options.swapLeftRightInUrl
Type: `Boolean`
Default value: `false`

Whether to replace 'left' with 'right' and vice versa in urls.

#### options.generateExactDuplicates
Type: `Boolean`
Default value: `false`

Whether to generate the RTL file if it ends up being the same as the LTR file.


## Release History

0.1.2 - Only outputs file creation message if file has been created

0.1.1 - Add the generateExactDuplicates option

0.1.0 - initial release
