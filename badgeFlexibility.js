// =====================
// UpLift Flexibility Badges
// =====================


const flexibilityBadges = {


    flexibilityFlow: {

        name: "Flexibility Flow",

        icon: "🩰",

        description: "Complete 10 flexibility sessions.",

        category: "Flexibility",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 10

    },





    flexibilityMaster: {

        name: "Flexibility Master",

        icon: "🤸",

        description: "Complete 50 flexibility sessions.",

        category: "Flexibility",

        rarity: "Epic",

        goal: 50,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 50

    },





    flexibilityLegend: {

        name: "Flexibility Legend",

        icon: "✨",

        description: "Complete 100 flexibility sessions.",

        category: "Flexibility",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.flexibilitySessions,

        requirement: () => userData.flexibilitySessions >= 100

    }


};
