function jourTravaille(date)
{
let dayName = ""

    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let dateText = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()]
    console.log(dateText)
    /* Conditions */
    if (date.getDay() === 0 || date.getDay() === 6)
    {
        let answer = "Non, le " + dateText + " est un week-end";
        return answer
    }
    else
    {
        let answer = "Oui, le " + dateText + " est un jour travaillé";
        return answer;
    }

    

}
let myDate = new Date;
myDate.setFullYear(2024);
myDate.setMonth(2);
myDate.setDate(25);
console.log(jourTravaille(myDate));