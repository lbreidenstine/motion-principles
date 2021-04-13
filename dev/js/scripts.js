import { gsap } from "gsap";

let shapeTL = gsap.timeline();

shapeTL.to("#blue-circle", {duration: 1, x: 200})
        .to("#blue-circle", {duration: .5, y: -300})
        .to("#blue-circle", {duration: .5, scaleX: 2})
        .to("#blue-circle", {duration: .25, scaleY: 1.5})
        .to("#blue-circle", {duration: .75, scaleX: 1})
        .to("#blue-circle", {duration: 1, scaleY: 1, backgroundColor:"#55C19C"})
        .to("#blue-circle", {duration: 2, x: -500})
        .to("#blue-circle", {duration: .35, y: -100})
        .to("#blue-circle", {duration: .25, y: 50, scaleY: .75})
        .to("#blue-circle", {duration: .25, scale: 1.5, backgroundColor:"#78CD67"})
        .to("#blue-circle", {duration: .5, scale: 1, borderRadius: 0})
        .to("#blue-circle", {duration: 1, scale: 1.25, x: 300, rotation: 360})
        .to("#blue-circle", {duration: 1, scale: 1.25, rotation: 180})
        .to("#blue-circle", {duration: .5, scale: 1.5, repeat: 3, yoyo: true })
        .to("#blue-circle", {duration: .5, y: 100, backgroundColor:"#EEDE53"})
        .to("#blue-circle", {duration: 1, borderRadius: 100})
        .to("#blue-circle", {duration: .5, scaleX: 2})
        .to("#blue-circle", {duration: .5, scaleY: 1.5})
        .to("#blue-circle", {duration: .75, scaleX: 1})
        .to("#blue-circle", {duration: .75, scaleY: 1})
        .to("#blue-circle", {duration: 1.5, alpha: 0});
