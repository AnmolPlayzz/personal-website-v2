const anchorTags = document.querySelectorAll('.navbar__desktop__link a');
anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        // Remove active class from all anchor tags
        anchorTags.forEach(tag => tag.classList.remove('active'))
        this.classList.add('active');
    });
});

const scroller = new LocomotiveScroll({
    el: document.querySelector('.main__viewport'),
    smooth: true
});