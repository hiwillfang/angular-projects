import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init {
	constructor() {
		super();
		console.log('MarkerService Initialized...');
		this.load();
	}

	getMarkers() {
		var markers = JSON.parse(localStorage.getItem('markers'));
		return markers;
	}

	addMarker(newMarker) {
		// Fetch current markers
		var markers = JSON.parse(localStorage.getItem('markers'));
		// Push to array
		markers.push(newMarker);
		// Set Local Storage markers
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	updateMarker(marker, newLat, newLng) {
		// Fetch current markers
		var markers = JSON.parse(localStorage.getItem('markers'));

		for(var i = 0;i < markers.length;i++) {
			if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
				markers[i].lat = newLat;
				markers[i].lng = newLng;
			}
		}

		// Set Local Storage markers
		localStorage.setItem('markers', JSON.stringify(markers));
	}

	removeMarker(marker) {
		// Fetch current markers
		var markers = JSON.parse(localStorage.getItem('markers'));

		for(var i = 0;i < markers.length;i++) {
			if(marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
				markers.splice(i, 1);
			}
		}

		// Set Local Storage markers
		localStorage.setItem('markers', JSON.stringify(markers));
	}
}