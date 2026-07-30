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

    userData.arfidSupport = !userData.arfidSupport;

    saveUserData();

    showPage("settings");

}






function applyTheme(){

    document.body.className = "";


    if(userData.mode === "Regular"){

        document.body.classList.add("regular-theme");

    }


    if(userData.mode === "Vacation"){

        document.body.classList.add("vacation-theme");

    }


    if(userData.mode === "Period"){

        document.body.classList.add("period-theme");

    }


}








// =====================
// PROFILE CREATION
// =====================


function createProfile(){


    userData.profileName =
    document.getElementById("profileName").value;


    userData.athleteType =
    document.getElementById("athleteType").value;


    userData.goal =
    document.getElementById("goal").value;



    userData.profileDate =
    new Date().toLocaleDateString();



    userData.profileCreated = true;



    addDiaryEntry(

        "achievement",

        "Profile Created",

        "Started the UpLift journey",

        10

    );



    addXP(10);



    saveUserData();



    checkBadges();



    showPage("profile");


}









// =====================
// XP SYSTEM
// =====================


function addXP(amount){


    userData.xp += amount;



    while(userData.xp >= userData.xpToNextLevel){


        userData.xp -= userData.xpToNextLevel;


        userData.level++;


        userData.xpToNextLevel += 100;


    }



}







// =====================
// DAILY STREAK SYSTEM
// =====================


function completeDay(){



    const today = new Date()
    .toLocaleDateString();




    if(userData.lastCompletedDate === today){

        return;

    }




    const yesterday = new Date();



    yesterday.setDate(

        yesterday.getDate() - 1

    );




    const yesterdayString =

    yesterday.toLocaleDateString();






    if(

        userData.lastCompletedDate === yesterdayString

    ){


        userData.streak++;


    }

    else{


        userData.streak = 1;


    }





    userData.lastCompletedDate = today;


    userData.completedDay = true;





    addXP(25);





    addDiaryEntry(

        "achievement",

        "Daily UpLift Complete",

        "Completed today's UpLift check-in",

        25

    );





    saveUserData();



    showPage("home");



}
// =====================
// WATER SYSTEM
// =====================


function addWater(){


    if(userData.waterToday < userData.waterGoal){



        userData.waterToday++;



        addXP(5);



        addDiaryEntry(

            "nutrition",

            "Water Added",

            "Drank 1 cup of water",

            5

        );



        saveUserData();



    }



    showPage("nutrition");


}






function resetWater(){


    userData.waterToday = 0;


    saveUserData();


    showPage("nutrition");


}









// =====================
// WORKOUT COMPLETION
// =====================


function completeWorkout(workoutName){



    if(userData.completedToday.includes(workoutName)){


        return;


    }



    userData.completedToday.push(workoutName);



    userData.workoutsCompleted++;






    const workout = workoutTypes[workoutName];






    if(workout){



        addXP(workout.xp);




        switch(workout.category){



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



            case "lowerBody":

                userData.lowerBodyWorkouts++;

                break;



            case "upperBody":

                userData.upperBodyWorkouts++;

                break;



            case "jump":

                userData.jumpSessions++;

                break;



        }



    }







    addDiaryEntry(

        "workout",

        workoutName,

        "Completed workout",

        workout ? workout.xp : 0

    );







    saveUserData();



    checkBadges();



}











// =====================
// NUTRITION
// =====================


function addNutritionFood(){



    const food =

    document.getElementById("foodName").value;



    const calories =

    Number(document.getElementById("foodCalories").value) || 0;



    const meal =

    document.getElementById("foodMeal").value;



    const note =

    document.getElementById("foodNote").value;






    if(food === ""){

        return;

    }








    userData.nutritionEntries.push({



        food:food,


        calories:calories,


        meal:meal,


        note:note,


        date:new Date().toLocaleDateString()



    });







    userData.caloriesToday += calories;







    addXP(10);





    addDiaryEntry(

        "nutrition",

        food,

        `${meal} • ${calories} calories`,

        10

    );






    saveUserData();



    showPage("nutrition");


}
// =====================
// DIARY CONTROLS
// =====================


function changeDiaryDate(amount){


    let current = new Date(

        userData.selectedDiaryDate || new Date()

    );


    current.setDate(

        current.getDate() + amount

    );



    userData.selectedDiaryDate =

    current.toLocaleDateString();



    saveUserData();



    showPage("diary");



}






function resetDiaryDate(){


    userData.selectedDiaryDate =

    new Date().toLocaleDateString();



    saveUserData();



    showPage("diary");



}









// =====================
// HOME PAGE UPDATE
// =====================


// Inside your HOME section,
// add this button under your streak card:


/*

<button onclick="completeDay()">

🔥 Complete UpLift Day

</button>

*/




// =====================
// SAVE / LOAD SAFETY
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


        Object.assign(

            userData,

            JSON.parse(saved)

        );


    }


}









// =====================
// APP START
// =====================


loadUserData();


applyTheme();


showPage("home");
