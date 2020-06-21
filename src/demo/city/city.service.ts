import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface City {
    id: number;
    name: string;
    postCode: number;
}

@Injectable()
export class CityService {
    constructor(
        private httpClient: HttpClient
    ) { }

    cities: City[] = [
        {
            "id": 1,
            "name": "Ho Chi Minh",
            "postCode": 700000
        },
        {
            "id": 2,
            "name": "Ha Noi",
            "postCode": 100000
        },
        {
            "id": 3,
            "name": "Da Nang",
            "postCode": 550000
        }
    ];

    getCities(): Observable<City[]> {
        // const url = 'https://raw.githubusercontent.com/ksr-nivas/ngxs-dropdown-tree/master/src/demo/city/cities.json';
        // return this.httpClient.get<City[]>(url);

        return of(this.cities);
    }
}
