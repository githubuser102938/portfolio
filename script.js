
document.getElementById("navbtn-fa-solid").addEventListener("click", function() {
    document.getElementById("list").style.display = "none";
  });
document.getElementById("hamberger-btn").addEventListener("click", function() {
    document.getElementById("list").style.display = "flex";
})

document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.querySelector("nav ul li a[href='#about']");
    
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      var aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "auto" });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var experienceLink = document.querySelector("nav ul li a[herf='#experince']");

    experienceLink.addEventListener("click", function(event){
        event.preventDefault();
        var experienceSection = document.getElementById("experince");
        experienceSection.scrollIntoView({ behavior : "auto"});

    });
  })

  document.addEventListener("DOMContentLoaded", function() {
    var skillsLink = document.querySelector("nav ul li a[href='#skills']");
    
    skillsLink.addEventListener("click", function(event) {
      event.preventDefault();
      var skillsSection = document.getElementById("skills");
      skillsSection.scrollIntoView({ behavior: "auto" });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.querySelector("nav ul li a[href='#contact']");
    
    contactLink.addEventListener("click", function(event) {
      event.preventDefault();
      var contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "auto" });
    });
  });
  
  