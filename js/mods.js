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
		{description: "+2 toughness when hit by ranged weapons.",},
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
		{description: "Gain the ability to reroll damage once if you got less than half your attack skill die.",},
	]
}
mods.push(UNCOMPROMISING);

SPREAD = {
	id : "spread",
	name: "Spread",
	type: type.weapon,
	removeable: false,
	levels: [
		{description: "+1 shooting per range threshold exceeded. +d4 damage per range threshold not exceeded.",},
		{description: "+1 shooting per range threshold exceeded. +d6 damage per range threshold not exceeded.",},
	]
}
mods.push(SPREAD);

BLUNT = {
	id : "blunt",
	name: "Blunt",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "+1 damage against enemies with at least 2 armor",},
		{description: "+2 damage against enemies with at least 4 armor",},
	]
}
mods.push(BLUNT);

PROTECTION = {
	id : "protection",
	name: "Protection",
	type: type.weapon,
	removeable: false,
	levels: [
		{description: "+2 Armor",},
		{description: "+3 Armor",},
		{description: "+4 Armor",},
	]
}
mods.push(PROTECTION);

COOL_FACTOR = {
	id : "cool_factor",
	name: "Cool Factor",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "+1 charisma",},
		{description: "+2 charisma",}
	]
}
mods.push(COOL_FACTOR);

STYLISH = {
	id : "stylish",
	name: "Stylish",
	type: type.armor,
	removeable: true,
	levels: [
		{description: "+1 charisma if clean",},
		{description: "+2 charisma if clean",}
	]
}
mods.push(STYLISH);

COMPLEX = {
	id : "complex",
	name: "Complex",
	type: type.weapon,
	removeable: false,
	levels: [
		{description: "-2 to Attack rolls unless you have spent time maintening this weapon today",},
		{description: "-1 to Attack rolls unless you have spent time maintening this weapon today",}
	]
}
mods.push(COMPLEX);

FEAR_FACTOR = {
	id : "fear_factor",
	name: "Fear Factor",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "+1 to Coercion rolls, +2 if bloody",},
		{description: "+2 to Coercion rolls, +3 if bloody",}
	]
}
mods.push(FEAR_FACTOR);