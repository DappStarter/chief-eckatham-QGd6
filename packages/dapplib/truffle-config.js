require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stone random pulse company half arena equal gaze'; 
let testAccounts = [
"0x6c3a0c62a2bc5b0688f7d5f411adccfd8c0b97cc9dffdf7cb9b5b0ec5ea4bdf1",
"0x0cf3cbc9b8e9abfa6bd03b89faed47c2e57c207ea0faa8b381755ad4b9c1817f",
"0xcd4a928a38f1e1598b6f8ea2ded018591a4d7e75d9f5006dccee71a080ce9ac9",
"0xe16b77cd0c42f367d49cd5a82c36aa33acdbaf6667b2c0fa9959ee0a067aad81",
"0xb6cd09a45085e90c983685b2bc0e09e83d14202b30be7f02e11e7b88385f93e2",
"0x768c1183eb7045bac75a01171f5dac859b02e47197d770ac4895ff3da295bc94",
"0xe332d553b6c13e59ee503a63dbf368f62ffcce0a2b8230c42ef04c1c23a13fbd",
"0x79e9934f0f2696dfc06756f9d72864dba15a02043a0b6f73c78dc57476a57b9b",
"0xe3e106db501eeee9598822526c69c6e3be9932b0294d9deee45e073f57364902",
"0xbc3367d8d07e1dbd089b634457ba634bffc7d2d19efb45ea4f3e8616b078e5e7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

