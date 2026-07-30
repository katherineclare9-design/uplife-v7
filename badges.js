// =====================
// UpLift Badge System v3
// =====================

const badges = {



    // =====================
    // GETTING STARTED
    // =====================



    firstStep: {

        name:"First Step",

        icon:"🌱",

        description:"Complete your first workout.",

        category:"Getting Started",

        rarity:"Common",

        goal:1,

        progress:()=>userData.workoutsCompleted,

        requirement:()=>userData.workoutsCompleted >= 1

    },




    fiveWorkouts: {

        name:"Building Momentum",

        icon:"🚀",

        description:"Complete 5 workouts.",

        category:"Getting Started",

        rarity:"Common",

        goal:5,

        progress:()=>userData.workoutsCompleted,

        requirement:()=>userData.workoutsCompleted >= 5

    },




    tenWorkouts: {

        name:"Committed Athlete",

        icon:"🏅",

        description:"Complete 10 workouts.",

        category:"Getting Started",

        rarity:"Rare",

        goal:10,

        progress:()=>userData.workoutsCompleted,

        requirement:()=>userData.workoutsCompleted >= 10

    },






    fiftyWorkouts: {

        name:"Dedicated Athlete",

        icon:"🏆",

        description:"Complete 50 workouts.",

        category:"Getting Started",

        rarity:"Legendary",

        goal:50,

        progress:()=>userData.workoutsCompleted,

        requirement:()=>userData.workoutsCompleted >= 50

    },







    // =====================
    // CORE
    // =====================



    coreStarter: {

        name:"Core Starter",

        icon:"🔥",

        description:"Complete 5 core workouts.",

        category:"Core",

        rarity:"Common",

        goal:5,

        progress:()=>userData.coreWorkouts,

        requirement:()=>userData.coreWorkouts >= 5

    },





    coreCrusher: {

        name:"Core Crusher",

        icon:"💥",

        description:"Complete 25 core workouts.",

        category:"Core",

        rarity:"Rare",

        goal:25,

        progress:()=>userData.coreWorkouts,

        requirement:()=>userData.coreWorkouts >= 25

    },





    coreMaster: {

        name:"Core Master",

        icon:"⚡",

        description:"Complete 100 core workouts.",

        category:"Core",

        rarity:"Epic",

        goal:100,

        progress:()=>userData.coreWorkouts,

        requirement:()=>userData.coreWorkouts >= 100

    },







    // =====================
    // STRENGTH
    // =====================



    strengthStarter: {

        name:"Strength Starter",

        icon:"💪",

        description:"Complete 5 strength workouts.",

        category:"Strength",

        rarity:"Common",

        goal:5,

        progress:()=>userData.strengthWorkouts,

        requirement:()=>userData.strengthWorkouts >= 5

    },





    strengthMaster: {

        name:"Strength Master",

        icon:"🏋️",

        description:"Complete 25 strength workouts.",

        category:"Strength",

        rarity:"Epic",

        goal:25,

        progress:()=>userData.strengthWorkouts,

        requirement:()=>userData.strengthWorkouts >= 25

    },





    strengthLegend: {

        name:"Strength Legend",

        icon:"👑",

        description:"Complete 100 strength workouts.",

        category:"Strength",

        rarity:"Legendary",

        goal:100,

        progress:()=>userData.strengthWorkouts,

        requirement:()=>userData.strengthWorkouts >= 100

    },

// =====================
// FLEXIBILITY
// =====================



flexibilityFlow: {

    name:"Flexibility Flow",

    icon:"🩰",

    description:"Complete 10 flexibility sessions.",

    category:"Flexibility",

    rarity:"Rare",

    goal:10,

    progress:()=>userData.flexibilitySessions,

    requirement:()=>userData.flexibilitySessions >= 10

},





flexibilityMaster: {

    name:"Flexibility Master",

    icon:"🌸",

    description:"Complete 100 flexibility sessions.",

    category:"Flexibility",

    rarity:"Legendary",

    goal:100,

    progress:()=>userData.flexibilitySessions,

    requirement:()=>userData.flexibilitySessions >= 100

},







// =====================
// BACKSPOT
// =====================



backspotPower: {

    name:"Backspot Power",

    icon:"🤸",

    description:"Complete 10 backspot workouts.",

    category:"Backspot",

    rarity:"Rare",

    goal:10,

    progress:()=>userData.backspotWorkouts,

    requirement:()=>userData.backspotWorkouts >= 10

},





backspotElite: {

    name:"Backspot Elite",

    icon:"🪽",

    description:"Complete 100 backspot workouts.",

    category:"Backspot",

    rarity:"Legendary",

    goal:100,

    progress:()=>userData.backspotWorkouts,

    requirement:()=>userData.backspotWorkouts >= 100

},







// =====================
// LOWER BODY
// =====================



legDayStarter: {

    name:"Leg Day Starter",

    icon:"🦵",

    description:"Complete 10 lower body workouts.",

    category:"Lower Body",

    rarity:"Common",

    goal:10,

    progress:()=>userData.lowerBodyWorkouts,

    requirement:()=>userData.lowerBodyWorkouts >= 10

},





legDayLegend: {

    name:"Leg Day Legend",

    icon:"🔥",

    description:"Complete 100 lower body workouts.",

    category:"Lower Body",

    rarity:"Epic",

    goal:100,

    progress:()=>userData.lowerBodyWorkouts,

    requirement:()=>userData.lowerBodyWorkouts >= 100

},







// =====================
// JUMPS
// =====================



jumpStarter: {

    name:"Jump Starter",

    icon:"⬆️",

    description:"Complete 10 jump sessions.",

    category:"Jumps",

    rarity:"Common",

    goal:10,

    progress:()=>userData.jumpSessions,

    requirement:()=>userData.jumpSessions >= 10

},





jumpSpecialist: {

    name:"Jump Specialist",

    icon:"🚀",

    description:"Complete 100 jump sessions.",

    category:"Jumps",

    rarity:"Legendary",

    goal:100,

    progress:()=>userData.jumpSessions,

    requirement:()=>userData.jumpSessions >= 100

},







// =====================
// NUTRITION
// =====================



firstMeal: {

    name:"First Fuel",

    icon:"🍎",

    description:"Log your first meal.",

    category:"Nutrition",

    rarity:"Common",

    goal:1,

    progress:()=>userData.nutritionEntries.length,

    requirement:()=>userData.nutritionEntries.length >= 1

},





nutritionExplorer: {

    name:"Nutrition Explorer",

    icon:"🥗",

    description:"Log 50 meals.",

    category:"Nutrition",

    rarity:"Rare",

    goal:50,

    progress:()=>userData.nutritionEntries.length,

    requirement:()=>userData.nutritionEntries.length >= 50

},





nutritionMaster: {

    name:"Nutrition Master",

    icon:"⭐",

    description:"Log 250 meals.",

    category:"Nutrition",

    rarity:"Epic",

    goal:250,

    progress:()=>userData.nutritionEntries.length,

    requirement:()=>userData.nutritionEntries.length >= 250

},







// =====================
// HYDRATION
// =====================



firstSip: {

    name:"First Sip",

    icon:"💧",

    description:"Drink your first cup of water.",

    category:"Hydration",

    rarity:"Common",

    goal:1,

    progress:()=>userData.waterTotal || 0,

    requirement:()=>userData.waterTotal >= 1

},





hydrationHero: {

    name:"Hydration Hero",

    icon:"🌊",

    description:"Drink 100 cups of water.",

    category:"Hydration",

    rarity:"Epic",

    goal:100,

    progress:()=>userData.waterTotal || 0,

    requirement:()=>userData.waterTotal >= 100

},
    
// =====================
// DIARY / GROWTH
// =====================



firstDiary: {

    name:"First Page",

    icon:"📖",

    description:"Write your first diary entry.",

    category:"Growth",

    rarity:"Common",

    goal:1,

    progress:()=>userData.diaryEntries.length,

    requirement:()=>userData.diaryEntries.length >= 1

},





storyKeeper: {

    name:"Story Keeper",

    icon:"✍️",

    description:"Create 50 diary entries.",

    category:"Growth",

    rarity:"Rare",

    goal:50,

    progress:()=>userData.diaryEntries.length,

    requirement:()=>userData.diaryEntries.length >= 50

},





memoryMaster: {

    name:"Memory Master",

    icon:"📚",

    description:"Create 100 diary entries.",

    category:"Growth",

    rarity:"Epic",

    goal:100,

    progress:()=>userData.diaryEntries.length,

    requirement:()=>userData.diaryEntries.length >= 100

},







// =====================
// STREAKS
// =====================



sevenDayFlame: {

    name:"7 Day Flame",

    icon:"🔥",

    description:"Maintain a 7 day UpLift streak.",

    category:"Consistency",

    rarity:"Rare",

    goal:7,

    progress:()=>userData.streak,

    requirement:()=>userData.streak >= 7

},





thirtyDayFire: {

    name:"30 Day Fire",

    icon:"🔥🔥",

    description:"Maintain a 30 day UpLift streak.",

    category:"Consistency",

    rarity:"Epic",

    goal:30,

    progress:()=>userData.streak,

    requirement:()=>userData.streak >= 30

},





hundredDayLegend: {

    name:"100 Day Legend",

    icon:"👑",

    description:"Maintain a 100 day UpLift streak.",

    category:"Consistency",

    rarity:"Legendary",

    goal:100,

    progress:()=>userData.streak,

    requirement:()=>userData.streak >= 100

},







// =====================
// SPECIAL
// =====================



upliftBeginner: {

    name:"UpLift Beginner",

    icon:"🌱",

    description:"Begin your personal growth journey.",

    category:"Special",

    rarity:"Common",

    goal:1,

    progress:()=>userData.profileCreated ? 1 : 0,

    requirement:()=>userData.profileCreated === true

},





levelTen: {

    name:"Rising Star",

    icon:"⭐",

    description:"Reach Level 10.",

    category:"Special",

    rarity:"Epic",

    goal:10,

    progress:()=>userData.level,

    requirement:()=>userData.level >= 10

},





ultimateAthlete: {

    name:"Ultimate Athlete",

    icon:"💎",

    description:"Complete 250 total workouts.",

    category:"Special",

    rarity:"Legendary",

    goal:250,

    progress:()=>userData.workoutsCompleted,

    requirement:()=>userData.workoutsCompleted >= 250

}

};






function checkBadges() {


    Object.keys(badges).forEach(id => {


        const badge = badges[id];



        if (

            badge.requirement() &&

            !userData.unlockedBadges.includes(id)

        ) {


            userData.unlockedBadges.push(id);



            alert(

                "🎉 Badge Unlocked!\n\n" +

                badge.icon +

                " " +

                badge.name

            );


        }


    });



    saveUserData();


}
