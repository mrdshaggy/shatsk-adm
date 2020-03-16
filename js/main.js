console.log('main.js');

// Period scroll
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