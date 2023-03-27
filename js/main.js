const cursor = new MouseFollower({
    container: 'main',
    speed: 0.3
});

const anchorTags = document.querySelectorAll('.navbar__desktop__link a');
anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        // Remove active class from all anchor tags
        anchorTags.forEach(tag => tag.classList.remove('active'))
        this.classList.add('active');
    });
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main__viewport'),
    smooth: true,
    mobile: {
        smooth: true,
        breakpoint: 0
    },
    tablet: {
        smooth: true,
        breakpoint: 0
    }
});


imagesLoaded(document.querySelector('.main__viewport'), { background: true }, function () {
    scroll.update();
});


function trans() {
    document.querySelector('.transition div:nth-child(1)').style.height='50vh'
}

scroll.on('call', (func, args, obj) => {
    //this[func]();
    //console.log(args);
    //console.log(obj.id);
    console.log("a")
});

scroll.on('scroll', (instance) => {
    const container = document.querySelector('.hz__fix');
    container.scrollLeft = instance.scroll.y;
});

document.querySelector(".launch__drawer").addEventListener("click", () => {
    document.querySelector(".navbar__mobile__drawer").style.transform="translateY(0%)"
    document.querySelector(".navbar__mobile__drawer__1").style.transform="translateY(0%)"
    document.querySelector(".navbar__mobile__drawer__2").style.transform="translateY(0%)"
})

document.querySelector(".cross_icon").addEventListener("click", () => {
    document.querySelector(".navbar__mobile__drawer").style.transform="translateY(-150%)"
    document.querySelector(".navbar__mobile__drawer__1").style.transform="translateY(-130%)"
    document.querySelector(".navbar__mobile__drawer__2").style.transform="translateY(-110%)"
})

let vw = document.documentElement.clientWidth;
if (vw<=900) {
    document.querySelector(".hz__fix").setAttribute("data-scroll-direction", "vertical");
    document.querySelector(".stick__hz").removeAttribute("data-scroll-target");
}