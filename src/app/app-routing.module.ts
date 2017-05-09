import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
        path: '',
        component: RepositoriesComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
