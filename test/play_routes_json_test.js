'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.play_routes_json = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  to_json: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/routes.json');
    var expected = grunt.file.read('test/expected/routes.json');
    test.deepEqual(JSON.parse(actual), JSON.parse(expected), 'should convert routes to json.');

    test.done();
  },
  from_json: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/routes');
    var expected = grunt.file.read('test/expected/routes');
    test.equal(actual, expected, 'should convert a json file to routes.');

    test.done();
  }
};
