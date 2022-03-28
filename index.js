

const developerTerms = ['FullStack Developer', 'Not Hacker', 'Frontend Developer', 'Not IT Technician', 'Web Developer', 'Not Tech Repairman', 'Software Engineer', 'Frontend Engineer', 'Not Mr. Fix it']





function toggleIntro() {
    const mainIntro = document.getElementById("regularIntro");
    const secondaryIntro = document.getElementById("devIntro");
    const toggleButton = document.getElementById("introToggle");
    if(toggleButton.checked){
        // console.log('it works');
        // alert('it works');
        mainIntro.style.display = "none";
        secondaryIntro.style.display = "block";
    } else {
        mainIntro.style.display = "block";
        secondaryIntro.style.display = "none";
    }
}
toggleIntro();