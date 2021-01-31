import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }
  isEditMode: boolean = false;

  
  public set editMode(v : boolean) {
    this.isEditMode = v;
  }
  
  
  ngOnInit(): void {
  }

  private toggleEditableText(){
    this.editMode = !this.isEditMode
  }

}
