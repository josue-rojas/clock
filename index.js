$( document ).ready(function(){
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const DAYNAME = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const date = new Date(location.hash || '04/20/2022');
  
  //all elements we are using
  const $dayLeftText = $('.time-wrapper #day-number');
  const $hourText = $('.time-wrapper #hour');
  const $minText = $('.time-wrapper #min');
  const $secText = $('.time-wrapper #second');
  const $monthText = $('.time-wrapper #month');
  const $dayNameText = $('.time-wrapper #day-name');
  const $dayNumber = $('.time-wrapper #day');

  // initial set clock
  setClock();

  setInterval(setClock, 1000);
  
  // helper function to console on non computers
  function showConsole(any) {
    $('.console').text(any.toString());
  };

  // set the whole thing in motion (sets clock and date, main function);
  function setClock(){
    const today = new Date().getTime()
    let difference = date.getTime() - today;
    const daysConvert = 24 * 60 * 60 * 1000
    const days = Math.floor((difference/daysConvert));
    difference -= days * daysConvert;

    const hoursConvert = 1000 * 60 * 60;
    const hours = Math.floor(difference / hoursConvert);
    difference -= hours * hoursConvert

    const minsConvert = 1000 * 60;
    const mins = Math.floor(difference / minsConvert);
    difference -= mins * minsConvert

    const secs = Math.floor(difference / 1000);
    difference -= secs * 1000

    setTime(hours, mins, secs, days);

    let month = MONTHS[date.getMonth()];
    let day = date.getDate();
    let dayName = DAYNAME[date.getDay()];
    setDate(month, day, dayName);
  }
  
  // sets the time part. the clock and the time text
  function setTime(hour, min, sec, day){
    $dayLeftText.text(day);
    $hourText.text(hour < 10 ? `0${hour}` : hour);
    $minText.text(min < 10 ? `0${min}` : min);
    $secText.text(sec < 10 ? `0${sec}` : sec);
  }

  // sets the date text
  function setDate(month, day, dayName){
    $monthText.text(month);
    $dayNumber.text(` ${day}`);
    $dayNameText.text(dayName);
  }
});
