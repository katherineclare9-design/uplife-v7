// =====================
// UpLift Streak Badges
// =====================


const streakBadges = {


    firstFlame: {

        name: "First Flame",

        icon: "🌱",

        description: "Maintain a 3 day UpLift streak.",

        category: "Streak",

        rarity: "Common",

        goal: 3,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 3

    },




    weekWarrior: {

        name: "Week Warrior",

        icon: "🔥",

        description: "Maintain a 7 day UpLift streak.",

        category: "Streak",

        rarity: "Rare",

        goal: 7,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 7

    },





    twoWeekTitan: {

        name: "Two Week Titan",

        icon: "⚡",

        description: "Maintain a 14 day UpLift streak.",

        category: "Streak",

        rarity: "Epic",

        goal: 14,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 14

    },






    monthlyMachine: {

        name: "Monthly Machine",

        icon: "🏆",

        description: "Maintain a 30 day UpLift streak.",

        category: "Streak",

        rarity: "Legendary",

        goal: 30,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 30

    },






    centuryLegend: {

        name: "Century Legend",

        icon: "👑",

        description: "Maintain a 100 day UpLift streak.",

        category: "Streak",

        rarity: "Mythic",

        goal: 100,

        progress: () => userData.streak,

        requirement: () => userData.streak >= 100

    }


};
