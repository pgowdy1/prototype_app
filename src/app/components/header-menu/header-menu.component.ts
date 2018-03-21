import { Component, ViewChild } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent {

    items: MenuItem[]

    ngOnInit() {
        this.items = [
            {label: 'Master Ratings', icon: 'fa-bar-chart'},
            {label: 'Map View', icon: 'fa-map-marker'},
            {label: 'Submit Rating', icon: 'fa-users'}
        ];
    }
}