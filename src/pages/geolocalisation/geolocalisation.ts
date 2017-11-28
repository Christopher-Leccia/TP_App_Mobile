import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 

@IonicPage()
@Component({
  selector: 'page-geolocalisation',
  templateUrl: 'geolocalisation.html',
})
export class GeolocalisationPage {

 	latitude: number;
 	longitude: number;
 	TabGeo: Array<GeolocationWatch> = new Array<GeolocationWatch>();


 	constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
 		this.geolocation.getCurrentPosition().then((resp) => {
 		this.latitude = resp.coords.latitude;
 		this.longitude = resp.coords.longitude;
 		
		}).catch((error) => {
  		console.log('Error getting location', error);
		});

		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
 		// data can be a set of coordinates, or an error (if an error occurred).
 		this.TabGeo.push(new GeolocationWatch(data.coords.latitude, data.coords.longitude));
		});

	};

	ionViewDidLoad() {
		
	}
}


class GeolocationWatch {
	
	constructor(public longitudeX: number, public latitudeY: number) {
		
	}
}