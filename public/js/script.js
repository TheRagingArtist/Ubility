var baseUrl = "https://maps.googleapis.com/maps/api/place/";
var myApiKey = "AIzaSyAZBwN5cFJ-AU3LZj_xvRudj7HP8YODsrU";

function getPlaceInfo() {
  var urlExtend = baseUrl + "findplacefromtext/json?input=";
  var query = $('#search-input').val();
  var words = query.split(' ');
  words.forEach(function(word) {
    urlExtend += word;
    if (word !== words[(words.length - 1)]) {
      urlExtend += "%20";
    }
  });
  urlExtend += "&inputtype=textquery&fields=photos,formatted_address,name" +
  "&locationbias=circle:2000@35.7796,-78.6382&key=";
  urlExtend += myApiKey;
  
  var name = '';
  var address = '';
  var imageUrl = '';
  
    var json = $.ajax({
        url:urlExtend,
        type:"GET",
        success: function(result) {
            result.candidates.forEach(function(candidate) {
            
                name = candidate.name;
                address = candidate.formatted_address;
                imageUrl = candidate.photos[0].photo_reference;
                
                makeImage(imageUrl);
                makeName(name);
                makeAddress(address);
            
            });
        }
    });
}

$('.search-review-button').on('click', function() {
    getPlaceInfo();
    $(".leave-review").removeClass('hidden');
     $(".review-button").removeClass('hidden');
         $('html, body').animate({
        scrollTop: $('.search-results-grid-item').offset().top
    }, 2000);
    
});

function makeImage(photoReference) {

    var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoReference;
    url += "&key=" + myApiKey;
    var imgTag = document.createElement("IMG");
    imgTag.setAttribute("src", url);
    
    imgTag.classList.add("grid-image");
    
    document.getElementsByClassName('search-results-grid-item')[0].appendChild(imgTag);

}

function makeName(name) {

    var nameTag = document.createElement("P");
    
    var text = document.createTextNode(name);
    
    nameTag.appendChild(text);
    
    nameTag.classList.add("grid-name");
    
    document.getElementsByClassName('search-results-grid-item')[0].appendChild(nameTag);
    

}

function makeAddress(address) {

    var addressTag = document.createElement("P");
    
    var text = document.createTextNode(address);
    
    addressTag.appendChild(text);
    
    addressTag.classList.add("grid-address");
    
    document.getElementsByClassName('search-results-grid-item')[0].appendChild(addressTag);
    

}

const $star1 = $('#1');
const $star2 = $('#2');
const $star3 = $('#3');
const $star4 = $('#4');
const $star5 = $('#5');

$( '.far' ).click(function() {
  $( this ).toggleClass( 'fas' );
});

$star2.on('click', () => {
    document.getElementById("1").classList.add('fas');
});

$star3.on('click', () => {
    document.getElementById("1").classList.add('fas');
    
    document.getElementById("2").classList.add('fas');
});

$star4.on('click', () => {
    document.getElementById("1").classList.add('fas');
    
    document.getElementById("2").classList.add('fas');
    
    document.getElementById("3").classList.add('fas');
});


$star5.on('click', () => {

    document.getElementById("1").classList.add('fas');
    
    document.getElementById("2").classList.add('fas');
    
    document.getElementById("3").classList.add('fas');
    
    document.getElementById("4").classList.add('fas');
});

if(document.getElementsByClassName('fa-star')[0].classList.contains("fas")) {
        document.getElementsByClassName('fa-star')[0].style.color = "#15E6DD";
}

$( '.accessibility' ).click(function() {
  $( this ).toggleClass( 'dis' );
});

const $blind = $('#blind');
const $deaf = $('#deaf');
const $sign = $('#sign');
const $dog = $('#dog');
const $wheelchair = $('#meh');
const $crutch= $('#crutch');
const $lightbulb = $('#lightbulb');


if(document.getElementById("blind").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("deaf").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("sign").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("dog").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("wheelchair").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("crutch").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


if(document.getElementById("lightbulb").classList.contains("dis")) {
        document.getElementsByClassName('dis')[0].style.color = "#15E6DD";
}


$( '.react' ).click(function() {
  $( this ).toggleClass( 'disa' );
});



const $face1 = $('#smile');
const $face2 = $('#meh');
const $face3 = $('#frown');

$face1.on('click', () => {
    document.getElementById("meh").classList.remove('disa');
    document.getElementById("frown").classList.remove('disa');
});

$face2.on('click', () => {
    document.getElementById("smile").classList.remove('disa');
    document.getElementById("frown").classList.remove('disa');
});

$face3.on('click', () => {
    document.getElementById("smile").classList.remove('disa');
    document.getElementById("meh").classList.remove('disa');
});


if(document.getElementsByClassName('le')[0].classList.contains("disa")) {
        document.getElementsByClassName('disa')[0].style.color = "#15E6DD";
}

//modal stuff
function show_modal_top() {
  document.getElementsByClassName('modal')[0].style.display = "block";
}
function hide_modal_top() {
  document.getElementsByClassName('modal')[0].style.display = "none";
}

$('.submit-button').on('click', () => {
    saveReview();
    removeRevForm();
    show_modal_top();
});

$('.review-button').on('click', () => {
    show_modal_top();
});

function saveReview() {
    var title = document.createElement("H3");
    var text = document.createTextNode("Reviews");
    title.appendChild(text);
    title.classList.add("modal-text-h3");
    document.getElementsByClassName('modal-content')[0].appendChild(title);
    
    var nameTag = document.createElement("P");
    text = document.createTextNode("Name: " + $('.form-name').val());
    nameTag.appendChild(text);
    nameTag.classList.add("modal-text");
    document.getElementsByClassName('modal-content')[0].appendChild(nameTag);
    
    var ageTag = document.createElement("P");
    text = document.createTextNode("Age: " + $('.form-age').val());
    ageTag.appendChild(text);
    ageTag.classList.add("modal-text");
    document.getElementsByClassName('modal-content')[0].appendChild(ageTag);
    
    var disTag = document.createElement("P");
    text = document.createTextNode("Disability: " + $('.form-dis').val());
    disTag.appendChild(text);
    disTag.classList.add("modal-text");
    document.getElementsByClassName('modal-content')[0].appendChild(disTag);
    
    var disTag = document.createElement("DIV");
    disTag.classList.add("friendly-rating");
    document.getElementsByClassName('modal-content')[0].appendChild(disTag);
    
    
    var disTag = document.createElement("DIV");
    disTag.classList.add("accessibility-rating");
    document.getElementsByClassName('modal-content')[0].appendChild(disTag);
       
    if ($("span#smile").hasClass('disa')) { 
    
        var friendly = document.createElement("DIV");
        var friendlyIcon = document.createElement("SPAN");
        
        friendly.appendChild(friendlyIcon);
        
        friendly.classList.add("friendlyRating");
        friendlyIcon.classList.add("fas");
        friendlyIcon.classList.add("fa-grin-beam");
        friendlyIcon.classList.add("disa");
        friendlyIcon.classList.add("font-react");
        
        document.getElementsByClassName('friendly-rating')[0].appendChild(friendly);
        
    } else if ($("span#meh").hasClass('disa')) {
        
        var friendly = document.createElement("DIV");
        var friendlyIcon = document.createElement("SPAN");
        
        friendly.appendChild(friendlyIcon);
        
        friendly.classList.add("friendlyRating");
        friendlyIcon.classList.add("fas");
        friendlyIcon.classList.add("fa-meh");
        friendlyIcon.classList.add("disa");
        friendlyIcon.classList.add("font-react");
        
        document.getElementsByClassName('friendly-rating')[0].appendChild(friendly);
        
    } else if ($("span#frown").hasClass('disa')) {
        
        var friendly = document.createElement("DIV");
        var friendlyIcon = document.createElement("SPAN");
        
        friendly.appendChild(friendlyIcon);
        
        friendly.classList.add("friendlyRating");
        friendlyIcon.classList.add("fas");
        friendlyIcon.classList.add("fa-frown");
        friendlyIcon.classList.add("disa");
        friendlyIcon.classList.add("font-react");
        
        document.getElementsByClassName('friendly-rating')[0].appendChild(friendly);
    }
    if ($("span#blind").hasClass('dis')) {
        
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-blind");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#deaf").hasClass('dis')) {
        
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-deaf");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#sign").hasClass('dis')) {
                
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-sign-language");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#dog").hasClass('dis')) {
                
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-dog");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#wheelchair").hasClass('dis')) {
                       
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-wheelchair");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#crutch").hasClass('dis')) {
        
         var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-crutch");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    if ($("span#lightbulb").hasClass('dis')) {
        
        var accessibility = document.createElement("DIV");
        var accessibilityIcon = document.createElement("SPAN");
        
        accessibility.appendChild(accessibilityIcon);
        
        accessibility.classList.add("accessibilityRating");
        accessibilityIcon.classList.add("fas");
        accessibilityIcon.classList.add("fa-lightbulb");
        accessibilityIcon.classList.add("dis");
        accessibilityIcon.classList.add("accessibility");
        
        document.getElementsByClassName('accessibility-rating')[0].appendChild(accessibility);
    }
    
    
    if ($("span#1").hasClass('fas')) {
        
        var ratingOuter1 = document.createElement("DIV");
        var rating = document.createElement("DIV");
        var ratingIcon = document.createElement("SPAN");
        
        
        rating.appendChild(ratingIcon);
        ratingOuter1.appendChild(rating);
        
        ratingOuter1.classList.add("ratingOuter1");
        rating.classList.add("rating");
        ratingIcon.classList.add("fas");
        ratingIcon.classList.add("fa-star");
        ratingIcon.classList.add("far");
        
        document.getElementsByClassName('modal-content')[0].appendChild(ratingOuter1);
    }
    if ($("span#2").hasClass('fas')) {
        
        var ratingOuter2 = document.createElement("DIV");
        var rating = document.createElement("DIV");
        var ratingIcon = document.createElement("SPAN");
        
        
        rating.appendChild(ratingIcon);
        ratingOuter2.appendChild(rating);
        
        ratingOuter2.classList.add("ratingOuter2");
        rating.classList.add("rating");
        ratingIcon.classList.add("fas");
        ratingIcon.classList.add("fa-star");
        ratingIcon.classList.add("far");
        
        document.getElementsByClassName('modal-content')[0].appendChild(ratingOuter2);
    }
    if ($("span#3").hasClass('fas')) {
        
        var ratingOuter3 = document.createElement("DIV");
        var rating = document.createElement("DIV");
        var ratingIcon = document.createElement("SPAN");
        
        
        rating.appendChild(ratingIcon);
        ratingOuter3.appendChild(rating);
        
        ratingOuter3.classList.add("ratingOuter3");
        rating.classList.add("rating");
        ratingIcon.classList.add("fas");
        ratingIcon.classList.add("fa-star");
        ratingIcon.classList.add("far");
        
        document.getElementsByClassName('modal-content')[0].appendChild(ratingOuter3);
    }
    if ($("span#4").hasClass('fas')) {
        
        var ratingOuter4 = document.createElement("DIV");
        var rating = document.createElement("DIV");
        var ratingIcon = document.createElement("SPAN");
        
        
        rating.appendChild(ratingIcon);
        ratingOuter4.appendChild(rating);
        
        ratingOuter4.classList.add("ratingOuter4");
        rating.classList.add("rating");
        ratingIcon.classList.add("fas");
        ratingIcon.classList.add("fa-star");
        ratingIcon.classList.add("far");
        
        document.getElementsByClassName('modal-content')[0].appendChild(ratingOuter4);
    }
    if ($("span#5").hasClass('fas')) {
        
        var ratingOuter5 = document.createElement("DIV");
        var rating = document.createElement("DIV");
        var ratingIcon = document.createElement("SPAN");
        
        
        rating.appendChild(ratingIcon);
        ratingOuter5.appendChild(rating);
        
        ratingOuter5.classList.add("ratingOuter5");
        rating.classList.add("rating");
        ratingIcon.classList.add("fas");
        ratingIcon.classList.add("fa-star");
        ratingIcon.classList.add("far");
        
        document.getElementsByClassName('modal-content')[0].appendChild(ratingOuter5);
    }
    var revTag = document.createElement("P");
    text = document.createTextNode("Review: " + $('.form-rev').val());
    revTag.appendChild(text);
    revTag.classList.add("modal-text");
    document.getElementsByClassName('modal-content')[0].appendChild(revTag);
}
function removeRevForm() {
    $('.leave-review').remove();
    $('.ubility-leave-review-container').remove();
}