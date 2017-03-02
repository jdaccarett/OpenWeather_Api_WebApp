// JUAN DACCARETT




var apiKey = 'fce45c95152a8578fe4278493a667b81';


document.addEventListener('DOMContentLoaded', bindButtons);


 function bindButtons(){

        
        // Open Weather Request.
        document.getElementById('urlSubmit').addEventListener('click', function(event) {
            

            
            var req = new XMLHttpRequest();
            
            var zip = document.getElementById("zipcode").value;
            var city = document.getElementById("city").value;
            
            console.log(zip);
            console.log(city);

         if(zip != ""){
                var payload = {zipcode:null};
                payload.zipcode = document.getElementById("zipcode").value;
                req.open("POST", "http://api.openweathermap.org/data/2.5/weather?" + "zip=" + payload.zipcode + "&APPID=" + apiKey, true)
         }
        
        if(city != ""){
                var payload = {city:null};
                payload.city = document.getElementById("city").value;
                req.open("POST", "http://api.openweathermap.org/data/2.5/weather?" + "q=" + payload.city + "&APPID=" + apiKey, true)
         }

        

            req.addEventListener('load',function(){
                if(req.status >= 200 && req.status < 400){

                    var response = JSON.parse(req.responseText);

                    document.getElementById("temperature").textContent = Math.round(response.main.temp * (9/5) - 459.67);
                              
                    document.getElementById("location").textContent = response.name;
                    
                    document.getElementById("humidity").textContent = response.main.humidity;  

            } else {

                console.log("Error in network request: " + req.statusText);

            }});

           req.send(JSON.stringify(payload));
           event.preventDefault();
        });
    
 
    
     
     
     
     
     
     // https://httpbin.org/post Request
     document.getElementById('submitUserInfo').addEventListener('click', function(event){
    
    var req2 = new XMLHttpRequest();
    
    var userData = {userEmail:null};
    
    userData.userEmail = document.getElementById('userEmail').value;
    
    console.log(userData.userEmail);

    
    req2.open('POST', 'https://httpbin.org/post', true);
    
    req2.setRequestHeader('Content-Type', 'application/json');
    
    
    req2.addEventListener('load', function(){
        if(req2.status >= 200 && req2.status < 400) {
            
            var response2 = JSON.parse(req2.responseText);
                        
            document.getElementById("userEmailData").textContent = userData.userEmail;
            
            console.log("heyone: " + userData.userEmail);

        } else {

                console.log("Error in network request: " + req2.statusText);

            }});
         
           req2.send(JSON.stringify(userData));
            
            console.log("hey" + userData.userEmail);

         
           event.preventDefault();    
    
     });
 
 }
















