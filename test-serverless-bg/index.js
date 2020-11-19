const axios = require('axios');
const { min } = require('lodash');
const _ = require('lodash');
const dist = {};
const promises = [];
var count = 0;
const num = 500;

const hostname = 'https://0z24hak9v7.execute-api.us-east-1.amazonaws.com/dev/demo';

const makeCall = async () => {
    let retval = await axios.default.get(hostname);
    if(retval.status == 200) {
        let id = retval.data.id;
        dist[id] = _.get(dist, [id], 0) + 1;
        count++;
    }
};

for(let i = 0; i < num; i++){
    promises.push(makeCall());
}

Promise.all(promises)
.then(s => {
    _.forOwn(dist, (v,k,c) => {
        console.log(`${k} = ${v / count * 100}%`);
    });


}, e => {
    console.log(`Error = ${e}`);
});


