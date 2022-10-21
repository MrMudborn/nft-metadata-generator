var fs = require('fs');
var path = require('path');

const tokenUriMaker = (rounds, folderName) => {

    // creates folder to store metadata in
    fs.mkdir(
        path.join(__dirname, `${folderName}`),
        function(err, result) {
            if(err) console.log("error", err);
        }    
    )

    // creates individual metadata files and stores them in newly created folder
    for (i = 0; i < rounds; i++) {            
        for (j = 1; j < 23; j ++) {
            var metadataObject = {
                "name" : `Reflejo BTS #${i * 22 + j}`,
                "description" : `Photo ${j}/22`,
                "image" : `ipfs://bafybeihklavaypxea2cq3o33vhtbgcvvftky7zegdtnz3d55toulclddta/KASBEEL_REFLEJO_token${j}.jpg`
            } 
            var metadataJSON = JSON.stringify(metadataObject);
            fs.writeFile(
                `./${folderName}/${i * 22 + j}`,
                metadataJSON,
                function(err, result) {
                    if(err) console.log("error", err);
                }            
            )                
        }
    }

}        

tokenUriMaker(101, "tokenURI");

