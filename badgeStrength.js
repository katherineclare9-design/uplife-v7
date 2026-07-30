// =====================
// UpLift Strength Badges
// =====================


const strengthBadges = {


    strengthStarter: {

        name: "Strength Starter",

        icon: "💪",

        description: "Complete 5 strength workouts.",

        category: "Strength",

        rarity: "Common",

        goal: 5,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 5

    },





    strengthMaster: {

        name: "Strength Master",

        icon: "🏋️",

        description: "Complete 25 strength workouts.",

        category: "Strength",

        rarity: "Epic",

        goal: 25,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 25

    },





    strengthLegend: {

        name: "Strength Legend",

        icon: "⚡",

        description: "Complete 100 strength workouts.",

        category: "Strength",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.strengthWorkouts,

        requirement: () => userData.strengthWorkouts >= 100

    }


};
