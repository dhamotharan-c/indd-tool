// "use strict";
// GSDevTools.create({});

var TL = gsap.timeline();

function startAd(){
    TL.set("#frameSet, #frame_header, #frame_2, #frame_3,#frame_4, #frame_4_1, #frame_3_f_2, #frame_3_c_2, #frame_3_f_3, #frame_3_c_3, #header-nrv, #frame_5, #frame_5-h1, #frame_5-h4, #frame_5-a", {opacity:0});
    gsap.set("#frame_4 img", {
        rotation: -20.5,
        x: -90,
        y: -34,
        z: 10
    });
    gsap.set("#frame_3_1", {
        height: "auto",
        top: "202px",
        left: "-75px",
        rotation: 3,
        scale: 1.25,
    });
    TL.set("#frame_footer", {opacity:0, y:20});
    

    TL.to("#frame_1", { opacity: 0, ease: 'power1.out',}, 0.95);
    TL.to("#frameSet", { opacity: 1, ease: 'power1.out',}, 1);
    TL.to("#frame_header", { opacity: 1, ease: 'power1.inOut'}, 1);
    TL.to("#frame_footer", { opacity: 1,  y: 0, ease: 'power1.inOut',}, 1.5);
    TL.to("#frame_2", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 1.25);
    TL.to("#frame_3", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 3).to("#frame_3_1",{
        height: "auto",
        rotation: 0,
        left: "10px",
        top: "248px",
        ease: 'power1.inOut',

    }, 4.5).to("#frame_3_f_1",{
        opacity: 0,
        ease: 'linear',
    }, 4.5).to("#frame_3_f_2, #frame_3_c_2",{
        ease: 'linear',
        opacity: 1,

    }, 4.5).to("#frame_3_f_2, #frame_3_c_1",{
        opacity: 0,
        ease: 'linear',

    }, 6.5).to("#frame_3_f_3, #frame_3_c_3",{
        ease: 'linear',
        opacity: 1,
    }, 6.5);


    TL.to("#header-nrv", {
        opacity: 1,
        ease: 'power1.inOut',
    }, 8).to("#header-inv", {
        opacity: 0,
        ease: 'power1.inOut',
    }, 8);

    TL.to("#frame_4", {
        opacity: 1, 
        // y: 0,
        // duration: 0.5, 
        ease: 'power1.inOut',
    }, 8).to("#frame_4 img", {
        opacity: 1, 
        rotation: 0,
        x: 0,
        y: 0,
        z: 0,
        ease: 'power1.inOut',
    }, 9.5).to("#frame_4_1", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 9.75);

    
    TL.to("#header-inv", {
        opacity: 0,
        ease: 'power1.inOut',
    }, 11).to("#header-nrv", {
        opacity: 1,
        ease: 'power1.inOut',
    }, 11);

    TL.to("#frame_5", {
        opacity: 1, 
        // y: 0,
        // duration: 0.5, 
        ease: 'power1.inOut',
    }, 11);

    TL.to("#frame_5-h1", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 11.5);
    TL.to("#frame_5-h4", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 12);
    TL.to("#frame_5-a", {
        opacity: 1, 
        ease: 'power1.inOut',
    }, 12.5);

    TL.to("#cta-arrow", 
        { 
            x: 25,
            ease: 'power1.inOut',
        }, 13);
    TL.set("#cta-arrow", 
        { 
            x: -40,
        }, 13.5);
        TL.to("#cta-arrow", 
        { 
            x: 0,
            opacity: 1,
            ease: 'power2.inOut',

        },13.75);
        // gsap.to(".text", {
        //     x: "100%", 
        //     duration: 5, 
        //     ease: "none", 
        //     repeat: -1, // Loop indefinitely
        //     onComplete: () => { 
        //       // Reset position after each loop
        //       gsap.set(".text", { x: 0 }); 
        //     }
        //   });
    console.log(TL.duration());

}

window.onload = function () {
	startAd();
}