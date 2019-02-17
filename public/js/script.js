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
});

function makeImage(photoReference) {

    var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoReference;
    url += "&key=" + myApiKey;
    var imgTag = document.createElement("IMG");
    imgTag.setAttribute("src", url);
    
    imgTag.classList.add("grid-image");
    
    document.getElementsByClassName('search-results-grid-item grid-1')[0].appendChild(imgTag);

}

function makeName(name) {

    var nameTag = document.createElement("P");
    
    var text = document.createTextNode(name);
    
    nameTag.appendChild(text);
    
    nameTag.classList.add("grid-name");
    
    document.getElementsByClassName('search-results-grid-item grid-1')[0].appendChild(nameTag);
    

}

function makeAddress(address) {

    var addressTag = document.createElement("P");
    
    var text = document.createTextNode(address);
    
    addressTag.appendChild(text);
    
    addressTag.classList.add("grid-address");
    
    document.getElementsByClassName('search-results-grid-item grid-1')[0].appendChild(addressTag);
    

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
    document.getElementById("1").style.color = "#15E6DD";
});

$star3.on('click', () => {
    document.getElementById("1").classList.add('fas');
    document.getElementById("1").style.color = "#15E6DD";
    
    document.getElementById("2").classList.add('fas');
    document.getElementById("2").style.color = "#15E6DD";
});

$star4.on('click', () => {
    document.getElementById("1").classList.add('fas');
    document.getElementById("1").style.color = "#15E6DD";
    
    document.getElementById("2").classList.add('fas');
    document.getElementById("2").style.color = "#15E6DD";
    
    document.getElementById("3").classList.add('fas');
    document.getElementById("3").style.color = "#15E6DD";
});


$star5.on('click', () => {

    document.getElementById("1").classList.add('fas');
    document.getElementById("1").style.color = "#15E6DD";
    
    !(if($star1.classList.contains('fas')) {
        document.getElementById("1").style.color = "white";
    }
    
    document.getElementById("2").classList.add('fas');
    document.getElementById("2").style.color = "#15E6DD";
    
    document.getElementById("3").classList.add('fas');
    document.getElementById("3").style.color = "#15E6DD";
    
    document.getElementById("4").classList.add('fas');
    document.getElementById("4").style.color = "#15E6DD";
});
