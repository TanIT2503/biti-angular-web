import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import { ProfileFormComponent } from './user-profile/profile-form/profile-form.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { ProfileMenuComponent } from './user-profile/profile-menu/profile-menu.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProfileFormComponent,
    ProfileComponent,
    ProfileMenuComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatRadioModule,
        MatInputModule,
        MatDatepickerModule
    ]
})
export class LayoutModule { }
