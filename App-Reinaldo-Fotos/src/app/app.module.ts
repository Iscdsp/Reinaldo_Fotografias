import { TemplateFormContactPageModule } from './template-form-contact-page/template-form-contact-page.module';
import { FormContactPageModule } from './components/pages/contact-page/form-contact-page/form-contact-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    TemplateFormContactPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
