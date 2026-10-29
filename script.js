console.log("Hello World!");
let a = 10;
let b = 20;
console.log(a + b);
const c = 30;
const d = 40;
console.log(c + d);
const e = "わたしは";
const f = "寺嶋です。";
console.log(e + f);
let name = "鈴木";
let str = `こんにちは、${name}さん。';今日もよい天気ですね！`;
console.log(str);
let data = ['JavaScript', 'Python', 'PHP', 'Ruby', 'Perl'];
console.log(data[0]);
console.log(data[2]);
let data1 = [
    ['Javascpipt','js'],
    ['python', 'py'],
    ['Ruby', 'rd'],
];
console.log(data1[1][0]);
let book = {
    title: 'JavaScript本格入門',
    price: 2980,
    publisher: '技術評論社',
};

console.log(book.title);
console.log(book.price);
console.log(book.publisher);

let x = 15;

if (x >= 10) {
    console.log('変数xは10以上です。');
}else {
    console.log("xは10未満です");
};
let rank = 'B';

switch(rank) {
    case 'A' :
        console.log('Aランクです。');
        break;
    case 'B' :
        console.log('Bランクです。');
        break;
    case 'C' :
        console.log('Cランクです。');
        break;
    default:
        console.log("ランク外です");
        break;
}

let ij = 5;
while(i < 10) {
    console.log(`iの値は${i}`);
    ij++;
}
let i = 5;

do {
    console.log(`iの値は${i}`);
    i++;
} while(i < 10);

for (let i = 5; i < 10; i++) {
    console.log(`iの値は${i}`);
}
for(let i = 5; i < 15; i++) {
    console.log('おはよう');
}