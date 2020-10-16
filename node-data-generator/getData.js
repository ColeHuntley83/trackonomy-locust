const mssql = require("mssql");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const dbConfig = {
  server: "",
  database: "",
  user: "",
  password: "",
};

async function getResult() {
  let connection;
  try {
    connection = await mssql.connect(dbConfig);
    const result = await connection.query(
      "select top 100000 tape_id from flexport.tapecfg_db "
    );

    return result;
  } finally {
    if (connection && connection.end) connection.end();
  }
}

(async function () {
  let data = await getResult();
  console.log(data.recordset);
  const csvWriter = createCsvWriter({
    path: './../feeding-locusts/locust-scripts/out.csv',
    header: [
      {id: 'tape_id'}
      
    ]
  });

  
  csvWriter
    .writeRecords(data.recordset)
    .then(()=> console.log('The CSV file was written successfully'));
})();
