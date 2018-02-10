import { Component, ViewChild, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

    public RetrieveLocations() {
        return this.http.get(this.googlePlacesBaseCall + "location=" + this.kansasCityLatitude + "," + this.kansasCityLongitude 
        + "&radius=5000&type=restaurant&key=" + this.googleAPIKey);
    }
}