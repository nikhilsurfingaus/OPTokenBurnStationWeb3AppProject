require('@nomiclabs/hardhat-waffle')


//Using A TEST ACCOUNT CREATED WITH A PRIVATE KEY:
//96204ff9484c810a5456317cb7a1c9e6c57546514c6f38131fb86a2071f3818c
//This Private is on a test metamask account, with zero funds and a dummy email

module.exports = {
    solidity: '0.8.4',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/R1aYA10od0TxWCJRQbMYkizXXjim4gPy',
            accounts: [
                '96204ff9484c810a5456317cb7a1c9e6c57546514c6f38131fb86a2071f3818c',
            ],
        },
    },
}