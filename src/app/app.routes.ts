import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => {
            const c = await import('../app/pages/login/login.component');
            return c.LoginComponent;
        }
    },
    {
        path: 'browse',
        loadComponent: async () => {
            const c = await import('./pages/browse/browse.component');
            return c.BrowseComponent;
        }
    }
];
