export class Init {
	load() {
		if(localStorage.getItem('markers') ===null || localStorage.getItem('markers') === undefined) {
			console.log('No markers found... creating...');

			var markers = [
			  	{
				  	name:'Company One',
				  	lat: 28.5757109,
				  	lng: -81.37441569999999,
				  	draggable: true
			  	},
			  	{
				  	name:'Company Two',
				  	lat: 28.4920066,
				  	lng: -81.49217929999998,
				  	draggable: true
			  	},
			  	{
			  		name:'Company Three',
			  		lat: 28.540941,
			  		lng: -81.381257,
			  		draggable: true
			  	}
			];

			localStorage.setItem('markers', JSON.stringify(markers));
		} else {
			console.log('Loading markers...');
		}
	}
}