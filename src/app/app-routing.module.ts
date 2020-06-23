import { async } from '@angular/core/testing';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'news', loadChildren: async () => await (await import('./news/news.module')).NewsModule },
  { path: 'contacts', loadChildren: async () => (await import('./contacts/contacts.module')).ContactsModule },
  { path: 'about-us', loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
