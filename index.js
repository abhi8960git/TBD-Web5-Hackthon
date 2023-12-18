import {Web5 } from "@web5/api";
import { webcrypto } from 'node:crypto';

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

// initiate DiD  \
const{web5, did:aliceDid} = await Web5.connect();

// console.log(aliceDid);

const {record} = await web5.dwn.records.create({
    data:"Hello , Web5",
    message:{
        dataFormat:"text/plain"
    }
});

console.log('writeResult', record);

const readResult = await record.data.text();

console.log('readResult', readResult)