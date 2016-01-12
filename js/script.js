$(document).ready(function(){
	console.log("jQuery working");

	$('#fullpage').fullpage({
		//Navigation
    menu: '#myMenu',
    lockAnchors: true,
    anchors:['introPage', 'aboutMe', 'projects', 'contact'],
    navigation: false,
    navigationPosition: 'left',
    navigationTooltips: ['Introduction', 'About Me', 'Projects', 'Contact'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize : true,
    //sectionsColor: ['red', '#4BBFC3', '#7BAABE', '#F5F485'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 800,
    responsiveHeight: 500,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});