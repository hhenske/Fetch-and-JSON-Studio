// TODO: add code here
//1
window.addEventListener("load", function(){
    //2
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            let container = document.getElementById("container");
           

            for (let i=0; i < json.length; i++) {
                container.innerHTML += `
                <div class = "astronaut">
                    <div class = "bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in Space: ${json[i].hoursInSpace}</li>
                        <li id = "active" color = black>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                    <div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>`;
                  
                   
                     
                        
                       

                 
            }
        });
            

    });
});