import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';
import {MealPlanJoinPage} from '../mp_join/mp_join';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { MealPlan } from '../../../models/meal_plan.model';
import { MealPlanSelectedHomeCard } from '../mp_selectedHomeCard/mp_selectedHomeCard';

@Component({
  selector: 'mp_home',
  templateUrl: 'mp_home.html'
})
export class MealPlanHomePage {

  

  
  constructor(public navParams: NavParams, public navCtrl: NavController, public userService: UserProvider, public mealPlanService: MealPlanProvider, public restService: RestServiceProvider) {}

  ionViewDidEnter() {
    //this.meal_plans = mealPlanService.getMealPlans();
    // this.rest_service = restService.put();
    this.restService.get().subscribe((data)=>{
      this.meal_plans = [];
      Object.keys(data).forEach(key => {
        data[key].key = key;
        console.log(data[key].key, key);
        if (data[key].ownerName == this.userService.getCurrentUser() || this.isParticipant(data[key])) {
          this.meal_plans.push(data[key])
        }
      });
      console.log(this.meal_plans);
    });

    let existing_meal_plan = this.navParams.get('existing_meal_plan');
    if (existing_meal_plan != undefined)
      this.meal_plans.push(existing_meal_plan);   
  }

  private isParticipant(mealPlan) {
    if (mealPlan.participants == undefined || mealPlan.participants == null) return false;
    for (let p of mealPlan.participants) {
      if (p.username == this.userService.getCurrentUser()) {
        return true;
      }
    }
    return false;
  }

  meal_plans: MealPlan[] = [];
  name = "place holder name";
  date =  "place holder name";
  time = "place holder name";
  day =  "place holder name";
  srcs =  "../../assets/img/food.jpg";

  continue(){
    this.navCtrl.push(MealPlanNewPage);
  }

  viewing(){
    console.log('test');
    
  }

  join() {
    this.navCtrl.push(MealPlanJoinPage);
  }

  selectedCard(mealPlan: MealPlan) {
    this.navCtrl.push(MealPlanSelectedHomeCard,{'existing_meal_plan':mealPlan});
  }

}
