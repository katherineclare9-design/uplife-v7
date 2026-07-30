const app = document.getElementById("app");



// =====================
// SETTINGS
// =====================


function changeMode(mode){

    userData.mode = mode;

    saveUserData();

    applyTheme();

    showPage("settings");

}





function toggleARFID(){

    userData.arfidSupport = 
    !userData.arfidSupport;

    saveUserData();

}









// =====================
// PROFILE
// =====================



function saveProfile(){


    const name =
    document.getElementById("profileName").value;


    const athlete =
    document.getElementById("athleteType").value;


    userData.profileName = name;

    userData.athleteType = athlete;

    userData.profileCreated = true;


    addXP(25);


    saveUserData();


    showPage("profile");


}









// =====================
// XP SYSTEM
// =====================



function awardXP(amount){


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
// WORKOUT SYSTEM
// =====================



function completeWorkout(type){



    userData.workoutsCompleted++;



    switch(type){


        case "core":

            userData.coreWorkouts++;

            break;



        case "strength":

            userData.strengthWorkouts++;

            break;



        case "backspot":

            userData.backspotWorkouts++;

            break;



        case "flexibility":

            userData.flexibilitySessions++;

            break;



        case "legs":

            userData.lowerBodyWorkouts++;

            break;



        case "upper":

            userData.upperBodyWorkouts++;

            break;



        case "jump":

            userData.jumpSessions++;

            break;



    }




    awardXP(20);



    saveUserData();



}
/* =====================
   NUTRITION SYSTEM
===================== */



function addMeal(){



    const food = 
    document.getElementById("foodName").value;



    const calories =
    Number(document.getElementById("foodCalories").value);



    const mealType =
    document.getElementById("foodMeal").value;



    const note =
    document.getElementById("foodNote").value;




    if(!food){

        return;

    }




    const entry = {


        id:Date.now(),


        type:"nutrition",


        food:food,


        calories:calories,


        meal:mealType,


        note:note,


        date:new Date().toLocaleDateString()


    };




    userData.nutritionEntries.push(entry);



    userData.caloriesToday += calories;




    awardXP(10);



    checkBadges();



    saveUserData();



    showPage("nutrition");



}









// =====================
// WATER SYSTEM
// =====================



function addWater(){



    userData.waterToday++;


    userData.waterTotal =
    (userData.waterTotal || 0) + 1;




    if(userData.waterToday >= userData.waterGoal){


        userData.waterGoalHits =
        (userData.waterGoalHits || 0) + 1;


    }





    awardXP(5);



    checkBadges();



    saveUserData();



    showPage("nutrition");



}









// =====================
// DIARY SYSTEM
// =====================



function addDiaryEntry(){



    const text =

    document.getElementById("diaryText").value;




    if(!text){

        return;

    }





    const entry = {


        id:Date.now(),


        type:"diary",


        text:text,


        date:new Date().toLocaleDateString()



    };





    userData.diaryEntries.push(entry);




    userData.lastDiaryDate =

    new Date().toLocaleDateString();





    awardXP(15);



    checkBadges();



    saveUserData();



    showPage("diary");



}









// =====================
// DAILY RESET
// =====================



function resetDailyData(){



    userData.caloriesToday = 0;



    userData.waterToday = 0;



    userData.completedToday = [];



    saveUserData();



}
/* =====================
   BADGE SYSTEM CONNECTION
===================== */



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









function unlockBadge(id){



    const badge = badges[id];



    if(!badge){

        return;

    }




    userData.unlockedBadges.push(id);



    userData.xp += badge.reward;



    checkLevelUp();



    saveUserData();




    showBadgePopup(badge);



}









function showBadgePopup(badge){



    alert(

        "🏆 Badge Unlocked!\n\n" +

        badge.icon + " " +

        badge.name +

        "\n\n+" +

        badge.reward +

        " XP"

    );



}









// =====================
// TROPHY ROOM
// =====================



function renderBadges(){



    let html = "";




    Object.keys(badges).forEach(id=>{



        const badge = badges[id];



        const progress = getBadgeProgress(id);



        const unlocked =

        userData.unlockedBadges.includes(id);





        html += `

        <div class="badge-card ${unlocked ? "unlocked":"locked"}">


            <h2>

            ${badge.icon}

            </h2>


            <h3>

            ${badge.name}

            </h3>



            <p>

            ${badge.description}

            </p>



            <p>

            ${progress}/${badge.goal}

            </p>



            <div class="progress-bar">

                <div class="progress-fill"

                style="width:${Math.min(

                    (progress/badge.goal)*100,

                    100

                )}%">

                </div>

            </div>



            <small>

            ${badge.rarity}

            • +${badge.reward} XP

            </small>



        </div>


        `;



    });




    return html;



}









// =====================
// THEMES
// =====================



function applyTheme(){



    document.body.classList.remove(

        "regular-theme",

        "vacation-theme",

        "period-theme"

    );




    if(userData.mode === "Vacation"){



        document.body.classList.add(

            "vacation-theme"

        );



    }

    else if(userData.mode === "Period"){



        document.body.classList.add(

            "period-theme"

        );



    }

    else{


        document.body.classList.add(

            "regular-theme"

        );



    }



}









// =====================
// SAVE / LOAD
// =====================



function saveUserData(){



    localStorage.setItem(

        "upliftUserData",

        JSON.stringify(userData)

    );



}









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





    applyTheme();



    checkBadges();



}









// =====================
// START APP
// =====================



loadUserData();



showPage("home");
