import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';
import { LogsComponent } from './logs/log-list/logs.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'produtos', component: ProductListComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductListComponent,
    StatusComponent
  ],
  providers: [ProductService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
