edges = [
    {
        name: "Ace",
        req_level: 0,
        req_attribute: [[1, 2]],
        req_skill: [],
        upgrades: -1,
        description: "+2 " + skills[3].name + ". May make Soak rolls for vehicles at -2."
    },
    {
        name: "Acrobat",
        req_level: 0,
        req_attribute: [[0, 2], [3,1]],
        req_skill: [],
        upgrades: -1,
        description: "+2 to " + skills[13].name + ". +1 Parry if carrying few items."
    },
    {
        name: "Perceptive",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+2 " + skills[11].name + "."
    },
    {
        name: "Ambidextrous",
        req_level: 0,
        req_attribute: [[0, 2]],
        req_skill: [],
        upgrades: -1,
        description: "No penalty for using either hand."
    },
    {
        name: "Assassin",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [[2,2], [12, 1], [13, 1]],
        upgrades: -1,
        description: "+2 to damage when striking a foes unaware."
    },
    {
        name: "Attractive",
        req_level: 0,
        req_attribute: [[4,1]],
        req_skill: [],
        upgrades: -1,
        description: "Charisma +2."
    },
    {
        name: "Very Attractive",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: 5,
        description: "Charisma +4."
    },
    {
        name: "Block",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,2]],
        upgrades: -1,
        description: "Parry +1."
    },
    {
        name: "Improved Block",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 7,
        description: "Parry +2."
    },
    {
        name: "Brawler",
        req_level: 0,
        req_attribute: [[3,2]],
        req_skill: [],
        upgrades: -1,
        description: "+2 to unarmed damage rolls."
    },
    {
        name: "Bruiser",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        upgrades: 9,
        description: "Unarmed damage die is a d8."
    },
    {
        name: "Brawny",
        req_level: 0,
        req_attribute: [[3,1], [4,1]],
        req_skill: [],
        upgrades: -1,
        description: "Toughness +1."
    },
    {
        name: "Charismatic",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        upgrades: -1,
        description: "Charisma +2."
    },
    {
        name: "Combat Reflexes",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+2 to recover from Shaken."
    },
    {
        name: "Common Bond",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        upgrades: -1,
        description: "May give " + benny_name + " to companions."
    },
    {
        name: "Counter",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,2]],
        upgrades: -1,
        description: "Free -2 " + skills[12].name + " attack when a foe misses against you."
    },
    {
        name: "Improved Counter",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 15,
        description: "Free " + skills[12].name + " attack when a foe misses against you."
    },
    {
        name: "Nimble",
        req_level: 4,
        req_attribute: [[0,2]],
        req_skill: [],
        upgrades: -1,
        description: "+1 dodge."
    },
    {
        name: "Slippery",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 17,
        description: "+2 dodge."
    },
    {
        name: "Prepared",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        upgrades: -1,
        description: "+2 to rolls using a " + benny_name + "."
    },
    {
        name: "Extraction",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        upgrades: -1,
        description: "Roll " + attributes[0] + " to ignore one attack of opportunity."
    },
    {
        name: "Fast Healer",
        req_level: 0,
        req_attribute: [[4,2]],
        req_skill: [],
        upgrades: -1,
        description: "+2 to natural healing rolls."
    },
    {
        name: "Frenzy",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,3]],
        upgrades: -1,
        description: "Extra " + skills[12].name + " attack at -2."
    },
    {
        name: "Improved Frenzy",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 22,
        description: "Extra " + skills[12].name + " attack."
    },
    {
        name: "McGyver",
        req_level: 0,
        req_attribute: [],
        req_skill: [[7,3]],
        upgrades: -1,
        description: 'May "jury-rig" a device once per session.'
    },
    {
        name: "Giant Killer",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "Additional d6 of damage when fighting very large enemies."
    },
    {
        name: "Hard to Kill",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        upgrades: -1,
        description: "Ignore wound penalties when rolling " + attributes[4] + "."
    },
    {
        name: "Investigator",
        req_level: 0,
        req_attribute: [[1,2]],
        req_skill: [[11,2]],
        upgrades: -1,
        description: "+2 " + skills[11].name + " when searching."
    },
    {
        name: "Luck",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+1 " + benny_name + " per session."
    },
    {
        name: "Great Luck",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        upgrades: 28,
        description: "+2 " + benny_name + " per session."
    },
    {
        name: "Martial Artist",
        req_level: 0,
        req_attribute: [],
        req_skill: [[12, 1]],
        upgrades: -1,
        description: "+d4 to unarmed damage rolls."
    },
    {
        name: "Great Martial Artist",
        req_level: 8,
        req_attribute: [],
        req_skill: [[12, 3]],
        upgrades: 30,
        description: "+d6 to unarmed damage rolls."
    },
    {
        name: "Mr. Fix It",
        req_level: 0,
        req_attribute: [],
        req_skill: [[7, 1]],
        upgrades: -1,
        description: "+2 when repairing."
    },
    {
        name: "No Mercy",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "May spend " + benny_name + " on damage rolls."
    },
    {
        name: "Quick Draw",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        upgrades: -1,
        description: "May draw weapon as a free action."
    },
    {
        name: "Scavenger",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "Get extra loot."
    },
    {
        name: "Steady Hands",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        upgrades: -1,
        description: "No penalty when running."
    },
    {
        name: "Scholar",
        req_level: 0,
        req_attribute: [],
        req_skill: [[6, 2]],
        upgrades: -1,
        description: "+2 " + skills[6].name + "."
    },
    {
        name: "Strong Willed",
        req_level: 0,
        req_attribute: [],
        req_skill: [[8, 1]],
        upgrades: -1,
        description: "+2 " + skills[8].name + "."
    },
    {
        name: "Thief",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        upgrades: -1,
        description: "+1 " + skills[13].name + ". +1 " + skills[2].name + ". +1 " + skills[0].name + "."
    },
    {
        name: "Tough as Nails",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+1 Toughness."
    },
    {
        name: "Toughest Nail",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 40,
        description: "+2 Toughness."
    },
    {
        name: "Trademark (" + skills[1].name + ")",
        req_level: 0,
        req_attribute: [],
        req_skill: [[1,3]],
        upgrades: -1,
        description: "+1 " + skills[1].name + " with a chosen weapon type."
    },
    {
        name: "Improved Trademark (" + skills[1].name + ")",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 42,
        description: "+2 " + skills[1].name + " with a chosen weapon type."
    },
    {
        name: "Trademark (" + skills[12].name + ")",
        req_level: 0,
        req_attribute: [],
        req_skill: [[12,3]],
        upgrades: -1,
        description: "+1 " + skills[12].name + " with a chosen weapon type."
    },
    {
        name: "Improved Trademark (" + skills[12].name + ")",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        upgrades: 44,
        description: "+2 " + skills[12].name + " with a chosen weapon type."
    },
    {
        name: "Two-Fisted",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "May attack for each hand without multi-action penalty."
    },
    {
        name: "Deflect",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+1 Parry."
    },
    {
        name: "Improved Deflect",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: 47,
        description: "+2 Parry."
    },
	{
        name: "Connections",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        upgrades: -1,
        description: "+2 " + skills[14].name
    },
    {
        name: "Gallop",
        req_level: 0,
        req_attribute: [],
        req_skill: [[13,2]],
        upgrades: -1,
        description: "Deal bonus damage depending on the distance tarveled this turn. Only once per fight."
    },
    {
        name: "Tactician",
        req_level: 0,
        req_attribute: [[1,1]],
        req_skill: [],
        upgrades: -1,
        description: "Add your " + attributes[1] + " die to your damage on your first turn if the party caught foes unaware."
    },
]
