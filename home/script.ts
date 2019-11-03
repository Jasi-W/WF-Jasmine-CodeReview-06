
class City {

	constructor(public name, public description, public place, public ZIP, public address, public img) { }
	
	display() {
		return `
			<div class="card-deck col-md-12 col-lg-6 col-xl-4 mx-auto m-3">
			<div class="card shadow bg-white rounded mb-4">
				<img src="${this.img}" class="card-img-top" height="200px">

				<div class="card-body">
				  <h5 class="card-title">${this.name}</h5>
				  <p class="card-text">${this.description}</p>`;
	}
}


class Events extends City {
	
	constructor(name, description, place, ZIP, address, img, public ranking, public eventDate, public eventTime, public price) {
		super(name, description, place, ZIP, address, img);
	}
	
	display() {
		return document.querySelector(".row").innerHTML += `${super.display()} 
				  <hr>
				  <b class="float-left"><i class="fas fa-calendar-day"></i> Date</b><b class="float-right"><i class="far fa-clock"></i> Time</b><br>
				  <div class="float-left">${this.eventDate}</div>
				  <div class="float-right">${this.eventTime}</div><br>
				  <hr>
				  <address>
					<i class="fas fa-map-marker-alt"></i> <b>Address</b><br>
					${this.ZIP}, ${this.address}<br>
				  </address>
				  <hr>
				  <div class="float-left mt-2">
				    <h4 class="text-center"><b>€ ${this.price}</b></h4>
				  </div>
				  <div class="float-right">
					<a href="#" class="btn btn-primary">Booking</a>
				  </div>
				</div>

				<div class="card-footer text-center">
				${this.rankingStars()}
			</div>
		</div>
		</div>`;
	}
	
	rankingStars() {
		let rankingStars;
		
		for(let i=1; i<=5; i++) {
			if(parseInt(`${this.ranking}`) >= i){
				rankingStars += `<i class="fas fa-star checked"></i>`;
			} else {
				rankingStars += `<i class="fas fa-star"></i>`;
			}
		}
		return rankingStars;
	}
}

class Restaurant extends City {

	constructor(name, description, place, ZIP, address, img, public ranking, public typ, public phone, public website) {
		super(name, description, place, ZIP, address, img);
	}
	
	display() {
		return document.querySelector(".row").innerHTML += `${super.display()} 
				  <hr>
				  <i class="fas fa-utensils"></i> <b>Traditional cafe</b>
				  <div class="float-right">${this.typ}</div><br>
				  <hr>
				  <address>
					<i class="fas fa-map-marker-alt"></i> <b>Adresse</b><br>
					${this.ZIP}, ${this.address}<br>
				  </address>
				  <hr>
				  <b>&phone; Phone</b><div class="float-right">${this.phone}</div><br>
				  <b><i class="fas fa-home"></i> Homepage</b><a href="${this.website}" class="float-right">${this.name}</a>
				</div>
	
				<div class="card-footer text-center">
				${this.rankingStars()}
			</div>
		</div>
		</div>`;
	}
		
	rankingStars() {
		let rankingStar;
		
		for(let i=1; i<=5; i++) {
			if(parseInt(`${this.ranking}`) >= i){
				rankingStar += `<i class="fas fa-star checked"></i>`;
			} else {
				rankingStar += `<i class="fas fa-star"></i>`;
			}
		}
		return rankingStar;
	}
}


/*-- EVENTS 
	constructor(name, description, place, ZIP, address, img, public ranking, public eventDate, public eventTime, public price) {
--*/
let city0 = new Events("St. Stephen's Cathedral", "Short description of St. Stephen's Cathedral", "Vienna", 1010, "Stephansplatz", "./img/img1.jpg", 4, "20.11.2019", "14:00", "19.90");
let city1 = new Events("Schönbrunn Palace", "Short description of Schönbrunn Palace", "Vienna", 1130, "Schönbrunner Schlossstraße 47", "./img/img2.jpg", 3, "18.12.2019", "10:30", "149.90");
let city2 = new Events("Giant Ferris Wheel", "Short description of Giant Ferris Wheel", "Vienna", 1020, "Riesenradplatz 1", "./img/img3.jpg", 2, "20.04.2019", "14:00", "119.90");
let city3 = new Events("City hall", "Short description of city hall", "Vienna", 1010, "Friedrich-Schmidt-Platz 1", "./img/img4.jpg", 2, "13.01.2020", "13:00", "29.90");


/*-- RESTAURANTS 
	constructor(name, description, place, ZIP, address, img, public ranking, public typ, public phone, public website) {
--*/
let city4 = new Restaurant("Cafe Landtmann", "Short description of Cafe Landtmann", "Vienna", 1010, "Universitätsring 4", "./img/img5.jpg", 4, "Viennese cuisine", "+43 1 24 100 120", "https://www.landtmann.at/en/the-landtmann/our-coffee-house.html");
let city5 = new Restaurant("Cafe Sacher", "Short description of Cafe Sacher", "Vienna", 1010, "Philharmonikerstr. 4", "./img/img6.jpg", 4, "Viennese cuisine", "+43 1 514 56 661", "https://www.sacher.com/en/vienna/restaurants/");
let city6 = new Restaurant("Cafe Mozart", "Short description of Cafe Mozart", "Vienna", 1010, "Albertinaplatz 2", "./img/img7.jpg", 4, "Viennese cuisine", "+43 1 24 100 200", "https://www.cafe-mozart.at/en/cafe-mozart.html");
let city7 = new Restaurant("Demel", "Short description of Demel", "Vienna", 1010, "Kohlmarkt 14", "./img/img8.jpg", 4, "Viennese cuisine", "+43 1 53 51 717", "https://www.demel.com/en/home/");

let cityObjects = [city0, city4, city1, city5, city2, city6, city3, city7];

for(let i=0; i<=cityObjects.length; i++) {
	let cityObject = cityObjects[i].display();
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
