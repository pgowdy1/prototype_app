import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTable } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['position', 'name', 'review', 'link'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  review: number;
  link: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Bristol Seafood Grill', review: 1.0079, link: 'H'},
  {position: 2, name: 'Hereford House', review: 4.0026, link: 'He'},
  {position: 3, name: 'BRAVO Cucina Italiana', review: 6.941, link: 'Li'},
  {position: 4, name: 'Houlihans', review: 9.0122, link: 'Be'},
  {position: 5, name: 'Boron', review: 10.811, link: 'B'},
  {position: 6, name: 'Carbon', review: 12.0107, link: 'C'},
  {position: 7, name: 'Nitrogen', review: 14.0067, link: 'N'},
  {position: 8, name: 'Oxygen', review: 15.9994, link: 'O'},
  {position: 9, name: 'Fluorine', review: 18.9984, link: 'F'},
  {position: 10, name: 'Neon', review: 20.1797, link: 'Ne'},
  {position: 11, name: 'Sodium', review: 22.9897, link: 'Na'},
  {position: 12, name: 'Magnesium', review: 24.305, link: 'Mg'},
  {position: 13, name: 'Aluminum', review: 26.9815, link: 'Al'},
  {position: 14, name: 'Silicon', review: 28.0855, link: 'Si'},
  {position: 15, name: 'Phosphorus', review: 30.9738, link: 'P'},
  {position: 16, name: 'Sulfur', review: 32.065, link: 'S'},
  {position: 17, name: 'Chlorine', review: 35.453, link: 'Cl'},
  {position: 18, name: 'Argon', review: 39.948, link: 'Ar'},
  {position: 19, name: 'Potassium', review: 39.0983, link: 'K'},
  {position: 20, name: 'Calcium', review: 40.078, link: 'Ca'},
];
