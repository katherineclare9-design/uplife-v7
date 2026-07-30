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
    
// =====================
// HOME PAGE
// =====================


if(page === "home"){



content = `



<h1>💖 FULL OUT</h1>







<div class="card">


<h2>⭐ Level ${userData.level}</h2>


<p>

${userData.xp}/${userData.xpToNextLevel} XP

</p>


</div>









<div class="card">


<h2>🔥 Streak</h2>


<p>

${userData.streak} Days

</p>


</div>








<div class="card">


<h2>🔥 Daily Check-In</h2>



<p>

Complete your UpLift day to grow your streak!

</p>





<button onclick="completeUpLiftDay()">



🔥 Complete UpLift Day



</button>




</div>









<div class="card">


<h2>🥗 Daily Nutrition</h2>


<p>

🔥 Calories: ${userData.caloriesToday}

</p>


<p>

💧 Water:

${userData.waterToday}/${userData.waterGoal}

</p>


</div>



`;



}









// =====================
// NUTRITION PAGE
// =====================


if(page === "nutrition"){



let cups = "";



for(let i = 0; i < userData.waterGoal; i++){


    cups += i < userData.waterToday

    ?

    "💧"

    :

    "⬜";



}




content = `



<h1>🥗 Nutrition</h1>





<div class="card">


<h2>🔥 Calories Today</h2>


<h1>

${userData.caloriesToday}

</h1>



</div>









<div class="card">


<h2>💧 Hydration</h2>



<div class="water-display">

${cups}

</div>



<p>

${userData.waterToday}/${userData.waterGoal} cups

</p>




<button onclick="addWater()">

➕ Add Cup

</button>





<button onclick="resetWater()">

Reset

</button>



</div>









<div class="card">


<h2>🍽️ Log Food</h2>



<input

id="foodName"

placeholder="Food name"

>




<input

id="foodCalories"

type="number"

placeholder="Calories"

>




<select id="foodMeal">


<option>Breakfast</option>


<option>Lunch</option>


<option>Dinner</option>


<option>Snack</option>


</select>








<textarea

id="foodNote"

placeholder="Notes"

></textarea>









<button onclick="addNutritionFood()">


➕ Add To Diary


</button>



</div>








<div class="card">


<h2>📖 Today</h2>


<p>

Your food history is saved in your Diary.

</p>




<button onclick="showPage('diary')">


Open Diary


</button>



</div>



`;



}
    
// =====================
// BOTTOM NAV
// =====================


app.innerHTML = content + `



<div class="bottom-nav">



<button onclick="showPage('home')">

🏠

</button>





<button onclick="showPage('training')">

💪

</button>





<button onclick="showPage('nutrition')">

🥗

</button>





<button onclick="showPage('diary')">

📖

</button>





<button onclick="showPage('badges')">

🏆

</button>





<button onclick="showPage('profile')">

👤

</button>





<button onclick="showPage('settings')">

⚙️

</button>



</div>



`;



}











// =====================
// START APP
// =====================


applyTheme();


showPage("home");
