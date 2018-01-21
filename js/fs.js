const {dialog} = require('electron').remote;
var fs = require('fs');

$("#character-import").click(function(){
	dialog.showOpenDialog({ filters: [
		{ name: 'characters', extensions: ['chr'] }
	 ]}, function(fileNames){
		if (typeof fileNames == 'undefined') return;
		fs.readFile(fileNames[0], 'utf-8', function (err, data) {
			character = JSON.parse(data);
			update();
			updateInventory();
		});
	});
});;

$("#character-export").click(function(){
	dialog.showSaveDialog({ filters: [
		{ name: 'characters', extensions: ['chr'] }
	 ]}, function(fileName){
		if (typeof fileName == 'undefined') return;
		fs.writeFile(fileName, JSON.stringify(character), function (err, data) {});
	});
});;