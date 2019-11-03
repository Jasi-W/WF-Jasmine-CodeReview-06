var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var City = /** @class */ (function () {
    function City(name, description, place, ZIP, address, img) {
        this.name = name;
        this.description = description;
        this.place = place;
        this.ZIP = ZIP;
        this.address = address;
        this.img = img;
    }
    City.prototype.display = function () {
        return "\n\t\t\t<div class=\"card-deck col-md-12 col-lg-6 col-xl-4 mx-auto m-3\">\n\t\t\t<div class=\"card shadow bg-white rounded mb-4\">\n\t\t\t\t<img src=\"" + this.img + "\" class=\"card-img-top\" height=\"200px\">\n\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t  <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t  <p class=\"card-text\">" + this.description + "</p>";
    };
    return City;
}());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, description, place, ZIP, address, img, ranking, eventDate, eventTime, price) {
        var _this = _super.call(this, name, description, place, ZIP, address, img) || this;
        _this.ranking = ranking;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return document.querySelector(".row").innerHTML += _super.prototype.display.call(this) + " \n\t\t\t\t  <hr>\n\t\t\t\t  <b class=\"float-left\"><i class=\"fas fa-calendar-day\"></i> Date</b><b class=\"float-right\"><i class=\"far fa-clock\"></i> Time</b><br>\n\t\t\t\t  <div class=\"float-left\">" + this.eventDate + "</div>\n\t\t\t\t  <div class=\"float-right\">" + this.eventTime + "</div><br>\n\t\t\t\t  <hr>\n\t\t\t\t  <address>\n\t\t\t\t\t<i class=\"fas fa-map-marker-alt\"></i> <b>Address</b><br>\n\t\t\t\t\t" + this.ZIP + ", " + this.address + "<br>\n\t\t\t\t  </address>\n\t\t\t\t  <hr>\n\t\t\t\t  <div class=\"float-left mt-2\">\n\t\t\t\t    <h4 class=\"text-center\"><b>\u20AC " + this.price + "</b></h4>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"float-right\">\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary\">Booking</a>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card-footer text-center\">\n\t\t\t\t" + this.rankingStars() + "\n\t\t\t</div>\n\t\t</div>\n\t\t</div>";
    };
    Events.prototype.rankingStars = function () {
        var rankingStars;
        for (var i = 1; i <= 5; i++) {
            if (parseInt("" + this.ranking) >= i) {
                rankingStars += "<i class=\"fas fa-star checked\"></i>";
            }
            else {
                rankingStars += "<i class=\"fas fa-star\"></i>";
            }
        }
        return rankingStars;
    };
    return Events;
}(City));
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, description, place, ZIP, address, img, ranking, typ, phone, website) {
        var _this = _super.call(this, name, description, place, ZIP, address, img) || this;
        _this.ranking = ranking;
        _this.typ = typ;
        _this.phone = phone;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return document.querySelector(".row").innerHTML += _super.prototype.display.call(this) + " \n\t\t\t\t  <hr>\n\t\t\t\t  <i class=\"fas fa-utensils\"></i> <b>Traditional cafe</b>\n\t\t\t\t  <div class=\"float-right\">" + this.typ + "</div><br>\n\t\t\t\t  <hr>\n\t\t\t\t  <address>\n\t\t\t\t\t<i class=\"fas fa-map-marker-alt\"></i> <b>Adresse</b><br>\n\t\t\t\t\t" + this.ZIP + ", " + this.address + "<br>\n\t\t\t\t  </address>\n\t\t\t\t  <hr>\n\t\t\t\t  <b>&phone; Phone</b><div class=\"float-right\">" + this.phone + "</div><br>\n\t\t\t\t  <b><i class=\"fas fa-home\"></i> Homepage</b><a href=\"" + this.website + "\" class=\"float-right\">" + this.name + "</a>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"card-footer text-center\">\n\t\t\t\t" + this.rankingStars() + "\n\t\t\t</div>\n\t\t</div>\n\t\t</div>";
    };
    Restaurant.prototype.rankingStars = function () {
        var rankingStar;
        for (var i = 1; i <= 5; i++) {
            if (parseInt("" + this.ranking) >= i) {
                rankingStar += "<i class=\"fas fa-star checked\"></i>";
            }
            else {
                rankingStar += "<i class=\"fas fa-star\"></i>";
            }
        }
        return rankingStar;
    };
    return Restaurant;
}(City));
/*-- EVENTS
    constructor(name, description, place, ZIP, address, img, public ranking, public eventDate, public eventTime, public price) {
--*/
var city0 = new Events("St. Stephen's Cathedral", "Short description of St. Stephen's Cathedral", "Vienna", 1010, "Stephansplatz", "./img/img1.jpg", 4, "20.11.2019", "14:00", "19.90");
var city1 = new Events("Schönbrunn Palace", "Short description of Schönbrunn Palace", "Vienna", 1130, "Schönbrunner Schlossstraße 47", "./img/img2.jpg", 3, "18.12.2019", "10:30", "149.90");
var city2 = new Events("Giant Ferris Wheel", "Short description of Giant Ferris Wheel", "Vienna", 1020, "Riesenradplatz 1", "./img/img3.jpg", 2, "20.04.2019", "14:00", "119.90");
var city3 = new Events("City hall", "Short description of city hall", "Vienna", 1010, "Friedrich-Schmidt-Platz 1", "./img/img4.jpg", 2, "13.01.2020", "13:00", "29.90");
/*-- RESTAURANTS
    constructor(name, description, place, ZIP, address, img, public ranking, public typ, public phone, public website) {
--*/
var city4 = new Restaurant("Cafe Landtmann", "Short description of Cafe Landtmann", "Vienna", 1010, "Universitätsring 4", "./img/img5.jpg", 4, "Viennese cuisine", "+43 1 24 100 120", "https://www.landtmann.at/en/the-landtmann/our-coffee-house.html");
var city5 = new Restaurant("Cafe Sacher", "Short description of Cafe Sacher", "Vienna", 1010, "Philharmonikerstr. 4", "./img/img6.jpg", 4, "Viennese cuisine", "+43 1 514 56 661", "https://www.sacher.com/en/vienna/restaurants/");
var city6 = new Restaurant("Cafe Mozart", "Short description of Cafe Mozart", "Vienna", 1010, "Albertinaplatz 2", "./img/img7.jpg", 4, "Viennese cuisine", "+43 1 24 100 200", "https://www.cafe-mozart.at/en/cafe-mozart.html");
var city7 = new Restaurant("Demel", "Short description of Demel", "Vienna", 1010, "Kohlmarkt 14", "./img/img8.jpg", 4, "Viennese cuisine", "+43 1 53 51 717", "https://www.demel.com/en/home/");
var cityObjects = [city0, city4, city1, city5, city2, city6, city3, city7];
for (var i = 0; i <= cityObjects.length; i++) {
    var cityObject = cityObjects[i].display();
}
/*
let openHours = ["08:00 - 18:00", "08:00 - 18:00", "08:00 - 18:00", "08:00 - 18:00", "08:00 - 14:00", "Geschlossen", "Geschlossen"]

${this.openHours()}


openHours() {
    let weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    let week = "";
    
    for(let i=0; i<7; i++) {
        week += `<tr>
                    <td class="text-right"><b>${weekdays[i]}</b></td>
                    <td>${this.shoppingHours[i]}</td>
                </tr>`
        ;
    }
    return week;
}
*/
