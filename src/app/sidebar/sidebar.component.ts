import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  shit: number[] = [1,2,3];
  selected: any;
  constructor() { }
  @Input() choice: any;
  
  ngOnInit(): void {
  }

}
