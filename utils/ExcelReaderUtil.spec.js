
const ExcelJS = require('exceljs');

module.exports = {
async getRegistrationData(sheetName, rowNum)  {    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./utils/Excel_Data_Login_Register.xlsx");
        
    const worksheet = workbook.getWorksheet(sheetName);
    const data = [];

    
    worksheet.eachRow((row, rowNumber) => {

        if(rowNum===null)
        {//no rownumber has been specified in datatable, then read whole excel file
            if (rowNumber > 1 && rowNumber < 9) {                
                
            //cell level operation
                const username = String(row.getCell(1).value);
                const password = String(row.getCell(2).value);
                const confirmpassword = String(row.getCell(3).value);
                //collect all data in an array
                data.push({ username, password, confirmpassword });
            }
        }
        else 
        {
           if (rowNumber === rowNum) 
           {     
            
           const username = String(row.getCell(1).value);
           const password = String(row.getCell(2).value);
           const confirmpassword = String(row.getCell(3).value);
           
            //collected data for the specified row number
           data.push({ username, password, confirmpassword });
          } 
        }
        
    })

   return data;
},

async getLoginData(sheetName, rowNum)  {    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./utils/Excel_Data_Login_Register.xlsx");
    
    const worksheet = workbook.getWorksheet(sheetName);
    const data = [];

    worksheet.eachRow((row, rowNumber) => {

           if (rowNumber === rowNum) 
           {
           const username = String(row.getCell(1).value);
           const password = String(row.getCell(2).value);
                    
            //collected data for the specified row number
           data.push({ username, password });
          } 
       
    })

   return data;
},

async readExcel(sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./PythonCode.xlsx");
    const worksheet = workbook.getWorksheet(sheetName);
    let excelRows = [];

    worksheet.eachRow((row, rowNumber) => {

        if (rowNumber === 1) {
            return;
        }
        
        let columnMapData = new Map();
        row.eachCell((cell, colNumber) => {
            cell = worksheet.getRow(rowNumber);
            let columnHeaderName = worksheet.getRow(1).getCell(colNumber).value;

            columnMapData.set(columnHeaderName, cell.getCell(colNumber).value);
        })
        excelRows.push(columnMapData);
    })
    return excelRows;
}

}


