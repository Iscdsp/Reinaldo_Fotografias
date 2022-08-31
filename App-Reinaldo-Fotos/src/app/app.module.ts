import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FormService } from './Services/form.service';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { Album1Component } from './components/pages/gallery-page/albums-pages/album1/album1.component';

import { Album3Component } from './components/pages/gallery-page/albums-pages/album3/album3.component';
import { Album4Component } from './components/pages/gallery-page/albums-pages/album4/album4.component';
import { Album5Component } from './components/pages/gallery-page/albums-pages/album5/album5.component';
import { Album6Component } from './components/pages/gallery-page/albums-pages/album6/album6.component';
import { Album7Component } from './components/pages/gallery-page/albums-pages/album7/album7.component';
import { Album8Component } from './components/pages/gallery-page/albums-pages/album8/album8.component';
import { Album9Component } from './components/pages/gallery-page/albums-pages/album9/album9.component';
import { Album10Component } from './components/pages/gallery-page/albums-pages/album10/album10.component';
import { Album2Component } from './components/pages/gallery-page/albums-pages/album2/album2.component';

@NgModule({
  declarations: [
    Album1Component,
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
    SocialMediasComponent,
    Album2Component,
    Album3Component,
    Album4Component,
    Album5Component,
    Album6Component,
    Album7Component,
    Album8Component,
    Album9Component,
    Album10Component,
  ],
  imports: [
    LightboxModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
