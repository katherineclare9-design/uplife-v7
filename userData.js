/* =====================
   USER DATA
===================== */


let userData = {


    // =====================
    // PROFILE
    // =====================


    profileCreated:false,

    profileName:"",

    athleteType:"",

    goal:"",

    profileDate:"",




    // =====================
    // SETTINGS
    // =====================


    mode:"Regular",

    arfidSupport:false,





    // =====================
    // XP / LEVEL
    // =====================


    xp:0,

    level:1,

    xpToNextLevel:100,





    // =====================
    // WORKOUT STATS
    // =====================


    workoutsCompleted:0,

    coreWorkouts:0,

    strengthWorkouts:0,

    backspotWorkouts:0,

    flexibilitySessions:0,

    lowerBodyWorkouts:0,

    upperBodyWorkouts:0,

    jumpSessions:0,





    completedToday:[],





    // =====================
    // NUTRITION
    // =====================


    nutritionXP:0,

    nutritionEntries:[],

    caloriesToday:0,



    waterToday:0,

    waterGoal:8,





    // =====================
    // DIARY
    // =====================


    diaryEntries:[],

    selectedDiaryDate:"",





    // =====================
    // STREAKS
    // =====================


    streak:0,

    lastActiveDate:"",





    // =====================
    // BADGES
    // =====================


    unlockedBadges:[],



};









// =====================
// BADGE LIBRARY
// =====================


const badges = {



/* =====================
   TRAINING
===================== */



firstWorkout:{

    name:"First Full Out",

    icon:"⭐",

    category:"Training",

    description:"Complete your first workout",

    goal:1,

    reward:25,

    rarity:"Starter"

},




coreCrusher:{

    name:"Core Crusher",

    icon:"🔥",

    category:"Training",

    description:"Complete 25 core workouts",

    goal:25,

    reward:100,

    rarity:"Bronze"

},




strengthBuilder:{

    name:"Strength Builder",

    icon:"🏋️",

    category:"Training",

    description:"Complete 50 strength workouts",

    goal:50,

    reward:250,

    rarity:"Gold"

},




backspotBoss:{

    name:"Backspot Boss",

    icon:"🪽",

    category:"Training",

    description:"Complete 25 backspot workouts",

    goal:25,

    reward:150,

    rarity:"Silver"

},




flexibilityMaster:{

    name:"Flexibility Master",

    icon:"🌸",

    category:"Training",

    description:"Complete 50 flexibility sessions",

    goal:50,

    reward:250,

    rarity:"Gold"

},




legDayLegend:{

    name:"Leg Day Legend",

    icon:"🦵",

    category:"Training",

    description:"Complete 50 lower body workouts",

    goal:50,

    reward:200,

    rarity:"Silver"

},




jumpSpecialist:{

    name:"Jump Specialist",

    icon:"🚀",

    category:"Training",

    description:"Complete 100 jump sessions",

    goal:100,

    reward:300,

    rarity:"Gold"

},


/* =====================
   NUTRITION BADGES
===================== */



firstMeal:{

    name:"First Fuel",

    icon:"🍎",

    category:"Nutrition",

    description:"Log your first meal",

    goal:1,

    reward:25,

    rarity:"Starter"

},




nutritionExplorer:{

    name:"Nutrition Explorer",

    icon:"🥗",

    category:"Nutrition",

    description:"Log 25 meals",

    goal:25,

    reward:100,

    rarity:"Bronze"

},




balancedAthlete:{

    name:"Balanced Athlete",

    icon:"🌟",

    category:"Nutrition",

    description:"Log nutrition for 14 days",

    goal:14,

    reward:300,

    rarity:"Gold"

},








/* =====================
   HYDRATION BADGES
===================== */



firstSip:{

    name:"First Sip",

    icon:"💧",

    category:"Hydration",

    description:"Log your first water cup",

    goal:1,

    reward:10,

    rarity:"Starter"

},




hydrationHero:{

    name:"Hydration Hero",

    icon:"🌊",

    category:"Hydration",

    description:"Drink 100 cups of water",

    goal:100,

    reward:200,

    rarity:"Silver"

},




waterWarrior:{

    name:"Water Warrior",

    icon:"🏄",

    category:"Hydration",

    description:"Hit your water goal 30 times",

    goal:30,

    reward:500,

    rarity:"Diamond"

},








/* =====================
   DIARY BADGES
===================== */



firstPage:{

    name:"First Page",

    icon:"✍️",

    category:"Diary",

    description:"Create your first diary entry",

    goal:1,

    reward:25,

    rarity:"Starter"

},




memoryKeeper:{

    name:"Memory Keeper",

    icon:"📚",

    category:"Diary",

    description:"Create 50 diary entries",

    goal:50,

    reward:200,

    rarity:"Silver"

},




consistencyQueen:{

    name:"Consistency Queen",

    icon:"🔥",

    category:"Diary",

    description:"Log something for 30 days",

    goal:30,

    reward:750,

    rarity:"Legendary"

},








/* =====================
   SPECIAL BADGES
===================== */



freshStart:{

    name:"Fresh Start",

    icon:"🌱",

    category:"Special",

    description:"Complete your first week on UpLift",

    goal:7,

    reward:100,

    rarity:"Bronze"

},




resetAndRise:{

    name:"Reset & Rise",

    icon:"🌙",

    category:"Special",

    description:"Complete 7 Vacation Mode days",

    goal:7,

    reward:150,

    rarity:"Silver"

},




strongThroughIt:{

    name:"Strong Through It",

    icon:"❤️",

    category:"Special",

    description:"Complete 5 Period Mode logs",

    goal:5,

    reward:150,

    rarity:"Silver"

},




fullCircle:{

    name:"Full Circle",

    icon:"🏆",

    category:"Special",

    description:"Complete workout, nutrition, water, and diary in one day",

    goal:1,

    reward:50,

    rarity:"Gold"

},








/* =====================
   ELITE BADGES
===================== */



upliftChampion:{

    name:"UpLift Champion",

    icon:"👑",

    category:"Elite",

    description:"Reach Level 10 with 100 workouts and 50 diary entries",

    goal:1,

    reward:1000,

    rarity:"Legendary"

},




diamondAthlete:{

    name:"Diamond Athlete",

    icon:"💎",

    category:"Elite",

    description:"Earn 50 badges",

    goal:50,

    reward:750,

    rarity:"Diamond"

}



};
/* =====================
   BADGE FUNCTIONS
===================== */



function getBadgeProgress(id){


    const badge = badges[id];


    if(!badge){

        return 0;

    }




    switch(id){



        // TRAINING

        case "firstWorkout":

            return userData.workoutsCompleted;



        case "coreCrusher":

            return userData.coreWorkouts;



        case "strengthBuilder":

            return userData.strengthWorkouts;



        case "backspotBoss":

            return userData.backspotWorkouts;



        case "flexibilityMaster":

            return userData.flexibilitySessions;



        case "legDayLegend":

            return userData.lowerBodyWorkouts;



        case "jumpSpecialist":

            return userData.jumpSessions;







        // NUTRITION


        case "firstMeal":

        case "nutritionExplorer":

            return userData.nutritionEntries.length;



        case "balancedAthlete":

            return userData.nutritionStreak || 0;








        // WATER


        case "firstSip":

            return userData.waterTotal || 0;



        case "hydrationHero":

            return userData.waterTotal || 0;



        case "waterWarrior":

            return userData.waterGoalHits || 0;








        // DIARY


        case "firstPage":

        case "memoryKeeper":

            return userData.diaryEntries.length;



        case "consistencyQueen":

            return userData.streak;








        // SPECIAL


        case "freshStart":

            return userData.streak;



        case "resetAndRise":

            return userData.vacationDays || 0;



        case "strongThroughIt":

            return userData.periodLogs || 0;



        case "fullCircle":

            return userData.fullCircleDays || 0;








        // ELITE


        case "diamondAthlete":

            return userData.unlockedBadges.length;



        default:

            return 0;



    }


}










// =====================
// CHECK BADGES
// =====================



function checkBadges(){



    Object.keys(badges).forEach(id=>{



        const badge = badges[id];



        const progress = getBadgeProgress(id);




        if(

            progress >= badge.goal &&

            !userData.unlockedBadges.includes(id)

        ){



            unlockBadge(id);



        }



    });



}









// =====================
// UNLOCK BADGE
// =====================



function unlockBadge(id){



    const badge = badges[id];



    if(!badge){

        return;

    }




    userData.unlockedBadges.push(id);



    userData.xp += badge.reward;



    checkLevelUp();




    saveUserData();




}









// =====================
// LEVEL SYSTEM
// =====================



function addXP(amount){



    userData.xp += amount;



    checkLevelUp();



    checkBadges();



    saveUserData();



}








function checkLevelUp(){



    while(

        userData.xp >= userData.xpToNextLevel

    ){



        userData.xp -= userData.xpToNextLevel;



        userData.level++;



        userData.xpToNextLevel =

        userData.level * 100;



    }



}









// =====================
// SAVE DATA
// =====================



function saveUserData(){



    localStorage.setItem(

        "upliftUserData",

        JSON.stringify(userData)

    );



}









// =====================
// LOAD DATA
// =====================



function loadUserData(){



    const saved =

    localStorage.getItem(

        "upliftUserData"

    );




    if(saved){



        userData = {

            ...userData,

            ...JSON.parse(saved)

        };



    }




    checkBadges();



}








// =====================
// START
// =====================



loadUserData();
