import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ProfileComponent} from "./user-profile/profile/profile.component";
import {ProfileFormComponent} from "./user-profile/profile-form/profile-form.component";

const routes: Routes = [
    {
        path: 'user',
        component: ProfileComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
