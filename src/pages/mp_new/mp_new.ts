import { Component} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MealPlanPlacePage } from '../mp_place/mp_place';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { MealPlan } from '../../../models/meal_plan.model';

@Component({
  selector: 'mp_new',
  templateUrl: 'mp_new.html'
})
export class MealPlanNewPage {
  name: string;
  desc: string;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, public mealPlanService: MealPlanProvider,public userService: UserProvider) {

  }

  continue(){
    let mp: MealPlan = new MealPlan();
    mp.foodName = this.name;
    mp.foodDesc = this.desc;
    
//mp.picSource = "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/1/FNM080109Insert045_wall_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382538871236.jpeg";
    mp.taskAssigned = "Owner";
    mp.ownerName = this.userService.getCurrentUser();
    this.navCtrl.push(MealPlanPlacePage, {'meal_plan':mp});
  }

}
