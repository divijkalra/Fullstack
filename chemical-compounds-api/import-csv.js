const fs = require('fs');
const csv = require('csv-parser');
const { Compound } = require('./models');

fs.createReadStream('compound.csv')
    .pipe(csv())
    .on('data', (row) => {
        Compound.create({
            CompoundName: row.CompoundName,
            CompoundDescription: row.CompoundDescription,
            strImageSource: row.strImageSource,
            strImageAttribution: row.strImageAttribution,
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
