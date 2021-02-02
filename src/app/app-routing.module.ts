import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { SpeechesComponent } from './speeches/speeches.component';

const routes: Routes = [
  {path: 'dev', component: ModalMessageComponent},
  {path:'speeches', component: SpeechesComponent, children:[
    {path:':id',component: ContentComponent, outlet:"content"}
  ]},
  {path:'', redirectTo:'speeches', pathMatch:"full"},
  {path:'**', redirectTo:'speeches', pathMatch:"full"}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
