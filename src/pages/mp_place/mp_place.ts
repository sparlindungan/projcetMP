import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import { MealPlanTaskPage } from '../mp_task/mp_task';
import { FormBuilder, FormGroup } from "@angular/forms";

import { MealPlan } from '../../../models/meal_plan.model';

@Component({
  selector: 'mp_place',
  templateUrl: 'mp_place.html'
})
export class MealPlanPlacePage {
  addr: string;
  date: string;
  time: string;
  timeOfDay: string;
  name: string = null;
  meal_plan: MealPlan = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController) {
    this.meal_plan = navParams.get('meal_plan');
    this.name = this.meal_plan.foodName;
  }

  

    continue(){
        // this.timeOfDay = "PM";
        this.meal_plan.eventAddrs = this.addr;
        this.meal_plan.eventDate = this.date;
        this.meal_plan.eventTime = this.time;
        this.meal_plan.eventDay = this.timeOfDay;
        this.navCtrl.push(MealPlanTaskPage, {'meal_plan':this.meal_plan});
    }

}
