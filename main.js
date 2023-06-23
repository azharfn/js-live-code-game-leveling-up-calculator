function calcByLevel(level) {
  let exp = 0;
  if (level <= 17){
    exp = 1200 * (level - 1); 
  }
  else{
    exp = (17 * 1200) + ((level - 17) * 3000) + 3000
  }
  return `Untuk mencapai level ${level} membutuhkan ${exp} exp point!`;
}

function calcByExp(exp) {
  let level = 1;
  let expNeed = 1200;
  while (exp >= expNeed) {
    if (level < 17) {
      exp -= expNeed;
      expNeed = 1200;
    }
    else{
      exp -= expNeed
      expNeed = 3000;
    }
    level++;
  }

  //kondisi Function calcByExp akan mengembalikan sebuah string yang berisikan informasi level yang dapat dicapai dengan exp point
  if(level === 1 ){
    return `Exp point sebanyak ${exp} tidak cukup untuk naik ke level selanjutnya!`;
  }
  else if (exp === 0) {
    return `Cukup untuk dari level 1 naik ke level ${level}, semua exp point sudah terpakai!`;
  }
  else {
    return `Cukup untuk mencapai level ${level}, dan masih ada ${exp} exp point yang tersisa!`;
  }

}


function gameLevelingUpCalculator(type, data) {
  if(type === "level") {
    return calcByLevel(data);
  }
  else if(type === "exp"){
    return calcByExp(data);
  }
  else{
    return `Please input the correct type!`
  }
}

// /* 
//   example test case

console.log(gameLevelingUpCalculator('level', 2)); // Untuk mencapai level 2 membutuhkan 1200 exp point!
console.log(gameLevelingUpCalculator('level', 17)); // Untuk mencapai level 17 membutuhkan 19200 exp point!
console.log(gameLevelingUpCalculator('level', 18)); // Untuk mencapai level 18 membutuhkan 20400 exp point!
console.log(gameLevelingUpCalculator('level', 20)); // Untuk mencapai level 20 membutuhkan 26400 exp point!
console.log(gameLevelingUpCalculator('exp', 1200)); // Cukup untuk mencapai level 2, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 3600)); // Cukup untuk mencapai level 4, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 5000)); // Cukup untuk mencapai level 5, dan masih ada 200 exp point yang tersisa!
console.log(gameLevelingUpCalculator('exp', 19200)); // Cukup untuk mencapai level 17, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 22200)); // Cukup untuk mencapai level 18, semua exp point sudah terpakai!
console.log(gameLevelingUpCalculator('exp', 30000)); // Cukup untuk mencapai level 20, dan masih ada 1800 exp point yang tersisa!
console.log(gameLevelingUpCalculator('exp', 300)); // Exp point sebanyak 300 tidak cukup untuk naik ke level selanjutnya!
console.log(gameLevelingUpCalculator('point', 2)); // Please input the correct type!
// */

module.exports = {
  gameLevelingUpCalculator,
  calcByLevel,
  calcByExp,
};
