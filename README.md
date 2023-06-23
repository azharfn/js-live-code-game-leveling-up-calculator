# Game Leveling Up Calculator

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

- **Durasi**: 20 menit pengerjaan
- **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
- **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

### Description

`gameLevelingUpCalculator` adalah sebuah function yang akan melakukan perhitungan `exp point` yang dibutuhkan untuk naik ke level tertentu, atau `level` yang dapat dicapai dengan `exp point` yang
dimiliki.

`exp point` yang dibutuhkan untuk naik level berbeda-beda untuk setiap levelnya. Semakin tinggi level, maka `exp point` yang dibutuhkan akan semakin banyak. Berikut adalah `exp point` yang dibutuhkan
untuk leveling up:

- Untuk 17 level pertama, `exp point` yang dibutuhkan adalah 1200.
- Untuk level berikutnya, `exp point` yang dibutuhkan adalah 3000.

---

Untuk mempermudah perhitungan, digunakan function helper `calcByLevel` & `calcByExp` yang akan melakukan perhitungan berdasarkan `level` atau `exp point` secara terpisah.

Function helper `calcByLevel` akan menerima satu parameter yaitu `level` yang merupakan `level` yang ingin dicapai. Function helper `calcByExp` akan menerima satu parameter yaitu `exp` yang merupakan
`exp point` yang dimiliki.

Function `calcByLevel` akan mengembalikan sebuah string yang berisikan informasi `exp point` yang dibutuhkan untuk mencapai `level` yang diinginkan dengan format sebagai berikut:

```text
Untuk mencapai level <level> membutuhkan <exp> exp point!
```

Function `calcByExp` akan mengembalikan sebuah string yang berisikan informasi `level` yang dapat dicapai dengan `exp point` yang dimiliki dengan format sebagai berikut:

- Jika `exp point` tidak cukup untuk mencapai `level` berikutnya, maka akan mengembalikan string sebagai berikut:

  ```text
  exp point sebanyak <exp> tidak cukup untuk naik ke level selanjutnya!
  ```

- Jika `exp point` cukup untuk mencapai `level` berikutnya, dan semua `exp point` habis, maka akan mengembalikan string sebagai berikut:

  ```text
  Cukup untuk dari level 1 naik ke level <level>, semua exp point sudah terpakai!
  ```

- Jika `exp point` cukup untuk mencapai `level` berikutnya, dan masih ada `exp point` yang belum terpakai, maka akan mengembalikan string sebagai berikut:

  ```text
  Cukup untuk dari level 1 naik ke level <level>, dan masih ada <exp> exp point yang tersisa!
  ```

---

Function `gameLevelingUpCalculator` akan menerima dua parameter yaitu `type` dan `data`.

Parameter `type` bertipe data `string` dan merupakan informasi yang menyatakan perhitungan yang dilakukan oleh function `gameLevelingUpCalculator` berdasarkan `exp point` atau `level`.

- Jika `type` bernilai `level`, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByLevel` dengan parameter `data`.
- Jika `type` bernilai `exp`, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByExp` dengan parameter `data`.
- Jika `type` bernilai selain `level` dan `exp`, maka function `gameLevelingUpCalculator` akan mengembalikan string sebagai berikut:

  ```text
  Please input the correct type!
  ```

---

Parameter `data` bertipe data `number` dan merupakan `level` atau `exp point` yang akan digunakan untuk melakukan perhitungan.

- Jika `type` bernilai `level`, maka `data` merupakan `level` yang ingin dicapai.
- Jika `type` bernilai `exp`, maka `data` merupakan `exp point` yang dimiliki.

---

Function `gameLevelingUpCalculator` akan mengembalikan hasil perhitungan yang dilakukan oleh function helper `calcByLevel` atau `calcByExp` sesuai dengan nilai dari parameter `type`.

### Constraints

- Function `gameLevelingUpCalculator` sudah dipastikan akan menerima dua parameter.
- Parameter `type` akan selalu berupa `string`.
- Parameter `data` akan selalu berupa `number`.
- Parameter `type` tidak selalu bernilai `level` atau `exp`.
- parameter `data` bernilai 2 <= data <= 99999999.
- Level dimulai dari level 1.

### Test Case Examples

#### Test Case 1

Input:

```text
parameter 1: level
parameter 2: 20
```

Output:

```text
Untuk dari level naik ke level 20 membutuhkan 26400 exp point!
```

Explanation:

- Parameter `type` bernilai `level`, maka function `gameLevelingUpCalculator` akan melakukan perhitungan dengan memanggil function helper `calcByLevel`.
- Parameter `data` bernilai 20, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByLevel` dengan parameter `level` bernilai 20.
- 17 level pertama membutuhkan `exp point` sebanyak 1200 untuk naik ke setiap levelnya. 17 \* 1200 = 20400.
- Untuk naik ke level 18 dan seterusnya membutuhkan `exp point` sebanyak 3000 untuk naik ke level selanjutnya. 2 \* 3000 = 6000.
- Total `exp point` yang dibutuhkan untuk mencapai level 20 adalah 20400 + 6000 = 26400.

---

#### Test Case 2

Input:

```text
parameter 1: exp
parameter 2: 10000
```

Output:

```text
Cukup untuk dari level 1 naik ke level 8, dan masih ada 400 exp point yang tersisa!
```

Explanation:

- Parameter `type` bernilai `exp`, maka function `gameLevelingUpCalculator` akan melakukan perhitungan dengan memanggil function helper `calcByExp`.
- Parameter `data` bernilai 10000, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByExp` dengan parameter `exp` bernilai 10000.
- 17 level pertama membutuhkan `exp point` sebanyak 1200 untuk naik ke setiap levelnya. 17 \* 1200 = 20400. `exp point` yang dimiliki adalah 10000. `exp point` yang dimiliki tidak cukup untuk naik ke
  level 18. Sehingga `exp point` yang dibutuhkan untuk naik setiap levelnya adalah 1200.
- 10000 / 1200 = 8.3333 (dibulatkan ke bawah menjadi 8 level).
- Sisa `exp point` yang belum terpakai adalah 10000 - (8 \* 1200) = 10000 - 9600 = 400.

---

#### Test Case 3

Input:

```text
parameter 1: exp
parameter 2: 500
```

Output:

```text
exp point sebanyak 500 tidak cukup untuk naik ke level selanjutnya!
```

Explanation:

- Parameter `type` bernilai `exp`, maka function `gameLevelingUpCalculator` akan melakukan perhitungan dengan memanggil function helper `calcByExp`.
- Parameter `data` bernilai 500, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByExp` dengan parameter `exp` bernilai 500.
- 17 level pertama membutuhkan `exp point` sebanyak 1200 untuk naik ke setiap levelnya. Sedangkan `exp point` yang dimiliki adalah 500. `exp point` yang dimiliki tidak cukup untuk naik ke level
  selanjutnya.

#### Test Case 4

Input:

```text
parameter 1: exp
parameter 2: 3600
```

Output:

```text
Cukup untuk dari level 1 naik ke level 3, semua exp point sudah terpakai!
```

Explanation:

- Parameter `type` bernilai `exp`, maka function `gameLevelingUpCalculator` akan melakukan perhitungan dengan memanggil function helper `calcByExp`.
- Parameter `data` bernilai 3600, maka function `gameLevelingUpCalculator` akan memanggil function helper `calcByExp` dengan parameter `exp` bernilai 3600.
- 17 level pertama membutuhkan `exp point` sebanyak 1200 untuk naik ke setiap levelnya. 17 \* 1200 = 20400. `exp point` yang dimiliki adalah 3600, sehingga `exp point` yang dimiliki cukup untuk naik
  ke level 3 (3600 / 1200 = 3)
