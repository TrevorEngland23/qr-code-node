import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module
*/



inquirer
.prompt([ // question / list of questions
    {"message": "Type in your URL: ", // This is a javascript object per documentation so we need the {}
    "name": "URL"
}])
.then((answers) => {
    const url = answers.URL; // grabs the URL from what the user types in
    var qr_png = qr.image(url); // create the qr code and store in variable
    qr_png.pipe(fs.createWriteStream("linkedIn.png")); // finalize the qr code

    fs.writeFile("URL.txt", url, (err) => { // use filesystem module to write a text file named URL.txt, passing in the url from above.
        if(err) throw err; // if there is an error, throw the error
        console.log("successful!"); // otherwise log successful to the console to confirm 
    })
})
.catch((error) => {
    if(error.TtyError){
    console.log("error");
    } 
});



