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