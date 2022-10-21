var fs = require('fs');
var path = require('path');

const contractUriMaker = (folderName, contractName, contractDescription, feeRecipient) => {

    // creates folder to store metadata in
    fs.mkdir(
        path.join(__dirname, `${folderName}`),
        function(err, result) {
            if(err) console.log("error", err);
        }    
    )

    var metadataObject = {
        "name" : `${contractName}`,
        "description" : `${contractDescription}`,
        "image" : `ipfs://bafybeihklavaypxea2cq3o33vhtbgcvvftky7zegdtnz3d55toulclddta/KASBEEL_REFLEJO_token1.jpg`,
        "seller_fee_basis_points": 100,
        "fee_recipient": `${feeRecipient}}`
    } 
    var metadataJSON = JSON.stringify(metadataObject);
    fs.writeFile(
        `./${folderName}/metadata`,
        metadataJSON,
        function(err, result) {
            if(err) console.log("error", err);
        }            
    )                

}        

contractUriMaker(
    "contractURI",
    "Reflejo BTS",
    "Behind-the-scenes content from the music video shoot for 'Refljejo' by Kasbeel",
    "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170"
);

