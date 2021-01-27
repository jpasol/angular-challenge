import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ContentComponent } from './content/content.component';
import { SpeechesComponent } from './speeches/speeches.component';

const routes: Routes = [
  {path:'speeches', component: SpeechesComponent, children:[
    {path:'',component: ContentComponent, outlet:"content"}
  ]},
  {path:'', redirectTo:'speeches', pathMatch:"full"},
  {path:'**', redirectTo:'speeches', pathMatch:"full"}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
