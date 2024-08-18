
# TapAssert

a simple assertion library for using Tap JS the way I like to, leveraging only the tap.ok() method and emitting waypoint messages

### use

This is pulled from a recent real-world example.  This Api.test.ts file runs a tap process and within that we use the TapAssert library to test the results of a `start` method from imported code under test.
```
import Tap from "tap"
import {start} from './src/main'
import {TapAssert} from './src/lib/TapAssert'
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
```
Produces the following Tap output:
```
 PASS  build/functions/API/Api.test.js 6 OK 1.102s
✓ Api.test.js > response is an object: ok
✓ Api.test.js > Success response: ok
✓ Api.test.js > html content: ok
✓ Api.test.js > Response has a body: ok
✓ Api.test.js > content appears correct: ok
✓ Api.test.js > not binary: ok

                       
  🌈 TEST COMPLETE 🌈  
                       

Asserts:  32 pass  0 fail  32 of 32 complete
Suites:    4 pass  0 fail    4 of 4 complete

```
