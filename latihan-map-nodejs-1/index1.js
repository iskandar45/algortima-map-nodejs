const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  "Masukkan beberapa bilangan genap (pisah dengan koma(,)) : ",
  function (numbers) {
    //filter whitespace
    const x = numbers.replace(/\s+/g, "");
    //pisahkan inputan menjadi array dengan koma
    const y = x.split(",");
    //filter apabila user typo pada tanda koma
    const z = y.filter(function (str) {
      return str !== "";
    });
    // cek apakah user input bilangan bulat atau tidak
    const isInt = z.every(function (num) {
      return Number.isInteger(parseInt(num));
    });
    if (!isInt) {
      console.log("Input Invalid, harap masukkan bilangan bulat");
      rl.close();
      return;
    }
    // ubah inputan menjadi integer
    const array = z.map(function (num) {
      return parseInt(num);
    });
    // ubah array agar jadi bilangan genap semua
    const result = array.map(function (num) {
      if (num + 0 != num) {
        return "Bukan Bilangan Bulat";
      } else if (num % 2 != 0) {
        return num + 1;
      } else {
        return num;
      }
    });
    rl.close();
    console.log(result);
  }
);
