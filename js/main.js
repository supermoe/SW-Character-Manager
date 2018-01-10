character = {
	firstname: "unnamed",
	exp: 0,
	level: 0,
	wounds: 0,
	//attributes
    attributes: [0,0,0,0,0],
	attributePoints: 5,
	//skills
	skills: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
	skillPoints: 10,
	//hindrances
	hindrances: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
	hindrancesUsed : 0,
	//edges
	edgesPoints: 1
}
console.log(character.hindrances)
attributeLabels = [];
skillLabels = [];
skillRows = [];
hindranceRows = [];

tempAttributes = {available:0, affected:[0,0,0,0,0]};
tempAttributeLabels = [];

tempSkills = {available:0, affected:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
tempSkillLabels = [];
skillCostLabels = [];

function update(){
	//exp
	$("#exp-label").text(character.exp);

	//hide or show level up button
	if (character.exp >= levelUpCost) $('#levelup-b').removeClass("hidden");
	else $('#levelup-b').addClass("hidden");

	//pace, parry, dodge, toughness and charisma
	$("#pace-l").html(paceDefault);
	var f = 0;
	if (character.skills[12] >= 0) f = Math.floor((character.skills[12]*2+4)/2);
	$("#parry-l").html(parryDefault + f);
	$("#dodge-l").html(dodgeDefault);
	$("#toughness-l").html(toughnessDefault + Math.floor((character.attributes[4]*2+4)/2));
	$("#charisma-l").html(charismaDefault);

	//wounds
	for (let i=0; i<5; i++) $("#wound"+i).removeClass("checked-wound");
	$("#wound"+character.wounds).addClass("checked-wound");

	//hindrances
	$('#hindrance-pt-l').text(hindranceCount())
	if (hindranceMax-hindranceCount() <= 0) $('#hindrance-add-b').addClass("hidden")
	if (hindranceCount() - character.hindrancesUsed > 0) $('#hindrance-bonus-b').removeClass('hidden');
	else $('#hindrance-bonus-b').addClass('hidden');
	$('#hindrance-bonus-l').text(hindranceCount() - character.hindrancesUsed);

    for (var i=0; i<attributes.length; i++){
        $(attributeLabels[i]).html(die[character.attributes[i]])
    }
    for (var i=0; i<skills.length; i++){
        if (character.skills[i] < 0) {
            $(skillLabels[i]).html("X");
            $(skillRows[i]).addClass('hidden');
        }
        else {
            $(skillLabels[i]).html(die[character.skills[i]]);
            $(skillRows[i]).removeClass('hidden');
        }
    }
	for (var i=0; i<hindrances.length; i++){
		if (character.hindrances[i]){
			$(hindranceRows[i]).removeClass('hidden');
		}
		else{
			$(hindranceRows[i]).addClass('hidden');
		}
	}
}

function wound(value){
	character.wounds = value;
	update();
};

function skillDie(value){
	if (value < 0) return "X";
	else return die[value];
}

function costOfBump(i, nextValue){
	if (nextValue < 1) return 2
	if (nextValue > character.attributes[skills[i].attribute]) return 2
	else return 1
}

function levelUp(){
	character.level++;
	character.exp -= levelUpCost;
}

function hindranceCount(){
	total = 0;
	for (let i=0; i<hindrances.length; i++){
		if (character.hindrances[i]) total += hindrances[i].type
	}
	return total;
}

//start

for (let i=0; i<attributes.length; i++){
    $("#attribute-brow").before("<tr><td>" + attributes[i] + ":" + "</td><td id='attribute-l" + i + "'></td></tr>");
    attributeLabels.push('#attribute-l' + i);

	$("#attribute-selector-brow").before("<tr><td>" + attributes[i] + "</td><td>" + die[character.attributes[i]] + " -> <span id='temp-attribute-l" + i + "'></span></td><td><div id='attribute-bump" + i + "' class='button'>+</div></td></tr>");
	tempAttributeLabels.push('#temp-attribute-l' + i);

	$("#attribute-bump" + i).click(function(){
		if (character.attributes[i] + tempAttributes.affected[i] < die.length-1 && tempAttributes.available > 0){
			tempAttributes.affected[i]++;
			tempAttributes.available--;
			updateAttributeSelector();
		}
	})
}

for (let i=0; i<skills.length; i++){
    $("#skill-brow").before("<tr id='skill-row" + i + "'><td>" + skills[i].name + ":" + "</td><td id='skill-l" + i + "'></td></tr>");
    skillLabels.push('#skill-l' + i);
	skillRows.push('#skill-row' + i);
	
	$("#skill-selector-brow").before("<tr><td>" + skills[i].name + "</td><td>" + skillDie(character.skills[i]) + " -> <span id='temp-skill-l" + i + "'></span></td><td><span id='skill-cost" + i + "'></span></td><td><div id='skill-bump" + i + "' class='button'>+</div></td></tr>");
	tempSkillLabels.push('#temp-skill-l' + i);
	skillCostLabels.push('#skill-cost' + i);

	$("#skill-bump" + i).click(function(){
		var cost = costOfBump(i, character.skills[i] + tempSkills.affected[i]+1)
		if (character.skills[i] + tempSkills.affected[i] < die.length-1 && tempSkills.available >= cost){
			tempSkills.affected[i]++;
			tempSkills.available -= cost;
			updateSkillSelector();
		}
	})
}

for (let i=0; i<hindrances.length; i++){
    $("#hindrance-brow").before("<tr id='hindrance-row" + i + "'><td>" + hindrances[i].name + "<div class=hindrance-desc>" + hindrances[i].description + "</div></td></tr>");
	hindranceRows.push('#hindrance-row' + i);
	
	var ht = hindrances[i].type //== MINOR ? "MINOR" : "MAJOR";
	$("#hindrance-select").append($("<tr class='hindrance-select-row'><td>" + hindrances[i].name + "</td><td class='hindrance-selector-type'>" + ht + "</td><td class='hindrance-selector-desc'>" + hindrances[i].description + "</td><tr>").click(function(){step2HindranceSelector(i)}))
}

// Attribute selector --------------------------------------------
function openAttributeSelector(){
	$("#popup").removeClass("hidden")
	$("#attribute-selector").removeClass("hidden")
	attributeSelectorReset();
}
function closeAttributeSelector(){
	$("#popup").addClass("hidden")
	$("#attribute-selector").addClass("hidden")
}
function updateAttributeSelector(){
	for (let i=0; i<attributes.length; i++){
        $(tempAttributeLabels[i]).html(die[character.attributes[i]+tempAttributes.affected[i]]);
    }
	$("#attribute-selector-available").html(tempAttributes.available);
}
function attributeSelectorReset(){
	for (let i=0; i<attributes.length; i++){
		tempAttributes.affected[i] = 0;
	}
	tempAttributes.available = character.attributePoints;
	updateAttributeSelector();
}
$("#attribute-selector-confirm-b").click(function(){
	character.attributePoints = tempAttributes.available;
	for (let i=0; i<attributes.length; i++){
		character.attributes[i] = tempAttributes.affected[i] + character.attributes[i];
	}
	attributeSelectorReset();
	closeAttributeSelector();
	update();
})

// Skill selector -----------------------------------------------
function openSkillSelector(){
	$("#popup").removeClass("hidden")
	$("#skill-selector").removeClass("hidden")
	skillSelectorReset();
}
function closeSkillSelector(){
	$("#popup").addClass("hidden")
	$("#skill-selector").addClass("hidden")
}
function updateSkillSelector(){
	for (let i=0; i<skills.length; i++){
		$(tempSkillLabels[i]).html(skillDie(character.skills[i]+tempSkills.affected[i]));
		$(skillCostLabels[i]).html(costOfBump(i, character.skills[i]+tempSkills.affected[i]+1));
    }
	$("#skill-selector-available").html(tempSkills.available);
}
function skillSelectorReset(){
	for (let i=0; i<skills.length; i++){
		tempSkills.affected[i] = 0;
	}
	tempSkills.available = character.skillPoints;
	updateSkillSelector();
}
$("#skill-selector-confirm-b").click(function(){
	character.skillPoints = tempSkills.available;
	for (let i=0; i<skills.length; i++){
		character.skills[i] = tempSkills.affected[i] + character.skills[i];
	}
	skillSelectorReset();
	closeSkillSelector();
	update();
})

// Level up window -----------------------------------------------
function openLevelUp(){
	$("#popup").removeClass("hidden")
	$("#level-up").removeClass("hidden")
}
function closeLevelUp(){
	$("#popup").addClass("hidden")
	$("#level-up").addClass("hidden")
}
function edgeAdvance(){
	character.edgesPoints++;
	levelUp();
	update();
	closeLevelUp();
}
function skillAdvance(){
	character.skillPoints += 2;
	levelUp();
	update();
	closeLevelUp();
}
function attributeAdvance(){
	character.attributePoints++;
	levelUp();
	update();
	closeLevelUp();
}

// Exp selector
function openXPSelector(){
	$("#popup").removeClass("hidden")
	$("#xp-selector").removeClass("hidden")
}
function closeXPSelector(){
	$("#popup").addClass("hidden")
	$("#xp-selector").addClass("hidden")
}
function addXPSelector(){
	character.exp += parseInt($("#xp-input").val());
	update();
	closeXPSelector();
}

// Hindrance Selector
function openHindranceSelector(){
	$("#popup").removeClass("hidden")
	$("#hindrance-selector").removeClass("hidden")
	$("#hindrance-selector-step1").removeClass("hidden")
	$("#hindrance-selector-step2").addClass("hidden")
}
function closeHindranceSelector(){
	$("#popup").addClass("hidden")
	$("#hindrance-selector").addClass("hidden")
	$("#hindrance-selector-step1").addClass("hidden")
	$("#hindrance-selector-step2").addClass("hidden")
}
function step2HindranceSelector(i){
	//if (hindranceMax - hindranceCount() - hindrances[i].type >= 0){
		i = parseInt(i);
		$("#hindrance-selector-step1").addClass("hidden")
		$("#hindrance-selector-step2").removeClass("hidden")
		$("#hindrance-selector-l").text(hindrances[i].name);
		$("#hindrance-selector-add-b").off();
		$("#hindrance-selector-add-b").click(function(){
			character.hindrances[i] = true;
			update();
			closeHindranceSelector();
		})
	//}
}

//bonus selector
function openBonusSelector(){
	$("#popup").removeClass("hidden")
	$("#bonus-selector").removeClass("hidden")
}
function closeBonusSelector(){
	$("#popup").addClass("hidden")
	$("#bonus-selector").addClass("hidden")
}
function skillBonus(){
	var cost = 1;
	if (hindranceCount() - character.hindrancesUsed >= cost){ 
		character.skillPoints++;
		character.hindrancesUsed+=cost;
		update();
		closeBonusSelector();
	}
}
function edgeBonus(){
	var cost = 2; 
	if (hindranceCount() - character.hindrancesUsed >= cost){
		character.edgesPoints++;
		character.hindrancesUsed+=cost;
		update();
		closeBonusSelector();
	}
}
function attributeBonus(){
	var cost = 2; 
	if (hindranceCount() - character.hindrancesUsed >= cost) {
		character.attributePoints++;
		character.hindrancesUsed+=cost;
		update();
		closeBonusSelector();
	}
}

update();
