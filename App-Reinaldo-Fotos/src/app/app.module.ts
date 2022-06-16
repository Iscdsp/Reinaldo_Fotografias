import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { FormContactPageComponent } from './components/pages/contact-page/form-contact-page/form-contact-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { TextComponent } from './components/footer/text/text.component';
import { SocialMediasComponent } from './components/footer/social-medias/social-medias.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { EspecPageComponent } from './components/pages/espec-page/espec-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SliderImagesComponent } from './components/pages/home-page/slider-images/slider-images.component';
import { ApresentationTextComponent } from './components/pages/home-page/apresentation-text/apresentation-text.component';
import { ThumbImageLeftComponent } from './components/pages/home-page/thumb-image-left/thumb-image-left.component';
import { ThumbImageRightComponent } from './components/pages/home-page/thumb-image-right/thumb-image-right.component';
import { ButtonContactMeComponent } from './components/assets/button-contact-me/button-contact-me.component';
import { TitleAboutPageComponent } from './components/pages/about-page/title-about-page/title-about-page.component';
import { CardAboutPageComponent } from './components/pages/about-page/card-about-page/card-about-page.component';
import { CardFunnyAboutPageComponent } from './components/pages/about-page/card-funny-about-page/card-funny-about-page.component';
import { TextTopEspecPageComponent } from './components/pages/espec-page/text-top-espec-page/text-top-espec-page.component';
import { TextMiddleEspecPageComponent } from './components/pages/espec-page/text-middle-espec-page/text-middle-espec-page.component';
import { TextFooterEspecPageComponent } from './components/pages/espec-page/text-footer-espec-page/text-footer-espec-page.component';
import { TitleGalleryPageComponent } from './components/pages/gallery-page/title-gallery-page/title-gallery-page.component';
import { ImageCardsGalleryPageComponent } from './components/pages/gallery-page/image-cards-gallery-page/image-cards-gallery-page.component';
import { BottomTextComponent } from './components/pages/gallery-page/bottom-text/bottom-text.component';
import { TitleContactPageComponent } from './components/pages/contact-page/title-contact-page/title-contact-page.component';

import { GalleryBillyAndGabiAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-billy-and-gabi-album/gallery-billy-and-gabi-album.component';
import { GalleyCrossfitBox160AlbumComponent } from './components/pages/gallery-page/albums-pages/galley-crossfit-box160-album/galley-crossfit-box160-album.component';
import { GalleyFemSoccerSantosxCorinthiansAlbumComponent } from './components/pages/gallery-page/albums-pages/galley-fem-soccer-santosx-corinthians-album/galley-fem-soccer-santosx-corinthians-album.component';
import { GalleyMascSoccerSantosxBragantinoAlbumComponent } from './components/pages/gallery-page/albums-pages/galley-masc-soccer-santosx-bragantino-album/galley-masc-soccer-santosx-bragantino-album.component';
import { GalleyStudioCasa67AlbumComponent } from './components/pages/gallery-page/albums-pages/galley-studio-casa67-album/galley-studio-casa67-album.component';
import { GalleyCTCSemMaldadeAlbumComponent } from './components/pages/gallery-page/albums-pages/galley-ctcsem-maldade-album/galley-ctcsem-maldade-album.component';
import { GalleyManifestacao3JAlbumComponent } from './components/pages/gallery-page/albums-pages/galley-manifestacao3-j-album/galley-manifestacao3-j-album.component';
import { GalleryManifestacao19JAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-manifestacao19-j-album/gallery-manifestacao19-j-album.component';
import { GalleryManifestacao29MAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-manifestacao29-m-album/gallery-manifestacao29-m-album.component';
import { GalleryPadreAnchietaFCAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-padre-anchieta-fc-album/gallery-padre-anchieta-fc-album.component';
import { GalleryPagodeJuniorAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-pagode-junior-album/gallery-pagode-junior-album.component';
import { GalleryPhantomBillyAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-phantom-billy-album/gallery-phantom-billy-album.component';
import { GalleryPulsarFestivalAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-pulsar-festival-album/gallery-pulsar-festival-album.component';
import { GalleryPracaPalmaresAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-praca-palmares-album/gallery-praca-palmares-album.component';
import { GalleryXIXVoltaStoAmaroAlbumComponent } from './components/pages/gallery-page/albums-pages/gallery-xixvolta-sto-amaro-album/gallery-xixvolta-sto-amaro-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    FooterComponent,
    NavMenuComponent,
    LogoComponent,
    TextComponent,
    SocialMediasComponent,
    HomePageComponent,
    AboutPageComponent,
    EspecPageComponent,
    GalleryPageComponent,
    ContactPageComponent,
    SliderImagesComponent,
    ApresentationTextComponent,
    ThumbImageLeftComponent,
    ThumbImageRightComponent,
    ButtonContactMeComponent,
    TitleAboutPageComponent,
    CardAboutPageComponent,
    CardFunnyAboutPageComponent,
    TextTopEspecPageComponent,
    TextMiddleEspecPageComponent,
    TextFooterEspecPageComponent,
    TitleGalleryPageComponent,
    ImageCardsGalleryPageComponent,
    BottomTextComponent,
    TitleContactPageComponent,
    FormContactPageComponent,
    GalleryBillyAndGabiAlbumComponent,
    GalleryBillyAndGabiAlbumComponent,
    GalleyCrossfitBox160AlbumComponent,
    GalleyFemSoccerSantosxCorinthiansAlbumComponent,
    GalleyMascSoccerSantosxBragantinoAlbumComponent,
    GalleyStudioCasa67AlbumComponent,
    GalleyCTCSemMaldadeAlbumComponent,
    GalleyManifestacao3JAlbumComponent,
    GalleryManifestacao19JAlbumComponent,
    GalleryManifestacao29MAlbumComponent,
    GalleryPadreAnchietaFCAlbumComponent,
    GalleryPagodeJuniorAlbumComponent,
    GalleryPhantomBillyAlbumComponent,
    GalleryPulsarFestivalAlbumComponent,
    GalleryPracaPalmaresAlbumComponent,
    GalleryXIXVoltaStoAmaroAlbumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
