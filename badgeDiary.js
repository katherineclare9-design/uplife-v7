// =====================
// UpLift Diary Badges
// =====================


const diaryBadges = {


    firstReflection: {

        name: "First Reflection",

        icon: "📖",

        description: "Create your first diary entry.",

        category: "Diary",

        rarity: "Common",

        goal: 1,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 1

    },





    dailyWriter: {

        name: "Daily Writer",

        icon: "✍️",

        description: "Create 10 diary entries.",

        category: "Diary",

        rarity: "Rare",

        goal: 10,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 10

    },





    memoryKeeper: {

        name: "Memory Keeper",

        icon: "📚",

        description: "Create 100 diary entries.",

        category: "Diary",

        rarity: "Legendary",

        goal: 100,

        progress: () => userData.diaryEntries.length,

        requirement: () => userData.diaryEntries.length >= 100

    }


};
