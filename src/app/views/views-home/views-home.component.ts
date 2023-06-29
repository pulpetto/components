import { Component } from '@angular/core';

@Component({
    selector: 'app-views-home',
    templateUrl: './views-home.component.html',
    styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
    stats = [
        { value: 22, label: '# of Users' },
        { value: 900, label: 'Revenue' },
        { value: 50, label: 'Reviews' },
    ];

    items = [
        {
            image: '/assets/images/couch.jpeg',
            title: 'couch',
            description: 'Amazing couch to sit on',
        },
        {
            image: '/assets/images/dresser.jpeg',
            title: 'dresser',
            description: 'Very good dresser to use',
        },
    ];
}
