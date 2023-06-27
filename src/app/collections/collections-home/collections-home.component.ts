import { Component } from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
    data = [
        { name: 'James', age: 24, job: 'designer', employed: true },
        { name: 'Bob', age: 46, job: 'engineer', employed: false },
        { name: 'Alice', age: 26, job: 'engineer', employed: true },
    ];

    headers = [
        { key: 'employed', label: 'Has a job?' },
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'job', label: 'Job' },
    ];
}
