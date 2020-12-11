// TEMPERATURANI O'LCHASH

var elTempForm = document.querySelector('.js-temperature__form');

if (elTempForm) {
  var elTempFormInput = elTempForm.querySelector('.js-temperature-form__input-celsius');
  var elTempFormResult = elTempForm.querySelector('.js-temperature__fahrenheit-result');
};

if (elTempForm) {elTempForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var elTempFormInputValue = Number(elTempFormInput.value);
  var elResult = elTempFormInputValue * 9/5 + 32;

  elTempFormResult.textContent = elResult + ` °F`;

});

};


// YUGURISHNI HISOBLASH

var elWalkSpeed = 3.6;
var elBikeSpeed = 20.1;
var elAvtoSpeed = 70;
var elPlaneSpeed = 800;


var elYugurishForm = document.querySelector('.yugurish__form');
var elYugurishInput = document.querySelector('.yugurish__input');
var elResultWalkerDiv = document.querySelector('.js-result-walker');
var elResultBikeDiv = document.querySelector('.js-result-bike');
var elResultAvtoDiv = document.querySelector('.js-result-avto');
var elResultPlaneDiv = document.querySelector('.js-result-plane');


if (elYugurishForm) {elYugurishForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var elYugurishInputValue = Number(elYugurishInput.value);

  var elWalkSpeedResult = `soat:` + Math.floor(elYugurishInputValue / elWalkSpeed) + `   minut:` + Math.floor((elYugurishInputValue / elWalkSpeed)* 60 % 60)  + `  secund:` + Math.floor((elYugurishInputValue / elWalkSpeed) * 60 * 60 % 60);

  var elBikeSpeedResult = `soat:` + Math.floor(elYugurishInputValue / elBikeSpeed) + `   minut:` + Math.floor((elYugurishInputValue / elBikeSpeed) * 60 % 60)  + `  secund:` + Math.floor((elYugurishInputValue / elBikeSpeed) * 60 * 60 % 60);

  var elAvtoSpeedResult = `soat:` + Math.floor(elYugurishInputValue / elAvtoSpeed) + `   minut:` + Math.floor((elYugurishInputValue / elAvtoSpeed) * 60 % 60)  + `  secund:` + Math.floor((elYugurishInputValue / elAvtoSpeed) * 60 * 60 % 60);

  var elPlaneSpeedResult = `soat:` + Math.floor(elYugurishInputValue / elPlaneSpeed) + `   minut:` + Math.floor((elYugurishInputValue / elPlaneSpeed) * 60 % 60)  + `  secund:` + Math.floor((elYugurishInputValue / elPlaneSpeed) * 60 * 60 % 60);

  elResultWalkerDiv.textContent = elWalkSpeedResult;
  elResultBikeDiv.textContent = elBikeSpeedResult;
  elResultAvtoDiv.textContent = elAvtoSpeedResult;
  elResultPlaneDiv.textContent = elPlaneSpeedResult;
});

};


// YUGURISHGA CHIQAMIZMI?

var elYes = document.querySelector('.yes');
var elNo = document.querySelector('.no');
var elYesNoForm = document.querySelector('.yes-no__form');
var elYesNoFormInput = document.querySelector('.yes-no__form-input');
var elYesNoFormCheckboxRain = document.querySelector('.yes-no__form-checkbox-rain');
var elYesNoFormCheckboxGym = document.querySelector('.yes-no__form-checkbox-gym');

elYesNoForm.addEventListener('change', function (evt) {
  evt.preventDefault();

  var elYesNoFormInputValue = Number(elYesNoFormInput.value);

  if (elYesNoFormInputValue >= 5 && elYesNoFormInputValue <= 30){
    elYes.classList.add('text-success');
  }else{
    elYes.classList.remove('text-success');
    elNo.classList.add('text-danger');
  }

  if (elYesNoFormCheckboxRain.checked){
    elNo.classList.add('text-danger');
  }

  if (elYesNoFormCheckboxGym.checked){
    elYes.classList.add('text-success');
    elNo.classList.add('text-dark')
  }

  if (elYesNoFormCheckboxGym.checked && elYesNoFormCheckboxGym.checked){
    elYes.classList.add('text-success');
  }

  if (elYesNoFormInputValue < 5 && elYesNoFormCheckboxGym.checked){
    elNo.classList.add('text-danger');
  }

});