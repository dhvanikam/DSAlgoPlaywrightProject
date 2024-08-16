const ExcelJS = require('exceljs');

async function excelRead()
{
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile("./utils/TestData.xlsx");

const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row, rowNumber) =>
    {
       row.eachCell((cell, colNumber) =>
    {
       let username=cell.value(rowNumber,colNumber);
       console.log(username);
       
      // const cell1 = worksheet.getCell(rowNo,colNo);
      //  console.log(cell1.value);
        
    }) 
    } )
}

excelRead();