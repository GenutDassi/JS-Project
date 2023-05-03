
"use strict";
(function one_time_executing() {
    document.querySelector('#aa').addEventListener("click", goToServer);
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    const apikey = '2ad10e6ad7c68bfbc4f88275da18d110';
    var weather;

    async function goToServer() {
        try {
            let city = document.getElementById("location").value;
            let location = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apikey)
            let cityData = await location.json();
            city = await fetch(url + cityData[0].lat + "&lon=" + cityData[0].lon + '&appid=' + apikey)
            cityData = await city.json()
            console.log(cityData);
            win(cityData);
            weather="nothing";
            bring_activities();
        }
        catch (e) {
            eror();
        }

    }
    let div;
    div = document.querySelector('.activities')
    function bring_activities(){
        if(weather=="rain"){
            document.querySelector("#solo").addEventListener("click", () => {
                div.append(InSingle)
            });
            document.querySelector("#team").addEventListener("click", () => {
                div.append(InGroup)
            });
            document.querySelector(".selected").addEventListener("click", () => {
                div.append(" ")
                div.append(InSingle)
            });
            document.querySelector(".selected").addEventListener("click", () => {
                div.append(" ")
                div.append(InGroup)
            }); 

        }  
        else {
            if(weather=="snow"){
                document.querySelector("#solo").addEventListener("click", () => {
                    div.append(" ")
                    div.append(ColdSingle)
                });
                document.querySelector("#team").addEventListener("click", () => {
                    div.append(" ")
                    div.append(ColdGroup)
                });
                document.querySelector(".selected").addEventListener("click", () => {
                    div.append(" ")
                    div.append(ColdSingle)
                });
                document.querySelector(".selected").addEventListener("click", () => {
                    div.append(" ")
                    div.append(ColdGroup)
                }); 
            }
            else {
                document.querySelector("#solo").addEventListener("click", () => {
                    div.append(" ")
                    div.append(HatSingle)
                });
                document.querySelector("#team").addEventListener("click", () => {
                    div.append(" ")
                    div.append(HatGroup)
                });
                document.querySelector(".selected").addEventListener("click", () => {
                    div.append(" ")
                    div.append(HatSingle)
                });
                document.querySelector(".selected").addEventListener("click", () => {
                    div.append(" ")
                    div.append(HatGroup)
                }); 
            }

            
        }  

        setInterval(activities_clean,4000);       

    }

    function activities_clean(){
        document.getElementsByClassName(".activities").value="";
        //document.querySelector('#activities').innerHTML = "";
        eror_clean();
        win_clean();
    }


    function eror() {
        document.querySelector('#bb').innerHTML = "wether information is unavailable  😒😓😪";
        setInterval(eror_clean, 5000);
    };

    function eror_clean() {
        document.querySelector('#bb').innerHTML = null;
        document.getElementById("location").value = null;
    };
    function win_clean() {
        document.querySelector('#bb').innerHTML = "";
        document.querySelector('#cc').innerHTML = "";
        document.querySelector('#dd').innerHTML = "";
        document.getElementById("location").value ="";
    };

    function win(cityData) {
        document.querySelector('#cc').innerHTML = document.querySelector('#location').value;
        document.getElementById("location").value = null;
        document.querySelector('#dd').innerHTML = info(cityData.main.temp);
        //setInterval (win_clean, 9000);
        document.querySelector(".results").classList.add("open");


    };
    function info(temp) {
        console.log(temp);
        let c = Math.floor(temp - 273.15);
        let f = Math.floor(1.8 * c + 32);
        const aicons = ["🌞", "⛅", "☁", "⛈"];
        if (c <= 0) {
            weather = "snow";
            return (c + "°c/" + f + "°f " + aicons[3]);
        }

        if (c < 17) {
            weather = "rain";
            return (c + "°c/" + f + "°f " + aicons[2]);
        }
        if (c < 25){
            weather="hot";
            return (c + "°c/" + f + "°f " + aicons[1]);
        }
        weather="hot";
        return (c + "°c/" + f + "°f " + aicons[0]);
    };



    const InSingle = ["כפיפות בטן", "שכיבות סמיכה", "לקפוץ"];
    const InGroup = ["עיצוב", "זומבה", "אירובי"];
    const HatSingle = ["קפיצות", "הליכה", "ריצה"];
    const HatGroup = ["תחרות ריצה", "כדורסל", "כדורגל"];
    const ColdSingle = ["הליכה", "ריצה", "סקי"];
    const ColdGroup = ["הליכה", "ריצה", "סקי"];

}())








//2ad10e6ad7c68bfbc4f88275da18d110
