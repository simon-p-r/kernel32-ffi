'use strict';

const Native = require('./native');

const internals = {};

internals.formatMessageA = (code) => {

    const lpBuffer = Native.Helpers.alloc('uchar **');
    const result = Native.Library.FormatMessageA(
        Native.Defines.FORMAT_MESSAGE_FROM_SYSTEM | Native.Defines.FORMAT_MESSAGE_ALLOCATE_BUFFER | Native.Defines.FORMAT_MESSAGE_IGNORE_INSERTS,
        null,
        code, //error code
        0,
        lpBuffer,
        0,
        null
    );

    /* $lab:coverage:off$ */
    if (result === 0) {
        return null;
    };
    /* $lab:coverage:on$ */

    const errorMsg = Native.Helpers.readString(lpBuffer.deref()).trim();
    const handle = Native.Library.GetProcessHeap();
    const err = Native.Library.HeapFree(handle, null, lpBuffer.deref());
    /* $lab:coverage:off$ */
    if (err === 0 ) {
        return null;
    }
    /* $lab:coverage:on$ */

    return errorMsg;

};

// internals.formatMessageW = (code) => {

//    const lpBuffer = Native.Helpers.alloc('uchar **');
//    const result = Native.Library.FormatMessageA(
//        Native.Defines.FORMAT_MESSAGE_FROM_SYSTEM | Native.Defines.FORMAT_MESSAGE_ALLOCATE_BUFFER | Native.Defines.FORMAT_MESSAGE_IGNORE_INSERTS,
//        null,
        //code,
        //error code
//        0,
//        lpBuffer,
//        0,
// null
//    );

//    const errorMsg = Native.Helpers.readString(lpBuffer.deref()).trim();
//    const handle = Native.Library.GetProcessHeap();
//    const err = Native.Library.HeapFree(handle, null, lpBuffer.deref());
//    if (err === 0 ) {
//        return null;
//    }
//    return errorMsg;

// };


exports.FormatMessage = (code, encoding) => {

    let message = null;
    /* $lab:coverage:off$ */
    if (encoding.toLowerCase() === 'ansi') {
        message = internals.formatMessageA(code);
    }
    else if (encoding.toLowerCase() === 'unicode') {
        message = internals.formatMessageW(code);
    }
    /* $lab:coverage:on$ */

    return message;

};


