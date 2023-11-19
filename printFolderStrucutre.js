const fs = require("fs");
const path = require("path");

function displayFolderStructure(dir, level = "") {
	console.log(level + path.basename(dir));

	// Get the files and folders in the directory
	let files;
	try {
		files = fs.readdirSync(dir);
	} catch (err) {
		return console.log("Unable to scan directory: " + err);
	}

	// Loop through all the files and folders
	files.forEach(function(file) {
		const filePath = path.join(dir, file);

		// Check if the current path is a directory or a file
		if (fs.statSync(filePath).isDirectory()) {
			// If directory, recursively print its contents
			displayFolderStructure(filePath, level + "|-- ");
		} else {
			// If file, print its name
			console.log(level + "|-- " + file);
		}
	});
}

displayFolderStructure("./src");
