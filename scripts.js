document.querySelector(".getBirthYear").addEventListener("click", function() {

    var year = new Date();

    const CURRENT_YEAR = year.getFullYear();
    const CURRENT_MONTH = 9;
    var day = new Date();
    var currentDay = day.getDate();

    console.log(currentDay);
    var extraMonth;

    var resultsInDays
    var birthYear = prompt("Enter Birth Year", 1900);

    var birthMonth = prompt("Enter Birth Month in Numbers", 1);

    var birthDay = prompt("Enter Birth Day", 1);

    if(birthMonth > CURRENT_MONTH) {

            birthYear = birthYear - 1; 
            extraMonth = 0;

            var birthYearInDays = (CURRENT_YEAR - birthYear) * 365;

            var birthMonthInDays = birthMonth * 30;

            if(birthDay < currentDay) {

               var calculatedDay = currentDay - birthDay;

                birthMonthInDays = birthMonthInDays + calculatedDay;

                resultsInDays = birthYearInDays + birthMonthInDays;

            } else if (birthDay == currentDay) {

                birthMonthInDays = birthMonthInDays;

                resultsInDays = birthYearInDays + birthMonthInDays;

            } else {

                calculatedDay = birthDay - currentDay;

                birthMonthInDays = birthMonthInDays - calculatedDay;

                resultsInDays = birthYearInDays + birthMonthInDays;
            }

           


        } else if (birthMonth == CURRENT_MONTH) {

            birthYear = birthYear;
            extraMonth = 0;

            var birthYearInDays = (CURRENT_YEAR - birthYear) * 365;

            if(birthDay < currentDay) {

                var calculatedDay = currentDay - birthDay;
 
 
                 resultsInDays = birthYearInDays - calculatedDay;
 
             } else if (birthDay == currentDay) {
 
                 resultsInDays = birthYearInDays;
 
             } else {
 
                 calculatedDay = birthDay - currentDay;
 
                 resultsInDays = birthYearInDays + calculatedDay;

             }

        } else {

            birthYear = birthYear;
            extraMonth = CURRENT_MONTH - birthMonth;

            extraMonthInDays = extraMonth * 30;

            var birthYearInDays = (CURRENT_YEAR - birthYear) * 365;

              if(birthDay < currentDay) {

                var calculatedDay = currentDay - birthDay;
 
                extraMonthInDays = extraMonthInDays + calculatedDay;

                 resultsInDays = birthYearInDays + extraMonthInDays;
 
             } else if (birthDay == currentDay) {
 
                 resultsInDays = birthYearInDays + extraMonthInDays;
 
             } else {
 
                 calculatedDay = birthDay - currentDay;
 
                 extraMonthInDays = extraMonthInDays - calculatedDay;

                 resultsInDays = birthYearInDays + extraMonthInDays;
                 
             }
        }
        


    document.querySelector("#flexbox-result").classList.add("show-flexbox-results");
    document.querySelector("#flexbox-result").innerHTML = `<h2>You are ${resultsInDays} days old.</h2>`;
});


// Reset flexbox-result to empty
document.querySelector(".resetResult").addEventListener("click", () => {

        document.querySelector("#flexbox-result").innerHTML = "";
        document.querySelector("#flexbox-result").classList.remove("show-flexbox-results");

    });