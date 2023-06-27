import { Component } from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
    data = [
        { name: 'James', age: 24, job: 'designer' },
        { name: 'Bob', age: 46, job: 'engineer' },
        { name: 'Alice', age: 26, job: 'engineer' },
    ];

    headers = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'job', label: 'Job' },
    ];
}
