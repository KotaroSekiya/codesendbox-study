/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// //letは上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// //letは再宣言不可能
// let val2 = 'let変数を再宣言';
// console.log(val2);

// const val3 = 'const変数';
// console.log(val3);

// //const変数は上書き不可
// //val3 = 'const変数を上書き';

// //const変数は再宣言不可
// const val3 = 'const変数を再宣言';

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
// 	name: 'kotaro',
// 	age: 44
// };
// val4.name = 'コータロー';
// val4.address = 'tokyo';
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */

const name = "kotaro";
const age = 44;
// 「私の名前はkotaroです。年齢は44歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
 * アロー関数
 */

//従来の関数
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};
console.log(func1("func1です"));
console.log(func2("func2です"));

//アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));
