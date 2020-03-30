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
            allowedAccounts: ['TF1'],
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
                {'Device':'DESKTOP','Site':'WEATHER','Bid Modifier':350},
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
                {'Supply Group':'GROUP_1_A','Bid Modifier':500},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'Co2',
            allowedAccounts: ['TFE1', 'TF2'],
            campaignStatus: 'Active',
            platform: 'Mobile',
            optimizeAssets: false,
            runAsSingleImage: false,
            campaignBudget: 150,
            location: 'US',
            runModes: {
                C: true,
                V: false
            },
            rows: [
                {'Device':'MOBILE','Site':'NEWS_US','Bid Modifier':-80},
                {'Device':'DESKTOP','Site':'WEATHER','Bid Modifier':350},
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
                {'Supply Group':'GROUP_1_A','Bid Modifier':300},
                {'Supply Group':'GROUP_2_A','Bid Modifier':-30},
                {'Supply Group':'GROUP_2_B','Bid Modifier':-70}
            ]
        },
        {
            name: 'Co3',
            allowedAccounts: ['TFC1'],
            campaignStatus: 'Active',
            platform: 'Mobile',
            optimizeAssets: true,
            runAsSingleImage: false,
            campaignBudget: 80,
            location: 'US',
            runModes: {
                C: true,
                V: true
            },
            rows: [
                {'Device':'Mobile','Site':'SPORTS_US_2','Bid Modifier':120},
                {'Device':'Desktop','Site':'LIFESTYLE_US','Bid Modifier':-80},
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
                {'Supply Group':'GROUP_1_A','Bid Modifier':500},
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

//**************************************************************************************

function newEra(accounts) {
    //var accounts = ['TF1', 'TFM2'];

    var geos = ['US', 'CA'];
    var authors = ['TR', 'OG', 'AK'];
    var name;
    var originalVer;
    var geo = 'US';
    var author = 'none';
    var utm;
    var url;
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    var initialActiveSheet = spreadsheet.getActiveSheet();
    var arr = [];

    //Adding Optimize Assets , Run as Single Image
    var arrCol = [];
    var arrRow = [];
    var rangeData = spreadsheet.getDataRange();
    var lastColumn = rangeData.getLastColumn();
    var lastRow = rangeData.getLastRow();

    for (var i = 1; i < lastColumn + 1; i++) {
        arr.push(SpreadsheetApp.getActiveSheet().getRange(1, i).getValue());
    }

    //Gets campaign name
    var camp = spreadsheet.getActiveSheet().getRange('D2').getValue();
    camp = camp.split(' ');

    //Author
    for (var i = 0; i < authors.length; i++) {
        if (camp.indexOf(authors[i]) > -1) {
            author = camp[camp.indexOf(authors[i])];
        }
    }

    //Version
    originalVer = camp[camp.length - 1];

    //Campaign name
    name = camp[0];

    url = getUrl();
    if (url.indexOf('?') > -1) {
        url = url.split('?');
        url = url[0];
    }

    //Sets pixel column
    spreadsheet.getRange('K2:K').setValue('');

    for (var i = 1; i < lastRow + 1; i++) { arrRow.push(SpreadsheetApp.getActiveSheet().getRange(i, 2).getValue()); }

    for (var i = 1; i < lastColumn + 1; i++) { arrCol.push(SpreadsheetApp.getActiveSheet().getRange(1, i).getValue()); }

    spreadsheet.getActiveSheet().setName(originalVer);

    

    //Upload Camp
    //Accounts cicle
    for (var i = 0; i < accounts.length; i++) {
        var runForConfigs = adConfig.configs.filter(cfg => cfg.allowedAccounts.indexOf(accounts[i]) >= 0);
        
        //Configs cicle
        for (var configIndex = 0; configIndex < runForConfigs.length; configIndex++) {

            var config = runForConfigs[configIndex];
            var uploadVersions = config.runModes;

            for (version in uploadVersions) {
                if(uploadVersions[version]) {
                    let googleSheet = new GoogleSheet();

                    var isVVersion = (version === 'V');
                    var ver = isVVersion ? originalVer.replace('C', 'V') : originalVer;
                    var duplicatedSheet;
                    if (isVVersion) {
                        duplicatedSheet = spreadsheet.duplicateActiveSheet();
                        SpreadsheetApp.setActiveSheet(duplicatedSheet);
                    }
                    

                    // Set entire sheet CampaignStatus
                    spreadsheet.getRange('CY2:CY').setValue(config.campaignStatus);

                    let rows = spreadsheet.getActiveSheet().getRange('D:D').getNumRows();

                    // Set custom rows from config
                    for (var k = 3; k <= lastRow && k - 3 < config.rows.length; k++) {
                        if(configIndex > 0) {
                            googleSheet.cleanPrevious(runForConfigs[configIndex-1]);
                        }
                        var configRow = config.rows[k - 3];
                        Object.keys(configRow).forEach(columnName => {
                            spreadsheet.getActiveSheet().getRange(k, arr.indexOf(columnName) + 1).setValue(configRow[columnName]);
                        });
                    }

                    if (isVVersion) {
                        spreadsheet.getActiveSheet().getRange('B27:B').setValue("Ad");
                        spreadsheet.getActiveSheet().getRange('BC27:BC').setValue("teddyfeed.com");
                        spreadsheet.getActiveSheet().getRange('BM27:BM').setValue(adConfig.nameComp[accounts[i]]);
                        
                        googleSheet.deleteRow(26);
                    }

                    if (author != 'none') {
                        var newCamp = `${accounts[i]} - ${name} ${author} ${config.platform} ${config.location} - ${ver}`;
                        utm = `?utm_source=Yahoo&utm_medium=\${PUBID}&utm_campaign=${name}+${author}+${ver}+${config.name}+${config.platform}+${config.location}+${accounts[i]}+YA`;
                        var utm1 = `${name}+${ver}+${author}+${config.name}+${config.platform}+${config.location}+${accounts[i]}+YA`
                    } else {
                        var newCamp = `${accounts[i]} - ${name} ${config.platform} ${config.location} - ${ver}`;
                        utm = `?utm_source=Yahoo&utm_medium=\${PUBID}&utm_campaign=${name}+${ver}+${config.name}+${config.platform}+${config.location}+${accounts[i]}+YA`;
                        var utm1 = `${name}+${ver}+${config.name}+${config.platform}+${config.location}+${accounts[i]}+YA`;
                    }

                    if (utm1.length >= 40) {
                        ui.alert('UTM too long. Try again.', ui.ButtonSet.OK);
                        return;
                    }

                    spreadsheet.getActiveSheet().getRange('D2:D').setValue(newCamp);



                    for (var k = 3; k < lastRow + 1; k++) {
                        if (spreadsheet.getActiveSheet().getRange(k, arr.indexOf('Ad Schedule') + 1).getValue() != '') {
                            spreadsheet.getActiveSheet().getRange(k, arr.indexOf('Ad Schedule') + 1).setValue('(ALL@-60%[04:ZERO-24:ZERO]);');
                        }
                    }

                    for (var j = 2; j <= rows; j++) {
                        if (spreadsheet.getActiveSheet().getRange('U' + j).getValue() != '') {
                            spreadsheet.getActiveSheet().getRange('U' + j).setValue(newCamp);
                        }

                        if (spreadsheet.getActiveSheet().getRange('BD' + j).getValue() != '') {
                            if (config.platform == 'Mobile') {
                                url = url.split('.');
                                url[0] = 'https://sphjhskph';
                                url = url.join('.');

                                let isUrlValid = validateUrl(url);

                                if(isUrlValid) {
                                    spreadsheet.getActiveSheet().getRange('BD' + j).setValue(url + utm);
                                } else {
                                    ui.alert(`Current URL "${url}" is incorrect. Please check the URL before upload.`);
                                    return;
                                }
                            } else {
                                url = url.split('.');
                                url[0] = 'https://tgrsdfvch';
                                url = url.join('.');

                                let isUrlValid = validateUrl(url);

                                if(isUrlValid) {
                                    spreadsheet.getActiveSheet().getRange('BD' + j).setValue(url + utm);
                                } else {
                                    ui.alert(`Current URL "${url}" is incorrect. Please check the URL before upload.`);
                                    return;
                                }
                            }
                        }

                        if (spreadsheet.getActiveSheet().getRange('BM' + j).getValue() != '') {
                            spreadsheet.getActiveSheet().getRange('BM' + j).setValue(adConfig.nameComp[accounts[i]]);
                        }
                    }

                    if (arrCol.indexOf('Optimize Assets') == -1) {
                        SpreadsheetApp.getActiveSheet().insertColumnsAfter(SpreadsheetApp.getActiveSheet().getLastColumn(), 1);
                        SpreadsheetApp.getActiveSheet().getRange(1, lastColumn + 1).setValue('Optimize Assets');
                        SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn + 1).setValue(config.optimizeAssets.toString().toUpperCase());
                    } else {
                        var optAssetsIndex = arrCol.indexOf('Optimize Assets');
                        SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, optAssetsIndex + 1).setValue(config.optimizeAssets.toString().toUpperCase());
                    }
                    if (arrCol.indexOf('Run as Single Image') == -1) {
                        SpreadsheetApp.getActiveSheet().insertColumnsAfter(SpreadsheetApp.getActiveSheet().getLastColumn(), 1);
                        SpreadsheetApp.getActiveSheet().getRange(1, lastColumn + 2).setValue('Run as Single Image');
                        SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn + 2).setValue(config.runAsSingleImage.toString().toUpperCase());
                    } else {
                        SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn).setValue(config.runAsSingleImage.toString().toUpperCase());
                    }

                    

                    googleSheet.setLocation(config);
                    googleSheet.setCampaignBudget(config);
                    googleSheet.setPlatform(config, newCamp);

                    let isTitleValid = validateTitle();
                    let isDescriptionValid = validateDescription();
                    let isLinkValid = validateLink();

                    if(isTitleValid && isDescriptionValid && isLinkValid) {
                        newinitUpload(accounts[i]);
                    } else {
                        let reason = 'Validation Error!';

                        if(!isTitleValid) {
                            reason += ' Check Title Column.'
                        }

                        if(!isDescriptionValid) {
                            reason += ' Check Description Column.';
                        }

                        if(!isLinkValid) {
                            reason += ' Check Loading URL.'
                        }

                        ui.alert(reason);
                        return;
                    }
                    
                    googleSheet.removePlatform();

                    if (isVVersion) {
                        spreadsheet.deleteSheet(duplicatedSheet);
                    }
                }
            }
        }
    }

    
    

    var outputVersion = originalVer + ' ' + originalVer.replace('C', 'V');

    initialActiveSheet.getRange('D2').setValue(camp.join(' '));

    MailApp.sendEmail({ to: 'arik@singular-one.com', subject: name + ' ' + outputVersion + ' was uploaded to Yahoo by '
    + author, body: name + ' ' + outputVersion + ': ' + accounts + '.', noReply: true });

    ui.alert('Upload Completed', name + ' ' + outputVersion + ': ' + accounts + '.', ui.ButtonSet.OK);
}

function validateUrl(url) {
    let isValid = (url === 'https://tgrsdfvch.teddyfeed.com/trending/threes-company-facts/') ||
    (url === 'https://sphjhskph.teddyfeed.com/trending/threes-company-facts/') ? true : false;

    if(isValid) {
        return true;
    }

    return false;
}

function validateDescription() {
    let sheet = new GoogleSheet();
    let objectTypes = sheet.getColumnValuesArray('Object Type');
    objectTypes.forEach((value, index) => objectTypes[index] = `${value} — ${index}`);

    for(let objectType of objectTypes) {
        let rowNumber = objectTypes.indexOf(objectType) + 2;

        if(objectType.indexOf('Ad —') === -1 && objectType.indexOf('Ad Asset') === -1) {
            let isDescriptionEmpty = sheet.activeSheet.getRange(rowNumber, sheet.columnNames.indexOf('Description') + 1).getValue() === '' ? true : false;

            if(!isDescriptionEmpty) {
                return false;
            }
        } else if(objectType.indexOf('Ad —') > -1 || objectType.indexOf('Ad Asset') > -1) {
            let isDescriptionNotEmpty = sheet.activeSheet.getRange(rowNumber, sheet.columnNames.indexOf('Description') + 1).getValue() != '' ? true : false;

            if(!isDescriptionNotEmpty) {
                return false;
            }
        }
    }

    return true;
}

function validateTitle() {
    let sheet = new GoogleSheet();
    let objectTypes = sheet.getColumnValuesArray('Object Type');
    objectTypes.forEach((value, index) => objectTypes[index] = `${value} — ${index}`);

    for(let objectType of objectTypes) {
        let rowNumber = objectTypes.indexOf(objectType) + 2;

        if(objectType.indexOf('Ad —') === -1 && objectType.indexOf('Ad Asset') === -1) {
            let isTitleEmpty = sheet.activeSheet.getRange(rowNumber, sheet.columnNames.indexOf('Title') + 1).getValue() === '' ? true : false;

            if(!isTitleEmpty) {
                return false;
            }
        } else if(objectType.indexOf('Ad —') > -1 || objectType.indexOf('Ad Asset') > -1) {
            let isTitleNotEmpty = sheet.activeSheet.getRange(rowNumber, sheet.columnNames.indexOf('Title') + 1).getValue() != '' ? true : false;

            if(!isTitleNotEmpty) {
                return false;
            }
        }
    }

    return true;
}

function validateLink() {
    let sheet = new GoogleSheet();
    let objectTypes = sheet.getColumnValuesArray('Object Type');
    objectTypes.forEach((value, index) => objectTypes[index] = `${value} — ${index}`);

    for(let objectType of objectTypes) {
        let rowNumber = objectTypes.indexOf(objectType) + 2;

        if(objectType.indexOf('Ad —') > -1 || objectType.indexOf('Ad Asset') > -1) {
            let isLinkNotEmpty = sheet.activeSheet.getRange(rowNumber, sheet.columnNames.indexOf('Landing URL') + 1).getValue() != '' ? true : false;

            if(!isLinkNotEmpty) {
                return false;
            }
        }
    }

    return true;
}

class GoogleSheet {

    constructor() {
        this._spreadSheet = SpreadsheetApp.getActive();
        this._rangeData = this.activeSheet.getDataRange();
        this._numberOfColumns = this._rangeData.getLastColumn();
        this._numberOfRows = this._rangeData.getLastRow();
        this._columnNamesArray = this._getColumnNamesArray();
    }

    get activeSheet() {
        return this._spreadSheet.getActiveSheet();
    }

    get columnNames() {
        return this._columnNamesArray;
    }

    get numberOfRows() {
        return this._numberOfRows;
    }

    deleteRow(index) {
        this.activeSheet.deleteRow(index);
    }

    setPlatform(config, campaignName) {
        let isMobilePlatform = config.platform === "Mobile";
    
        if(isMobilePlatform) {
            this._spreadSheet.insertRowsAfter(2,2);
    
            for(let columnIndex = 1; columnIndex <= this._numberOfColumns; columnIndex++) {
                let columnName = this.activeSheet.getRange(1, columnIndex).getValue();
    
                if(columnName === "Object Type") {
                    this.activeSheet.getRange(3, columnIndex, 2).setValue("Device Target");
                }
    
                if(columnName === "Campaign") {
                    this.activeSheet.getRange(3, columnIndex, 2).setValue(campaignName);
                }
    
                if(columnName === "Action") {
                    this.activeSheet.getRange(3, columnIndex, 2).setValue("ADD");
                }
    
                if(columnName === "Device") {
                    this.activeSheet.getRange(3, columnIndex).setValue("Smartphone");
                    this.activeSheet.getRange(4, columnIndex).setValue("Tablet");
                }
            }
        }
    }

    getColumnName(columnIndex) {
        let columnName = this.activeSheet.getRange(1, columnIndex).getValue();
        return columnName;
    }

    getColumnValuesArray(columnName) {
        let columnValuesArray = [];

        for(let columnIndex = 1; columnIndex <= this._numberOfColumns; columnIndex++) {
            let currentColumnName = this.getColumnName(columnIndex);

            if(columnName === currentColumnName) {
                let columnValuesTwoDimensionalArray = this.activeSheet.getRange(2, columnIndex, this._numberOfRows - 1).getValues();
                columnValuesTwoDimensionalArray.forEach(value => columnValuesArray.push(value[0]));

                return columnValuesArray;
            }
        }

        return columnValuesArray;
    }

    _getColumnNamesArray() {
        let columnNamesArray = [];

        for(let columnIndex = 1; columnIndex <= this._numberOfColumns; columnIndex++) {
            let columnName = this.activeSheet.getRange(1, columnIndex).getValue();
            columnNamesArray.push(columnName);
        }

        return columnNamesArray;
    }

    _checkObjectType(searchString) {
        let containsSearchString;
    
        let objectTypeValuesArray = this.getColumnValuesArray("Object Type");
        containsSearchString = objectTypeValuesArray.indexOf(searchString) > -1 ? true : false;
    
        return containsSearchString;
    }

    removePlatform() {
        let objectTypeValue = "Device Target";
        let needsRemoval = this._checkObjectType(objectTypeValue); 
    
        if(needsRemoval) {
            this.activeSheet.deleteRows(3, 2);
        }
    }

    setLocation(config) {
        let objectTypeValue = "Location Target";
        let rowNumber = this._getObjectTypeRowNumber(objectTypeValue);
        let objectValueExists = rowNumber > -1;
    
        if(objectValueExists) {
            this.activeSheet.getRange("AD" + rowNumber.toString()).setValue(config.location);
            this.activeSheet.getRange("AC" + rowNumber.toString()).setValue("");
        }
        
    }

    _getObjectTypeRowNumber(objectTypeValue) {
        let objectTypes = this.getColumnValuesArray("Object Type");
        let rowNumber = 0;
    
        let index = objectTypes.indexOf(objectTypeValue);
        rowNumber = index > -1 ? index + 2 : index;
    
        return rowNumber;
    }

    setCampaignBudget(config) {
        let objectTypeValue = "Campaign";
        let rowNumber = this._getObjectTypeRowNumber(objectTypeValue);
        let objectValueExists = rowNumber > -1;
    
        if(objectValueExists) {
            this.activeSheet.getRange("F" + rowNumber.toString()).setValue(config.campaignBudget);
        }
    }

    cleanPrevious(config) {

        for(let i = 0; i < config.rows.length; i++) {
            let rowNumber = i + 3;
    
            Object.keys(config.rows[i]).forEach(columnName => {
                this.activeSheet.getRange(rowNumber, this._columnNamesArray.indexOf(columnName) + 1).setValue("");
            });
        }
    }
}



//**************************************************************************************

function verC(accounts, tabColor) {

    //Varibales
    //var accounts = ['TF', 'TF1', 'TF2', 'TF3','TF4','TF5','TFE1','TFC1'];
    var nameComp = {
        TFM1: 'Teddy-Feed.com', TFM2: 'TeddyFeed Co', TF: 'TeddyFeed', TF1: 'TeddyFeed com', TF2: 'TeddyFeed.com', TF3: 'Teddy Feed', TF4: 'Teddy Feed.com', TF5: 'Teddy-Feed', TFE1: 'teddyfeed',
        TFC1: 'teddy-feed', TFO: 'Teddy Feed', TFA: 'TeddyFeed', TF6: 'TeddyFeed Times', TF7: 'TeddyFeed Weekly', TF8: 'teddy-feed co', TF9: 'teddyfeed.co', TF10: 'teddyfeed.inc'
    };
    var geos = ['US', 'CA'];
    var authors = ['T', 'O', 'A', 'N'];
    var name = [];
    var platforms = ['Desktop', 'Mobile'];
    var ver;
    var geo;
    var acc;
    var plat;
    var author = 'none';
    var utm;
    var url;
    var newVer;
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    var rows = spreadsheet.getActiveSheet().getRange('D:D').getNumRows();

    //Adding Optimize Assets , Run as Single Image
    var arrCol = [];
    var arrRow = [];
    var rangeData = SpreadsheetApp.getActiveSheet().getDataRange();
    var lastColumn = rangeData.getLastColumn();
    var lastRow = rangeData.getLastRow();

    //Gets campaign name
    var camp = spreadsheet.getActiveSheet().getRange('D2').getValue();
    camp = camp.split(' ');

    //Account
    for (var i = 0; i < accounts.length; i++) {
        if (camp.indexOf(accounts[i]) > -1) {
            acc = camp[camp.indexOf(accounts[i])];
        }
    }

    //Geo
    for (var i = 0; i < geos.length; i++) {
        if (camp.indexOf(geos[i]) > -1) {
            geo = camp[camp.indexOf(geos[i])];
        }
    }

    //Platform
    for (var i = 0; i < platforms.length; i++) {
        if (camp.indexOf(platforms[i]) > -1) {
            plat = camp[camp.indexOf(platforms[i])];
        }
    }

    //Author
    for (var i = 0; i < authors.length; i++) {
        if (camp.indexOf(authors[i]) > -1) {
            author = camp[camp.indexOf(authors[i])];
        }
    }

    //Version
    var cnt = 0;
    for (var i = 0; i < camp.length; i++) {
        if (camp[i] == '-') { cnt += 1; }
        if (cnt == 2) { ver = camp[i + 1]; break; }
    }

    //Campaign name
    for (var i = camp.indexOf('-') + 1; i < camp.indexOf(plat); i++) {
        name.push(camp[i]);
    }

    //http://tgrsdfvch.teddyfeed.com/trending/favorite-couples-80s-today/?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=80s+Couples+C101+-+Desktop+US+YA

    url = getUrl();
    if (url.indexOf('?') > -1) {
        url = url.split('?');
        url = url[0];
    }

    //Sets pixel column
    spreadsheet.getRange('K2:K').setValue('');

    for (var i = 1; i < lastRow + 1; i++) { arrRow.push(SpreadsheetApp.getActiveSheet().getRange(i, 2).getValue()); }

    for (var i = 1; i < lastColumn + 1; i++) { arrCol.push(SpreadsheetApp.getActiveSheet().getRange(1, i).getValue()); }


    //Duplicates sheets
    for (var i = 0; i < accounts.length; i++) {

        if (accounts[i] == 'TFO' || accounts[i] == 'TFA') {
            name[name.indexOf(plat)] = 'Mobile';
            plat = 'Mobile';

        }


        if (author != 'none') {
            if ((spreadsheet.getSheetByName(accounts[i] + '-' + ver + ' ' + author)) != null) { continue; }
        } else {
            if ((spreadsheet.getSheetByName(accounts[i] + '-' + ver)) != null) { continue; }
        }

        spreadsheet.duplicateActiveSheet();

        spreadsheet.getRange('F2').setValue('50');

        if (accounts[i] == 'TFM1' || accounts[i] == 'TFM2') {
            spreadsheet.getRange('AF3').setValue('DESKTOP');
            spreadsheet.getRange('AH3').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ3').setValue('400');
            spreadsheet.getRange('AF4').setValue('MOBILE');
            spreadsheet.getRange('AH4').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ4').setValue('400');
        } else {
            spreadsheet.getRange('AF3').setValue('DESKTOP');
            spreadsheet.getRange('AH3').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ3').setValue('-80');
            spreadsheet.getRange('AF4').setValue('MOBILE');
            spreadsheet.getRange('AH4').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ4').setValue('-80');
        }

        spreadsheet.getActiveSheet().setTabColor(tabColor);

        if (author != 'none') {
            var newCamp = accounts[i] + ' - ' + name.join(' ') + ' ' + plat + ' ' + geo + ' - ' + ver + ' ' + author;
            utm = '?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=' + name.join('+') + '+' + ver + '+' + author + '+-+' + plat + '+' + geo + '+' + accounts[i] + '+YA';
        } else {
            spreadsheet.getActiveSheet().setName(accounts[i] + '-' + ver);
            var newCamp = accounts[i] + ' - ' + name.join(' ') + ' ' + plat + ' ' + geo + ' - ' + ver;
            utm = '?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=' + name.join('+') + '+' + ver + '+-+' + plat + '+' + geo + '+' + accounts[i] + '+YA';
        }


        if (author != 'none') {
            spreadsheet.getActiveSheet().setName(accounts[i] + '-' + ver + author);
        } else { spreadsheet.getActiveSheet().setName(accounts[i] + '-' + ver); }

        spreadsheet.getActiveSheet().getRange('D2:D').setValue(newCamp);

        for (var j = 2; j <= rows; j++) {
            if (spreadsheet.getActiveSheet().getRange('U' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('U' + j).setValue(newCamp);
            }

            if (spreadsheet.getActiveSheet().getRange('BD' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('BD' + j).setValue(url + utm);
            }

            if (spreadsheet.getActiveSheet().getRange('BM' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('BM' + j).setValue(nameComp[accounts[i]]);
            }
        }

        if (arrCol.indexOf('Optimize Assets') == -1) {
            SpreadsheetApp.getActiveSheet().insertColumnsAfter(SpreadsheetApp.getActiveSheet().getLastColumn(), 1);
            SpreadsheetApp.getActiveSheet().getRange(1, lastColumn + 1).setValue('Optimize Assets');
            SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn + 1).setValue('TRUE');
        }
        if (arrCol.indexOf('Run as Single Image') == -1) {
            SpreadsheetApp.getActiveSheet().insertColumnsAfter(SpreadsheetApp.getActiveSheet().getLastColumn(), 1);
            SpreadsheetApp.getActiveSheet().getRange(1, lastColumn + 2).setValue('Run as Single Image');
            SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn + 2).setValue('TRUE');
        } else {
            SpreadsheetApp.getActiveSheet().getRange(arrRow.indexOf('Ad') + 1, lastColumn).setValue('TRUE');
        }
    }

}

//**************************************************************************************

function verV(accounts, tabColor) {

    //Varibales
    //var accounts = ['TF', 'TF1', 'TF2', 'TF3','TF4','TF5','TFE1','TFC1'];
    var nameComp = {
        TFM1: 'Teddy-Feed.com', TFM2: 'TeddyFeed Co', TF: 'TeddyFeed', TF1: 'TeddyFeed com', TF2: 'TeddyFeed.com', TF3: 'Teddy Feed', TF4: 'Teddy Feed.com', TF5: 'Teddy-Feed', TFE1: 'teddyfeed',
        TFC1: 'teddy-feed', TFO: 'Teddy Feed', TFA: 'TeddyFeed', TF6: 'TeddyFeed Times', TF7: 'TeddyFeed Weekly', TF8: 'teddy-feed co', TF9: 'teddyfeed.co', TF10: 'teddyfeed.inc'
    };
    var geos = ['US', 'CA'];
    var authors = ['T', 'O', 'A', 'N'];
    var name = [];
    var platforms = ['Desktop', 'Mobile'];
    var ver;
    var geo;
    var acc;
    var plat;
    var author = 'none';
    var utm;
    var url;
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    var rows = spreadsheet.getActiveSheet().getRange('D:D').getNumRows();

    //spreadsheet.getActiveSheet().getRange('B27:B').setValue("Ad");
    //spreadsheet.getActiveSheet().getRange('BC27:BC').setValue("teddyfeed.com");
    //spreadsheet.getActiveSheet().getRange('BM27:BM').setValue(nameComp[i]);
    //spreadsheet.deleteRow(26);
    //spreadsheet.getActiveSheet().getRange('CB2:CB').setValue('');

    //Gets campaign name
    var camp = spreadsheet.getActiveSheet().getRange('D2').getValue();
    camp = camp.split(' ');

    //Account
    for (var i = 0; i < accounts.length; i++) {
        if (camp.indexOf(accounts[i]) > -1) {
            acc = camp[camp.indexOf(accounts[i])];
        }
    }

    //Geo
    for (var i = 0; i < geos.length; i++) {
        if (camp.indexOf(geos[i]) > -1) {
            geo = camp[camp.indexOf(geos[i])];
        }
    }

    //Platform
    for (var i = 0; i < platforms.length; i++) {
        if (camp.indexOf(platforms[i]) > -1) {
            plat = camp[camp.indexOf(platforms[i])];
        }
    }

    //Author
    for (var i = 0; i < authors.length; i++) {
        if (camp.indexOf(authors[i]) > -1) {
            author = camp[camp.indexOf(authors[i])];
        }
    }

    //Version
    var cnt = 0;
    for (var i = 0; i < camp.length; i++) {
        if (camp[i] == '-') { cnt += 1; }
        if (cnt == 2) { ver = camp[i + 1]; break; }
    }

    //Campaign name
    for (var i = camp.indexOf('-') + 1; i < camp.indexOf(plat); i++) {
        name.push(camp[i]);
    }

    //http://tgrsdfvch.teddyfeed.com/trending/favorite-couples-80s-today/?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=80s+Couples+C101+-+Desktop+US+YA

    url = getUrl();
    if (url.indexOf('?') > -1) {
        url = url.split('?');
        url = url[0];
    }

    ver = ver.replace("C", "V");

    //Sets pixel column
    spreadsheet.getRange('K2:K').setValue('');

    //Duplicates sheets
    for (var i = 0; i < accounts.length; i++) {

        if (accounts[i] == 'TFO' || accounts[i] == 'TFA') {
            name[name.indexOf(plat)] = 'Mobile';
            plat = 'Mobile';
        }

        if (author != 'none') {
            var newCamp = accounts[i] + ' - ' + name.join(' ') + ' ' + plat + ' ' + geo + ' - ' + ver + ' ' + author;
            utm = '?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=' + name.join('+') + '+' + ver + '+' + author + '+-+' + plat + '+' + geo + '+' + accounts[i] + '+YA';
        } else {
            var newCamp = accounts[i] + ' - ' + name.join(' ') + ' ' + plat + ' ' + geo + ' - ' + ver;
            utm = '?utm_source=Yahoo&utm_medium=${PUBID}&utm_campaign=' + name.join('+') + '+' + ver + '+-+' + plat + '+' + geo + '+' + accounts[i] + '+YA';
        }

        if (author != 'none') {
            if ((spreadsheet.getSheetByName(accounts[i] + '-' + ver + ' ' + author)) != null) { continue; }
        } else {
            if ((spreadsheet.getSheetByName(accounts[i] + '-' + ver)) != null) { continue; }
        }

        spreadsheet.duplicateActiveSheet();

        if (accounts[i] == 'TFM1' || accounts[i] == 'TFM2') {
            spreadsheet.getRange('AF3').setValue('DESKTOP');
            spreadsheet.getRange('AH3').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ3').setValue('400');
            spreadsheet.getRange('AF4').setValue('MOBILE');
            spreadsheet.getRange('AH4').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ4').setValue('400');
        } else {
            spreadsheet.getRange('AF3').setValue('DESKTOP');
            spreadsheet.getRange('AH3').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ3').setValue('-80');
            spreadsheet.getRange('AF4').setValue('MOBILE');
            spreadsheet.getRange('AH4').setValue('MSFT_EN_US_HOMEPAGE');
            spreadsheet.getRange('AQ4').setValue('-80');
        }

        spreadsheet.getActiveSheet().setTabColor(tabColor);

        if (author != 'none') {
            spreadsheet.getActiveSheet().setName(accounts[i] + '-' + ver + author);
        } else { spreadsheet.getActiveSheet().setName(accounts[i] + '-' + ver); }

        spreadsheet.getActiveSheet().getRange('B27:B').setValue("Ad");
        spreadsheet.getActiveSheet().getRange('BC27:BC').setValue("teddyfeed.com");
        spreadsheet.getActiveSheet().getRange('BM27:BM').setValue(nameComp[i]);

        if (i == 0) {
            spreadsheet.deleteRow(26);
        }

        spreadsheet.getActiveSheet().getRange('CB2:CB').setValue('');
        spreadsheet.getActiveSheet().getRange('D2:D').setValue(newCamp);

        for (var j = 2; j <= rows; j++) {
            if (spreadsheet.getActiveSheet().getRange('U' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('U' + j).setValue(newCamp);
            }

            if (spreadsheet.getActiveSheet().getRange('BD' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('BD' + j).setValue(url + utm);
            }

            if (spreadsheet.getActiveSheet().getRange('BM' + j).getValue() != '') {
                spreadsheet.getActiveSheet().getRange('BM' + j).setValue(nameComp[accounts[i]]);
            }
        }
    }
}

//**************************************************************************************

function setDesc() {
    var spreadsheet = SpreadsheetApp.getActive();
    var descRows = spreadsheet.getActiveSheet().getRange('BB:BB').getNumRows();
    var desc;
    var cnt = 0;
    var ui = SpreadsheetApp.getUi();
    var response = ui.prompt('Description', 'Enter (Up to 150 characters)', ui.ButtonSet.OK_CANCEL);

    while (response.getResponseText().length >= 150) {
        ui.alert("Over 150 characters. Enter again.");
        response = ui.prompt('Description', 'Enter (Up to 150 characters)', ui.ButtonSet.OK_CANCEL);
    }

    if (response.getSelectedButton() == ui.Button.OK) {
        desc = response.getResponseText();
        Logger.log('Description: %s', desc);
    } else if (response.getSelectedButton() == ui.Button.CANCEL) {
        Logger.log('The user didn\'t want to provide a description.');
    } else {
        Logger.log('The user clicked the close button in the dialog\'s title bar.');
    }

    for (var i = 2; i <= descRows; i++) {
        var range = 'BB' + i;
        if (spreadsheet.getActiveSheet().getRange(range).getValue() != '') {
            spreadsheet.getActiveSheet().getRange(range).setValue(desc);
        }
    }

}

//**************************************************************************************

function setUrl() {
    var spreadsheet = SpreadsheetApp.getActive();
    var ui = SpreadsheetApp.getUi();
    var url;
    var response = ui.prompt('URL', 'Enter URL', ui.ButtonSet.OK_CANCEL);
    var utmRows = spreadsheet.getActiveSheet().getRange('BD:BD').getNumRows();

    if (response.getSelectedButton() == ui.Button.OK) {
        url = response.getResponseText();
    } else if (response.getSelectedButton() == ui.Button.CANCEL) {
        return;
    } else {
        return;
    }

    for (var k = 2; k <= utmRows; k++) {
        var range = 'BD' + k;
        if (spreadsheet.getActiveSheet().getRange(range).getValue() != '') {
            spreadsheet.getActiveSheet().getRange(range).setValue(url);
        }
    }
}

//**************************************************************************************

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

//**************************************************************************************

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//**************************************************************************************

function getCSVString() {

    var activeRange = SpreadsheetApp.getActiveSpreadsheet().getDataRange();
    var data = activeRange.getValues();

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

//**************************************************************************************

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

//**************************************************************************************

function initUpload() {
    SpreadsheetApp.getActiveSheet().getRange('CU2:CU').setNumberFormat('@');
    var name = SpreadsheetApp.getActive().getActiveSheet().getName();

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

    var id = name.substr(0, name.indexOf("-"));

    var csv = getCSVString();
    uploadCSV(accountMap[id], csv);
}

//**************************************************************************************

function newinitUpload(acc) {
    SpreadsheetApp.getActiveSheet().getRange('CU2:CU').setNumberFormat('@');

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

    var csv = getCSVString();
    uploadCSV(accountMap[acc], csv);
}

//**************************************************************************************

function MultiUp() {
    var html = HtmlService.createHtmlOutputFromFile('upload')
        .setWidth(300)
        .setHeight(600);
    SpreadsheetApp.getUi()
        .showModalDialog(html, SpreadsheetApp.getActiveSpreadsheet().getName());
}

//**************************************************************************************

function initnewUpload() {
    let modalDialogName = SpreadsheetApp.getActiveSpreadsheet().getName()
    var html = HtmlService.createHtmlOutputFromFile('newUpload')
        .setWidth(300)
        .setHeight(600);
    SpreadsheetApp.getUi()
        .showModalDialog(html, modalDialogName);
}

//**************************************************************************************

function dupSingle() {
    SpreadsheetApp.getUi().alert('HEADER', 'What the hell is going on here?', SpreadsheetApp.getUi().ButtonSet.OK);
    var html = HtmlService.createHtmlOutputFromFile('duplicate')
        .setWidth(300)
        .setHeight(600);
    SpreadsheetApp.getUi()
        .showModalDialog(html, SpreadsheetApp.getActiveSpreadsheet().getName() + ' - Single');
}

//**************************************************************************************

function dupBulk() {
    var html = HtmlService.createHtmlOutputFromFile('bulk')
        .setWidth(300)
        .setHeight(600);
    SpreadsheetApp.getUi()
        .showModalDialog(html, SpreadsheetApp.getActiveSpreadsheet().getName() + ' - Bulk');
}

//**************************************************************************************

function deleteBulk() {
    var html = HtmlService.createHtmlOutputFromFile('deletebulk')
        .setWidth(300)
        .setHeight(600);
    SpreadsheetApp.getUi()
        .showModalDialog(html, 'Delete - Bulk');
}

//**************************************************************************************

function getsheets() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    var temp = [];
    for (var i = 0; i < sheets.length; i++) {
        temp.push({ 'Name': sheets[i].getName(), 'Color': SpreadsheetApp.setActiveSheet(SpreadsheetApp.getActive().getSheetByName(sheets[i].getName())).getTabColor() });
    }
    return temp;
}

//**************************************************************************************

function getaccounts() {
    var temp = ['TF1', 'TF2', 'TF3', 'TF4', 'TF5', 'TF6', 'TF7', 'TF8', 'TF9', 'TF10', 'TFM1', 'TFM2', 'TFE1', 'TFC1', 'TF1A', 'TF2A', 'TF3A'];

    return temp;
}

//**************************************************************************************

function initUploadMulti(arr) {
    var ui = SpreadsheetApp.getUi();
    var msg = '';
    for (var i = 0; i < arr.length; i++) {
        SpreadsheetApp.setActiveSheet(SpreadsheetApp.getActive().getSheetByName(arr[i]));
        initUpload();
    }

    for (var i = 0; i < arr.length; i++) {
        msg += arr[i];
        msg += '\n';
    }

    var emails = { 'arik@singular-one.com': 'Arik', 'tasha@singular-one.com': 'Tasha', 'moti@singular-one.com': 'Motti' };

    var email = Session.getEffectiveUser().getEmail();

    MailApp.sendEmail({ to: 'arik@singular-one.com', subject: SpreadsheetApp.getActive().getName() + ' was uploaded to Yahoo by ' + emails[email], body: msg, noReply: true });
    ui.alert('CSV', 'Finished', ui.ButtonSet.OK);
}

//**************************************************************************************

function initDupSingle(ver, alert) {
    var sheet = SpreadsheetApp.getActive();
    var currsheet = sheet.getActiveSheet().getName();
    var accounts = {
        desktopc: ['TF', 'TF1', 'TF2', 'TF3', 'TF4', 'TF5', 'TF6', 'TF7', 'TF8', 'TF9', 'TF10'],
        desktopv: ['TF', 'TF1', 'TF2', 'TF3', 'TF4', 'TF5', 'TF6', 'TF7', 'TF8', 'TF9', 'TF10'],
        msnv: ['TFM1', 'TFM2'],
        msnc: ['TFM1', 'TFM2'],
        chromec: ['TFC1'],
        edgec: ['TFE1'],
        chromev: ['TFC1'],
        edgev: ['TFE1'],
        mobilec: ['TFO', 'TFA'],
        mobilev: ['TFO', 'TFA']
    };

    var dupVer = {
        desktopc: 'verc',
        desktopv: 'verv',
        msnv: 'verv',
        msnc: 'verc',
        chromec: 'verc',
        edgec: 'verc',
        chromev: 'verv',
        edgev: 'verv',
        mobilec: 'verc',
        mobilev: 'verv'
    };

    var tabColor;
    if (currsheet.indexOf('TF') == -1) {
        tabColor = getRandomColor();
    } else {
        tabColor = spreadsheet.getActiveSheet().getTabColor();
    }

    for (var i = 0; i < ver.length; i++) {
        if (dupVer[ver[i]] == 'verc') { verC(accounts[ver[i]], tabColor) }
        if (dupVer[ver[i]] == 'verv') { verV(accounts[ver[i]], tabColor) }
        sheet.setActiveSheet(sheet.getSheetByName(currsheet));
    }

    if (currsheet.indexOf('TF') == -1) {
        SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
    }

    if (alert == 'single') {
        SpreadsheetApp.getUi().alert('Duplication', 'Finished.', SpreadsheetApp.getUi().ButtonSet.OK);
    }

}

//**************************************************************************************

function initDupBulk(cmp, ver) {
    var sheet = SpreadsheetApp.getActive();
    for (var i = 0; i < cmp.length; i++) {
        sheet.setActiveSheet(sheet.getSheetByName(cmp[i]));
        initDupSingle(ver, 'bulk');
    }
    SpreadsheetApp.getUi().alert('Duplication', 'Finished.', SpreadsheetApp.getUi().ButtonSet.OK);
}

//**************************************************************************************

function initDelBulk(cmp) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    for (var i = 0; i < cmp.length; i++) {
        sheet.deleteSheet(sheet.getSheetByName(cmp[i]));
    }

    SpreadsheetApp.getUi().alert('Bulk Delete', 'Finished.', SpreadsheetApp.getUi().ButtonSet.OK);
}

//**************************************************************************************

function deleteSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetsCount = ss.getNumSheets();
    var sheets = ss.getSheets();
    var deleteSheetsContaining = Browser.inputBox("Delete sheets with names containing:");
    if (sheetMatch(deleteSheetsContaining)) {
        for (var i = 0; i < sheetsCount; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.getName();
            Logger.log(sheetName);
            if (sheetName.indexOf(deleteSheetsContaining.toString()) !== -1) {
                Logger.log("DELETE!");
                ss.deleteSheet(sheet);
            }
        }
    } else {
        noMatchAlert();
    }
}

function hideSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetsCount = ss.getNumSheets();
    var sheets = ss.getSheets();
    var hideSheetsContaining = Browser.inputBox("Hide sheets with names containing:");
    if (sheetMatch(hideSheetsContaining)) {
        for (var i = 0; i < sheetsCount; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.getName();
            Logger.log(sheetName);
            if (sheetName.indexOf(hideSheetsContaining.toString()) !== -1) {
                Logger.log("HIDE!");
                sheet.hideSheet();
            }
        }
    } else {
        noMatchAlert();
    }
}

function showSheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetsCount = ss.getNumSheets();
    var sheets = ss.getSheets();
    var showSheetsContaining = Browser.inputBox("Show sheets with names containing:");
    if (sheetMatch(showSheetsContaining)) {
        for (var i = 0; i < sheetsCount; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.getName();
            Logger.log(sheetName);
            if (sheetName.indexOf(showSheetsContaining.toString()) !== -1) {
                Logger.log("SHOW!");
                sheet.showSheet();
            }
        }
    } else {
        noMatchAlert();
    }
}

function copySheets() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetsCount = ss.getNumSheets();
    var sheets = ss.getSheets();
    var copySheetsContaining = Browser.inputBox("Copy sheets with names containing:");
    var destinationId = Browser.inputBox("Enter the destination spreadsheet ID:");
    if (sheetMatch(copySheetsContaining)) {
        for (var i = 0; i < sheetsCount; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.getName();
            Logger.log(sheetName);
            if (sheetName.indexOf(copySheetsContaining.toString()) !== -1) {
                Logger.log("COPY!");
                var destination = SpreadsheetApp.openById(destinationId);
                sheet.copyTo(destination);
            }
        }
        successAlert('copied')
    } else {
        noMatchAlert();
    }
}

// determine if any sheets match the user input
function sheetMatch(sheetMatch) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetsCount = ss.getNumSheets();
    var sheets = ss.getSheets();
    for (var i = 0; i < sheetsCount; i++) {
        var sheetName = sheets[i].getName();
        if (sheetName.indexOf(sheetMatch.toString()) !== -1) {
            return true
        }
    }
    return false
}

// alert if no sheets matched the user input
function noMatchAlert() {
    var ui = SpreadsheetApp.getUi();
    var result = ui.alert(
        'No Sheets Matched Your Input',
        "Try again and make sure you aren't using quotes.",
        ui.ButtonSet.OK);
}

// alert after succesful action (only used in copy)
function successAlert(action) {
    var ui = SpreadsheetApp.getUi();
    var result = ui.alert(
        'Success!',
        "You're sheets were " + action + " successfully.",
        ui.ButtonSet.OK);
}

function tst() {
    var sheet = SpreadsheetApp.getActive();
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

    for (var i = 0; i < sheets.length; i++) {
        Logger.log(sheets[i].getName());
    }
    sheet.setActiveSheet(sheets[sheets.length - 1]);

}