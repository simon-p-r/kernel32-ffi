'use strict';

const Ref = require('ref');


module.exports = {

    alloc: (type) => {

        return Ref.alloc(type);
    },

    readString: (buf) => {

        return Ref.readCString(buf);
    }
};
