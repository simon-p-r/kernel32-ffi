'use strict';

const Ffi = require('ffi');

const Defines = require('./defines');
const Helpers = require('./helpers');
const Types = require('./types');

const Kernel32 = Ffi.Library('Kernel32.dll', {
    FormatMessageA: [Types.DWORD, [
        Types.DWORD,  //flags
        Types.LPCVOID,
        Types.DWORD, //status number
        Types.DWORD, //language
        Types.LPSTR,
        Types.DWORD,
        Types.voidPtr
    ]],
    GetProcessHeap: ['uint32 *', [

    ]],
    HeapFree: ['int', [
        Types.HANDLE,
        Types.DWORD,
        Types.LPVOID
    ]]
});



module.exports = {
    Defines,
    Library: Kernel32,
    Helpers,
    Types
};
