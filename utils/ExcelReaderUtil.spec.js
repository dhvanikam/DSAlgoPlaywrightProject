
const ExcelJS = require('exceljs');

/*class ExcelReaderUtil {

    async getRegistrationData(sheetName, rowNum)  {    
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile("./utils/Register_Invalid_Credentials_Data.xlsx");
        
        const worksheet = workbook.getWorksheet(sheetName);
        const data = [];
    
        worksheet.eachRow((row, rowNumber) => {
    
    
            if(rowNum===null)
            {//no rownumber has been specified in datatable
                if (rowNumber > 1) 
                {             
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
    }
    

}

//module.exports={getRegistrationData}
module.exports={ExcelReaderUtil}*/

module.exports = {
async getRegistrationData(sheetName, rowNum)  {    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./utils/Register_Invalid_Credentials_Data.xlsx");
    
    const worksheet = workbook.getWorksheet(sheetName);
    const data = [];

    worksheet.eachRow((row, rowNumber) => {

        if(rowNum===null)
        {//no rownumber has been specified in datatable, then read whole excel file
            if (rowNumber > 1) {
                
                
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
}
}
