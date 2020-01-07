﻿import { Component, EventEmitter, Input, Output, HostListener, ViewChild, TemplateRef } from '@angular/core';
import { TreeviewI18n } from './treeview-i18n';
import { TreeviewItem } from './treeview-item';
import { TreeviewConfig } from './treeview-config';
import { TreeviewComponent } from './treeview.component';
import { DropdownDirective } from './dropdown.directive';
import { TreeviewHeaderTemplateContext } from './treeview-header-template-context';
import { TreeviewItemTemplateContext } from './treeview-item-template-context';

@Component({
    selector: 'ngxs-dropdown-treeview',
    templateUrl: './dropdown-treeview.component.html',
    styleUrls: ['./dropdown-treeview.component.scss']
})
export class DropdownTreeviewComponent {
    @Input() buttonClass = 'btn-outline-secondary';
    @Input() headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    @Input() itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    @Input() items: TreeviewItem[];
    @Input() config: TreeviewConfig;
    @Output() selectedChange = new EventEmitter<any[]>(true);
    @Output() filterChange = new EventEmitter<string>();
    @ViewChild(TreeviewComponent, {static: true}) treeviewComponent: TreeviewComponent;
    @ViewChild(DropdownDirective, {static: true }) dropdownDirective: DropdownDirective;

    constructor(
        public i18n: TreeviewI18n,
        private defaultConfig: TreeviewConfig
    ) {
        this.config = this.defaultConfig;
        this.config.decoupleChildFromParent = true;
    }

    getText(): string {
        return this.i18n.getText(this.treeviewComponent.selection);
    }

    getSelection() {
        if (!this.treeviewComponent || !this.treeviewComponent.selection || !this.treeviewComponent.selection.checkedItems) {
            return [];
        }
        return this.treeviewComponent.selection.checkedItems;
    }

    removeItem(event: MouseEvent, item: TreeviewItem) {
        event.stopImmediatePropagation();
        item.checked = false;
        this.treeviewComponent.treeviewItemComponent.triggerItemChange(item);
        
        if (this.treeviewComponent.selection.checkedItems.length === 0) {
            this.treeviewComponent.allItem.checked = false;
            this.treeviewComponent.onAllCheckedChange();
        }
    }

    onSelectedChange(values: any[]) {
        this.selectedChange.emit(values);
    }

    onFilterChange(text: string) {
      this.filterChange.emit(text);
    }
}
