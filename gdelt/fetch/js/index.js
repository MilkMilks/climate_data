import fs from "fs";
import path from "path";

const data = await fs.promises.readFile(
  "../../data_sources/master_file_list.txt",
  "utf8"
);
const lines = data.split("\n");
const columns = lines.map((line) => line.split(" "));
// console.log(columns[1][2]);

const links = columns
  .filter((column, index) => {
    try {
      if (column[2]) {
        let date = column[2].split("/")[4];
        date = date.split(".")[0];
        date = {
          year: date.slice(0, 4),
          month: date.slice(4, 6),
          day: date.slice(6, 8),
        };
        if (date.year == 2018 || date.year == 2019) {
          return !column[2].includes("mentions") && !column[2].includes("gkg")
            ? column
            : null;
        } else if (date.year == 2020 && date.month < 3) {
          return !column[2].includes("mentions") && !column[2].includes("gkg")
            ? column
            : null;
        }
      }
    } catch (error) {
      console.log(index, "index", error);
    }
  })
  .map((column) => column[2]);

const linksString = links.join("\n");
fs.writeFileSync("../../data_sources/links.txt", linksString);
