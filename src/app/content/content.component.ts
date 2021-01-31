import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Optional, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { By } from 'protractor';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations:[
    trigger('InOut',[
      transition(':enter',[
        style([]) //force no aimations at start
      ]),
      transition('editOff => editOn',[
        query('.icon',[
          animate('.5s', keyframes([
            style({transform: 'rotate(0deg)'}),
            style({transform: 'rotate(180deg)'})
          ]))
        ])
      ])
    ])
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }
  isEditMode: boolean = false;
  keywords = ['Angular','AngularJS'];
  sampleContent = 
  `  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ex odio, ut rutrum ligula ultrices id. Fusce pellentesque lacinia justo, non gravida ipsum. Nullam non tempus purus. Curabitur bibendum hendrerit risus, nec porttitor leo aliquet sed. Sed in iaculis justo, ut auctor lectus. Fusce et elementum ipsum. Proin nec aliquet mauris, a aliquet erat. Sed sapien diam, laoreet id purus sit amet, pharetra ullamcorper nisl. Fusce eu elit sed sapien convallis accumsan dictum sed nibh. Duis laoreet quis risus vitae tincidunt. In sagittis ut ligula vel sollicitudin.

  Phasellus condimentum, mauris a interdum consectetur, lorem lectus semper nibh, a consectetur dolor dui eu turpis. In sit amet ipsum molestie, posuere arcu vitae, dignissim tortor. Curabitur euismod sagittis congue. Proin laoreet est at efficitur bibendum. Duis eleifend a nulla mattis ornare. Donec pellentesque, justo in semper elementum, justo enim imperdiet dolor, eu pretium mauris arcu quis quam. Pellentesque nec metus a purus convallis vehicula vitae quis nisi. Duis ut lacinia dui. Donec sed augue tempor, tempor purus vel, molestie felis. Donec consequat, risus eu suscipit pulvinar, augue lacus rhoncus augue, non feugiat dolor risus eu erat. Nam sed dui ac purus sagittis ultrices nec et purus. Proin sit amet mollis mi. Nulla egestas semper enim non iaculis. Nullam ultrices ut justo quis faucibus. Aliquam sollicitudin risus sed pharetra facilisis.
  
  Aenean blandit vestibulum aliquet. Aenean et faucibus metus. Nulla pellentesque pellentesque odio ac mollis. Donec eu ligula ac orci congue maximus. Curabitur eget metus id nisl euismod tincidunt. Nunc dapibus lacus ex, in sagittis quam sodales in. Mauris eget metus et odio dignissim ullamcorper ut vel ante. Mauris purus orci, tincidunt quis ligula in, convallis pulvinar arcu. Fusce faucibus volutpat cursus. Ut sed semper sem, sed faucibus libero.
  
  Nam finibus tristique est, vitae tincidunt risus mollis eu. Curabitur aliquet libero ornare, efficitur lorem vitae, efficitur neque. Nulla nulla quam, efficitur in felis ac, ultrices suscipit purus. Integer gravida porttitor justo eu luctus. Integer sit amet arcu diam. Aenean hendrerit faucibus dui in tempus. Fusce et est tempor, consequat tortor ut, mattis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ex odio, ut rutrum ligula ultrices id. Fusce pellentesque lacinia justo, non gravida ipsum. Nullam non tempus purus. Curabitur bibendum hendrerit risus, nec porttitor leo aliquet sed. Sed in iaculis justo, ut auctor lectus. Fusce et elementum ipsum. Proin nec aliquet mauris, a aliquet erat. Sed sapien diam, laoreet id purus sit amet, pharetra ullamcorper nisl. Fusce eu elit sed sapien convallis accumsan dictum sed nibh. Duis laoreet quis risus vitae tincidunt. In sagittis ut ligula vel sollicitudin.
  
  Phasellus condimentum, mauris a interdum consectetur, lorem lectus semper nibh, a consectetur dolor dui eu turpis. In sit amet ipsum molestie, posuere arcu vitae, dignissim tortor. Curabitur euismod sagittis congue. Proin laoreet est at efficitur bibendum. Duis eleifend a nulla mattis ornare. Donec pellentesque, justo in semper elementum, justo enim imperdiet dolor, eu pretium mauris arcu quis quam. Pellentesque nec metus a purus convallis vehicula vitae quis nisi. Duis ut lacinia dui. Donec sed augue tempor, tempor purus vel, molestie felis. Donec consequat, risus eu suscipit pulvinar, augue lacus rhoncus augue, non feugiat dolor risus eu erat. Nam sed dui ac purus sagittis ultrices nec et purus. Proin sit amet mollis mi. Nulla egestas semper enim non iaculis. Nullam ultrices ut justo quis faucibus. Aliquam sollicitudin risus sed pharetra facilisis.`;

  
  public set editMode(v : boolean) {
    this.isEditMode = v;
  }
  
  
  ngOnInit(): void {
  }

  private toggleEditableText(){
    this.editMode = !this.isEditMode
  }

}
