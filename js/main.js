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

const links = document.querySelectorAll('a[data-scroll]');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('data-scroll'));
        scroll.scrollTo(target);
    });
});

const sections = document.querySelectorAll('.sect');
scroll.on('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
            links.forEach(link => {
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});

const mblinks = document.querySelectorAll('.navbar__mobile__drawer a');
mblinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(".navbar__mobile__drawer").style.transform="translateY(-150%)"
        document.querySelector(".navbar__mobile__drawer__1").style.transform="translateY(-130%)"
        document.querySelector(".navbar__mobile__drawer__2").style.transform="translateY(-110%)"
    });
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    document.querySelector(".mf-cursor").style.display="none"
}