[![npm](https://img.shields.io/npm/v/grunt-cssjanus.svg?style=flat)](https://www.npmjs.com/package/grunt-cssjanus)
[![Tested with QUnit](https://img.shields.io/badge/tested_with-qunit-9c3493.svg)](https://qunitjs.com/)

# grunt-cssjanus

Grunt plugin to convert CSS stylesheets between left-to-right and right-to-left.

## Getting Started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssjanus --save-dev
```

Once the plugin has been installed, enable it inside your Gruntfile:

```js
grunt.loadNpmTasks( 'grunt-cssjanus' );
```

### Options

_Run this task with the `grunt cssjanus` command._

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

#### options.processContent

Type: `Callback`
Default value: `false`

If set, the function will be called on the CSS after CSSJanus has run.

## Usage

This plugin uses the standard Grunt multi task for file operations. See [Configuring tasks](https://gruntjs.com/configuring-tasks#task-configuration-and-targets) for all supported options and formats.

### Basic distribution

```js
grunt.initConfig({
  cssjanus: {
    build: {
      files: {
      	'dist/head.rtl.css': 'src/head.css',
      	'dist/main.rtl.css': 'src/main.css'
      }
    }
  }
});
```

## Contribute

* Issue tracker: <https://phabricator.wikimedia.org/tag/cssjanus/>
* Source code: <https://gerrit.wikimedia.org/g/mediawiki/tools/grunt-cssjanus>
* Submit patches via Gerrit: <https://www.mediawiki.org/wiki/Developer_account>
