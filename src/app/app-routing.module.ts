import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KampusComponent } from './kampus/kampus.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

const routes: Routes = [
  {path: 'mahasiswa', component: MahasiswaComponent},
  {path: 'kampus', component: KampusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MahasiswaComponent, KampusComponent]
