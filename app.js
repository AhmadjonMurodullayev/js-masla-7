// 1. ixtiyoriy array yarating va undagi bir martadan
// ko'p takrorlangan item larni boshqa array ko'chiradigan
// function yarating
let arrow = [1, 2, 3, 4, 5, 1, 2, 3, 4];
let son = [];
let num = [];
for (let i = 0; i < arrow.length; i++) {
  if (!son.includes(arrow[i])) {
    son.push(arrow[i]);
  } else {
    num.push(arrow[i]);
  }
}
// console.log(son);
console.log(num);

// 2. Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling.
//  Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]
let arr = [1, 2, 3, 4, 5];
const getLevel = (n) => {
  return arr.map((a) => a * a);
};
console.log(getLevel(arr));

// 3.Arraydagi musbat sonlar yig’indisini hisoblang.
//  (filter va reduce).
//  Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42

let array = [1, -4, 12, 0, -3, 29, -150];
function arrowNamber(array) {
  let res = array.filter(function (item) {
    return item > 0;
  });
  let sum = res.reduce(function(sum,  item){
    return sum + item;
  }); 
  console.log(sum);
}
arrowNamber(array);

// 4. Stringdagi so’zlarning bosh harflarini oling.
//  (split, map, join). Input: 'George Raymond Richard Martin'.
//   Output: 'GRRM' 

let str = 'George Raymond Richard Martin'
function mapNma(){
  let name = str.split(" ")
  let nems = name.map((item,index) => item[0]).join("")
  console.log(nems);
}
mapNma(str)

// 5. Berilgan stringni faqatgina harflardan
//  iborat ekanligiga tekshiring 
let strs = "salom"
function sitrngNumb(strs){
  let nem = strs.split('');
            nem.forEach(item => {
     if(isNaN(item)){
        console.log("so'z")
      }else{
        console.log("soz emas");
     }
 });

}
sitrngNumb(strs);


// 6. String berilgan. Stringdagi so'zlar uzunligidan
//  iborat bo'lgan array qaytaring. (split, map) 
//  Input: "Hello world" Output: [3, 9, 12] 
let strm = "Hello world";
function samSim(str) {
    let n_str = str.split(' ').map(function(item){
      return item.length;
  });
    console.log(n_str);
}
samSim(strm);

// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring.
//  Input: "salom dunyo" Output: true
let strn = "salom dunyo";
function bushJoy(str){
   let new_str = str.split("")
   new_str.forEach(item => {
       if(item.includes(" ")){
        console.log("true");
        }else{
          // console.log("folse");
       }
   })
   console.log(new_str);
}
bushJoy(strn);
// 8. Objectning kalit va qiymatlarining string
//  ko'rinishidagi yig'indisidan iborat array qaytaring 
//  Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']
// let obj = {a: 2, b: 5, c: 7};

let obj = {a: 2, b: 5, c: 7};

function objStrs(obj){
    let objks = Object.keys(obj).map(function(item,index){
        return  item;
    });
    
    console.log(objks);
}
objStrs(obj);