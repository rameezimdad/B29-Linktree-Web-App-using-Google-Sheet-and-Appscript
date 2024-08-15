function doGet() {
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle('Multi-Page Web App')
.setSandboxMode(HtmlService.SandboxMode.IFRAME);
}



function getPageData() {
  const sheet = SpreadsheetApp.openById('1ZKF9iw3oWuWncVcYKHg2lJffrneoMA3M5sj8aZ4euoY').getSheetByName('Dashboard'); // Replace with your Sheet ID and Sheet Name
  const data = sheet.getRange('B2:B4').getValues(); // Fetch values from B2 to B4
  
  return {
    imageUrl: data[0][0],
    name: data[1][0],
    bioline: data[2][0]
  };
}

function getSocialLinks() {
 const sheet = SpreadsheetApp.openById('1ZKF9iw3oWuWncVcYKHg2lJffrneoMA3M5sj8aZ4euoY').getSheetByName('Dashboard');// Replace with your Sheet ID and Sheet Name
  const data = sheet.getRange('B5:B11').getValues(); // Fetch values from B5 to B11
  
  return {
    email: data[0][0],
    linkedin: data[1][0],
    twitter: data[2][0],
    instagram: data[3][0],
    facebook: data[4][0],
    tiktok: data[5][0],
    whatsapp: data[6][0]
  };
}



function getPageItems() {
  const sheet = SpreadsheetApp.openById('1ZKF9iw3oWuWncVcYKHg2lJffrneoMA3M5sj8aZ4euoY').getSheetByName('Dashboard'); // Replace with your sheet name
  const data = sheet.getRange('A12:C').getValues();
  
  // Remove empty rows
  const filteredData = data.filter(row => row[0] && row[1]);
  
  return filteredData;
}

