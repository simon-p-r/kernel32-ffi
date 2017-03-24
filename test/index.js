'use strict';

const Code = require('code');
const Lab = require('lab');

const Kernel32 = require('../lib');

// Fixtures


// Set-up lab
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('kernel32', () => {


    it('should successfully return string from FormatMessage ansi', (done) => {

        const err = Kernel32.FormatMessage(0x80090300, 'ansi');
        expect(err).to.equal('Not enough memory is available to complete this request');
        done();
    });

    // it('should fail to return string from FormatMessage ansi due to incorrect erro code', (done) => {

    //     const err = Kernel32.FormatMessage(, 'ansi');
    //     expect(err).to.equal('Not enough memory is available to complete this request');
    //     done();
    // });

});
