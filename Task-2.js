

function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  
  
  }
  
  init();

function reload(){
  document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
  });

  window.onbeforeunload = function (e) {
    localStorage.setItem('scrollpos', window.scrollY);
  };
}



function load() {
  reload();
  var tt = gsap.timeline()
tt.to(".yoyo h3",{
  y:-50,
  opacity:0,
  duration:1.5,
  stagger:0.35
})

.to(".yoyo h4",{
  y:-50,
  opacity:0,
  duration:1.5,
  stagger:0.35,
 display:"block"

})

.to("#loader",{
  top:"-100%",
  duration:1,

})

.from(".out",{
  y:"-100%",
  opacity:0,
  duration:1.5,


},"helo")

.from(".out2",{
  y:"-100%",
  opacity:0,
  duration:1.5,
  

},"helo")

}



load();



var page5TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1-end",
    scroller:"#main",
    // markers:true,
    start:"top -20%",
    end:"top -90%",
    scrub:2,
    pin:true
  }
})
page5TL.to("#page1-end h1",{
  scale:4,
  filter:"blur(20px)",
  opacity:0,
})
page5TL.to("#page1-end h4",{
  scale:4,
  filter:"blur(20px)",
  opacity:0,
})
page5TL.to("#page1-end #para",{
  opacity:1,
})




var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top top",
        pin:true,
        scrub:4
    }
})

tl.to("#page2 video",{
    right:"92%",
    top:"-16%",
    rotate:"9deg",
    duration:5
})

tl.from("#page2 h1",{
    scale:1.5,
    duration:3,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        start:"top 60%",
        end:"top 40%",
        scrub:3,

    }
})


var crsr = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function(dets){
crsr.style.left = dets.x + 20 + "px"
crsr.style.top = dets.y + 20 + "px"

}) 

function pg2(){
  var center = document.querySelector("#center")
  var page2 = document.querySelector("#page2")

  page2.addEventListener("mouseenter", function(){
    crsr.innerHTML = "View Site"
    crsr.style.width = "90px"
    crsr.style.height = "90px"
    crsr.style.display = "flex"

    crsr.style.borderRadius = "50%"
        crsr.style.fontSize = "16px"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "white"
        crsr.style.backgroundColor = "#221508"
        crsr.style.border = "none"


  })

  page2.addEventListener("mouseleave", function(){
    crsr.innerHTML = ""
    crsr.style.width = "26px"
    crsr.style.height = "26px"
    crsr.style.display = "flex"

    crsr.style.borderRadius = "50%"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "1px"

  })
}

pg2();


var tl = gsap.timeline({
  scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      start:"top top",
      pin:true,
      scrub:4
  }
})

tl.to("#page3 video",{
  right:"92%",
  top:"-16%",
  rotate:"9deg",
  duration:5
})

tl.from("#page3 h1",{
  scale:1.5,
  duration:3,
  scrollTrigger:{
      trigger:"#page3 h1",
      scroller:"#main",
      start:"top 60%",
      end:"top 40%",
      scrub:3,

  }
})


function pg3(){
  var center2 = document.querySelector("#center2")
  var page3 = document.querySelector("#page3")

  page3.addEventListener("mouseenter", function(){
    crsr.innerHTML = "View Site"
    crsr.style.width = "90px"
    crsr.style.height = "90px"
    crsr.style.display = "flex"

    crsr.style.borderRadius = "50%"
        crsr.style.fontSize = "16px"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.color = "white"
        crsr.style.backgroundColor = "#221508"
        crsr.style.border = "none"


  })

  page3.addEventListener("mouseleave", function(){
    crsr.innerHTML = ""
    crsr.style.width = "26px"
    crsr.style.height = "26px"
    crsr.style.display = "flex"

    crsr.style.borderRadius = "50%"
        crsr.style.alignItems = "center"
        crsr.style.justifyContent = "center"
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "1px"

  })
}

pg3();


var tl = gsap.timeline({
  scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start:"top top",
      pin:true,
      scrub:4
  }
})

tl.to("#page4 video",{
  right:"92%",
  top:"-16%",
  rotate:"9deg",
  duration:5
})

tl.from("#page4 h1",{
  scale:1.5,
  duration:3,
  scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"#main",
      start:"top 60%",
      end:"top 40%",
      scrub:3,

  }
})

var row = document.querySelectorAll(".row")
row.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        crsr.style.width = "400px"
        crsr.style.height = "300px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        crsr.style.transform = "translate(-50%, -50%)"
        crsr.style.backgroundPosition ="center"
        crsr.style.backgroundSize ="cover"

        // att.style.zIndex = 99

    })

    elem.addEventListener("mouseleave", function () {
        // elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})
