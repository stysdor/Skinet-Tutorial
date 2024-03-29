import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'test-error', component: TestErrorComponent, data: { breadcrumb: 'Test Errors' }},
  { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: 'Not found Errors' } },
  { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: 'Server Errors' } },
  {
    path: 'shop', loadChildren: () => import('./shop/shop.module')
      .then(mod => mod.ShopModule), data: { breadcrumb: 'Shop' }
  },
  {
    path: 'basket', loadChildren: () => import('./basket/basket.module')
      .then(mod => mod.BasketModule), data: { breadcrumb: 'Basket' }
  },
  {
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module')
      .then(mod => mod.CheckoutModule), data: { breadcrumb: 'Checkout' }
  },
  {
    path: 'account', loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule), data: {breadcrumb: {skip: true} }
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
