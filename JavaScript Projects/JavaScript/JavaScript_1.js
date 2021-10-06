function service_Fn() {
    var service_Output;
    var service = document.getElementById("serviceIn").value;
    var service_String =" , That is a great choice";
    switch(service) {
        case "Website Design":
                service_Output = "Website Design" + service_String;
            break;
            case "Mobile Application":
                service_Output = "Mobile Application" + service_String;
            break;
            case "Web Hosting":
                service_Output = "Web Hosting" + service_String;
            break;
            case "SEO":
                service_Output = "SEO" + service_String;
            break;
            default:
                service_Output = "Please enter a service exactly as written on the above list";    
            }
            document.getElementById("Output").innerHTML = service_Output;
        } 

        function Hello_World_function() {
            var A = document.getElementsByClassName("Click");
            A[0].innerHTML = "this Text Just Change on You";
        }
    //canvas functions
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        
        // Create gradient
        var grd = ctx.createRadialGradient(75,50,5,90,60,100);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10,10,150,80); 
    
        
        