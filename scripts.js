// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightstatus");
    let shuttleHeight = Number(document.getElementById)
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const down = document.getElementById("down");
    const rocketImg = document.getElementById("rocket");
    
    rocketImg.style.left = '5px'
    rocketImg.style.right = '35px'
    rocketImg.style.bottom= '35px'
    rocketImg.style.top = '250px’

    takeOffButton.addEventListener("click", function (event) {
        if(confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttlebackground").style.backgroundColor = 'blue';
            shuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;

        }
    });
    landButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
            flightStatus.innerHTML = "Shuttle has landed.";
            document.getElementById("shuttlebackground").style.backgroundColor = 'green';
            shuttleHeight += 0;
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight; 
        
    });

    
    abortButton.addEventListener("click", function (event) {
         if(confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttlebackground").style.backgroundColor = 'green';
            shuttleHeight += 0;
            document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
        }
    });

    down.addEventListener("click", function(event){
        let position = parsInt(rocketImg.style.bottom);
        position -=10 ;

        rocketImg.style.bottom = ;
    })