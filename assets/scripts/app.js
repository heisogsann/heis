'use strict';

var $ = require('zepto-browserify').$


// Each page should export a function to be called on page ready.
var pages = {
    home: require('./pages/home'),
    services: require('./pages/services'),
    testimonials: require('./pages/testimonials')
}

// Execute page-specific Javascript.
$(document).ready(function() {
    var page = $('body').prop('className')
    if (pages.hasOwnProperty(page)) {
        pages[page]()
    }    
})
