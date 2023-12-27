const birthdateInput = document.getElementById("birthdate");
const calculateButton = document.getElementById("calculate-btn");
const resultElement = document.getElementById('result');


calculateButton.addEventListener('click', calculateAge);

function calculateAge(){
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  if(ageInYears >= 0) {
    resultElement.textContent = `You are ${ageInYears} years old`;
  }else{
    resultElement.textContent = 'not valid input'
  }
}