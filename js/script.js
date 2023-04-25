/* scroll-to-top */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
/* anchor-js */
anchors.options.placement = 'left';
anchors.add();
