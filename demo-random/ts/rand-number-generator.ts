console.log("Generate 20 random die rolls: ");
let dieRolls: number[] = [];
for (let index = 0; index < 20; index++) {
  let dieRoll: number = Math.floor(Math.random() * 6) + 1;
  dieRolls.push(dieRoll);
}

console.log("Die Rolls ", dieRolls);
