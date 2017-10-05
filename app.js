console.log(`Nooode...`);

// logging to the console process.argv the array containing the command line arguments passed when the Node.js process was launched
// console.log(process.argv);


function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index + 1];

}


var firstName = grab('--firstName');
var lastName = grab('--lastName');

if (!firstName || !lastName) {
	console.log('Please enter your --firstName and your --lastName ');
} else {
	console.log(`Welcome ${firstName}, ${lastName}`);
}






