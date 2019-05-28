import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Import Services

//Import components
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}  // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }
