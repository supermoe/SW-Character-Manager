type = {stackable:0, weapon:1, armor:2, other:3, craft:4}

//inventory
function updateInventory(){
	$("#inventory-stackable").find(".item-row").remove();
	for (let item of character.inventory.stackables){
		$("#inventory-stackable").append("<tr class='item-row'><td>" + item.name + "</td><td>" + item.pcs + "</td></tr>");
	}

	$("#inventory-weapon").find(".item-row").remove();
	for (let item of character.inventory.weapons){
		var dmg = "";
		var elems = 0;
		if (item.damage.attribute >= 0) {dmg += attributes[item.damage.attribute]; elems++}
		if (item.damage.die >= 0) {
			dmg += elems > 0 ? " + " + item.damage.multiplier + die[item.damage.die] : item.damage.multiplier + die[item.damage.die];
			elems++
		}
		if (item.damage.flat > 0) {
			dmg += elems > 0 ? " + " + item.damage.flat : item.damage.flat;
			elems++
		}
		var twohanded = item.twohanded ? "yes" : "no";
		var range = ""
		for (let r in item.range){
			if (r != 0) range += "/"
			range += item.range[r];
		}
		$("#inventory-weapon").append("<tr class='item-row'><td>" + item.name + "</td><td>" + dmg + "</td><td>" + twohanded + "</td><td>" + range + "</td><td>" + item.description + "</td></tr>");
	}

	$("#inventory-armor").find(".item-row").remove();
	for (let item of character.inventory.armors){
		$("#inventory-armor").append("<tr class='item-row'><td>" + item.name + "</td><td>" + item.armor + "</td><td>" + item.description + "</td></tr>");
	}

	$("#inventory-other").find(".item-row").remove();
	for (let item of character.inventory.others){
		$("#inventory-other").append("<tr class='item-row'><td>" + item.name + "</td><td>" + item.description + "</td></tr>");
	}

	$("#crafting-recipes").find(".craft-row").remove();
	for (let item of character.inventory.crafts){
		$("#crafting-recipes").append($("<tr class='craft-row'><td>" + item.req + "</td><td>" + item.name + "</td></tr>").click(function(){
			openCraftingWindow(item);
		}));
	}
}

function addItem(json){
	item = JSON.parse(json);
	switch(item.type){
		case type.stackable:
			if (("name" in item && typeof item.name == 'string') &&
			("pcs" in item && typeof item.pcs == 'number')){
				for (var s of character.inventory.stackables){
					item.name = item.name.toLowerCase();
					if (s.name == item.name) {
						s.pcs += item.pcs;
						updateInventory();
						return "success : item stacked."
					}
				}
				character.inventory.stackables.push(item);
				updateInventory();
				return "success : item added.";
			}
			else return "error : item is missing a critical variable."
			break;
		case type.weapon:
			if (("name" in item && typeof item.name == 'string') &&
			("description" in item && typeof item.description == 'string') &&
			("damage" in item && typeof item.damage != 'undefined') &&
			("twohanded" in item && typeof item.twohanded == 'boolean') &&
			("range" in item && typeof item.range == 'object' && item.range.length > 0) &&
			("mods" in item && typeof item.mods == 'object')){
				character.inventory.weapons.push(item);
				updateInventory();
				return "success : weapon added.";
			}
			else return "error : item is missing a critical variable."
			break;
		case type.armor:
			if (("name" in item && typeof item.name == 'string') &&
			("armor" in item && typeof item.armor == 'number') &&
			("mods" in item && typeof item.mods == 'object') &&
			("description" in item && typeof item.description == 'string')){
				character.inventory.armors.push(item);
				updateInventory();
				return "success : armor added.";
			}
			else return "error : item is missing a critical variable."
			break;
		case type.other:
			if (("name" in item && typeof item.name == 'string')
			&& ("description" in item && typeof item.description == 'string')){
				character.inventory.others.push(item);
				updateInventory();
				return "success : item added.";
			}
			break;
		case type.craft:
			if (("name" in item && typeof item.name == 'string') &&
			("req" in item && typeof item.req == 'number') &&
			("input" in item && typeof item.input == 'object' && item.input.length > 0) && 
			("output" in item && typeof item.output == 'object')){
				for (var craft of character.inventory.crafts){
					if (craft.name.toLowerCase() == item.name.toLowerCase()) {
						craft.input = item.input;
						craft.output = item.output;
						updateInventory();
						return "success : crafting recipe updated.";
					}
				}
				character.inventory.crafts.push(item);
				updateInventory();
				return "success : crafting recipe added.";
			}
			break;
		default:
			return "error : item has an invalid type.";
	}
}

function openItemImport(){
	$("#popup").removeClass("hidden");
	$("#item-importer").removeClass("hidden");
}
function closeItemImport(){
	$("#popup").addClass("hidden");
	$("#item-importer").addClass("hidden");
}
function importItem(){
	addItem($("#importer-input").val());
	closeItemImport();
}

function openInventory(){
	$(".inv").removeClass("hidden");
	$(".craft").addClass("hidden");
	
}
function openCrafting(){
	$(".inv").addClass("hidden");
	$(".craft").removeClass("hidden");
}
openInventory();

function openCraftingWindow(item){
	$("#popup").removeClass("hidden");
	$("#crafting-window").removeClass("hidden");
	updateCraftingWindow(item);
}
function closeCraftingWindow(){
	$("#popup").addClass("hidden");
	$("#crafting-window").addClass("hidden");
}
function updateCraftingWindow(item){
	$("#crafting-name-l").text(item.name);
	$("#crafting-input").children().remove();
	$("#crafting-output").children().remove();
	for (let inp of item.input){
		$("#crafting-input").append("<div>" + inp.pcs + " " + inp.material + "</div>");
	}
	switch (item.output.type){
		case type.weapon:
			$("#crafting-output").append("<div>" + item.output.name + "</div>");
			var dmg = "";
			var elems = 0;
			if (item.output.damage.attribute >= 0) {dmg += attributes[item.output.damage.attribute]; elems++}
			if (item.output.damage.die >= 0) {
				dmg += elems > 0 ? " + " + item.output.damage.multiplier + die[item.output.damage.die] : item.output.damage.multiplier + die[item.output.damage.die];
				elems++
			}
			if (item.output.damage.flat > 0) {
				dmg += elems > 0 ? " + " + item.output.damage.flat : item.output.damage.flat;
				elems++
			}
			var twohanded = item.output.twohanded ? "yes" : "no";
			var range = ""
			for (let r in item.output.range){
				if (r != 0) range += "/"
				range += item.output.range[r];
			}
			$("#crafting-output").append("<div>" + "damage: " + dmg + "</div>");
			$("#crafting-output").append("<div>" + "2h: " + twohanded + "</div>");
			$("#crafting-output").append("<div>" + "range: " + range + "</div>");
			break;
		case type.armor:
			$("#crafting-output").append("<div>" + item.output.name + "</div>");
			$("#crafting-output").append("<div>" + "armor: " + item.output.armor + "</div>");
			break;
		case stackable:
			$("#crafting-output").append("<div>" + item.output.pcs + " " + item.output.name + "</div>");
			break;
	}

	$("#crafting-confirm-b").off();
	if (isCraftable(item)){
		$("#crafting-confirm-b").click(function(){
			for (let mat of item.input){
				for (let stackable of character.inventory.stackables){
					if (mat.material.toLowerCase() == stackable.name.toLowerCase()) stackable.pcs -= mat.pcs;
				}
			}
			addItem(JSON.stringify(item.output));
			closeCraftingWindow();
			updateInventory();
		});
	}
}
function isCraftable(item){
	for (let mat of item.input){
		if (!isInInventory(mat.material, mat.pcs)) return false;
	}
	return true;
}
function isInInventory(name, pcs){
	for (let stackable of character.inventory.stackables){
		if (stackable.name.toLowerCase() == name.toLowerCase()){
			if (stackable.pcs >= pcs) return true;
			else return false;
		} 
	}
	return false;
}

var poop = JSON.stringify({
	type: type.stackable,
	name: "poop",
	pcs: 10
});

var sword = JSON.stringify({
	type: type.weapon,
	name: "sword",
	damage: {attribute:3, die:0, multiplier:1, flat:0},
	twohanded: false,
	range: [1],
	mods: [],
	description: "A simple iron sword."
});

var gun = JSON.stringify({
	type: type.weapon,
	name: "pistol",
	damage: {attribute:-1, die:2, multiplier:1, flat:0},
	twohanded: false,
	range: [6,12],
	mods: [],
	description: "Crude pistol."
});

var armor = JSON.stringify({
	type: type.armor,
	name: "trenchcoat",
	armor: 1,
	mods: [],
	description: "Brown trenchcoat."
});

var key = JSON.stringify({
	type: type.other,
	name: "Prison Key",
	description: "Key of the underground prison."
});

var recipe = JSON.stringify({
	type: type.craft,
	name: "Hi-Frequency Katana",
	req: 0,
	input: [{material: "poop", pcs: 5}],
	output: {
		type: type.weapon,
		name: "Hi-Frequency Katana",
		damage: {attribute:3, die:1, multiplier:1, flat:0},
		twohanded: false,
		range: [1],
		mods: [],
		description: "A katana vibrating at high frequency to cut through material like butter."
	}
});

var recipe2 = JSON.stringify({
	type: type.craft,
	name: "trenchcoat",
	req: 0,
	input: [{material: "poop", pcs: 5}],
	output: {
		type: type.armor,
		name: "trenchcoat",
		armor: 1,
		mods: [],
		description: "Brown trenchcoat."
	}
});