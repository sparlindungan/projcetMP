import { Component } from '@angular/core';


import { MealPlanHomePage } from '../mp_home/mp_home';
import { MealPlanNewPage } from '../mp_new/mp_new';
import { MealPlanPlacePage } from '../mp_place/mp_place';
import { MealPlanTaskPage } from '../mp_task/mp_task';


@Component({
  templateUrl: 'mp_tabs.html'
})
export class MealPlanTabsPage{
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MealPlanHomePage;
  tab2Root: any = MealPlanNewPage;
  tab3Root: any = MealPlanPlacePage;
  tab4Root: any = MealPlanTaskPage;

  constructor() {

  }
}