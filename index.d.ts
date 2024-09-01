/**
 * The TapAssert Class
 *
 * Use to instantiate a new TapAssert class
 *
 * @example
 * import {TapAssert} from '@tremho/tap-assert'
 * const assert = new TapAssert(t)
 */
export declare class TapAssert {
    private readonly _t;
    private _enableThrow;
    /**
     * Constructs an instance of TapAssert
     * @param t - the Tap object to attach
     */
    constructor(t: any);
    /**
     * use to enable/disable test by Tap.
     *
     * if false, Tap will not be given the report and nothing will appear in the report
     * and the return of the assertion will be a boolean true / false for passing.
     *
     * If true (the default), Tap will be invoked and will display a message and will pass/fail the test accordingly.
     *
     * @param enable - boolean value to set
     */
    enableThrow(enable: boolean): void;
    /**
     * Low-level check that calls Tap (if enableThrow is true) to emit the message label and 'ok' or the fail reason,
     * or return the value of pass (if enableThrow is false)
     *
     * @param message - the label message describing the test
     * @param pass - boolean true if test is passing ('ok')
     * @param failReason if not passing, this is the string displayed instead of 'ok'
     */
    check(message: string, pass: boolean, failReason: string): boolean;
    /**
     * Assert that item passed is null.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = getAValue()
     * assert.isNull(item, 'Insure item is null here')
     */
    isNull(item: any, message: string): boolean;
    /**
     * Assert that item passed is ___not___ null.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = getAValue()
     * assert.isNull(item, 'Insure item is not null here')
     */
    isNotNull(item: any, message: string): boolean;
    /**
     * Assert that item passed is defined.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isDefined(item, 'someValue is defined')
     */
    isDefined(item: any, message: string): boolean;
    /**
     * Assert that item passed is undefined.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isUndefined(item, 'someValue should be undefined here')
     */
    isUndefined(item: any, message: string): boolean;
    /**
     * Assert that item passed is of a given type.
     *
     * @param item - value to test
     * @param type - name of type
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isType(item, 'string', 'someValue should be a string')
     */
    isType(item: any, type: string, message: string): boolean;
    /**
     * Assert that item passed is ___not___ of a given type.
     *
     * @param item - value to test
     * @param type - name of type
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isNotType(item, 'object', 'someValue is not an object')
     */
    isNotType(item: any, type: string, message: string): boolean;
    /**
     * Assert that item passed is equal to a given value.
     *
     * @param item - value to test
     * @param equivalent - value to test for equal
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isEqual(item, 42, 'The answer is 42')
     */
    isEqual(item: any, equivalent: any, message: string): boolean;
    /**
     * Assert that item passed is ___not___ equal to a given value.
     *
     * @param item - value to test
     * @param equivalent - value to test for equal
     * @param message - test label / description
     *
     * @example
     * const item = myObject?.someValue
     * assert.isNotEqual(item, 0, 'The value must not be 0')
     */
    isNotEqual(item: any, equivalent: any, message: string): boolean;
    /**
     * Assert that item passed evaluates as 'truthy'.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = 'hello'
     * assert.isTruthy(item, 'Evaluates as true')
     */
    isTruthy(item: any, message: string): boolean;
    /**
     * Assert that item passed evaluates as ___not___ 'truthy'.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example
     * const item = ''
     * assert.isNotTruthy(item, 'Evaluates as false')
     */
    isNotTruthy(item: any, message: string): boolean;
    /**
     * Assert that item passed evaluates as true.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example assert.isTrue(true, 'Value is true')
     */
    isTrue(item: any, message: string): boolean;
    /**
     * Assert that item passed evaluates as false.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example assert.isFalse(false, 'Value is false')
     */
    isFalse(item: any, message: string): boolean;
    private checkEmpty;
    private checkContains;
    /**
     * Assert that item passed is empty.
     *
     * The item may be an Array, Object, or String.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example assert.isEmpty([], 'array is empty')
     * @example assert.isEmpty({}, 'object is empty')
     * @example assert.isEmpty('', 'string is empty')
     */
    isEmpty(item: any, message: string): boolean;
    /**
     * Assert that item passed is not empty.
     *
     * The item may be an Array, Object, or String.
     *
     * @param item - value to test
     * @param message - test label / description
     *
     * @example assert.isNotEmpty([1,2,3], 'array is not empty')
     * @example assert.isNotEmpty {foo:'bar'}, 'object is not empty')
     * @example assert.isNotEmpty('hello', 'string is not empty')
     */
    isNotEmpty(item: any, message: string): boolean;
    /**
     * Assert that item passed contains an element, property, or substring.
     *
     * The item may be an Array, Object, or String.
     *
     * @param item - value to test
     * @param target - the element, property, or substring to look for
     * @param message - test label / description
     *
     * @example assert([1,2,3], 2, 'array contains the value 2')
     * @example assert({foo:'bar'}, 'foo', 'object contains the property "foo"')
     * @example assert('It is a wonderful world, 'wonder', 'string contains substring "wonder"')
     */
    contains(item: any, target: any, message: string): boolean;
    /**
     * Assert that item passed does not contain a specified element, property, or substring.
     *
     * The item may be an Array, Object, or String.
     *
     * @param item - value to test
     * @param target - the element, property, or substring to look for
     * @param message - test label / description
     */
    doesNotContain(item: any, target: any, message: string): boolean;
    /**
     * Emits a message that this test was skipped.
     *
     * Test will be marked as skipped in Tap.
     *
     * @param message - message to emit on skip
     *
     * @example
     * const feature = getFeatureObject()
     * if(feature.isEnabled) {
     *    assert.isNotNull(feature.body, 'If using this, it must not be null')
     * } else {
     *    assert.skipped('This test skipped because feature is not enabled')
     * }
     */
    skipped(message: string): void;
    /**
     * Tests the value according to "TypeCheck" constraints that define the acceptable limits of the given value.
     *
     * Contraints string is a comma-delimited set of constraint directives appropriate to the type.
     *
     * Constraints are as follows:
     *
     * ##### number
     * - `integer` - number must be an integer. If not specified, number may be floating point (real)
     * - `float` - optional, ignored, same as default. Number is not an integer.
     * - `positive` - number must not be less than zero (may be zero)
     * - `negative` - number must not be greater than zero (may be zero)
     * - `nonzero` - number must not be zero
     * - `notzero` or `not zero` - same as `nonzero`
     * - `min=<val>` - specifies the minimum allowed value (inclusive)
     * - `max=<val>` - specifies the maximum allowed value (inclusive)
     * - `maxx=<val>` - specifies the maximum allowed value (exclusive)
     *
     * ##### string
     * - `minLength=<val>` - specifies the minimum length of this string
     * - `maxLength=<val>` - specifies the maximum string length
     * - `[!]startsWith=<val>` - value defines prefix that string must start with (or must NOT start with if ! prefix used)
     * - `[!]endsWith=<val>` - value defines suffix that string must end with (or must NOT end with if ! prefix used)
     * - `[!]contains=<val>` - value defines substring that string must contain (or must NOT contain if ! prefix used)
     * - `[!]match=<val>` - value defines regular expression that string must match (or must NOT match if ! prefix used)
     *
     * ##### object
     *
     *  - `[!]empty` - if specified object must have no properties (or must have at least one property if ! prefix specified)
     *  - `[!]hasProperties(<list>)` list is a pipe-separated (|) set of property keys the object must have (or must NOT have if ! prefix used)
     *  - `notNested` - if specified, object must not contain object type properties (arrays are allowable)
     *  - `noPrototype` - if specified, object must not inherit from anything other than Object.
     *  - `canSerialize` - if specified, object must not have functions or other attributes that prevent standard JS serialization.
     *  - `noFalseyProps` - if specified, the values of all object properties must evaluate as `truthy`
     *  - `noTruthyProps` - if specified, the values of all object properties must evaluate as `falsey`
     *  - `[!]instanceOf=<val>` - Object must be an instance of the given prototype.
     *
     * ##### array
     *
     *  - `minLength=<val>` - specifies the minimum length of this array
     *  - `maxLength=<val>` - specifies the maximum array length
     *  - `[!]contains=<val>` - value defines an element value that array must contain (or must NOT contain if ! prefix used)
     * - `each=<typeconstraint>` - `<typeconstraint>` describes a variant of a constraint declaration. The first value in the expression must be the name of
     * the primitive type of the constraint (e.g. 'number'), followed by a comma and one or more constraints to apply to that type,
     * comma separated. Each sucessive expression for a new type must be separated by a | character.
     * for example: `each(string,minLength=10,endsWith=".png"|number, positve,nonzero,integer)`
     * This allows an array with mixed types to be evaluated with a constraint constructed for that type.
     * __important:__
     * The `each` directive must be combined with `checkType` to also specify the range for testing.
     * _Note that an 'each' declaration is necessary even for single-type arrays where element value checks are desired._
     *
     *  - `checkType=<val>` - where `<val>` represents an expression that is one of:
     *    - `none` - none of the elements of the array will be tested for type or constraint
     *    - `all`  - all of the elements of the array will be tested for type and any constraints (this is the default).
     *    - `first(num)` - the first `<num>` elements only are tested.
     *    - `last(num)` - the last `<num>` elements only are tested.
     *    - `random(num)` - up to `<num>` elements, randomly chosen among the elements, will be tested
     *    - `step(num)` - each `<num>th` element will be tested
     *    - `firstThenLast(first, last)` The first `<first>` elements and the last `<last>` elements are tested.
     *    - `firstThenRandom(first, rand)` - The first `<first>` elements are tested and up to `<rand>` of the remaining will be randomly tested
     *    - `firstThenStep(first, step)` - The first `<first>` elements are tested then each `<step>th` element thereafter is tested
     *
     * ---
     * - _The [!] notation used above means the ! is optional (meaning 'not').  The brackets are notational only. Do not include in constraint._
     * - _The &lt;val&gt; notation means place a value here. No brackets. Do not quote the value._
     * - _Notation in parenthesis, such as (num), and (first, last) means include the parenthesis and replace the labels with values._
     * - _constraint directives are case-insensitive_
     *
     * @param item - the value to be tested
     * @param constraints - the constraints to test against
     * @param message - test label / description
     *
     * @example   assert.meetsConstraints(42, "positive, nonzero, integer", 'value must be a positive integer')
     * @example   assert.meetsConstraints('hello', 'minLength=3,!startsWith=X,contains=el', 'string must qualify')
     * @example   assert.meetsConstraints('hello world', 'match=world$', 'string must end with "world" per regex syntax')
     *
     * @example   assert.meetsConstraints({}, 'empty', 'object must be empty')
     * @example   assert.meetsConstraints({foo:'', bar:'', baz:3}, 'hasProperties=foo|bar|baz, notNested, noPrototype, canSerialize', 'object must have given props and no functions')
     * @example   assert.meetsConstraints({foo:'foo'}, 'noFalseyProps', 'object must not have any properties that evaluate as false')
     *
     * @example   assert.meetsConstraints([1,2,3], 'minLength=3,maxLength=3,contains=2, each(number, positive, integer, notzero), checkType=all', 'array must have three elements that are positive integers')
     * @example   assert.meetsConstraints([1,'two',3], 'each(string, minLength=2|number,positive,integer,nonzero, maxX=4), checkType=all', 'mixed array constraints')   */
    meetsConstraints(item: any, constraints: string, message: string): boolean;
}
