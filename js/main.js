console.log('main.js');


//
// Period scroll
//
var content = document.getElementById('pRange'),
    scrollStep = 100;

if (content) {
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
}



//
// Mob menu
//
// header__burger
var burger = document.querySelector('.header__burger');
var mobNav = document.querySelector('.mobile-nav');
burger.addEventListener('click', toggleMobNav);
function toggleMobNav() {
  if (mobNav.classList.contains('is-active')) {
    mobNav.classList.remove('is-active');
  } else {
    mobNav.classList.add('is-active');
  }
}
document.addEventListener('click', function (event) {
  // If the click happened inside the the container, bail
  if (!event.target.closest('.mobile-nav')) return;
  mobNav.classList.remove('is-active');
}, false);


//
// Modals
//
function openModal(id) {
  this.addEventListener('click', function(){
    var modal = document.getElementById(id);
    modal.classList.add('is-active');
  });
}

function closeModal(e) {
  this.addEventListener('click', function(){
    var modal = e.closest(".modal");
    modal.classList.remove('is-active');
  });
}





//
// Guests today
//
var guestBtn = document.querySelector('.guests-btn');
var guestCloseBtn = document.querySelector('.guests-close-btn');
var todayGuests = document.querySelector('.guests');
if (guestBtn) {
  guestBtn.addEventListener('click', toggleGuests);
  guestCloseBtn.addEventListener('click', toggleGuests);
  function toggleGuests() {
    if (todayGuests.classList.contains('is-active')) {
      todayGuests.classList.remove('is-active');
    } else {
      todayGuests.classList.add('is-active');
    }
  }
}

//
// Add button actions
//
var addActionBtn = document.querySelector('.add-action__btn');
var addActionClose = document.querySelector('.add-action__close');
var addAction = document.querySelector('.add-action');
if (addActionBtn) {
  addActionBtn.addEventListener('click', showContent);
  addActionClose.addEventListener('click', hideContent);
  function showContent() {
    addAction.classList.add('is-active');
  }
  function hideContent() {
    addAction.classList.remove('is-active');
  }
}

//
// table actions
//
var tr = document.querySelectorAll('[data-status]');
var sidebar = document.getElementById('bookingInfo');
var closeSidebar = document.getElementById('closeBookingInfo');
if (sidebar) {
  tr.forEach(row => {
    row.addEventListener('click', toggleSidebar);
  });
  closeSidebar.addEventListener('click', toggleSidebar);
  function toggleSidebar() {
    if (sidebar.classList.contains('is-active')) {
      sidebar.classList.remove('is-active');
    } else {
      sidebar.classList.add('is-active');
    }
  }
}