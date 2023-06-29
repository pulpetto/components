import { Component } from '@angular/core';

@Component({
    selector: 'app-mods-home',
    templateUrl: './mods-home.component.html',
    styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
    modalOpen = false;
    items = [
        {
            title: 'Why i the sky blue',
            content: 'fwnfiuw fwufnwf wifwaf aifwa',
        },
        {
            title: 'What does an orange taste like',
            content: 'fwfw fwf agw gaw wgwaga',
        },
        {
            title: 'What color is that cat',
            content: 'wfwf wf wf w fw fwwwwwwwww',
        },
    ];

    onClick() {
        this.modalOpen = !this.modalOpen;
    }
}
