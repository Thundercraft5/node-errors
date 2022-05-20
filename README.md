**`node-errors`** is a library that streamlines the creation and management of message-coded errors.

# Usage
Use `makeErrors(messages, errorMap, includeNativeCodes?)` to create coded error classes.
```js
import makeErrors from "@thundercraft5/node-errors";

const { MyError } = makeErrors({
	"TEST_CODE": "This is a test message!",
}, {
	MyError: class MyError extends Error {},
}, /* set this parameter to `true` to include built-in codes in the available messages */ false);

throw new MyError("TEST_CODE"); // MyError [TEST_CODE]: This is a test message!
```

Alternatively, use the built-in error classes instead.
```js
import { Error } from "@thundercraft5/node-errors";

throw new Error("METHOD_NOT_IMPLEMENTED", Error, "test"); // Error [METHOD_NOT_IMPLEMENTED]: Method Error#test() is not implemented.
```

Targeted for ESNext.