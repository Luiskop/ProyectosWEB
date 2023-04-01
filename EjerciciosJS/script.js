function ejercicio(a = 0, b = 10) {
  let result;
  for (let i = 0; i <= b; i++) {
    result = a * i;

    if (i == 5) {
    } else {
      //   console.log(`${a} * ${i} = ${result}`);
    }
  }
}
ejercicio(5, 20);

function ejercicio4() {
  let result = [];
  for (i = 0; i <= 100 - 3; i = i++) {
    i = i + 3;x 
    result.push(i);
  }
  result.filter((el) => {
    if (el % 3 === 0) console.log(el);
  });
  //   console.log(`${result}`);
}
ejercicio4();
