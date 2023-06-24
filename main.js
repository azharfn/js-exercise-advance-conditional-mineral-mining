/*
- fungsi "mineraMining" yang mensimulasikan pendapatan dari tambang
- menerima 4 parameter
- rumus income
(durasi operasional tambang mineral / time to get)
* miningPower
- rumus total income
(mengembalikan sebuah string analisa pendapatan sesuai deskripsi

contoh output 
Mineral Name = gold
Mining Power = 10
Duration = 70
Cost = 59
Result = 
Mineral mining at a loss -35.666666666666664

flow
1. buat variable untuk menyimpan data-data market mineral dan time to get
2. cari income dengan rumus di atas, dengan memilih mineral yang ditambang
3. hitung rumus total income
4. kurangi dengan cost
5. return sesuai keuntungan / kerugiab / netral


*/

function mineralMining(mineral, miningPower, duration, cost) {
  const goldTimetoToGet = 30;
  const goldMarketPrice = 1;

  let timeToGet = 0;
  let marketPrice = 0;
  let totalIncome = 0;

  switch (mineral) {
    case "gold":
      timeToGet = 30;
      marketPrice = 1;
      break;
    case "silver":
      timeToGet = 20;
      marketPrice = 0.6;
      break;
    case "coper":
      timeToGet = 5;
      marketPrice = 0.3;
      break;
    case "uranium":
      timeToGet = 75;
      marketPrice = 3;
      break;
    case "platinum":
      timeToGet = 15;
      marketPrice = 2;
      break;
    case "titanium":
      timeToGet = 55;
      marketPrice = 1.5;
      break;
  
    default:
      return"Invalid mineral name"
      break;
  }

  // if(mineral === "gold"){
  //   timeToGet = 30;
  //   marketPrice = 1;
  // }
  // else if(mineral === "silver"){
  //   timeToGet = 20;
  //   marketPrice = 0,6;
  // }
  // else if


  totalIncome = (duration/timeToGet)*miningPower;
  totalIncome = totalIncome * marketPrice;
  totalIncome = totalIncome - cost;
  
  if(totalIncome > 0){
    return "Mineral mining profit " + totalIncome;
  }
  else if(totalIncome < 0){
    return "Mineral mining at loss" + totalIncome;
  }
  else if(totalIncome === 0){
    return "Mineral mining at get nothing";
  }

  //return null // TODO: replace this

  
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
