import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';
import { MealPlanReviewPage } from '../mp_review/mp_review';
import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlan } from '../../../models/meal_plan.model';
import { Participant } from '../../../models/participant.model';
import { MealPlanGroceryPage } from '../mp_groceries/mp_groceries';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'mp_userProfile',
  templateUrl: 'mp_userProfile.html'
})
export class MealPlanProfilePage {

  
  public user:User;
  public rating:number = 0;

  constructor(public navParams: NavParams, public navCtrl: NavController, public restService: RestServiceProvider, public existingMealPlanService: ExistingMealPlanProvider, public userService: UserProvider, public mealPlanService: MealPlanProvider) {
    let username = navParams.get('user');
    console.log(username);
    restService.getUsers().subscribe((data)=>{
      Object.keys(data).forEach(key => {
        data[key].key = key;
        if (data[key].userName == username) {
          this.user = data[key];
          let n:number = 0;
          for (let rating of this.user.reviews) {
            this.rating = this.rating + +rating.rating;
            console.log(this.rating, rating.rating);
            n++;

          }
          this.rating /= n;
          console.log(n, this.rating);
          
          console.log(data[key],username);
        }
      });
    });
  }


}
