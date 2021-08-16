import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/home/home.component";
import { WorkComponent } from "src/work/work.component";
import { ContactsComponent } from "../contacts/contacts.component";




const routers: Routes = [
   {path: '', component: HomeComponent},
   {path: 'work', component: WorkComponent},
   {path: 'contacts', component: ContactsComponent}
]

@NgModule({
   imports: [RouterModule.forRoot(routers)],
   exports: [RouterModule]
})

export class AppRouterModule {

}