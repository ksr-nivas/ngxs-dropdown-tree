Originally forked from: https://github.com/leovo2708/ngx-treeview

I've updated the packages to support angular 9 and fixed the breaking changes and added few new features like

* Display selected items on the button.
* Delete selected items from button itself by clicking small (x) icon.
* If the number of selected items are more than 5, it will display "2 more..." (inspired by ng-select component).

Note: The changes done are purely, to meet my project's requirements only. You can fork this and make changes to meet your requirements.

# ngxs-dropdown-tree

An Angular treeview component with checkbox

## Dependencies

* [Angular](https://angular.io)
* [Lodash](https://lodash.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 4](http://fontawesome.io)

This component is currently supporting Bootstrap 4. If you are using Bootstrap 4 alpha 6, please downgrade to the older version 1.0.10.

You can customize CSS yourself to break down dependencies to Bootstrap & Font Awesome.

## Features

* Unlimited tree level
* State: disabled / collapse, expand
* Filtering
* Internationalization (i18n) support
* Template
* Checkbox with tri-state

## Demo

[https://ksr-nivas.github.io/ngxs-dropdown-tree/](https://ksr-nivas.github.io/ngxs-dropdown-tree/)
([Source code](https://github.com/ksr-nivas/ngxs-dropdown-tree/tree/master/src/demo))

## Installation

After install the above dependencies, install `ngxs-dropdown-tree` via:
```shell
npm install ngxs-dropdown-tree --save
```
Once installed you need to import our main module in your application module:
```js
import { TreeviewModule } from 'ngxs-dropdown-tree';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [TreeviewModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

#### Treeview:
```html
<ngxs-dropdown-tree
    [config]="config"
    [items]="items"
    (selectedChange)="onSelectedChange($event)"
    (filterChange)="onFilterChange($event)">
</ngxs-dropdown-tree>
```

#### Treeview with dropdown:
```html
<ngxs-dropdown-treeview
    [buttonClass]="buttonClass"
    [config]="config"
    [items]="items"
    (selectedChange)="onSelectedChange($event)"
    (filterChange)="onFilterChange($event)">
</ngxs-dropdown-treeview>
```

 `config` is optional. This is the default configuration:
 ```js
 {
    hasAllCheckBox: true,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
}
```
You can change default configuration easily because TreeviewConfig is injectable.

#### Pipe `ngxsTreeview`:
To map your JSON objects to TreeItem objects.
```html
<ngxs-dropdown-treeview
    [config]="config"
    [items]="items | ngxsTreeview:'textField'"
    (selectedChange)="onSelectedChange($event)">
</ngxs-dropdown-treeview>
```

#### Create a TreeviewItem:
 ```js
 const itCategory = new TreeviewItem({
    text: 'IT', value: 9, children: [
        {
            text: 'Programming', value: 91, children: [{
                text: 'Frontend', value: 911, children: [
                    { text: 'Angular 1', value: 9111 },
                    { text: 'Angular 2', value: 9112 },
                    { text: 'ReactJS', value: 9113 }
                ]
            }, {
                text: 'Backend', value: 912, children: [
                    { text: 'C#', value: 9121 },
                    { text: 'Java', value: 9122 },
                    { text: 'Python', value: 9123, checked: false }
                ]
            }]
        },
        {
            text: 'Networking', value: 92, children: [
                { text: 'Internet', value: 921 },
                { text: 'Security', value: 922 }
            ]
        }
    ]
});
```

You can pass the second paramater 'autoCorrectChecked' with value=true (default is false) in constructor of TreeviewItem to correct checked value of it and all of its descendants. In some cases, you need to push or pop children flexibly, checked of parent may be not correct. Then you need to call function correctChecked() to help to correct from root to its descendants.
 ```js
const vegetableCategory = new TreeviewItem({
    text: 'Vegetable', value: 2, children: [
        { text: 'Salad', value: 21 },
        { text: 'Potato', value: 22 }
    ]
});
vegetableCategory.children.push(new TreeviewItem({ text: 'Mushroom', value: 23, checked: false }));
vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
 ```

#### TreeviewEventParser:
Extract data from list of checked TreeviewItem and send it in parameter of event selectedChange. Some built-in TreeviewEventParser:
* DefaultTreeviewEventParser: return values of checked items.
* DownlineTreeviewEventParser: return list of checked items in orginal order with their ancestors.
* OrderDownlineTreeviewEventParser: return list of checked items in checked order with their ancestors. Note that: value of a leaf must be different from value of other leaves.

#### Templating:
See example 4 & 5.

## Contributing

I am very appreciate for your ideas, proposals and found bugs which you can leave in github issues. Thanks in advance!
