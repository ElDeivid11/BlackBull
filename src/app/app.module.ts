import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importar RouterModule

@NgModule({
  declarations: [AppComponent],  // Aquí solo se declara AppComponent, no LoginPage
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,  // Asegúrate de que el AppRoutingModule esté importado
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
