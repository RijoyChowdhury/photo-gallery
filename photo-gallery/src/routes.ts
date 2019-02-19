import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthGuard } from './app/services/authGuard.service';

export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]},
    {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
    {path: 'image/id', component: ImageDetailComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
];