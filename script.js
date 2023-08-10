document.querySelector(".button-section>button")
    .addEventListener("click", calcAndSetAge);

function calcAndSetAge() {
    clearErrOutputs();
    var day_str = document.querySelector(".input-day>input").value
    var month_str = document.querySelector(".input-month>input").value
    var year_str = document.querySelector(".input-year>input").value

    var day = Number(day_str);
    var month = Number(month_str)-1;
    var year = Number(year_str);

    var birthdate = new Date(year, month, day);
    var now_date = new Date();
    if (isValidDate(day, month, year)) {
        var res_years = new Date(now_date.getTime() - birthdate.getTime());
        console.log(`${res_years}`);
    
        document.querySelector(".res-years").text = res_years.getUTCFullYear() - 1970;
        document.querySelector(".res-months").text = res_years.getUTCMonth();
        document.querySelector(".res-days").text = res_years.getUTCDate() - 1;
    }else{

        if (now_date < birthdate) showErr("all", "Must be a valid date");
        if (day_str == '') showErr("day", "This field is required");
        else if (isNaN(day) || day != new Date(1, 1, day).getDate()) showErr("day", "Must be a valid date");
        if (month_str  == '') showErr("month", "This field is required");
        else if (isNaN(month) || month != new Date(1, month, 1).getMonth()) showErr("month", "Must be a valid date");
        if (year_str == '') showErr("year", "This field is required");
        else if (isNaN(year) || year != new Date(year, 1, 1).getFullYear()) showErr("year", "Must be a valid date");
        
        clearOutputs();
    }
}
function isValidDate(day, month, year){ var birthdate = new Date(year, month, day); var now_date = new Date(); return  !(isNaN(day+month+year) || day*year == 0 || month == -1 || year != birthdate.getFullYear() || now_date < birthdate || month != birthdate.getMonth() || day != birthdate.getDate()); }
function showErr(type, e) { console.log(`${type}   ${e}`); if(type == "all"){ var a = document.querySelectorAll(`.inputs err`); for(var i = 0; i < a.length; ++i ){ a[i].style.display = 'block'; a[i].innerHTML = e; } }else{ document.querySelector(`.input-${type}>err`).style.display = 'block'; document.querySelector(`.input-${type}>err`).innerHTML = e; } }
function clearOutputs() { var a = document.querySelectorAll(".results>p>a:first-child"); for (var i = 0; i < a.length; ++i) { a[i].text = "−−"; } }
function clearErrOutputs() { var a = document.querySelectorAll(`.inputs err`); for (var i = 0; i < a.length; ++i) { a[i].style.display = 'none'; } }
