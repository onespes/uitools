import { Routes } from '@angular/router';
import { CaseConverterComponent } from './components/case-converter/case-converter.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CaseConverterComponent
    }
];
