/**
 * Created by Vignesh on 12/7/15.
 */
var pageSlider = {
    slide : function(fromDom, toDom){
        var homePage = document.getElementById(fromDom),
            newPage = document.getElementById(toDom);
        // Position the page at the starting position of the animation
        newPage.className = "page right";
        // Position page at ending position of animation and add transition-duration
        newPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        homePage.className = "page transition left";
    },

    homeMenuSlide : function(fromDom, toDom){
        var homePage = document.getElementById(fromDom),
            newPage = document.getElementById(toDom);
        // Position the page at the starting position of the animation
        newPage.className = "page right";
        // Position page at ending position of animation and add transition-duration
        newPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        //homePage.className = "page transition left";
    },

    menuSlide : function(fromDom, midDom, toDom){
        var fromDomPage = document.getElementById(fromDom),
            toDomPage = document.getElementById(toDom),
            toMidPage = document.getElementById(midDom);
        // Position the page at the starting position of the animation
        toDomPage.className = "page right";
        // Position page at ending position of animation and add transition-duration
        toDomPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        fromDomPage.className = "page transition left";
        toMidPage.className = "page transition left";
    },

    menuBackSlide : function(fromDom, toDom){
        var homePage = document.getElementById(fromDom),
            newPage = document.getElementById(toDom);
        // Position the page at the starting position of the animation
        newPage.className = "page right";
        // Position page at ending position of animation and add transition-duration
        newPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        homePage.className = "page transition left";
    },

    backSlide : function(fromDom, toDom){
        var homePage = document.getElementById(fromDom),
            newPage = document.getElementById(toDom);
        // Position the page at the starting position of the animation
        newPage.className = "page left";
        // Position page at ending position of animation and add transition-duration
        newPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        homePage.className = "page transition right";
    },

    techSlide :function(fromDom, toDom){
        var homePage = document.getElementById(fromDom),
            newPage = document.getElementById(toDom);
        // Position the page at the starting position of the animation
        newPage.className = "page left";
        // Position page at ending position of animation and add transition-duration
        newPage.className ="page transition center";
        // Simultaneously slide out the current page to the left of the viewport
        homePage.className = "page transition right";
    }
}