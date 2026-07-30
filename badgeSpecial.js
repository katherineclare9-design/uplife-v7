// =====================
// UpLift Special Achievement Badges
// =====================

const specialBadges = {

    // =====================
    // Getting Started
    // =====================

    firstStep: {

        name: "First Step",

        icon: "🌱",

        description: "Complete your first workout.",

        category: "Getting Started",

        rarity: "Common",

        goal: 1,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 1

    },



    fiveWorkouts: {

        name: "Building Momentum",

        icon: "🚀",

        description: "Complete 5 workouts.",

        category: "Getting Started",

        rarity: "Common",

        goal: 5,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 5

    },



    tenWorkouts: {

        name: "Committed Athlete",

        icon: "🏅",

        description: "Complete 10 workouts.",

        category: "Getting Started",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 10

    },



    dedicatedAthlete: {

        name: "Dedicated Athlete",

        icon: "🏆",

        description: "Complete 50 workouts.",

        category: "Getting Started",

        rarity: "Legendary",

        goal: 50,

        progress: () => userData.workoutsCompleted,

        requirement: () => userData.workoutsCompleted >= 50

    },



    // =====================
    // Special
    // =====================

    levelTen: {

        name: "Rising Star",

        icon: "⭐",

        description: "Reach Level 10.",

        category: "Special",

        rarity: "Epic",

        goal: 10,

        progress: () => userData.level,

        requirement: () => userData.level >= 10

    }

};
