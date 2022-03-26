function toggleIntro() {
    const mainIntro = document.getElementsByClassName("regularIntro");
    const secondaryIntro = document.getElementsByClassName("devIntro");
    const toggleButton = document.getElementById("introToggle");
    if(toggleButton.checked){
        console.log('it works');
        // alert('it works');
    }
}
toggleIntro();