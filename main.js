'use strict'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if(ScrollTrigger.isTouch != 1){
    ScrollSmoother.create({
        wrapper:'.wrapper',
        content:'.content',
        smooth:1.01,
        effects:true,
    })
}
