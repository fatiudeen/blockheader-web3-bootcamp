import sha256 from "sha256";

function hashFn(x, y) {
  return sha256(JSON.stringify({ x, y }));
}

let txn = ["fghj", "vbnm", "jklop", "tyuio", "wertyu"];

function getRootHash(arr) {
  let len = arr.length;
  let lastVal;

  if (arr.length % 2 !== 0) {
    len = arr.length - 1;
    lastVal = arr.at(-1);
  }

  const newHashes = [];
  for (let i = 0; i < len; i += 2) {
    newHashes.push(hashFn(arr[i], arr[i + 1]));
  }

  if (lastVal) {
    newHashes.push(hashFn(lastVal, lastVal));
  }

  return newHashes.length === 1 ? newHashes[0] : getRootHash(newHashes);
}

console.log(getRootHash(txn));
