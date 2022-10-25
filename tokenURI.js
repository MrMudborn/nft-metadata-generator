// import {arrayOfImageCIDs} from "./zoraPinnedImages";
var fs = require('fs');
var path = require('path');


const arrayOfImageCIDs = [
    "bafkreiekrwyr4p3va77rnyad6urnfjuoisnwfxwl2zb5adz3q6q5buy4ye",
    "bafkreig7pplxs3qnv4cuscrrdhfjoiixzki3fcaxcwmmytjga76qpvvzjq",
    "bafkreic5timqgm2xq2nzxsmgh2g6u5udrp6i7ntrn2pyzuyjxrl4lvpija",
    "bafkreic7qar3esuryg6v6dkm3cr2bsj53x6ukyn4g4uzvlxsk32fzrrh3m",
    "bafkreiech3pdjnqivpmjkrtlyeghslprubnszsdaimyfrbus6k2nufgq64",
    "bafkreifnz227tcnx4n6cmtvnlw33ile67tjxrpgyidpy47qpuskb2adqvy",
    "bafkreiex5u3bbnbfmzst7eeuc25qxfxghjm3cuvcgpbgw3ixkpxm5k4zrq",
    "bafkreifwzzz4eot36jbiwcem6tuqdg5gqnzixds4zdedwzvdsno6hioon4",
    "bafkreig6hfikzw2bko6qgdhpup6hf3i3mmyrw73446lcdsinxmokkgpvey",
    "bafkreigks2tza2r7hbgnvbcqqfm4jmcbrihc2bs6iq57yfnwecuyqj5hbe",
    "bafkreidlpjbqptggrlcmch72pg5533iwkocaloympv7wh56z3kut6vuwsa",
    "bafkreic5timqgm2xq2nzxsmgh2g6u5udrp6i7ntrn2pyzuyjxrl4lvpija",
    "bafkreidqmriv5rblebq4smo3zsrujpczv4omygmzr44bcj3ypwmhuffeum",
    "bafkreigf7ah47bt3gbsgv4u3zubjszr5pddqjkavtsenuvlcxabkrinkiu",
    "bafkreibeoky5b33tpiicczixw3hac7c5isjijaqwo4gncn6oja5avgffdi",
    "bafybeie6ke5suw7qluxqk2lh453fghseq7gf6a35mlohlkeutnt2ceqyim",
    "bafybeiccazxqrczg5h5h7pgfe4rm6sfsmlau2gf7dqqa6qace7ql5rbl24",
    "bafybeifjy3mj7aahukghnauuq6cdz2wj4ywrxuxzc6pbjpkqz4nx2olqza",
    "bafybeigdpr772ofihdgpmgwz32sv3mfr4jskpyigocofwqohnd266lwkji",
    "bafybeihksltcadb2t6kcyh3hj4d57wg4zypheahucp7ez2jkavlyk7g64e",
    "bafkreicuxyu2rk7yvj5xsi4hlyknatc36zymwuhmucqoeaxhe4d3u4pybm",
    "bafkreibvbdobbefko6kkrq4aurig4nyw6xdxcsewq6xdsbiu7g5yrhgjxq",
]

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
                "image" : `ipfs://${arrayOfImageCIDs[j-1]}`
            } 
            var metadataJSON = JSON.stringify(metadataObject);
            fs.writeFile(
                `./${folderName}/${i * 22 + j}`,
                metadataJSON,
                // metadataObject,
                function(err, result) {
                    if(err) console.log("error", err);
                }            
            )                
        }
    }

}        

tokenUriMaker(10, "tokenURI");

