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
		{description: "-2 to Attack rolls unless you have spent time maintaining this weapon today",},
		{description: "-1 to Attack rolls unless you have spent time maintainning this weapon today",}
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

POWER_INFUSION = {
	id : "power_infusion",
	name: "Power Infusion",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "Spend 5 cells to get +1 damage on this turn",},
		{description: "Spend 15 cells to get +2 damage on this turn",},
		{description: "Spend 30 cells to get +3 damage on this turn",}
	]
}
mods.push(POWER_INFUSION);

ACCURACY_INFUSION = {
	id : "accuracy_infusion",
	name: "Accuracy Infusion",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "Spend 5 cells to get +1 attack on this turn",},
		{description: "Spend 10 cells to get +2 attack on this turn",},
		{description: "Spend 20 cells to get +3 attack on this turn",}
	]
}
mods.push(ACCURACY_INFUSION);

ARMOR_INFUSION = {
	id : "armor_infusion",
	name: "Armor Infusion",
	type: type.armor,
	removeable: true,
	levels: [
		{description: "Spend 10 cells to get +2 armor on this turn",},
		{description: "Spend 25 cells to get +3 armor on this turn",},
		{description: "Spend 60 cells to get +4 armor on this turn",}
	]
}
mods.push(ARMOR_INFUSION);

OPTIMIZED_INFUSION_W = {
	id : "optimized_infusion_w",
	name: "Optimized Infusion (Weapon)",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "-2 infusion cost (Requires d4 Tinkering)",},
		{description: "-4 infusion cost (Requires d6 Tinkering)",},
		{description: "-6 infusion cost (Requires d8 Tinkering)",},
		{description: "-8 infusion cost (Requires d10 Tinkering)",},
		{description: "-10 infusion cost (Requires d12 Tinkering)",}
	]
}
mods.push(OPTIMIZED_INFUSION_W);

CONFIDENCE = {
	id : "confidence",
	name: "Confidence",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "No wild die on attack, +1/+2 damage for 1h/2h respectively",},
		{description: "No wild die on attack, +2/+4 damage for 1h/2h respectively",},
	]
}
mods.push(CONFIDENCE);

THRUST = {
	id : "thrust",
	name: "Thrust",
	type: type.weapon,
	removeable: true,
	levels: [
		{description: "No wild die on attack, +1 attack",},
		{description: "No wild die on attack, +2 attack",},
		{description: "No wild die on attack, +3 attack",},
		{description: "No wild die on attack, +4 attack",},
	]
}
mods.push(THRUST);