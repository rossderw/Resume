let hasJob = false;
if (hasJob) {
    // I have a job
    document.write("Thanks for vising, I'm currently employed");
} else {
    // I need a job
    document.writeln("Please look around, I'm currently looking for employment");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayofWeek === 0  || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with me returning your email.");
}

function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "<p>";
}

function clearMessage(message) {
    formInfo.innerHTML = "";
}


const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    showMessage("Sending your message...");
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
      event.target.style = "background-color: #999999;";  
    });
    item.addEventListener("moseleave", function (event) {
});

}

