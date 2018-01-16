mods = [];
modMax = 3;

SHARP_BLADE = {
	id : "sharp_blade",
	name: "Sharp Blade",
	type: type.weapon,
	removeable: true,
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
	removeable: true,
	levels: [
		{description: "No penalty for using in offhand",},
	]
}
mods.push(ERGONOMIC);

HEAVY_ARMOR = {
	id : "heavy_armor",
	name: "Heavy Armor",
	type: type.armor,
	removeable: false,
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
	removeable: true,
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
	removeable: true,
	levels: [
		{description: "+1 toughness when hit by ranged weapons.",},
	]
}
mods.push(BULLETPROOF);

CONCEALING = {
	id : "concealing",
	name: "Concealing",
	type: type.armor,
	removeable: true,
	levels: [
		{description: "Makes it easy to hide small items",},
		{description: "Makes it easy to hide items and weapons",},
	]
}
mods.push(CONCEALING);

UNCOMPROMISING = {
	id : "uncompromising",
	name: "Uncompomising",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "Reroll damage once if you got less than half your attack skill die.",},
	]
}
mods.push(CONCEALING);