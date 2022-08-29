import { GalleryBillyAndGabiAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-billy-and-gabi-album/gallery-billy-and-gabi-album.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { EspecPageComponent } from './components/pages/espec-page/espec-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { GalleryManifestacao19JAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-manifestacao19-j-album/gallery-manifestacao19-j-album.component';
import { GalleryManifestacao29MAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-manifestacao29-m-album/gallery-manifestacao29-m-album.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'espec', component: EspecPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'billyandgaby', component: GalleryBillyAndGabiAlbumComponent },
  { path: 'mani19j', component: GalleryManifestacao19JAlbumComponent },
  { path: 'mani29m', component: GalleryManifestacao29MAlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
