require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember snake good enroll success gate'; 
let testAccounts = [
"0x50590f2274cdca64e29f75608b8f2a82e91d1c47b6c062215f5a94da9ec29e71",
"0x1072040564369ccc0713ade708baf97e878504eb78ee68c980fc618297689395",
"0xe6aeeb8cb0f8a1c1406b2027903e42651fc2d03c69d82aeb92643170eae232f0",
"0x390423d4c12043f39c0fecd5f26c7d9ff83dfeaaaff8078658bafe457c1a942c",
"0xda03989c0963e1460e51c5f44d4dc4bb6ed611db5bd9591916132eec53d0d409",
"0x1be91f3b8c2a9e9ed8d7d1d8528f858d55cbe170deb9e0cbe508672fcf0faf1b",
"0x71c3fddfa78703aa9b70996be75610e6b31317b27a8fef0ad1c5b4ea7a2ac5d2",
"0x58d386d9237cc7db68dd071ef6a657d604a7dfc497da4aa3ae1b53d243bde234",
"0x6ee3c81a7f62020d3f1229cf80f40f67b5261bfcf14f09c060e19d9ad2c1b860",
"0xc3c8654d8e9bec88fb34870fd8e39100b4bc81688e056fe82a5b8fc56e21276a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


