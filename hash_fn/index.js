import sha256 from "sha256";

function hashFn(x, y) {
  return sha256(JSON.stringify({ x, y }));
}

let txn = ["nigga", "og", "bruv", "my man", "chief"];

function getRootHash(arr) {
  if (arr.length % 2 === 0) {
    //even
  }
}

console.log(hashFn("boy", "girl"));
