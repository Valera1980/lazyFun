import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'news', loadChildren: async () => (await import('./news/news.module')).NewsModule },
  // { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about-us', loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
