import fs from "fs";
import dataImport from "./scripts/import.js";
const data = await dataImport();
let climateProtests = [];

// console.log(data.rows[37036])

for (let i = 0; i < data.rows.length; i++) {
  for (let j = 0; j < data.rows[i].length; j++) {
    for (let k = 1; k < 31; k++) {
      if (k < 10 && data.rows[i][0] === `2019-09-0${k}`) {
        if (data.rows[i][j].includes("climate")) {

          climateProtests.push(data.rows[i]);
        }
      }
      if (k >= 10 && data.rows[i][0] === `2019-09-${k}`) {
        if (data.rows[i][j].includes("climate")) {
          climateProtests.push(data.rows[i]);
        }
      }
    }
  }
}


let header = data.rows[0].join(",");
header += "\n";
fs.appendFileSync("climateStrikes.tsv", header);

for (let i = 0; i < climateProtests.length; i++) {
  let row = climateProtests[i];
  row = row.join(",");
  row += "\n";
  fs.appendFileSync("climateStrikes.tsv", row);
}
