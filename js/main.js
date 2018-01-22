character = JSON.parse(defaultCharacter);
attributeLabels = [];
skillLabels = [];
skillRows = [];
hindranceRows = [];
edgeRows = [];
edgeSelectorRows = [];

reqid = 0;
attributeReq = [];
skillReq = [];
edgeReq = [];
levelReq = [];

tempAttributes = {available:0, affected:[0,0,0,0,0]};
tempAttributeLabels = [];

tempSkills = {available:0, affected:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
tempSkillLabels = [];
skillCostLabels = [];

function update(){
	//exp
	$("#exp-label").text(character.exp);

	//names
	$('#firstname-l').text(character.firstname);
	$('#nickname-l').text(character.nickname == "" ? '' : '"'+character.nickname+'"');
	$('#lastname-l').text(character.lastname);

	//hide or show level up button
	if (character.exp >= levelUpCost) $('#levelup-b').removeClass("hidden");
	else $('#levelup-b').addClass("hidden");

	//pace, parry, dodge, toughness and charisma
	FillPaceLabel();
	FillParryLabel();
	FillDodgeLabel();
	FillToughnessLabel();
	FillCharismaLabel();

	//wounds
	for (let i=0; i<5; i++) $("#wound"+i).removeClass("checked-wound");
	$("#wound"+character.wounds).addClass("checked-wound");

	//hindrances
	hindranceCount() > 0 ? $("#hindrance-null").addClass('hidden') : $("#hindrance-null").removeClass('hidden')
	$('#hindrance-pt-l').text(hindranceCount())
	if (hindranceCount() - character.hindrancesUsed > 0) $('#hindrance-bonus-b').removeClass('hidden');
	else $('#hindrance-bonus-b').addClass('hidden');
	$('#hindrance-bonus-l').text(hindranceCount() - character.hindrancesUsed);

	//edges
	edgeCount() > 0 ? $("#edge-null").addClass('hidden') : $("#edge-null").removeClass('hidden')
	for (let i=0; i<edges.length; i++){
		if (character.edges[i]) {
			$(edgeRows[i]).removeClass("hidden");
			$(edgeSelectorRows[i]).addClass("hidden");
			if (edges[i].upgrades > -1) $(edgeRows[edges[i].upgrades]).addClass("hidden");
		}
		else {
			$(edgeRows[i]).addClass("hidden");
			$(edgeSelectorRows[i]).removeClass("hidden");
		}
	}
	$('#edge-points-l').text(character.edgePoints);
	if (character.edgePoints > 0) $("#edge-add-b").removeClass("hidden")
	else $("#edge-add-b").addClass("hidden")

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

	for (let r of attributeReq){
		if (character.attributes[r.attribute] < r.n) $(r.id).addClass("missing-req");
		else $(r.id).removeClass("missing-req");
	}
	for (let r of skillReq){
		if (character.skills[r.skill] < r.n) $(r.id).addClass("missing-req");
		else $(r.id).removeClass("missing-req");
	}
	for (let r of edgeReq){
		if (!character.edges[r.edge]) $(r.id).addClass("missing-req");
		else $(r.id).removeClass("missing-req");
	}
	for (let r of levelReq){
		if (character.level < r.level) $(r.id).addClass("missing-req");
		else $(r.id).removeClass("missing-req");
	}
}

function wound(value){
	character.wounds = value;
	update();
};

function skillDie(value){
	if (value < 0) return "\u00D7";
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

function edgeCount(){
	total = 0;
	for (let i=0; i<edges.length; i++) if (character.edges[i]) total++;
	return total;
}

function woundPenalty(){
	return Math.min(character.wounds, 3);
}

function FillPaceLabel(){
	var elderly = character.hindrances[11] ? 1 : 0;
	var obese = character.hindrances[16] ? 1 : 0;
	let lightarmor = 0;
	let heavyarmor = 0;
	for (let im of getEquippedArmor().mods){
		if (im.id.toLowerCase() == LIGHT_ARMOR.id.toLowerCase()) {
			lightarmor = im.level + 1;
		}
		if (im.id.toLowerCase() == HEAVY_ARMOR.id.toLowerCase()) {
			heavyarmor = im.level + 1;
		}
	}
	var pace = paceDefault - elderly - obese - heavyarmor + lightarmor - woundPenalty();
	$("#pace-l").html(pace);
}

function FillParryLabel(){
	var f = 0;
	if (character.skills[12] >= 0) f = Math.floor((character.skills[12]*2+4)/2);
	var block = character.edges[7] ? (character.edges[8] ? 2 : 1) : 0
	var parry = parryDefault + f + block - woundPenalty();
	$("#parry-l").html(parry);
}

function FillDodgeLabel(){
	var obese = character.hindrances[16] ? 1 : 0;
	var slippery = character.edges[17] ? (character.edges[18] ? 2 : 1) : 0
	var dodge = dodgeDefault - obese + slippery - woundPenalty();
	$("#dodge-l").html(dodge);
}

function FillToughnessLabel(){
	var vigor = Math.floor((character.attributes[4]*2+4)/2)
	var small = character.hindrances[20] ? 1 : 0;
	var obese = character.hindrances[16] ? 1 : 0;
	var brawny = character.edges[11] ? 1 : 0;
	var tough = character.edges[40] ? (character.edges[41] ? 2 : 1) : 0
	var toughness = toughnessDefault + vigor + obese - small + brawny + tough - woundPenalty();
	$("#toughness-l").html(toughness);
}

function FillCharismaLabel(){
	var oneeyed = character.hindrances[17] ? 1 : 0;
	var ugly = character.hindrances[21] ? 2 : 0;
	var attractive = character.edges[5] ? (character.edges[6] ? 4 : 2) : 0;
	var cha = character.edges[12] ? 2 : 0;
	var charisma = charismaDefault - ugly - oneeyed + attractive + cha;
	$("#charisma-l").html(charisma);
}

//start

for (let i=0; i<attributes.length; i++){
    $("#attribute-brow").before("<tr class='a-row' title='" + attributeDesc[i] + "'><td>" + attributes[i] + "</td><td class='stat-label' id='attribute-l" + i + "'></td></tr>");
    attributeLabels.push('#attribute-l' + i);

	$("#attribute-selector-brow").before("<tr><td class='attribute-selector-l'>" + attributes[i] + "</td><td><span class='selector-change-l' id='temp-attribute-l" + i + "'></span></td><td class='attribute-selector-bcell'><div id='attribute-bump" + i + "' class='button'>+</div></td></tr>");
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
    $("#skill-brow").before("<tr id='skill-row" + i + "'><td>" + skills[i].name + "</td><td class='stat-label' id='skill-l" + i + "'></td></tr>");
    skillLabels.push('#skill-l' + i);
	skillRows.push('#skill-row' + i);

	$("#skill-selector-brow").before("<tr><td class='skill-selector-l'>" + skills[i].name + " <span class='skill-attribute'>" + attributes[skills[i].attribute] + "</span>" + "</td><td class='selector-change-l'><span id='temp-skill-l" + i + "'></span></td><td class='skill-cost'><span id='skill-cost" + i + "'></span></td><td class='skill-bump-cell attribute-selector-bcell'><div id='skill-bump" + i + "' class='button'>+</div></td></tr>");
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
    $("#hindrance-brow").before("<tr id='hindrance-row" + i + "'><td><div class='hecell'>" + hindrances[i].name + "<div class=hindrance-desc>" + hindrances[i].description + "</div></div></td></tr>");
	hindranceRows.push('#hindrance-row' + i);

	var ht = hindrances[i].type //== MINOR ? "MINOR" : "MAJOR";
	$("#hindrance-select").append($("<div class='hindrance-select-row'><div>" + hindrances[i].name + " <span class='row-sublabel'>" + ht + "</span>" + "</div><div class='hindrance-selector-desc'>" + hindrances[i].description + "</div></div>").click(function(){step2HindranceSelector(i)}))
}

for (let i=0; i<edges.length; i++){
	$("#edge-brow").before("<tr id='edge-row" + i + "'><td><div class='hecell'>" + edges[i].name + "<div class=edge-desc>" + edges[i].description + "</div></div></td></tr>");
	edgeRows.push('#edge-row' + i);

	let reqs = "";
	let loops = 0;
	for (let r of edges[i].req_attribute){
		if (loops>0) reqs += ", ";
		reqs += "<span id='req"+reqid+"'>" + die[r[1]] + " " + attributes[r[0]] + "</span>";
		attributeReq.push({id:"#req"+reqid++, attribute:r[0], n:r[1]});
		loops++;
	}
	for (let r of edges[i].req_skill){
		if (loops>0) reqs += ", ";
		reqs += "<span id='req"+reqid+"'>" + die[r[1]] + " " + skills[r[0]].name + "</span>";
		skillReq.push({id:"#req"+reqid++, skill:r[0], n:r[1]});
		loops++;
	}
	if (edges[i].upgrades > -1){
		if (loops>0) reqs += ", ";
		reqs += "<span id='req"+reqid+"'>" + edges[edges[i].upgrades].name + "</span>";
		edgeReq.push({id:"#req"+reqid++, edge:edges[i].upgrades});
		loops++;
	}
	$("#edge-table").append($("<div id='edge-selector-row"+i+"'><div>" + edges[i].name + "</div><div><span id='req"+reqid+"'>" + edges[i].req_level + "</span></div><div>" + reqs + "</div><div class='edge-selector-desc'>" + edges[i].description + "</div></div>").click(function(){step2EdgeSelector(i)}));
	edgeSelectorRows.push('#edge-selector-row' + i);
	levelReq.push({id:"#req"+reqid++, level:edges[i].req_level});
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
		if (character.attributes[i] < (character.attributes[i] + tempAttributes.affected[i])) $(tempAttributeLabels[i]).addClass("changed-l")
		else $(tempAttributeLabels[i]).removeClass("changed-l");
		$(tempAttributeLabels[i]).html(die[character.attributes[i]] + " \u2192 " + (die[character.attributes[i] + tempAttributes.affected[i]]));
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
		if (character.skills[i] < character.skills[i]+tempSkills.affected[i]) $(tempSkillLabels[i]).addClass('changed-l');
		else $(tempSkillLabels[i]).removeClass('changed-l');
		if (character.skills[i]+tempSkills.affected[i] < 0) $(tempSkillLabels[i]).addClass('unlearned-l');
		else $(tempSkillLabels[i]).removeClass('unlearned-l');
		$(tempSkillLabels[i]).html(skillDie(character.skills[i]) + " \u2192 " + skillDie(character.skills[i]+tempSkills.affected[i]));
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
	character.edgePoints++;
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
			//elderly
			if (i == 11) character.skillPoints += elderlySkillPoints;
			//blind
			if (i == 3) character.edgePoints++

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
		character.edgePoints++;
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

//edge-selector
function openEdgeSelector(){
	$("#popup").removeClass("hidden");
	$("#edge-selector").removeClass("hidden");
	$("#edge-selector-step1").removeClass("hidden");
	$("#edge-selector-step2").addClass("hidden");
}
function closeEdgeSelector(){
	$("#popup").addClass("hidden");
	$("#edge-selector").addClass("hidden");
}
function isObtainableEdge(i){
	if (character.level >= edges[i].req_level){
		if (edges[i].upgrades >= 0) {
			if (!character.edges[edges[i].upgrades]) return false;
		}
		for (let r of edges[i].req_attribute) {if (character.attributes[r[0]] < r[1]) return false};
		for (let r of edges[i].req_skill) {if (character.skills[r[0]] < r[1]) return false};
		return true;
	}
	else return false;
}
function step2EdgeSelector(i){
	if (isObtainableEdge(i)) {
		$("#edge-selector-step1").addClass("hidden");
		$("#edge-selector-step2").removeClass("hidden");
		$("#edge-selector-l").text(edges[i].name);
		$("#edge-selector-add-b").off();
		$("#edge-selector-add-b").click(function(){
			if (character.edgePoints > 0){
				character.edgePoints--;
				character.edges[i] = true;
				update();
				closeEdgeSelector();
			}
		});
	}
}

//renamer
function openRename(){
	$("#popup").removeClass("hidden");
	$('#rename-window').removeClass('hidden');
	$("#firstname-i").val(character.firstname);
	$("#nickname-i").val(character.nickname);
	$("#lastname-i").val(character.lastname);
}
function closeRename(){
	$("#popup").addClass("hidden");
	$('#rename-window').addClass('hidden');
}
function confirmRename(){
	character.firstname = $("#firstname-i").val();
	character.nickname = $("#nickname-i").val();
	character.lastname = $("#lastname-i").val();
	closeRename();
	update();
}

/* new character */
function openNewCharWarning(){
	$("#popup").removeClass("hidden");
	$('#new-char-warning').removeClass('hidden');
}
function closeNewCharWarning(){
	$("#popup").addClass("hidden");
	$('#new-char-warning').addClass('hidden');
}
function newCharacter(){
	character = JSON.parse(defaultCharacter);
	closeNewCharWarning();
	update();
	updateInventory();
}

new Clipboard('.cpy');
tippy('.a-row', {
  placement: 'right',
	animation: 'shift-toward',
	dynamicTitle: true,
	arrow: true,
	distance: 20
})

