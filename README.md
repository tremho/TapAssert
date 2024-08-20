# TapAssert

_a simple assertion library for using Tap JS the way I like to, leveraging only the tap.ok() method and emitting waypoint messages_

[![NodeLogo][node-logo]][nodetap-url]
[![TapFeature][tap-feature]][nodetap-url]

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]

[nodetap-url]: https://node-tap.org

[node-logo]: https://img.shields.io/badge/-white?logo=nodedotjs&logoColor=#5FA04E

[tap-feature]: https://img.shields.io/badge/Tap-brown

[build-status]: https://travis-ci.org/tremho/tap-assert.svg?branch=master

[build-url]: https://travis-ci.org/tremho/tap-assert

[npm-image]: http://img.shields.io/npm/v/@tremho/tap-assert.svg

[npm-url]: https://npmjs.org/package/@tremho/tap-assert

[downloads-image]: http://img.shields.io/npm/dm/@tremho/tap-assert.svg

[total-downloads-image]: http://img.shields.io/npm/dt/@tremho/tap-assert.svg?label=total%20downloads

I really like [Node Tap](https://node-tap.org) for testing.  It is a no-nonsense framework
that is very flexible.  
I respect the author's philosophy of creating a test framework that isn't _magic_ in some way --
the test code is a _normal_ program, and Tap has a lot of options for how the test is reported, also.

Check it out.

But while Node Tap is opinionated in its design, I, too, am opinionated in how I want a test
report to present itself, and what assertion syntax I would prefer.

For this reason I created this helper library to enhance testing with Tap in the way I
like to use it.  Perhaps you will too (or perhaps not).

### installation

install for development use in your test code:

```typescript
npm i -D @tremho/tap-assert
```

### use

This is pulled from a recent real-world example.  This Api.test.ts file runs a tap process and within that we use the TapAssert library to test the results of a `start` method from imported code under test.

    import Tap from "tap"
    import {start} from './src/main'
    import {TapAssert} from '@tremho/tap-assert'
    import path from 'path'

    async function test(t:any) {

        const assert = new TapAssert(t);
        const resp = await start({}, {}, null)

        assert.isType(resp, 'object', 'response is an object')
        assert.isEqual(resp.statusCode, 200, 'Success response')
        assert.isEqual(resp.headers['content-type'], 'text/html', 'html content')
        assert.isType(resp.body, 'string', 'Response has a body')
        assert.contains(resp.body, 'docs/apidoc.yaml', 'content appears correct')
        assert.isFalse(resp.isBase64Encoded, 'not binary')

        t.end()

    }
    Tap.test(path.basename(__filename), t => {
        test(t)
    })

If run with Tap using the following options, 

    tap --reporter=base --color --passes src/*.test.ts

Produces the following Tap output:

     PASS  build/functions/API/Api.test.js 6 OK 1.102s
    ✓ Api.test.js > response is an object: ok
    ✓ Api.test.js > Success response: ok
    ✓ Api.test.js > html content: ok
    ✓ Api.test.js > Response has a body: ok
    ✓ Api.test.js > content appears correct: ok
    ✓ Api.test.js > not binary: ok

                           
      🌈 TEST COMPLETE 🌈  

note that excluding the `--passes` option will not show the 'ok' results but will
still show the output for failures and skips.

Include `--disable-coverage` if you wish to not produce coverage reporting. 

See [Tap docs](https://node-tap.org/basics/) for more info.

* * *

[GitHub Repository](https://github.com/tremho/TapAssert) for TapAssert

* * *

#### Release changeLog:

- `1.0.3` - minor readme update
- `1.0.2` - minor doc updates
- `1.0.1` - updated readme, updated tests
- `1.0.0` - initial release

* * *

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### TapAssert

The TapAssert Class

Use to instantiate a new TapAssert class

#### Parameters

-   `t`  the Tap object to attach

#### Examples

```javascript
import {TapAssert} from '@tremho/tap-assert'
const assert = new TapAssert(t)
```

#### enableThrow

use to enable/disable test by Tap.

if false, Tap will not be given the report and nothing will appear in the report
and the return of the assertion will be a boolean true / false for passing.

If true (the default), Tap will be invoked and will display a message and will pass/fail the test accordingly.

##### Parameters

-   `enable`  boolean value to set

#### check

Low-level check that calls Tap (if enableThrow is true) to emit the message label and 'ok' or the fail reason,
or return the value of pass (if enableThrow is false)

##### Parameters

-   `message`  the label message describing the test
-   `pass`  boolean true if test is passing ('ok')
-   `failReason`  if not passing, this is the string displayed instead of 'ok'

#### isNull

Assert that item passed is null.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = getAValue()
   assert.isNull(item, 'Insure item is null here')
```

#### isNotNull

Assert that item passed is **_not_** null.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = getAValue()
assert.isNull(item, 'Insure item is not null here')
```

#### isDefined

Assert that item passed is defined.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isDefined(item, 'someValue is defined')
```

#### isUndefined

Assert that item passed is undefined.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isUndefined(item, 'someValue should be undefined here')
```

#### isType

Assert that item passed is of a given type.

##### Parameters

-   `item`  value to test
-   `type`  name of type
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isType(item, 'string', 'someValue should be a string')
```

#### isNotType

Assert that item passed is **_not_** of a given type.

##### Parameters

-   `item`  value to test
-   `type`  name of type
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isNotType(item, 'object', 'someValue is not an object')
```

#### isEqual

Assert that item passed is equal to a given value.

##### Parameters

-   `item`  value to test
-   `equivalent`  value to test for equal
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isEqual(item, 42, 'The answer is 42')
```

#### isNotEqual

Assert that item passed is **_not_** equal to a given value.

##### Parameters

-   `item`  value to test
-   `equivalent`  value to test for equal
-   `message`  test label / description

##### Examples

```javascript
const item = myObject?.someValue
assert.isNotEqual(item, 0, 'The value must not be 0')
```

#### isTruthy

Assert that item passed evaluates as 'truthy'.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = 'hello'
assert.isTruthy(item, 'Evaluates as true')
```

#### isNotTruthy

Assert that item passed evaluates as **_not_** 'truthy'.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
const item = ''
assert.isNotTruthy(item, 'Evaluates as false')
```

#### isTrue

Assert that item passed evaluates as true.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
assert.isTrue(true, 'Value is true')
```

#### isFalse

Assert that item passed evaluates as false.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
assert.isFalse(false, 'Value is false')
```

#### isEmpty

Assert that item passed is empty.

The item may be an Array, Object, or String.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
assert.isEmpty([], 'array is empty')
```

```javascript
assert.isEmpty({}, 'object is empty')
```

```javascript
assert.isEmpty('', 'string is empty')
```

#### isNotEmpty

Assert that item passed is not empty.

The item may be an Array, Object, or String.

##### Parameters

-   `item`  value to test
-   `message`  test label / description

##### Examples

```javascript
assert.isNotEmpty([1,2,3], 'array is not empty')
```

```javascript
assert.isNotEmpty {foo:'bar'}, 'object is not empty')
```

```javascript
assert.isNotEmpty('hello', 'string is not empty')
```

#### contains

Assert that item passed contains an element, property, or substring.

The item may be an Array, Object, or String.

##### Parameters

-   `item`  value to test
-   `target`  the element, property, or substring to look for
-   `message`  test label / description

##### Examples

```javascript
assert([1,2,3], 2, 'array contains the value 2')
```

```javascript
assert({foo:'bar'}, 'foo', 'object contains the property "foo"')
```

```javascript
assert('It is a wonderful world, 'wonder', 'string contains substring "wonder"')
```

#### doesNotContain

Assert that item passed does not contain a specified element, property, or substring.

The item may be an Array, Object, or String.

##### Parameters

-   `item`  value to test
-   `target`  the element, property, or substring to look for
-   `message`  test label / description

#### skipped

Emits a message that this test was skipped.

Test will be marked as skipped in Tap.

##### Parameters

-   `message`  message to emit on skip

##### Examples

```javascript
const feature = getFeatureObject()
if(feature.isEnabled) {
   assert.isNotNull(feature.body, 'If using this, it must not be null')
} else {
   assert.skipped('This test skipped because feature is not enabled')
}
```

#### meetsConstraints

Tests the value according to "TypeCheck" constraints that define the acceptable limits of the given value.

Contraints string is a comma-delimited set of constraint directives appropriate to the type.

Constraints are as follows:

###### number

-   `integer` - number must be an integer. If not specified, number may be floating point (real)
-   `float` - optional, ignored, same as default. Number is not an integer.
-   `positive` - number must not be less than zero (may be zero)
-   `negative` - number must not be greater than zero (may be zero)
-   `nonzero` - number must not be zero
-   `notzero` or `not zero` - same as `nonzero`
-   `min=<val>` - specifies the minimum allowed value (inclusive)
-   `max=<val>` - specifies the maximum allowed value (inclusive)
-   `maxx=<val>` - specifies the maximum allowed value (exclusive)

###### string

-   `minLength=<val>` - specifies the minimum length of this string
-   `maxLength=<val>` - specifies the maximum string length
-   `[!]startsWith=<val>` - value defines prefix that string must start with (or must NOT start with if ! prefix used)
-   `[!]endsWith=<val>` - value defines suffix that string must end with (or must NOT end with if ! prefix used)
-   `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
-   `[!]match=<val>` - value defines regular expression that string must match (or must NOT match if ! prefix used)

###### object

-   `[!]empty` - if specified object must have no properties (or must have at least one property if ! prefix specified)
-   `[!]hasProperties(<list>)` list is a pipe-separated (|) set of property keys the object must have (or must NOT have if ! prefix used)
-   `notNested` - if specified, object must not contain object type properties (arrays are allowable)
-   `noPrototype` - if specified, object must not inherit from anything other than Object.
-   `canSerialize` - if specified, object must not have functions or other attributes that prevent standard JS serialization.
-   `noFalseyProps` - if specified, the values of all object properties must evaluate as `truthy`
-   `noTruthyProps` - if specified, the values of all object properties must evaluate as `falsey`
-   `[!]instanceOf=<val>` - Object must be an instance of the given prototype.

###### array

-   `minLength=<val>` - specifies the minimum length of this array
-   `maxLength=<val>` - specifies the maximum array length
-   `[!]contains=<val>` - value defines an element value that array must contain (or must NOT contain if ! prefix used)
-   `each=<typeconstraint>` - `<typeconstraint>` describes a variant of a constraint declaration. The first value in the expression must be the name of
    the primitive type of the constraint (e.g. 'number'), followed by a comma and one or more constraints to apply to that type,
    comma separated. Each sucessive expression for a new type must be separated by a | character.
    for example: `each(string,minLength=10,endsWith=".png"|number, positve,nonzero,integer)`
    This allows an array with mixed types to be evaluated with a constraint constructed for that type.
    **important:**
    The `each` directive must be combined with `checkType` to also specify the range for testing.
    _Note that an 'each' declaration is necessary even for single-type arrays where element value checks are desired._

-   `checkType=<val>` - where `<val>` represents an expression that is one of:
    -   `none` - none of the elements of the array will be tested for type or constraint
    -   `all`  - all of the elements of the array will be tested for type and any constraints (this is the default).
    -   `first(num)` - the first `<num>` elements only are tested.
    -   `last(num)` - the last `<num>` elements only are tested.
    -   `random(num)` - up to `<num>` elements, randomly chosen among the elements, will be tested
    -   `step(num)` - each `<num>th` element will be tested
    -   `firstThenLast(first, last)` The first `<first>` elements and the last `<last>` elements are tested.
    -   `firstThenRandom(first, rand)` - The first `<first>` elements are tested and up to `<rand>` of the remaining will be randomly tested
    -   `firstThenStep(first, step)` - The first `<first>` elements are tested then each `<step>th` element thereafter is tested

* * *

-   _The [!] notation used above means the ! is optional (meaning 'not').  The brackets are notational only. Do not include in constraint._
-   _The <val> notation means place a value here. No brackets. Do not quote the value._
-   _Notation in parenthesis, such as (num), and (first, last) means include the parenthesis and replace the labels with values._
-   _constraint directives are case-insensitive_

##### Parameters

-   `item`  the value to be tested
-   `constraints`  the constraints to test against
-   `message`  test label / description

##### Examples

```javascript
assert.meetsConstraints(42, "positive, nonzero, integer", 'value must be a positive integer')
```

```javascript
assert.meetsConstraints('hello', 'minLength=3,!startsWith=X,contains=el', 'string must qualify')
```

```javascript
assert.meetsConstraints('hello world', 'match=world$', 'string must end with "world" per regex syntax')
```

```javascript
assert.meetsConstraints({}, 'empty', 'object must be empty')
```

```javascript
assert.meetsConstraints({foo:'', bar:'', baz:3}, 'hasProperties=foo|bar|baz, notNested, noPrototype, canSerialize', 'object must have given props and no functions')
```

```javascript
assert.meetsConstraints({foo:'foo'}, 'noFalseyProps', 'object must not have any properties that evaluate as false')
```

```javascript
assert.meetsConstraints([1,2,3], 'minLength=3,maxLength=3,contains=2, each(number, positive, integer, notzero), checkType=all', 'array must have three elements that are positive integers')
```

```javascript
assert.meetsConstraints([1,'two',3], 'each(string, minLength=2|number,positive,integer,nonzero, maxX=4), checkType=all', 'mixed array constraints')
```
