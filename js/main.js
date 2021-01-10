/*
- user selects month and day
- user clicks on Submit button
- check user's month and day selection
- return approriate horoscope depending on selection

Aquarius (Water Bearer): January 20–February 18
Pisces (Fish): February 19–March 20
Aries (Ram): March 21–April 19
Taurus (Bull): April 20–May 20
Gemini (Twins): May 21–June 21
Cancer (Crab): June 22–July 22
Leo (Lion): July 23–August 22
Virgo (Virgin): August 23–September 22
Libra (Balance): September 23–October 23
Scorpius (Scorpion): October 24–November 21
Sagittarius (Archer): November 22–December 21
Capricornus (Goat): December 22–January 19
*/

document.querySelector('#submitHoroscope').addEventListener('click', runHoroScope);

function runHoroScope() {
    const bMonth = document.querySelector('#month').value
    const bDay = document.querySelector('#day').value
    const horoscopeResult = document.querySelector('#displayHoroscope')
    const insertSign = document.querySelector('#sign')

    if ((bMonth === "January" && bDay >= 20) || (bMonth === "February" && bDay <= 18)) {
        horoscopeResult.innerHTML = "Hi Aquarius! <br> Start where you are. Use what you have. Do what you can.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/002-aquarius.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "February" && bDay >= 19) || (bMonth === "March" && bDay <= 20)) {
        horoscopeResult.innerHTML = "Hello Pisces! <br> With the new day comes new strength and new thoughts.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/011-pisces.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "March" && bDay >= 21) || (bMonth === "April" && bDay <= 19)) {
        horoscopeResult.innerHTML = "Hi Aries! <br> Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/006-aries.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "April" && bDay >= 20) || (bMonth === "May" && bDay <= 20)) {
        horoscopeResult.innerHTML = "Hello Taurus! <br> No bird soars too high if he soars with his own wings.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/007-tarus.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "May" && bDay >= 21) || (bMonth === "June" && bDay <= 21)) {
        horoscopeResult.innerHTML = "Hi Gemini! <br> Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/003-gemini.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "June" && bDay >= 22) || (bMonth === "July" && bDay <= 22)) {
        horoscopeResult.innerHTML = "Hello Cancer! <br> Opportunity does not knock, it presents itself when you beat down the door.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/005-cancer.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "July" && bDay >= 23) || (bMonth === "August" && bDay <= 22)) {
        horoscopeResult.innerHTML = "Hi Leo! <br> It does not matter how slowly you go as long as you do not stop.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/012-leo.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "August" && bDay >= 23) || (bMonth === "September" && bDay <= 22)) {
        horoscopeResult.innerHTML = "Hello Virgo! <br> Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/001-virgo.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "September" && bDay >= 23) || (bMonth === "October" && bDay <= 23)) {
        horoscopeResult.innerHTML = "Hi Libra! <br> You can't build a reputation on what you are going to do.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/009-libra.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "October" && bDay >= 24) || (bMonth === "November" && bDay <= 21)) {
        horoscopeResult.innerHTML = "Hello Scorpio! <br> Your smile will give you a positive countenance that will make people feel comfortable around you.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/008-scorpio.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "November" && bDay >= 22) || (bMonth === "December" && bDay <= 21)) {
        horoscopeResult.innerHTML = "Hi Sagittarius! <br> You cannot become what you need to be by remaining what you are.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/010-sagittarius.png\" width=\"64px\" height=\"64px\">";
    } else if ((bMonth === "December" && bDay >= 22) || (bMonth === "January" && bDay <= 19)) {
        horoscopeResult.innerHTML = "Hi Capricorn! <br> When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.";
        insertSign.innerHTML = "<img src=\"https://raw.githubusercontent.com/dronevil/horoscope/main/images/004-capricorn.png\" width=\"64px\" height=\"64px\">";
    } 

    document.querySelector('form').reset()
}
