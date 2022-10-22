import fs from 'fs';

const rawData = fs.readFileSync(`${__dirname}/TestData.json`).toString();
const data = JSON.parse(rawData);

export default data;
