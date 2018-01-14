die = ["d4", "d6", "d8", "d10", "d12"];
benny_name = "Undo";
attributes = ["Agility", "Smarts", "Spirit", "Strength", "Vigor"];
levelUpCost = 5;
paceDefault = 6;
parryDefault = 2;
toughnessDefault = 2;
dodgeDefault = 4;
charismaDefault = 0;
hindranceMax = 4;
elderlySkillPoints = 4;

skills = [
    //AGILITY
    {
        attribute:0,
        name:'Security',
        description:"The ability to set or, bypass securities such as locks and traps."
    },
    {
        attribute:0,
        name:'Shooting',
        description:"One's effectiveness with ranged weapons."
    },
    {
        attribute:0,
        name:'Stealth',
        description:"The faculty to remain unnoticed."
    },
    //SMARTS
    {
        attribute:1,
        name:'Piloting',
        description:"The ability to control vehicles of all kinds."
    },
    {
        attribute:1,
        name:'Gambling',
        description:"The capacity to make succesful bets."
    },
    {
        attribute:1,
        name:'Healing',
        description:"The faculty to mend wounds and cure diseases."
    },
    {
        attribute:1,
        name:'Knowledge',
        description:"Wisdom and education."
    },
    {
        attribute:1,
        name:'Tinkering',
        description:"One's ability to craft, modify or repair."
    },
    //SPIRIT
    {
        attribute:2,
        name:'Coercion',
        description:"The capacity to influence."
    },
    {
        attribute:2,
        name:'Instinct',
        description:"The surreal feeling of good or bad."
    },
    {
        attribute:2,
        name:'Companionship',
        description:"The capacity to help friends."
    },
    {
        attribute:2,
        name:'Awareness',
        description:"The aptitude to notice details and to be left unsurprised."
    },
    //STRENGTH
    {
        attribute:0,
        name:'Melee',
        description:"One's talent with melee weapons."
    },
    {
        attribute:3,
        name:'Athletics',
        description:"One's prowess in athletics and acrobatics."
    },
	{
        attribute:1,
        name:'Barter',
        description:"Your ability to make profits from commerce."
    }
];

MINOR = 1;
MAJOR = 2;
hindrances = [
    {
		name:"All Thumbs", type:MAJOR,
		description:"-2 " + skills[7].name + "."
	},
	{
		name:"Arrogant", type:MAJOR,
		description:"Defy leadership, humiliate opponents."
	},
	{
		name:"Bad Eyes", type:MINOR,
		description:"-2 to Hit rolls when targeting distant opponents."
	},
	{
		name:"Blind", type:MAJOR,
		description:"-6 to rolls that rely on vision. +1 Edge."
	},
	{
		name:"Bad Luck", type:MAJOR,
		description:"-1 " + benny_name + " per session."
	},
	{
		name:"Big Mouth", type:MINOR,
		description:"Can't keep secrets. Makes inappropriate remarks."
	},
	{
		name:"Bloodthirsty", type:MAJOR,
		description:"Cannot use less than lethal force. Doesn't take prisoners."
	},
	{
		name:"Careful", type:MINOR,
		description:"Overly cautious."
	},
	{
		name:"Coward", type:MINOR,
		description:"-2 to Fear rolls."
	},
	{
		name:"Honor", type:MAJOR,
		description:"Can never lie or betray."
	},
	{
		name:"Death Wish", type:MINOR,
		description:"Finds ways to endanger themselves."
	},
	{
		name:"Elderly", type:MAJOR,
		description:"-1 Pace, -2 " + attributes[3] + ". -2 " + attributes[4] + ". +4 Skill Points."
	},
	{
		name:"Greedy", type:MAJOR,
		description:"Cannot give away items or money. Driven by material needs."
	},
	{
		name:"Hard of hearing", type:MINOR,
		description:"-2 " + skills[11].name + " when sounds are involved. Miss parts of conversations."
	},
	{
		name:"Illiterate", type:MINOR,
		description:"Cannot read or write."
	},
	{
		name:"Loyal", type:MINOR,
		description:"Protects friends."
	},
	{
		name:"Obese", type:MAJOR,
		description:"+1 Toughness. -1 Pace. -1 dodge. -1 " + skills[13].name + "."
	},
	{
		name:"One eyed", type:MAJOR,
		description:"-1 Charisma. -2 " + skills[1].name + "."
	},
	{
		name:"Pacifist", type:MINOR,
		description:"Can only fight in self defense."
	},
	{
		name:"Poor", type:MINOR,
		description:"No starting funds."
	},
	{
		name:"Small", type:MINOR,
		description:"-1 Toughness."
	},
	{
		name:"Ugly", type:MINOR,
		description:"-2 Charisma."
	},
	{
		name:"Wanted", type:MINOR,
		description:"Widely known criminal background."
	}
]
