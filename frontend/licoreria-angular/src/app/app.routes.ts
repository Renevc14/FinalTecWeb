
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';

export const routes: Routes = [
    { path: 'nosotros', component:  },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }