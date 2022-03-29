import { Component,EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
logoImg = 'assets/images/logo.png';

@Output() toggleSidebarForMe:EventEmitter<any> = new EventEmitter();
// @Input() togglerSidebar !: ;

    constructor() {

     }

    ngOnInit(): void {

    }

    toggleSidebar() {
        this.toggleSidebarForMe.emit();
    }
  }
