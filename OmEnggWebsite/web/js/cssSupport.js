/**
 * Created by om on 26-Nov-15.
 */

var product_images = new Array(); // create new array to preload images
product_images[0] = new Image(); // create new instance of image object
product_images[0].src = "../img/checkValve.jpg"; // set image src property to image path, preloading image in the process
product_images[1] = new Image();
product_images[1].src = "../img/maleEnd.jpg";
product_images[2] = new Image();
product_images[2].src = "../img/adjCracking.jpg";

var step = 0;

var facilityimages = new Array(); // create new array to preload images
facilityimages[0] = new Image(); // create new instance of image object
facilityimages[0].src = "../img/machining.jpg"; // set image src property to image path, preloading image in the process
facilityimages[1] = new Image();
facilityimages[1].src = "../img/testing.jpg";
facilityimages[2] = new Image();
facilityimages[2].src = "../img/marking.jpg";

var facilitystep = 0;

function redirectHome() {
    window.location = "OmEnggWebsite/html/menubar.html";
}

function openCollapse(clicked_id) {

    if (document.getElementById(clicked_id).className === "navbar-toggle collapsed") {
        document.getElementById(clicked_id).className = "navbar-toggle";
        document.getElementById("bs-example-navbar-collapse-2").className = "collapse navbar-collapse in";
    }
    else {
        document.getElementById(clicked_id).className = "navbar-toggle collapsed";
        document.getElementById("bs-example-navbar-collapse-2").className = "collapse navbar-collapse";
    }
}

function load_map() {
    var position = new google.maps.LatLng(15.815952, 74.495882);
    var myOptions = {
        zoom: 50,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "This is the place."
    });

    var contentString = 'Hello';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

function orderMore() {
    var original = document.getElementById('repeat');
    var divele = document.createElement("div");
    divele.innerHTML = createFormField();
    original.appendChild(divele);
}

function removeTag(obj) {
    obj.closest('div').remove();
}

function loadThanks() {
    window.location = "menubar.html";
    loadContainer("thanks");
}

function loadContainerAndMenu(menu) {
    openCollapse("mobile");
    loadContainer(menu);
}

function startCarousal() {
    $('#myCarousel').carousel({interval: 3000});
}

function loadContainer(menu) {
    if (menu === "home_page") {
        $("#contents").load("home_page.html #home_page", function () {
            startCarousal();
            slideit();
            facility();
        });
    }
    if (menu === "custom_page")
        $('#contents').load('custom_page.html #custom_page');
    if (menu === "check_valve")
        $('#contents').load('check_valve.html #check_valve');
    if (menu === "place_order")
        $('#contents').load('place_order.html #place_order');
    if (menu === "thanks")
        $('#contents').load('thanks.html #thanks');
    if (menu === "contact_us")
        $('#contents').load('contact_us.html #contact_us');
    if (menu === "about_us") {
        $('#contents').load('about_us.html #about_us', function () {
            load_map();
        });
    }
}

function createFormField() {
    var attach = '<div class="order_more"><label class="col-lg-2 control-label text_style">Model Number</label>' +
        '<div class="col-lg-3">' +
        '<select class="form-control" name="modelType">' +
        '<option>CV-06 - S1</option>  <option>CV-06 - S2</option>  <option>CV-06 - S3</option>  <option>CV-06 - S4</option>' +
        '<option>CV-08 - S1</option>  <option>CV-08 - S2</option> <option>CV-08 - S3</option>  <option>CV-08 - S4</option>' +
        '<option>CV-10 - S1</option>  <option>CV-10 - S2</option> <option>CV-10 - S3</option> <option>CV-10 - S4</option>' +
        '<option>CV-15 - S1</option> <option>CV-15 - S2</option> <option>CV-15 - S3</option> <option>CV-15 - S4</option>' +
        '<option>CV-20 - S1</option>      <option>CV-20 - S2</option>       <option>CV-20 - S3</option> <option>CV-20 - S4</option>' +
        '<option>CV-25 - S1</option>  <option>CV-25 - S2</option>    <option>CV-25 - S3</option>   <option>CV-25 - S4</option>' +
        '<option>CV-30 - S1</option>  <option>CV-30 - S2</option>  <option>CV-30 - S3</option>   <option>CV-30 - S4</option>' +
        '</select>  </div>  <label class="col-lg-2 control-label text_style">Quantity</label> ' +
        '<div class="col-lg-3">' +
        '<input type="number" min="1" max="500" value="1" name="qty"class="form-control">'
        + '</div>' + '<button class="btn btn-success" type="button" onclick="orderMore();">Add</button> ' +
        '<button class="btn btn-danger" type="button" onclick="removeTag(this)">Cancel</button><div>';

    return attach;
}

function slideit() {
    //if browser does not support the image object, exit.
    if (!document.images)
        return;
    document.getElementById('slide').src = product_images[step].src;
    if (step < 2)
        step++;
    else
        step = 0;
    //call function "slideit()" every 2.5 seconds
    setTimeout("slideit()", 2500);
}

function facility() {
    //if browser does not support the image object, exit.
    if (!document.images)
        return;
    document.getElementById('facility').src = facilityimages[facilitystep].src;
    if (facilitystep < 2)
        facilitystep++;
    else
        facilitystep = 0;
    //call function "slideit()" every 2.5 seconds
    setTimeout("facility()", 2500);
}

function clearAll(){
    $("div.order_more").remove();
}

function showThanksForContact() {
    BootstrapDialog.alert('Thank you for submitting your query with us. We will get back to you in 2-3 working days.');
}

function showThanksForOrder() {
    BootstrapDialog.alert('Thank you for showing interest. \n\n We have received the request for your order and it will be shipped to you shortly.');
}