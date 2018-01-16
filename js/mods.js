mods = [];
modMax = 3;

SHARP_BLADE = {
	id : "sharp_blade",
	name: "Sharp Blade",
	type: type.weapon,
	levels: [
		{description: "+1 Damage against enemies with no armor.",},
		{description: "+2 Damage against enemies with no armor.",},
		{description: "+2 Damage against enemies with less than 2 armor.",},
	]
}
mods.push(SHARP_BLADE);

ERGONOMIC = {
	id : "ergonomic",
	name: "Ergonomic",
	type: type.weapon,
	levels: [
		{description: "No penalty for using in offhand",},
	]
}
mods.push(ERGONOMIC);

HEAVY_ARMOR = {
	id : "heavy_armor",
	name: "Heavy Armor",
	type: type.armor,
	levels: [
		{description: "-1 Pace.",},
		{description: "-2 Pace.",},
	]
}
mods.push(HEAVY_ARMOR);

LIGHT_ARMOR = {
	id : "light_armor",
	name: "Light Armor",
	type: type.armor,
	levels: [
		{description: "+1 Pace.",},
		{description: "+2 Pace.",},
	]
}
mods.push(LIGHT_ARMOR);

BULLETPROOF = {
	id : "bulletproof",
	name: "Bulletproof",
	type: type.armor,
	levels: [
		{description: "+1 toughness when hit by ranged weapons.",},
	]
}
mods.push(BULLETPROOF);

CONCEALING = {
	id : "CONCEALING",
	name: "Concealing",
	type: type.armor,
	levels: [
		{description: "Makes it easy to hide weapons.",},
	]
}
mods.push(CONCEALING);