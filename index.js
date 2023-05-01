let jsonData;
let timeframeText;

const workHours = document.getElementById("workHrs");
const lastWorkHours = document.getElementById("workLastWeekHrsField");
const playHours = document.getElementById("playHrs");
const lastPlayHours = document.getElementById("playLastWeekHrsField");
const studyHours = document.getElementById("studyHrs");
const lastStudyHours = document.getElementById("studyLastWeekHrsField");
const exerciseHours = document.getElementById("exerciseHrs");
const lastExerciseHours = document.getElementById("exerciseLastWeekHrsField")
const socialHours = document.getElementById("socialHrs");
const lastSocialHours = document.getElementById("socialLastWeekHrsField");
const selfCareHours = document.getElementById("selfCareHrs");
const lastSelfCareHours = document.getElementById("selfCareLastWeekHrsField")

async function getJSONData(){
    let response = await fetch('data.json');
    if (response.ok) { 
        jsonData = await response.json();
    } else{
        alert ("HTTP-error: " + response.status);
    }
}

window.addEventListener("load", getJSONData());

function setTimeFrame(selectedTimeframe){
    let timeframeTextElements = document.getElementsByClassName("lastTimeframeHours");

    if(selectedTimeframe == 'daily'){
        timeframeText = 'Yesterday - ';
    } else if(selectedTimeframe == 'weekly') {
        timeframeText = 'Last Week - ';
    } else{
        timeframeText = 'Last Month - ';
    }

    for(let i = 0; i < timeframeTextElements.length; i++){
        timeframeTextElements[i].innerHTML = timeframeText;
    }

    workHours.innerHTML = String(jsonData[0]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastWorkHours.innerHTML = String(jsonData[0]['timeframes'][selectedTimeframe]['previous']).concat("hrs");
    playHours.innerHTML = String(jsonData[1]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastPlayHours.innerHTML = String(jsonData[1]['timeframes'][selectedTimeframe]['previous']).concat("hrs"); 
    studyHours.innerHTML = String(jsonData[2]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastStudyHours.innerHTML = String(jsonData[2]['timeframes'][selectedTimeframe]['previous']).concat("hrs");
    exerciseHours.innerHTML = String(jsonData[3]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastExerciseHours.innerHTML = String(jsonData[3]['timeframes'][selectedTimeframe]['previous']).concat("hrs");
    socialHours.innerHTML = String(jsonData[4]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastSocialHours.innerHTML = String(jsonData[4]['timeframes'][selectedTimeframe]['previous']).concat("hrs");
    selfCareHours.innerHTML = String(jsonData[5]['timeframes'][selectedTimeframe]['current']).concat("hrs");
    lastSelfCareHours.innerHTML = String(jsonData[5]['timeframes'][selectedTimeframe]['previous']).concat("hrs");
    

}