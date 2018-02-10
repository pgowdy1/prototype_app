import { Component, ViewChild } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'place',
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.css'],
})

export class PlaceComponent implements OnInit{

	private restaurantsLoaded : boolean = false;

	constructor(private placeService: PlaceService) { }

	ngOnInit(){}

	private RetrieveRestauraunts(radius: number, typeOfLocation: string) {
		let locationsJSON = this.placeService.RetrieveLocations(radius, typeOfLocation).then(data => {
			console.log(data.valueOf);
		}, error => {
			console.log(error);
		});
					
		this.restaurantsLoaded = true;
		console.log(locationsJSON);
	}
}