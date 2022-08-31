import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { EspecPageComponent } from './components/pages/espec-page/espec-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

import { Album1Component } from './components/pages/gallery-page/albums-pages/album1/album1.component';
import { Album2Component } from './components/pages/gallery-page/albums-pages/album2/album2.component';
import { Album3Component } from './components/pages/gallery-page/albums-pages/album3/album3.component';
import { Album4Component } from './components/pages/gallery-page/albums-pages/album4/album4.component';
import { Album5Component } from './components/pages/gallery-page/albums-pages/album5/album5.component';
import { Album6Component } from './components/pages/gallery-page/albums-pages/album6/album6.component';
import { Album7Component } from './components/pages/gallery-page/albums-pages/album7/album7.component';
import { Album8Component } from './components/pages/gallery-page/albums-pages/album8/album8.component';
import { Album9Component } from './components/pages/gallery-page/albums-pages/album9/album9.component';
import { Album10Component } from './components/pages/gallery-page/albums-pages/album10/album10.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'espec', component: EspecPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'album1', component: Album1Component },
  { path: 'album2', component: Album2Component },
  { path: 'album3', component: Album3Component },
  { path: 'album4', component: Album4Component },
  { path: 'album5', component: Album5Component },
  { path: 'album6', component: Album6Component },
  { path: 'album7', component: Album7Component },
  { path: 'album8', component: Album8Component },
  { path: 'album9', component: Album9Component },
  { path: 'album10', component: Album10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
