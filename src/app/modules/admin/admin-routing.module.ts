import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
    path : '', component : AdminDashboardComponent, children : [
      {
        path : 'about', component : AboutComponent
      },
      {
        path : 'contacts', component : ContactsComponent
      },
      {
        path : 'services', component : ServicesComponent
      },
      {
        path : '', redirectTo : '/admin/about', pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
