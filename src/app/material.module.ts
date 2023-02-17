import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';


import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        TableModule,
        RatingModule],

    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        TableModule,
        RatingModule
    ]
})
export class MaterialModule {

}