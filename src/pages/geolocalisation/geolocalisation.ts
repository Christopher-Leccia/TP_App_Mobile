import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

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
 	map: GoogleMap;


 	constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private googleMaps: GoogleMaps) {
 		this.geolocation.getCurrentPosition().then((resp) => {
 		this.latitude = resp.coords.latitude
 		this.longitude = resp.coords.longitude
		}).catch((error) => {
  		console.log('Error getting location', error);
		});

		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
 		// data can be a set of coordinates, or an error (if an error occurred).
 		this.latitude = data.coords.latitude
 		this.longitude = data.coords.longitude
		});

	};

	ionViewDidLoad() {
		this.loadMap();
	}

	loadMap(){

		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: this.latitude,
					lng: this.longitude
				},
				zoom: 18,
				tilt: 30
			}
		};
		/*
		this.map = this.googleMaps.create('map_canvas', mapOptions);

		this.map.one(GoogleMapsEvent.MAP_READY)
			.then(() => {
				console.log('Map is ready');

				this.map.addMarker({
					title: 'Ionic',
					icon: 'black',
					animation: 'DROP',
					position: {
						lat: this.latitude,
						lng: this.longitude
					}
				})

				.then(marker => {
					marker.on(GoogleMapsEvent.MARKER_CLICK)
						.subscribe(() => {
							alert('cliked');
						});
				});
			});*/

	}

 	
}
