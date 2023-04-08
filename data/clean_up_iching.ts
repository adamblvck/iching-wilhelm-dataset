import { Database } from "https://deno.land/x/sqlite3@0.9.1/mod.ts";

import iching from "/path/to/iching-wilhelm-dataset/data/iching_wilhelm_translation.js";

// this assumes one has followed the "import to sql" instructions from
// the readme
const db = new Database("i_ching.sqlite");

// Create table schema
db.exec(`DROP TABLE IF EXISTS iching_clean`);
db.exec(
`CREATE TABLE IF NOT EXISTS "iching_clean" (
  "hex" TEXT,
  "hex_font" TEXT,
  "binary" TEXT,
  "english" TEXT,
  "od" TEXT,
  "pinyin" TEXT,
  "trad_chinese" TEXT,
  "wilhelm_above" JSON,
  "wilhelm_below" JSON,
  "wilhelm_symbolic" TEXT,
  "wilhelm_image" JSON,
  "wilhelm_judgement" JSON,
  "wilhelm_lines" JSON
)`
);


// insert the data we want from the original table
db.exec(
`INSERT INTO iching_clean 
 SELECT iching.hex, iching.hex_font,
        iching.binary, iching.english,
        iching.od, iching.pinyin, iching.trad_chinese,
        '','', iching.wilhelm_symbolic,'','',''
 FROM iching`);

// insert actual JSON from the js file
const statement = db.prepare(
`UPDATE iching_clean
 SET wilhelm_above = :wilhelm_above,
     wilhelm_below = :wilhelm_below,
     wilhelm_image = :wilhelm_image,
     wilhelm_judgement = :wilhelm_judgement,
     wilhelm_lines = :wilhelm_lines
 WHERE hex = :hex`
);

for ( const [key, value] of Object.entries(iching) )
{
    statement.run({
	wilhelm_above: JSON.stringify(value.wilhelm_above),
	wilhelm_below: JSON.stringify(value.wilhelm_below),
	wilhelm_image: JSON.stringify(value.wilhelm_image),
	wilhelm_judgement: JSON.stringify(value.wilhelm_judgment),
	wilhelm_lines: JSON.stringify(value.wilhelm_lines),
	hex: key
    });
}

// drop the old table
db.exec(
`DROP TABLE iching`
);

// the new table takes the old table's place
db.exec(
`ALTER TABLE iching_clean RENAME TO iching`
);

// The migration is complete. Now, to export to CSV,
// go open up a sqlite client and run the following commands:
//
// .mode csv
// .separator ;
// .output <whatever-filename>.csv
// SELECT * FROM iching;
