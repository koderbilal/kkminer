const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `xmr-eu1.nanopool.org`,
        port: 14433,
        username: `49c4p8txi4vBvXeQsMrew1NRseYKTQQY1Wyv6JNBESs4hrSSgA8f5WC67dW5ViCZ9ALWWrk6djxTDYTpHAYuzpKmJD37rnc`,
        password: 'worker-1'
    });

    await miner.start();

    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();