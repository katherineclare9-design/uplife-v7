// =====================
// UpLift Core Badges
// =====================


const coreBadges = {


    coreStarter: {

        name: "Core Starter",

        icon: "🔥",

        description: "Complete 5 core workouts.",

        category: "Core",

        rarity: "Common",

        goal: 5,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 5

    },



    coreCrusher: {

        name: "Core Crusher",

        icon: "💥",

        description: "Complete 25 core workouts.",

        category: "Core",

        rarity: "Rare",

        goal: 25,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 25

    },



    coreMaster: {

        name: "Core Master",

        icon: "🏆",

        description: "Complete 100 core workouts.",

        category: "Core",

        rarity: "Epic",

        goal: 100,

        progress: () => userData.coreWorkouts,

        requirement: () => userData.coreWorkouts >= 100

    }


};
