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
        smooth: true
    },
    tablet: {
        smooth: true
    }
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

