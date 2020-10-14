import {Component} from '@angular/core';
import { DataStorageService } from '../shared/data.storage.service';
import { HttpResponseBase } from '@angular/common/http'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService) {}
    onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
        (response: HttpResponseBase) => {
            console.log(response);
        }
    );
    }
}