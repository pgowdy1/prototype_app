import { Component, ViewChild, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Response } from '@angular/http'

@Injectable()
export class PlaceService implements OnInit {

    public kansasCityLatitude = 39.125212;
    private kansasCityLongitude: -94.551136;
    private googlePlacesURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGtWfAGJo-5nNBEA8_5pX871-snt6PII0&libraries=places";
    private googlePlacesBaseCall = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    private googleAPIKey = "AIzaSyCGtWfAGJo-5nNBEA8_5pX871-snt6PII0";

    constructor(
        private http: HttpClient,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
    }

    public async RetrieveLocations(radius: number, typeOfLocation: string): Promise<Location[]> {
        try {
            let response = await this.http.get(this.googlePlacesBaseCall + "location=" + this.kansasCityLatitude + "," + this.kansasCityLongitude
                + "&radius=" + radius + "&type=" + typeOfLocation + "&key=" + this.googleAPIKey).toPromise();
                return response.json().data as Location[];
        } catch (error) {
            await this.handleError(error);
        }
       
    
    }

    private handleError(error)
    {
        console.log(error);
    }

    public RetrieveLocationDetails(locations) {

    }
}