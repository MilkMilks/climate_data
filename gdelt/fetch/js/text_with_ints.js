import fs from "fs";

async function checkArticleWords(url) {
  let article = await fs.promises.readFile(
    `../parsed_data/articles_json/${url}`,
    "utf-8"
  );

  let words = JSON.parse(article);
  let URL = words.URL;
  let ID = words.id;
  let lat = words.lat;
  let long = words.long;
  let date = words.date;
  words = words.TEXT.replaceAll(/(\r\n|\n|\r|\t|u3000|u0020)/gm, "").split(" "); //.replaceAll(/(\r\n|\n|\r|\t|u3000|u0020)/gm, "");
  let hasIntNearby = [];

  for (let i = 0; i < words.length; i += 20) {
    let nearbyWords = words.slice(i - 20, i + 20);
    let searchTerms = [
      "protestors",
      "protesters",
      "protestor",
      "protester",
      "strikers",
      "demonstrators",
      "demonstrating",
    ];
    let numberWords = ["dozen", "hundred", "thousand", "million"];
    if (
      nearbyWords.some((w) => searchTerms.includes(w)) &&
      (nearbyWords.some((w) => /\d/.test(w)) ||
        nearbyWords.some((w) => numberWords.includes(w)))
    ) {
      hasIntNearby.push(nearbyWords);
    }
  }

  let wordArrayString = "";

  for (let i = 0; i < hasIntNearby.length; i++) {
    let rowString = hasIntNearby[i].join(" ");
    wordArrayString += `${ID}\t${date}\t${lat}\t${long}\t${URL}\t${rowString}\n`;
  }

  if (wordArrayString) {
    fs.appendFile("articles_to_check.tsv", wordArrayString, (err) => {
      if (err) {
        console.log(err);
      } else {
        // Get the file contents after the append operation
      }
    });
  }
}

let texts = [];
texts = await fs.promises.readdir(
  "../parsed_data/articles_json/",
  (err, files) => {
    if (err) console.log(err);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach((file) => {
        texts.push(file);
      });
    }
  }
);
// console.log(texts.length);
for await (const link of texts) {
  await checkArticleWords(link);
}
console.log(passed)