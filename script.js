// TODO: add code here
//1
window.addEventListener("load", function(){
    //2
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            for (let i=0; i < json.length; i++) {
            console.log(`${json[i].firstName} ${json[i].lastName}`);
            //so the list of names appears in the console
            //to do: get the first name in the first rectangle <h2> size
            //to do: put a <ul> of other data inside each bos
            //to do: make sure the loop repeats once, then creates a new rectangle
            //To do: also in the rectangle, deal with the images
            console.log(`Hours in Space: ${json[i].hoursinSpace}`);
            console.log(`Active: ${json[i].active}`);
            console.log(`Skills: ${json[i].skills}`);
            }
        });
            

    });
});