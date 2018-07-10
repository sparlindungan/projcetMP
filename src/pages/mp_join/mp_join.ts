import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';

import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { MealPlan } from '../../../models/meal_plan.model';
import { MealPlanSelectedJoinPage } from '../mp_selectedJoin/mp_selectedJoin';

import {RestServiceProvider} from '../../providers/rest-service/rest-service';

@Component({
  selector: 'mp_join',
  templateUrl: 'mp_join.html'
})
export class MealPlanJoinPage {

  meal_plans: MealPlan[] = [];

  constructor(public navParams: NavParams, public navCtrl: NavController, public UserService: UserProvider,public existingMealPlanService: ExistingMealPlanProvider, public restService: RestServiceProvider) {
    restService.get().subscribe((data)=>{
      this.meal_plans = [];
      Object.keys(data).forEach(key => {
        data[key].key = key;
        if (data[key].ownerName != this.UserService.getCurrentUser() && !this.isParticipant(data[key]) && !this.isFull(data[key])){
          this.meal_plans.push(data[key])
        }
      });
      console.log(this.meal_plans);
    });
  }
 
  private isFull(mealPlan) {
    if (mealPlan.participants == undefined || mealPlan.participants == null) return false;
    if (mealPlan.participants.length >= mealPlan.partCount) return true;
    return false;
  }

  private isParticipant(mealPlan) {
    if (mealPlan.participants == undefined || mealPlan.participants == null) return false;
    for (let p of mealPlan.participants) {
      if (p.username == this.UserService.getCurrentUser()) {
        return true;
      }
    }
    return false;
  }

  selectedCard(mealPlan: MealPlan) {
    this.navCtrl.push(MealPlanSelectedJoinPage,{'existing_meal_plan':mealPlan});
  }

}
