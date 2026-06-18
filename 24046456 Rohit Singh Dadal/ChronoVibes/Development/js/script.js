const popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

/*for product page*/
function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    element.scrollIntoView({ behavior: 'smooth' });
}

function updateClock() {
    const now = new Date();
    
    // Get time in 12-hour format
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Convert hours to 12-hour format
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Ensure 12-hour format

    // Update time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${period}`;

    // Update date
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Run updateClock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately on page load

        /*for homepage slider*/
        var images = ['../Development/images/img1.jpg', '../Development/images/photo-1731759992333-909811e3070c.png', '../Development/images/img3.jpg'];
    
        var x = 0;
        var imgs = document.getElementById('img');
        //The setInterval() calls a function at theintervals (in milliseconds). 
        setInterval(slider, 3000);
    
        function slider() {
    
          if (x < images.length) 
            {
            x = x + 1;
            } 
    
          else 
            {
            x = 1;
            }
    
    
          imgs.innerHTML = "<img src=" + images[x - 1] + ">";
        }

        function validateForm() {
            // Get the form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var message = document.getElementById("message").value;

            // Check if any required field is empty
            if (name == "" || email == "" || message == "") {
                alert("Please fill up every field.");
            }
            // Check if the phone number is incomplete or empty
            else if (phone.length < 10 || phone == "") {
                alert("Phone Number is incomplete.");
            }
            // If all checks pass, show a thank you message
            else {
                alert("Thank you for your feedback.");
            }
        }

        function Submit() {
            // Get the form values
            const submitt = document.getElementById("submits").value;
        
            // Check if any required field is empty
            if (submitt == "") {
                alert("Please fill up every field.");
            } else {
                alert("Thank you for your feedback.");
            }
        }
        /*for newsletter*/
        function openAlertBox() {
            document.getElementById('alertBox').classList.add('active');
        }

        function closeAlertBox() {
            document.getElementById('alertBox').classList.remove('active');
        }
