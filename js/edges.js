edges = [
    {
        name: "Ace",
        req_level: 0,
        req_attribute: [[1, 2]],
        req_skill: [],
        description: "+2 " + skills[3].name + ". May make Soak rolls for vehicles at -2."
    },
    {
        name: "Acrobat",
        req_level: 0,
        req_attribute: [[0, 2][3,1]],
        req_skill: [],
        description: "+2 " + skills[3].name + ". May make Soak rolls for vehicles at -2."
    },
    {
        name: "Perceptive",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Ambidextrous",
        req_level: 0,
        req_attribute: [[0, 2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Assassin",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [[2,2], [12, 1], [13, 1]],
        description: ""
    },
    {
        name: "Attractive",
        req_level: 0,
        req_attribute: [[4,1]],
        req_skill: [],
        description: ""
    },
    {
        name: "Very Attractive",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Block",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,2]],
        description: ""
    },
    {
        name: "Improved Block",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Brawler",
        req_level: 0,
        req_attribute: [[3,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Bruiser",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Brawny",
        req_level: 0,
        req_attribute: [[3,1], [4,1]],
        req_skill: [],
        description: ""
    },
    {
        name: "Charismatic",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Combat Reflexes",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Common Bond",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Counter",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,2]],
        description: ""
    },
    {
        name: "Improved Counter",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Dodge",
        req_level: 4,
        req_attribute: [[0,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Improved Dodge",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Prepared",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        description: "+2 to rolls using a " + benny_name + "."
    },
    {
        name: "Extraction",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        description: "Roll " + attrbutes[0] + " to ignore one attack of opportunity."
    },
    {
        name: "Fast Healer",
        req_level: 0,
        req_attribute: [[4,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Frenzy",
        req_level: 4,
        req_attribute: [],
        req_skill: [[12,3]],
        description: ""
    },
    {
        name: "Improved Frenzy",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "McGyver",
        req_level: 0,
        req_attribute: [],
        req_skill: [[7,3]],
        description: 'May "jury-rig" a device once per session.'
    },
    {
        name: "Giant Killer",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: ""
    },
    {
        name: "Hard to Kill",
        req_level: 0,
        req_attribute: [[2,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Investigator",
        req_level: 0,
        req_attribute: [[1,2]],
        req_skill: [[11,2]],
        description: ""
    },
    {
        name: "Luck",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "+1 " + benny_name + " per session."
    },
    {
        name: "Great Luck",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "+2 " + benny_name + " per session."
    },
    {
        name: "Martial Artist",
        req_level: 0,
        req_attribute: [],
        req_skill: [[12, 1]],
        description: "+d4 to unarmed damage rolls."
    },
    {
        name: "Great Martial Artist",
        req_level: 8,
        req_attribute: [],
        req_skill: [[12, 3]],
        description: "+d6 to unarmed damage rolls."
    },
    {
        name: "Mr. Fix It",
        req_level: 0,
        req_attribute: [],
        req_skill: [[7, 1]],
        description: "+2 when repairing."
    },
    {
        name: "No Mercy",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        description: "May spend " + benny_name + " on damage rolls."
    },
    {
        name: "Quick Draw",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        description: ""
    },
    {
        name: "Scavenger",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "Get extra loot."
    },
    {
        name: "Steady Hands",
        req_level: 0,
        req_attribute: [[0,2]],
        req_skill: [],
        description: "No penalty when running."
    },
    {
        name: "Scholar",
        req_level: 0,
        req_attribute: [],
        req_skill: [[6, 2]],
        description: "+2 " + skills[6].name + "."
    },
    {
        name: "Strong Willed",
        req_level: 0,
        req_attribute: [],
        req_skill: [[8, 1]],
        description: "+2 " + skills[8].name + "."
    },
    {
        name: "Thief",
        req_level: 0,
        req_attribute: [[0,8]],
        req_skill: [],
        description: "+1 " + skills[13].name + ". +1 " + skills[2].name + ". +1 " + skills[0].name + "."
    },
    {
        name: "Tough as Nails",
        req_level: 4,
        req_attribute: [],
        req_skill: [],
        description: "+1 Toughness."
    },
    {
        name: "Toughest Nail",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: "+2 Toughness."
    },
    {
        name: "Trademark (" + skills[1].name + ")",
        req_level: 0,
        req_attribute: [],
        req_skill: [[1,3]],
        description: "+1 " + skills[1].name + " with a chosen weapon type."
    },
    {
        name: "Improved Trademark (" + skills[1].name + ")",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: "+2 " + skills[1].name + " with a chosen weapon type."
    },
    {
        name: "Trademark (" + skills[12].name + ")",
        req_level: 0,
        req_attribute: [],
        req_skill: [[12,3]],
        description: "+1 " + skills[12].name + " with a chosen weapon type."
    },
    {
        name: "Improved Trademark (" + skills[12].name + ")",
        req_level: 8,
        req_attribute: [],
        req_skill: [],
        description: "+2 " + skills[12].name + " with a chosen weapon type."
    },
    {
        name: "Two-Fisted",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "May attack for each hand without multi-action penalty."
    },
    {
        name: "Deflect",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "+1 Parry."
    },
    {
        name: "Improved Deflect",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "+2 Parry."
    },
    {
        name: "Toughest Nail",
        req_level: 0,
        req_attribute: [],
        req_skill: [],
        description: "+2 Toughness."
    },
]