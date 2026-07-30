// =====================
// UpLift Daily Streak System
// =====================


function completeUpLiftDay(){


    const today = new Date().toLocaleDateString();



    // Prevent multiple streak increases in one day

    if(userData.lastStreakDate === today){

        alert("🔥 You already completed UpLift today!");

        return;

    }




    const yesterday = new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );



    const yesterdayString =
    yesterday.toLocaleDateString();






    // Continue streak

    if(userData.lastStreakDate === yesterdayString){

        userData.streak++;

    }


    // Start new streak

    else{

        userData.streak = 1;

    }





    userData.lastStreakDate = today;



    userData.dayCompleted = true;





    addXP(25);



    addDiaryEntry(

        "achievement",

        "UpLift Day Completed",

        "Daily streak increased",

        25

    );




    saveUserData();



    showPage("home");


}
