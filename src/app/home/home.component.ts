import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() toggleSidebarForMe:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
