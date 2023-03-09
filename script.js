// Set the date we're counting down to
var countDownDate = new Date("June 9, 2023 15:30:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  // If the countdown is finished, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Hell is over";
  }
}, 1000);
