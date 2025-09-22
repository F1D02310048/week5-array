const myFamilyHobbies = [ // data array
  { nama: "Fadila", hobi: "Running" },
  { nama: "Ghilvana", hobi: "Gaming" },
  { nama: "Farida", hobi: "Watching Movies" },
  { nama: "Chania", hobi: "Shoe Collection" },
  { nama: "Ezra", hobi: "Eating" },
  { nama: "Afifa", hobi: "Walking" },
  { nama: "Caca", hobi: "Gardening" },
  { nama: "Maliha", hobi: "Cooking" },
  { nama: "Judith", hobi: "Football" },
  { nama: "Fani", hobi: "Baking" }

];

// map
const hasilMap = myFamilyHobbies.map(item => {
  return {
    nama: item.nama.toUpperCase(),
    hobi: item.hobi.toUpperCase()
  };
});
console.log("=== HASIL MAP ===");
console.log("(nama dan hobi dalam format uppercase)");
console.log(hasilMap);

// filter
const panjang = myFamilyHobbies.filter(hobi => hobi.hobi.length > 5);
console.log("\n=== HASIL FILTER ===");
console.log("(hobi dengan panjang karakter > 5)");
console.log(panjang);

// reduce
const total = myFamilyHobbies.reduce((acc, hobi) => acc + hobi.hobi.length, 0);
console.log("\n=== HASIL REDUCE ===");
console.log("(total karakter semua hobi)");
console.log(total);

// find
const cari = myFamilyHobbies.find(hobi => hobi.hobi.startsWith("R"));
console.log("\n=== HASIL FIND ===");
console.log("(cari hobi dengan awalan R)");
console.log(cari);

// some 
const adaPanjang = myFamilyHobbies.some(hobi => hobi.hobi.length > 10);
console.log("\n=== HASIL SOME ===");
console.log("(ada hobi dengan panjang > 10)");
console.log(adaPanjang);

// every
const cekelemen = myFamilyHobbies.every(hobi => hobi.hobi.length > 3);
console.log("\n=== HASIL EVERY ===");
console.log("(semua hobi memiliki panjang > 3)");
console.log(cekelemen);