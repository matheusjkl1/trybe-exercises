const header = document.querySelector('header');
header.style.background ='#00B069'

const emergencyTask = document.querySelector('.emergency-tasks');
emergencyTask.style.background ='#FF9F84'
const noEmergencyTask = document.querySelector('.no-emergency-tasks');
noEmergencyTask.style.background ='#F9DB5E'   
const footerContainer = document.querySelector('#footer-container');
footerContainer.style.background ='darkgreen'


const noEmergencyColor = document.querySelectorAll(".no-emergency-tasks h3");

for(let indice = 0; indice < noEmergencyColor.length; indice +=1){
    noEmergencyColor[indice].style.background = 'black'
};

const emergencyColor = document.querySelectorAll(".emergency-tasks h3");

for(let indice = 0; indice < emergencyColor.length; indice +=1){
    emergencyColor[indice].style.background = '#A531F3';
};
