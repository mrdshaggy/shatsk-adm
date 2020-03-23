console.log('main.js');


//
// Period scroll
//
var content = document.getElementById('pRange'),
    scrollStep = 100;

document.getElementById('pRangeRight').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft,
      cw = content.scrollWidth;
	
  if ((sl + scrollStep) >= cw) {
    content.scrollTo(cw, 0);
  } else {
    content.scrollTo((sl + scrollStep), 0);
  }
});

document.getElementById('pRangeLeft').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = content.scrollLeft;
	
  if ((sl - scrollStep) <= 0) {
    content.scrollTo(0, 0);
  } else {
    content.scrollTo((sl - scrollStep), 0);
  }
});



//
// Guests today
//
var guestBtn = document.querySelector('.guests-btn');
var guestCloseBtn = document.querySelector('.guests-close-btn');
var todayGuests = document.querySelector('.guests');
guestBtn.addEventListener('click', toggleGuests);
guestCloseBtn.addEventListener('click', toggleGuests);
function toggleGuests() {
  if (todayGuests.classList.contains('is-active')) {
    todayGuests.classList.remove('is-active');
  } else {
    todayGuests.classList.add('is-active');
  }
}


//
// Calendar actions
//
var days = document.querySelectorAll('.calendar__day');
var clicks = 0;


// for (var i=0;i<days.length;i++) {
//   days[i].addEventListener('click', makeActive());
// }
days.forEach(function(el){
  // console.log(el);
  el.addEventListener('click', makeActive);
});
function makeActive() {
  clicks++;
  console.log(clicks);

  if (clicks == 1) {
    this.setAttribute("data-selected", "selected");
    this.setAttribute("data-position", "single");
    console.log('1');
  }
  else if (clicks >= 2) {
    var single = document.querySelector('[data-position="single"]');
    single.setAttribute("data-position", "first");
    
    this.setAttribute("data-selected", "selected");
    this.setAttribute("data-position", "last");

    var first = document.querySelector('[data-position="first"]');
    var last = document.querySelector('[data-position="last"]');

    console.log(first);
    var nextFirst = first.nextElementSibling;
    console.log(nextFirst);

    console.log('2');
  }

}