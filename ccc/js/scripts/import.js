import fs from "fs";

export default async function () {
  let data = await fs.promises.readFile("../ccc_compiled.csv", "utf-8");

  return {
    rows: data.split("\n").map((row) => row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)),
  };
}
