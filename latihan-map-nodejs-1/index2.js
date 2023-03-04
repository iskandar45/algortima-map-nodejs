const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Fungsi untuk memvalidasi apakah semua elemen array berisi bilangan bulat
 * @param {array} arr - Array yang akan divalidasi
 * @returns {boolean} - Mengembalikan true jika semua elemen array berisi bilangan bulat, dan false jika tidak
 */
function validateInput(arr) {
  const isInt = arr.every(function (num) {
    return Number.isInteger(parseInt(num));
  });
  return isInt;
}

/**
 * Fungsi untuk mengubah semua elemen array menjadi bilangan genap
 * @param {array} arr - Array yang akan diubah
 * @returns {array} - Mengembalikan array baru yang semua elemennya adalah bilangan genap
 */
function toEvenNumbers(arr) {
  const result = arr.map(function (num) {
    if (num + 0 != num) {
      return "Bukan Bilangan Bulat";
    } else if (num % 2 != 0) {
      return num + 1;
    } else {
      return num;
    }
  });
  return result;
}

/**
 * Fungsi utama
 * Fungsi untuk mengambil input dari pengguna dan menjalankan fungsi-fungsi lain
 */
function main() {
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
      if (!validateInput(z)) {
        console.log("Input Invalid, harap masukkan bilangan bulat");
        rl.close();
        return;
      }
      // ubah inputan menjadi integer
      const array = z.map(function (num) {
        return parseInt(num);
      });
      // ubah array agar jadi bilangan genap semua
      const result = toEvenNumbers(array);
      rl.close();
      console.log(result);
    }
  );
}

// menjalankan fungsi main()
main();
