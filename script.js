let n, numN; 
n = prompt(`Введи целое число N`);
numN = parseInt(n);

while ( isNaN(numN) || n - Math.floor(n) !==0 ) {
    n = prompt(`Введи целое число N`);
    if ( n == '') {
        n = 0;
    };
    numN = parseInt(n);
}

console.log(numN, typeof(numN));

let m, numM;
m = prompt(`Введи целое число M`);
numM = parseInt(m);

while ( isNaN(numM) || m - Math.floor(m) !==0 ) {
    m = prompt(`Введи целое число M`);
    if ( m == '') {
        m = 0;
    };
    numM = parseInt(m);
}

console.log(numM, typeof(numM));

let  confirmType = confirm(`пропускать четные числа? ok = да; отмена = нет`);

console.log(confirmType);

let sum = 0;

if ( confirmType == false) {
    for ( let i = numN; i <= numM; i++  ) {
        sum += i;
    }
} else {
    for ( let i = numN; i <= numM; i++  ) {
        if (i%2 == 0) continue;
        sum += i;
    }
}

console.log(sum);

document.writeln(`Число N = ${numN} <br\/>  Число M = ${numM} <br\/> Пропускать четные числа? = ${confirmType} <br\/> Сумма от ${numN} до ${numM} = ${sum} `)