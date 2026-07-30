// =====================
// UpLift Daily Streak System
// =====================


function canCompleteDay(){

    return (
        userData.completedToday.length > 0 ||
        userData.nutritionEntries.some(
            entry => entry.date === new Date().toLocaleDateString()
        )
    );

}





function completeUpLiftDay(){


    const today = new Date().toLocaleDateString();



    if(userData.lastStreakDate === today){

        alert("🔥 You already completed UpLift today!");

        return;

    }





    if(!canCompleteDay()){


        alert(
            "Complete a workout or log nutrition first! 💪🥗"
        );


        return;


    }






    const yesterday = new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );


    const yesterdayString =
    yesterday.toLocaleDateString();







    if(userData.lastStreakDate === yesterdayString){

        userData.streak++;

    }

    else{

        userData.streak = 1;

    }






    userData.lastStreakDate = today;






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
