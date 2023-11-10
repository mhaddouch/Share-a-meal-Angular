import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    //component: UserListComponent
  },
  //update bestaande id
  {
    path: 'id/edit',
    //verder met UserEditCompenent
  },
];

@NgModule({
  imports: [CommonModule],
})
export class UserModule {}
