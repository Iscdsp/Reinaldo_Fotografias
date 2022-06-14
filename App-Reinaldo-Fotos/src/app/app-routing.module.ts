import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { EspecPageComponent } from './components/pages/espec-page/espec-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'espec', component: EspecPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
