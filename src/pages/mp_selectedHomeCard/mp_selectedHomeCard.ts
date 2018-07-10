import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';
import { MealPlanReviewPage } from '../mp_review/mp_review';
import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlan } from '../../../models/meal_plan.model';
import { GroceryItem } from '../../../models/grocery_item.model';
import { Participant } from '../../../models/participant.model';
import { MealPlanGroceryPage } from '../mp_groceries/mp_groceries';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { MealPlanProfilePage } from '../mp_userProfile/mp_userProfile';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
// import { Participant } from '../../../models/participant.model';


@Component({
  selector: 'mp_selectedHomeCard',
  templateUrl: 'mp_selectedHomeCard.html'
})
export class MealPlanSelectedHomeCard {

  public name;
  public date;
  public time;
  public day;
  public owner;
  public src;
  public addrs;
  public participantCount;
  public details;
  public items:GroceryItem[] = [];
  public tags;
  public picture = "http://www.hexatar.com/gallery/thumb/171025_051339_m66a7450fd4_avatar.png";
  public participants:Participant[];

  public role: string = "";
  public myGroceries: GroceryItem[] = [];
  public isOwner: boolean = false;

  

  existing_meal_plan: MealPlan = null;
  constructor(public navParams: NavParams, public navCtrl: NavController, public restService: RestServiceProvider, public existingMealPlanService: ExistingMealPlanProvider, public userService: UserProvider, public mealPlanService: MealPlanProvider) {
    this.existing_meal_plan = navParams.get('existing_meal_plan');
    this.name = this.existing_meal_plan.foodName;
    this.date = this.existing_meal_plan.eventDate;
    this.day = this.existing_meal_plan.eventDay;
    this.owner = this.existing_meal_plan.ownerName;
    this.src = this.existing_meal_plan.picSource;
    this.time = this.existing_meal_plan.eventTime;
    this.addrs = this.existing_meal_plan.eventAddrs;
    this.participantCount = this.existing_meal_plan.partCount;
    this.details = this.existing_meal_plan.foodDesc;
    this.tags = this.existing_meal_plan.tagList;
    this.participants = this.existing_meal_plan.participants;
    this.items = this.existing_meal_plan.groceryList;

    this.isOwner = (this.userService.getCurrentUser() == this.owner);
    this.getRole();
    this.getGroceries();
  }

  getRole() {
    if (this.isOwner) {
      this.role = "Owner";
    } else if (this.participants != undefined && this.participants != null && this.participants.length != 0) {
      let participant = null;
      for (let p of this.participants) {
        if (p.username == this.userService.getCurrentUser()) {
          participant = p;
          break;
        }
      }

      if (participant != null) {
        if (participant.chef) {
          this.role = "Co-Chef";
        } else if (participant.cleaner) {
          this.role = "Cleaner";
        } else if (participant.eater) {
          this.role = "Eater";
        } else if (participant.payer) {
          this.role = "Payer";
        } else if (participant.shopper) {
          this.role = "Grocery Shopper";
        }
      }
    }
  }

  getGroceries() {
    if (this.items != undefined) {
      for (let groceryItem of this.items) {
        if (this.userService.getCurrentUser() == groceryItem.username) {
          this.myGroceries.push(groceryItem);
        }
      }
    }
  }

  avatar = "http://www.hexatar.com/gallery/thumb/20151029_m5631acd00bba4.png";


  cancel() {
    if (this.existing_meal_plan.ownerName == this.userService.getCurrentUser()) {
      this.restService.removeMealPlan(this.existing_meal_plan.key);
    } else {
      // Remove this user from the meal plan
      let participantsNew = [];
      for (let p of this.existing_meal_plan.participants) {
        if (p.username != this.userService.getCurrentUser()) {
          participantsNew.push(p);
        }
      }
      this.existing_meal_plan.participants = participantsNew;
      this.restService.putMealPlan(this.existing_meal_plan);
    }
    this.navCtrl.push(MealPlanHomePage);
  }


  userProfile(username:string) {
    this.navCtrl.push(MealPlanProfilePage,{'user':username});
  }

  continue() {
    this.navCtrl.push(MealPlanReviewPage,{'existing_meal_plan':this.existing_meal_plan});
  }
}
