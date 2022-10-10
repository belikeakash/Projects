const a = "Apple";
console.log(a);

const Arr = [
  { first: "Akash", last: "Sirohi", year: 2001 },
  { first: "Avinash", last: "Sirohi", year: 1999 },
  { first: "Babloo", last: "Sirohi", year: 1975 },
  { first: "Geeta", last: "Sirohi", year: 1976 },
];

function befor2000(x) {
    if(x.year<2000) return true;
}

// let res = [];
// for(let i=0;i<Arr.length;i++) {
//     if(befor2000(Arr[i])) res.push(Arr[i]);
// }

 const res = Arr.filter(x => {
    console.log(x.year);
    return befor2000(x);
});

const use = Arr.sort();
console.table(use);

console.table(res);
