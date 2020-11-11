import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos Rutas
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const ROUTES: Routes = [

  // Path: '/dashboard' PagesRouting
  // Path: '/auth' AuthRouting

  { path: '**', component: NotpagefoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
