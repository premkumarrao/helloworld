import { Routes } from "@angular/router"
import { PToChildComponent } from "./app/p-to-child/p-to-child.component"

export const appRoutes = [
  {path: 'child', Component: PToChildComponent},
  {path: 'child/:id', Component: PToChildComponent},
  {path: '', redirectTo: '/child', pathMatch: 'full'}
]