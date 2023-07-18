import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '' , redirectTo: 'about', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}