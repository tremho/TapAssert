import Tap from 'tap'
import { TapAssert } from './TapAssert'
import { stringFromValueType, ValueType } from './TypeCheck'
import path from 'path'

async function test (t: any): Promise<void> {
  const assert = new TapAssert(t)
  assert.isTrue(true, 'Item is true')
  assert.isFalse(false, 'Item is false')
  assert.isTruthy('true', 'Item is truthy')
  assert.isNotTruthy('', 'Item is falsey')
  assert.isNull(null, 'item is Null')
  assert.isNotNull({}, 'item is not null')
  assert.isEmpty([], 'array is empty')
  assert.isEmpty({}, 'object is empty')
  assert.isEmpty('', 'string is empty')
  assert.isNotEmpty(['foobar'], 'array is not empty')
  assert.isNotEmpty({ foo: 'bar' }, 'object is not empty')
  assert.isNotEmpty('foobar', 'string is not empty')
  assert.contains(['foobar'], 'foobar', 'array contains target')
  assert.contains({ foo: 'bar' }, 'foo', 'object contains target')
  assert.contains('this is a foobar string', 'foobar', 'string contains substring')
  assert.doesNotContain(['foobar'], 'foo', 'array does not contain target')
  assert.doesNotContain({ foo: 'bar' }, 'baz', 'object does not contain target')
  assert.doesNotContain('foobar', 'blasney', 'string does not contain target')
  assert.isUndefined(undefined, 'item is undefined')
  assert.isDefined('', 'item is not undefined')
  assert.isType('foobar', 'string', 'check type')
  assert.isNotType('foobar', 'object', 'check not type')
  assert.isEqual('foo', 'foo', 'check equal')
  assert.isNotEqual('foo', 'bar', 'check not equal')

  assert.meetsConstraints(42, 'positive, nonzero, integer', 'positive number constraints')
  assert.meetsConstraints(-42, 'negative, nonzero, integer', 'negative number constraints')
  assert.meetsConstraints(42, 'integer, min=1, maxx=43', 'number range constraint')

  assert.meetsConstraints('hello', 'minLength=3, !startsWith=X, contains=el', 'string constraint')
  assert.meetsConstraints('hello world', 'match=world$', 'string match constraint')

  assert.meetsConstraints({}, 'empty', 'empty object constraint')
  assert.meetsConstraints({ foo: '', bar: '', baz: 3 }, '!empty, hasproperties=foo|bar|baz, notnested, noprototype, canserialize', 'object props constraint')
  assert.meetsConstraints({ foo: 'foo' }, 'noFalseyProps', 'object falsey test constraint')

  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2,each(number, positive, integer, notzero), checktype=all', 'array constraint')
  assert.meetsConstraints([1, 'two', 3], 'each(string, minLength=2|number,positive, integer, nonzero, maxX=4), checktype=all', 'mixed array contstraints')

  // more coverage testing for typecheck
  assert.meetsConstraints(3, 'max=3', 'number max')
  assert.meetsConstraints('foo', 'note=this is just a note', 'test of note')
  assert.meetsConstraints('badname', 'foobar', 'test of invalid constraint')
  assert.meetsConstraints('foo', 'no constraint', 'test no constraint')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2', 'array constraint, no each')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=first', 'array constraint, no each, but with checktype')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=none', 'checktype none')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=random(2)', 'checktype random')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=first(2)', 'checktype first')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=last(2)', 'checktype last')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=step(2)', 'checktype step')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=firstThenLast(2,2)', 'checktype firstThenLast')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=firstThenStep(2,2)', 'checktype firstThenStep')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=firstThenRandom(1,2)', 'checktype firstThenRandom')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, checkType=firstThenStep("2,2")', 'checktype firstThenStep (quoted)')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2, elementsCheckType=number', 'elements check type')
  assert.meetsConstraints([1, 2, 3], 'minLength=3,maxLength=3,contains=2,each("number, positive, integer, notzero"), checktype=all', 'quoted each list')
  assert.meetsConstraints('foo', '"minLength=2"', 'quoted constraints')
  assert.meetsConstraints([], '', 'empty constraints')

  assert.isEqual(stringFromValueType(ValueType.string), 'string', 'test stringFromValueType string')
  assert.isEqual(stringFromValueType(ValueType.number), 'number', 'test stringFromValueType number')
  assert.isEqual(stringFromValueType(ValueType.array), 'array', 'test stringFromValueType array')
  assert.isEqual(stringFromValueType(ValueType.none), '', 'test stringFromValueType none')
  assert.isEqual(stringFromValueType(ValueType.object), 'object', 'test stringFromValueType object')
  assert.isEqual(stringFromValueType(ValueType.boolean), 'boolean', 'test stringFromValueType boolean')
  assert.isEqual(stringFromValueType(ValueType.regex), 'regex', 'test stringFromValueType regex')

  assert.skipped('Test of skipped message')

  assert.enableThrow(false)
  const ret = assert.isNotEqual('foo', 'foo', 'check a negative case')
  assert.isFalse(ret, 'Disabled throw works')

  t.end()
}
void Tap.test(path.basename(__filename), t => {
  void test(t)
})
