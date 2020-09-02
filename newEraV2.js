var adConfig = {
    nameComp: {
        TFM1: 'Teddy-Feed.com', TFM2: 'TeddyFeed Co', TF: 'TeddyFeed', TF1: 'TeddyFeed com', TF2: 'TeddyFeed.com',
        TF3: 'Teddy Feed', TF4: 'Teddy Feed.com', TF5: 'Teddy-Feed', TF6: 'TeddyFeed Times', TF7: 'TeddyFeed Weekly', 
        TF8: 'teddy-feed co', TF9: 'teddyfeed.co', TF10: 'teddyfeed.inc', TFE1: 'teddyfeed', TFC1: 'TF News',
        TFO: 'Teddy Feed', TF1A: 'TeddyFeed', TF2A: 'TeddyF', TF3A: 'TFeed'
    },
    configs: [
        {
            name: 'Co1',
            allowedAccounts: ['TF1','TF3','TF5','TF7','TF9'],
            campaignStatus: 'Active',
            platform: 'Desktop',
            optimizeAssets: false,
            runAsSingleImage: false,
            campaignBudget: 200,
            location: 'US',
            runModes: {
                C: true,
                V: false
            },
            rows: [
																		 
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Supply Group':'GROUP_3_B','Bid Modifier':-80},
                {'Supply Group':'GROUP_3_A','Bid Modifier':-50},
                {'Supply Group':'GROUP_1_B','Bid Modifier':-40},
                {'Supply Group':'GROUP_1_A','Bid Modifier':400},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'Co2',
            allowedAccounts: ['TF2','TF4','TF6','TF8','TF10'],
            campaignStatus: 'Active',
            platform: 'Desktop',
            optimizeAssets: false,
            runAsSingleImage: false,
            campaignBudget: 200,
            location: 'US',
            runModes: {
                C: true,
                V: false
            },
            rows: [
                {'Device':'DESKTOP','Site':'LIFESTYLE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'FINANCE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AOL_PORTAL','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'HOMEPAGE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AT&T_PORTAL','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AT&T_MAIL_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'NEWS_US','Bid Modifier':400},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Supply Group':'GROUP_3_B','Bid Modifier':-80},
                {'Supply Group':'GROUP_3_A','Bid Modifier':-50},
                {'Supply Group':'GROUP_1_B','Bid Modifier':-40},
                {'Supply Group':'GROUP_1_A','Bid Modifier':0},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'Co3',
            allowedAccounts: ['TFM1','TFM2','TFC1','TFE1'],
            campaignStatus: 'Active',
            platform: 'Desktop',
            optimizeAssets: false,
            runAsSingleImage: false,
            campaignBudget: 200,
            location: 'US',
            runModes: {
                C: false,
                V: true
            },
            rows: [
                {'Device':'DESKTOP','Site':'LIFESTYLE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'FINANCE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AOL_PORTAL','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'HOMEPAGE_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AT&T_PORTAL','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'AT&T_MAIL_US','Bid Modifier':400},
                {'Device':'DESKTOP','Site':'NEWS_US','Bid Modifier':400},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Supply Group':'GROUP_3_B','Bid Modifier':-80},
                {'Supply Group':'GROUP_3_A','Bid Modifier':-50},
                {'Supply Group':'GROUP_1_B','Bid Modifier':-40},
                {'Supply Group':'GROUP_1_A','Bid Modifier':0},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'CoA1',
            allowedAccounts: ['TF1A'],
            campaignStatus: 'Active',
            platform: 'Mobile',
            optimizeAssets: false,
            runAsSingleImage: true,
            campaignBudget: 200,
            location: 'US',
            runModes: {
                C: true,
                V: false
            },
            rows: [
                 {'Device':'MOBILE','Site':'HOMEPAGE_US','Bid Modifier':300},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Supply Group':'GROUP_3_B','Bid Modifier':-80},
                {'Supply Group':'GROUP_3_A','Bid Modifier':-50},
                {'Supply Group':'GROUP_1_B','Bid Modifier':-40},
                {'Supply Group':'GROUP_1_A','Bid Modifier':250},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'CoA2',
            allowedAccounts: ['TF2A','TF3A'],
            campaignStatus: 'Active',
            platform: 'Mobile',
            optimizeAssets: false,
            runAsSingleImage: false,
            campaignBudget: 200,
            location: 'US',
            runModes: {
                C: true,
                V: false
            },
            rows: [
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Device':'','Site':'','Bid Modifier':null},
                {'Supply Group':'GROUP_3_B','Bid Modifier':-80},
                {'Supply Group':'GROUP_3_A','Bid Modifier':-50},
                {'Supply Group':'GROUP_1_B','Bid Modifier':-40},
                {'Supply Group':'GROUP_1_A','Bid Modifier':250},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        }
        
        
    ]
    
};

function onInstall() {
    onOpen();
}

function onOpen() {
    Run();
}

function Run() {
    var ui = SpreadsheetApp.getUi();

    ui.createMenu('Custom Menu')
        .addSubMenu(ui.createMenu('Ad Account Duplicate')
            .addItem('Duplicate - Single', 'dupSingle')
            .addItem('Duplicate - Bulk', 'dupBulk'))
        .addSeparator()
        .addSubMenu(ui.createMenu('Description')
            .addItem('Enter', 'setDesc'))
        .addSeparator()
        .addSubMenu(ui.createMenu('URL')
            .addItem('Enter', 'setUrl'))
        .addSeparator()
        .addSubMenu(ui.createMenu('Upload')
            .addItem('Upload', 'initnewUpload'))
            //.addItem('Upload CSV - Single', 'initUpload')
            //.addItem('Upload CSV - Bulk', 'MultiUp'))
        .addSeparator()
        .addSubMenu(ui.createMenu('Spreadsheet Cleanup')
            //.addItem('Show Sheets', 'showSheets')
            //.addItem('Hide Sheets', 'hideSheets')
            .addItem('Delete Sheets - By Name', 'deleteSheets')
            .addItem('Delete Sheets - Bulk', 'deleteBulk'))
        //.addItem('Copy Sheets', 'copySheets'))
        .addToUi();


}

function newEra(accounts) {
  //accounts = ['TFM1', 'TF4', 'TF5'];
  
  //setSpreadsheetName(campaign.originalVer);
  
  uploadCampaigns(accounts);
  
  SpreadsheetApp.getUi().alert('Uploading Complete!');
}

function Campaign() {
  this.rangeValues = getRangeValues();
  this.title = this.rangeValues[1][3];
  this.titleArr = this.title.split(' ');
  this.author = getAuthor(this.title);
  this.originalVer = this.titleArr[this.titleArr.length - 1];
  this.name = this.titleArr[0];
  this.url = checkUrl(getUrl());
  
  this.getColumnIndex = function(columnName) { return this.rangeValues[0].indexOf(columnName); };
}

function uploadCampaigns(accounts) {
  for (var i =0; i < accounts.length; i++) {
    var runForConfigs = filterConfigsByAccounts(accounts[i]);
    runConfigs(runForConfigs, accounts[i]);
  }
}

function runConfigs(configs, account) {
  var resultingCampaign;

  for (var configIndex = 0; configIndex < configs.length; configIndex++) {
    var config = configs[configIndex];
    var uploadVersions = config.runModes;
    
    for (var version in uploadVersions) {
    
      if (uploadVersions[version]) {
      
        if(version === 'V') {
          resultingCampaign = getCampaignVerV(config, account, version);
        } else {
          resultingCampaign = getCampaignVerC(config, account, version);
        }
        
        if (resultingCampaign) {
          newinitUpload(resultingCampaign, account);
        }
      }
    }
  }
  
  
}

function newinitUpload(campaign, account) {
    //SpreadsheetApp.getActiveSheet().getRange('CU2:CU').setNumberFormat('@');

    var accountMap = {
        "TFO": "1760106",
        "TF1A": "1760173",
        "TF2A": "1825887",
        "TF3A": "1825974",
        "TF": "1671335",
        "TF1": "1755167",
        "TF2": "1755143",
        "TF3": "1755135",
        "TF4": "1783843",
        "TF5": "1783903",
        "TF6": "1851270",
        "TF7": "1851253",
        "TF8": "1851234",
        "TF9": "1851243",
        "TF10": "1851254",
        "TFM1": "1793694",
        "TFM2": "1793717",
        "TFE1": "1798746",
        "TFC1": "1798717"
    };

    var csv = getCSVString(campaign);
    Logger.log(csv);
    uploadCSV(accountMap[account], csv);
}

function getCSVString(campaign) {
    var data = campaign.rangeValues;
    var csv = "";

    // loop through the data in the range and build a string with the csv data
    if (data.length > 1) {
        for (var row = 0; row < data.length; row++) {
            for (var col = 0; col < data[row].length; col++) {
                if (data[row][col].toString().indexOf(",") != -1) {
                    data[row][col] = "\"" + data[row][col] + "\"";
                }
            }

            // join each row's columns
            // add a carriage return to end of each row, except for the last one
            if (row < data.length - 1) {
                csv += data[row].join(",") + "\r\n";
            } else {
                csv += data[row];
            }
        }
        return csv;
    }
}

function uploadCSV(id, csv) {
    var ui = SpreadsheetApp.getUi();
    var options = {
        'escaping': false,
        'method': 'post',
        'payload': {
            csv: csv
        }
    };

    var result = UrlFetchApp.fetch('http://sng-api.azurewebsites.net/api/data/UploadCSVFile?advertiserId=' + id, options);
    var responseCode = result.getResponseCode();
    var responseBody = result.getContentText();
    if (responseCode == 200) {

    } else {
        ui.alert('CSV', 'Upload Failed.', ui.ButtonSet.OK);
    }

}

function getCampaignVerV(config, account, version) {
  var campaign = new Campaign();

  campaign = getCampaignVerC(config, account, version);
  
  if (!campaign) { return; }
  
  for (var rowIndex = campaign.rangeValues.length - 1; rowIndex >= 27; rowIndex--) {
    campaign.rangeValues[rowIndex][campaign.getColumnIndex('Object Type')] = 'Ad';
    campaign.rangeValues[rowIndex][campaign.getColumnIndex('Display URL')] = 'teddyfeed.com'
    campaign.rangeValues[rowIndex][campaign.getColumnIndex('Sponsored By')] = adConfig.nameComp[account];
    
    campaign.rangeValues.splice(25);
  }
  
  
  return campaign;
}

function getCampaignVerC(config, account, version) {
  var campaign = new Campaign();
  //var ver = version === 'V' ? campaign.originalVer.replace('C', 'V') : originalVer;
  
  var ver = checkVer(version, campaign);
  
  setCampaignStatus(campaign, config);
  setCustomRows(campaign, config);
  
  var utmObj = setUtm(campaign, config, account, ver);
  
  if (!utmObj) { return; };
  
  setNewCampValue(campaign, utmObj);
  setAdSchedule(campaign);
  setUrl(campaign, config, utmObj, campaign, account);
  setOptimizeAssets(campaign, config);
  setRunAsSingleImage(campaign, config);
  setLocation(campaign, config);
  setCampaignBudget(campaign, config);
  
  var valid = validateAll(campaign);
  
  if (!valid) {
    var ui = SpreadsheetApp.getUi();
    ui.alert('Validation Error');
    return;
  }
  
  return campaign;
}

function checkVer(version, campaign) {
  var ver;

  if (version === 'V') {
    ver = campaign.originalVer.replace('C', 'V');
  } else {
    ver = campaign.originalVer;
  }
  
  return ver;
}

function setAdSchedule(campaign) {
  var columnIndex = campaign.getColumnIndex('Ad Schedule');
  
  for (var rowIndex = campaign.rangeValues.length - 1; rowIndex >= 2; rowIndex--) {
    var adSchedule = campaign.rangeValues[rowIndex][columnIndex];
    
    if (adSchedule) { campaign.rangeValues[rowIndex][columnIndex] = '(ALL@-60%[04:ZERO-24:ZERO]);'; }
  }
}

function setUtm(campaign, config, account, ver) {
  var utm;
  var utm1;
  var newCamp;
  
  

  if (campaign.author != 'none') {
    newCamp = account + ' - ' + campaign.name + ' ' + campaign.author + ' ' + config.platform + ' ' + config.location + ' - ' + ver;
    utm = '?utm_source=Yahoo&utm_medium=\${PUBID}&utm_campaign=' + campaign.name + '+' + campaign.author+ '+' + ver + '+' + config.name + '+' + config.platform + '+' + config.location + '+' + account + '+YA';
    utm1 = campaign.name + '+' + ver + '+' + campaign.author + '+' + config.name + '+' + config.platform + '+' + config.location + '+' + account + '+YA';
  } else {
    newCamp = account + ' - ' + campaign.name + ' ' + config.platform + ' ' + config.location + ' ' + ' - ' + ver;
    utm = '?utm_source=Yahoo&utm_medium=\${PUBID}&utm_campaign=' + campaign.name + '+' + ver + '+' + config.name + '+' + config.platform + '+' + config.location + '+' + account + '+YA';
    utm1 = campaign.name + '+' + ver + '+' + config.name + '+' + config.platform + '+' + config.location + '+' + account + '+YA';
  }
  
  if (utm1.length >= 40) {
    SpreadsheetApp.getUi().alert('UTM too long. Try again.');
    return;
  }
  
  var utmResult = {
    utm: utm,
    utm1: utm1,
    newCamp: newCamp
  };
  
  return utmResult;  
}

function setNewCampValue(campaign, utmObj) {
  var columnIndex = campaign.getColumnIndex('Campaign');

  for (var rowIndex = campaign.rangeValues.length - 1; rowIndex > 0; rowIndex--) {
    campaign.rangeValues[rowIndex][columnIndex] = utmObj.newCamp;
  }
}

function setUrl(campaign, config, utmObj, campaign, account) {
  var maxRows = campaign.rangeValues.length;
  
  for (var rowIndex = maxRows - 1; rowIndex >= 1; rowIndex--) {
    var columnIndex = campaign.getColumnIndex('Ad Group');
    var adScheduleValue = campaign.rangeValues[rowIndex][columnIndex];
    
    if (adScheduleValue != '') { campaign.rangeValues[rowIndex][columnIndex] = utmObj.newCamp; }
    
    columnIndex = campaign.getColumnIndex('Landing URL');
    var landingUrlValue = campaign.rangeValues[rowIndex][columnIndex];
    
    if (landingUrlValue != '') {
      if (config.platform === 'Mobile') {
        var url = campaign.url.split('.');
        url[0] = 'https://sphjhskph';
        url = url.join('.');
        
        if (validateUrl(url)) {
          campaign.rangeValues[rowIndex][columnIndex] = url + utmObj.utm;
        } else {
          var ui = SpreadsheetApp.getUi();
          ui.alert('Current URL "' + url +'" is incorrect. Please check the URL before upload');
          return;
        }
      } else {
        var url = campaign.url.split('.');
        url[0] = 'https://tgrsdfvch';
        url = url.join('.');
        
        if (validateUrl(url)) {
          campaign.rangeValues[rowIndex][columnIndex] = url + utmObj.utm;
        } else {
          var ui = SpreadsheetApp.getUi();
          ui.alert('Current URL "' + url + '" is incorrect. Please check the URL before upload');
          return;
        }
      }
    }
    
    columnIndex = campaign.getColumnIndex('Sponsored By');
    var sbValue = campaign.rangeValues[rowIndex][columnIndex];
    
    if (sbValue != '') { campaign.rangeValues[rowIndex][columnIndex] = adConfig.nameComp[account]; }
  }
}

function setOptimizeAssets(campaign, config) {
  var columnIndex = campaign.getColumnIndex('Optimize Assets');
  
  if (columnIndex == -1) {
  
    for (var rowIndex = 0; rowIndex < campaign.rangeValues.length; rowIndex++) {
    
      if (rowIndex == 0) { campaign.rangeValues[0].push('Optimize Assets'); }
      
      var adValueIndex = campaign.rangeValues[rowIndex].indexOf('Ad');
      
      if (adValueIndex != -1) { 
        campaign.rangeValues[rowIndex].push(config.optimizeAssets.toString().toUpperCase()); 
      } else {
        campaign.rangeValues[rowIndex].push('');
      }
    }
  } else {
    for (var rowIndex = 0; rowIndex < campaign.rangeValues.length; rowIndex++) {
      var adValueIndex = campaign.rangeValues[rowIndex].indexOf('Ad');
      
      if (adValueIndex != -1) { campaign.rangeValues[rowIndex][columnIndex] = config.optimizeAssets.toString().toUpperCase(); }
    }
  }
}

function setRunAsSingleImage(campaign, config) {
  var columnIndex = campaign.getColumnIndex('Run as Single Image');
  
  if (columnIndex == -1) {
    for (var rowIndex = 0; rowIndex < campaign.rangeValues.length; rowIndex++) {
      
      if (rowIndex == 0) { campaign.rangeValues[0].push('Run as Single Image'); }
      
      var adValueIndex = campaign.rangeValues[rowIndex].indexOf('Ad');
      
      if (adValueIndex != -1) {
        campaign.rangeValues[rowIndex].push(config.runAsSingleImage.toString().toUpperCase());
      } else {
        campaign.rangeValues[rowIndex].push('');
      }
    }
  } else {
    for (var rowIndex = 0; rowIndex < campaign.rangeValues.length; rowIndex++) {
      var adValueIndex = campaign.rangeValues[rowIndex].indexOf('Ad');
      
      if (adValueIndex != -1) { campaign.rangeValues[rowIndex][columnIndex] = config.runAsSingleImage.toString().toUpperCase(); }
    }
  }
}

function setLocation(campaign, config) {
  var columnIndex = campaign.getColumnIndex('Object Type');
  var maxRows = campaign.rangeValues.length;
  
  for (var rowIndex = 0; rowIndex < maxRows; rowIndex++) {
    var objectType = campaign.rangeValues[rowIndex][columnIndex];
    
    if (objectType == 'Location Target') {
      var locColIndex = campaign.getColumnIndex('Location');
      campaign.rangeValues[rowIndex][locColIndex] = config.location;
      
      var locIdColIndex = campaign.getColumnIndex('Location ID');
      campaign.rangeValues[rowIndex][locIdColIndex] = '';
    }
  }
}

function setCampaignBudget(campaign, config) {
  var maxRows = campaign.rangeValues.length;
  
  for (var rowIndex = 0; rowIndex < maxRows; rowIndex++) {
    var columnIndex = campaign.getColumnIndex('Object Type');
    var objectType = campaign.rangeValues[rowIndex][columnIndex];
    
    if (objectType === 'Campaign') {
      columnIndex = campaign.getColumnIndex('Campaign Budget');
      campaign.rangeValues[rowIndex][columnIndex] = config.campaignBudget;
    }
  }
}

function setPlatform(campaign, utmObj, config) {
  if (config.platform === 'Mobile') {
    insertRowsAfter(campaign, 2, 2);
    var numCols = campaign.rangeValues[0].length;
    
    for (var columnIndex = 0; columnIndex < numCols; columnIndex++) {
      var columnName = campaign.rangeValues[0][columnIndex];
      
      if (columnName === 'Object Type') {
        campaign.rangeValues[2][columnIndex] = 'Device Target';
        campaign.rangeValues[3][columnIndex] = 'Device Target';
      }
      
      if (columnName === 'Campaign') {
        campaign.rangeValues[2][columnIndex] = utmObj.newCamp;
        campaign.rangeValues[3][columnIndex] = utmObj.newCamp;
      }
      
      if (columnName === 'Action') {
        campaign.rangeValues[2][columnIndex] = 'ADD';
        campaign.rangeValues[3][columnIndex] = 'ADD';
      }
      
      if (columnName === 'Device') {
        campaign.rangeValues[2][columnIndex] = 'Smartphone';
        campaign.rangeValues[3][columnIndex] = 'Tablet';
      }
    }
  }
}

function insertRowsAfter(campaign, afterPosition, howMany) {
  for (var i = 0; i < howMany; i++) {
    var row = new Array(campaign.rangeValues[0].length);
    
    for (var j = 0; j < row.length; j++) {
      row[j] = '';
    }
    
    campaign.rangeValues.splice(afterPosition, 0, row);
  }
}

function validateAll(campaign) {
  var isTitleValid = validateTitle(campaign);
  var isDescriptionValid = validateDescription(campaign);
  var isLinkValid = validateLink(campaign);
  
  var result = isTitleValid && isDescriptionValid && isLinkValid;
  
  return result;
}

function validateTitle(campaign) {
  var maxRows = campaign.rangeValues.length - 1;
  
  for (var rowIndex = maxRows; rowIndex > 0; rowIndex--) {
    var columnIndex = campaign.getColumnIndex('Object Type');
    var objectType = campaign.rangeValues[rowIndex][columnIndex];
    
    if (objectType != 'Ad' && objectType != 'Ad Asset') {
      columnIndex = campaign.getColumnIndex('Title');
      
      var value = campaign.rangeValues[rowIndex][columnIndex];
      
      if (value) { return false; }
    } else if (objectType === 'Ad' || objectType === 'Ad Asset') {
      columnIndex = campaign.getColumnIndex('Title');
      
      var value = campaign.rangeValues[rowIndex][columnIndex];
      
      if (!value) { return false; }
    }
  }
  
  return true;
}

function validateDescription(campaign) {
  var maxRows = campaign.rangeValues.length - 1;
  
  for (var rowIndex = maxRows; rowIndex > 0; rowIndex--) {
    var columnIndex = campaign.getColumnIndex('Object Type');
    var objectType = campaign.rangeValues[rowIndex][columnIndex];
    
    if (objectType != 'Ad' && objectType != 'Ad Asset') {
      columnIndex = campaign.getColumnIndex('Description');
      
      var value = campaign.rangeValues[rowIndex][columnIndex];
      
      if (value) { return false; }
    } else if (objectType === 'Ad' || objectType === 'Ad Asset') {
      columnIndex = campaign.getColumnIndex('Description');
      
      var value = campaign.rangeValues[rowIndex][columnIndex];
      
      if (!value) { return false; }
    }
  }
  
  return true;
}

function validateLink(campaign) {
  var maxRows = campaign.rangeValues.length - 1;
  
  for (var rowIndex = maxRows; rowIndex > 0; rowIndex--) {
    var columnIndex = campaign.getColumnIndex('Object Type');
    var objectType = campaign.rangeValues[rowIndex][columnIndex];
    
    if (objectType === 'Ad' || objectType === 'Ad Asset') {
      columnIndex = campaign.getColumnIndex('Landing URL');
      
      var value = campaign.rangeValues[rowIndex][columnIndex];
      
      if (!value) { return false; }
    }
  }
  
  return true;
}

function validateUrl(url) {
  var regEx = /^(http(s)?:\/\/)+([\w\-\w])+(.)+(teddyfeed\.com)+(\/)+([\w\-\w])+(\/)+([\w\-\w])+(\/)+$/;
  var isValid =  regEx.exec(url);

  return isValid;
}

function setCampaignStatus(campaign, config) {
  var columnIndex = campaign.getColumnIndex('Campaign Status');

  for (var rowIndex = campaign.rangeValues.length - 1; rowIndex >= 1; rowIndex--) {
    campaign.rangeValues[rowIndex][columnIndex] = config.campaignStatus;
  }
}

function setCustomRows(campaign, config) {
  var maxRows = campaign.rangeValues.length;
  
  for (var rowIndex = 2; rowIndex < maxRows && rowIndex - 2 < config.rows.length; rowIndex++) {
    var configRow = config.rows[rowIndex - 2];
    
    Object.keys(configRow).forEach(function(columnName) {
      var columnIndex = campaign.getColumnIndex(columnName);
      campaign.rangeValues[rowIndex][columnIndex] = configRow[columnName] || '';
    });
  }
}

function filterConfigsByAccounts(account) {
  var configs = adConfig.configs.filter(function(cfg) {
    return cfg.allowedAccounts.indexOf(account) > -1;
  });
  
  return configs;
}

function setSpreadsheetName(name) {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.setName(name);
}

function getRangeValues() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  return values;
}

function setPixelColumn() {
  var spreadsheet = SpreadsheetApp.getActive();
  var lastRow = getLastRow();
  
  spreadsheet.getRange('K2:K').setValue('');
}

function getUrl() {
    var spreadsheet = SpreadsheetApp.getActive();
    var utmRows = spreadsheet.getActiveSheet().getRange('BD:BD').getNumRows();
    
    for (var k = 2; k <= utmRows; k++) {
        var range = 'BD' + k;
        
        if (spreadsheet.getActiveSheet().getRange(range).getValue() != '') {
            return spreadsheet.getActiveSheet().getRange(range).getValue();
        }
    }
}

function checkUrl(url) {
  if (url.indexOf('?') > -1) {
    url = url.split('?');
    url = url[0];
  }
  
  return url;
}

function getAuthor(title) {
  var author = 'none';
  var authors = ['TR', 'OG', 'AK'];
  
  var arr = title.split(' ');
  
  for (var i = 0; i < authors.length; i++) {
    if (arr.indexOf(authors[i]) > -1) {
      author = arr[arr.indexOf(authors[i])];
    }
  }
  
  return author;
}

function getLastRow() {
  var spreadsheet = SpreadsheetApp.getActive();
  var rangeData = spreadsheet.getDataRange();
  var lastRow = rangeData.getLastRow();
  
  return lastRow;
}

function getLastColumn() {
  var spreadsheet = SpreadsheetApp.getActive();
  var rangeData = spreadsheet.getDataRange();
  var lastColumn = rangeData.getLastColumn();
  
  return lastColumn;
}

function getAccounts() {
  var temp = ['TF1', 'TF2', 'TF3', 'TF4', 'TF5', 'TF6', 'TF7', 'TF8', 'TF9', 'TF10', 'TFM1', 'TFM2', 'TFE1', 'TFC1', 'TF1A', 'TF2A', 'TF3A'];
  
  return temp;
}

function initnewUpload() {
    var modalDialogName = SpreadsheetApp.getActiveSpreadsheet().getName()
    
    var html = HtmlService.createHtmlOutputFromFile('newUpload')
        .setWidth(300)
        .setHeight(600);
        
    SpreadsheetApp.getUi()
        .showModalDialog(html, modalDialogName);
}