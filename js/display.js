var responsiveScroller = function() {

var scroller = document.getElementById("scroller");
var scrollerWidth = scroller.offsetWidth;
var scrollList = document.getElementById("scroll_img");
var count = 1;
var items = scrollList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  scrollerWidth = scroller.offsetWidth;
});

var prevscroll = function() {
  if(count > 1) {
    count = count - 2;
    scrollList.style.left = "-" + count * scrollerWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    scrollList.style.left = "-" + count * scrollerWidth + "px";
    count++;
  }
};

var nextscroll = function() {
  if(count < items) {
    scrollList.style.left = "-" + count * scrollerWidth + "px";
    count++;
  }
  else if(count = items) {
    scrollList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextscroll();
});

prev.addEventListener("click", function() {
  prevscroll();
});

setInterval(function() {
  nextscroll()
}, 8000);

};

window.onload = function() {
responsiveScroller();  
}