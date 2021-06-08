// TODO: add code here
//1
window.addEventListener("load", function(){
    //2
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json) {
        //assuming html stuff and template go in the other file....here I need to set up the variables?
            const container = document.getElementById("astronauts");
            
    })
    })
});
