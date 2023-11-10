import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    MealDetailComponent,
    AboutComponent,
    DashboardComponent,
  ],
  providers: [MealService],
  exports: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    DashboardComponent,
  ],
})
export class FeaturesModule {}
