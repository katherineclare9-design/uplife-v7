// =====================
// UpLift Nutrition Badges
// =====================


const nutritionBadges = {


    firstMeal: {

        name: "First Fuel",

        icon: "🥗",

        description: "Log your first nutrition entry.",

        category: "Nutrition",

        rarity: "Common",

        goal: 1,

        progress: () => userData.nutritionEntries.length,

        requirement: () => userData.nutritionEntries.length >= 1

    },





    hydrationHero: {

        name: "Hydration Hero",

        icon: "💧",

        description: "Reach your water goal 10 times.",

        category: "Nutrition",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.waterGoalCompletions || 0,

        requirement: () => (userData.waterGoalCompletions || 0) >= 10

    },





    nutritionConsistency: {

        name: "Fuel Consistency",

        icon: "🔥",

        description: "Maintain a 7 day nutrition streak.",

        category: "Nutrition",

        rarity: "Epic",

        goal: 7,

        progress: () => userData.nutritionStreak,

        requirement: () => userData.nutritionStreak >= 7

    }


};
