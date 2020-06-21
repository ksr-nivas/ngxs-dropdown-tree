import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from '../../lib';
import { RoomService } from './room.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngxs-room',
    templateUrl: './room.component.html',
    providers: [
        RoomService
    ]
})
export class RoomComponent implements OnInit {
    items$: Observable<TreeviewItem[]>;
    values: any[];
    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: true,
        hasCollapseExpand: false,
        maxHeight: 500
    });

    constructor(
        private service: RoomService
    ) { }

    ngOnInit() {
        this.items$ = this.service.getRooms();
    }
}
