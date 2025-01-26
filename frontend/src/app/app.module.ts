import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';
import { LogListComponent } from './logs/log-list/log-list.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'logs', component: LogListComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductListComponent,
    StatusComponent,
    LogListComponent
  ],
  providers: [ProductService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
