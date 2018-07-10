import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';
import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlan } from '../../../models/meal_plan.model';
import { Participant } from '../../../models/participant.model';
import { MealPlanGroceryPage } from '../mp_groceries/mp_groceries';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { UserProvider } from '../../../providers/user/user';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { MealPlanProfilePage } from '../mp_userProfile/mp_userProfile';


@Component({
  selector: 'mp_selectedJoin',
  templateUrl: 'mp_selectedJoin.html'
})
export class MealPlanSelectedJoinPage {

  public name;
  public date;
  public time;
  public day;
  public owner;
  public src;
  public addrs;
  public participant;
  

  

  // give out the name of the button
  public role1;
  public role2;
  public role3;
  public role4;
  public role5;

  // ENABLE OR DISABLE BUTTON
  a1;
  b1;
  c1;
  d1;
  e1;

  // String being sent to the next page
  checking1: boolean = false;
  chosenRole1: string;
  checking2: boolean = false;
  chosenRole2: string;
  checking3: boolean = false;
  chosenRole3: string;
  checking4: boolean = false;
  chosenRole4: string;
  checking5: boolean = false;
  chosenRole5: string;

  public chosenRoles:string[] = [];

  // button being pressed - condition
  public states1: boolean = false;
  public states2: boolean = false;
  public states3: boolean = false;
  public states4: boolean = false;
  public states5: boolean = false;

  //EFFECT OF BUTTON AFTER BEING PRESSED
  public chg1: string = "off";
  public chg2: string = "off"; 
  public chg3: string = "off"; 
  public chg4: string = "off";  
  public chg5: string = "off"; 

  

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
    this.participant = this.existing_meal_plan.partCount;
    
    if (this.existing_meal_plan.rollChef == true) {
      this.role1 = "Co-chef";
      this.a1 = false;
      this.states1 = false;
      // this.chosenRole1 = null;
    } else {
      this.role1 = " Co-chef Not Available";
      this.a1 = true;
      // this.chosenRole1 = null;
    }

    if (this.existing_meal_plan.rollPayer == true) {
      this.role2 = "Payer";
      this.b1 = false;
      this.states2 = false;
      // this.chosenRole2 = this.role2;
    } else {
      this.role2 = "Payer Not Available";
      this.b1 = true;
      // this.chosenRole2 = null;
    }

    if (this.existing_meal_plan.rollCleaner == true) {
      this.role3 = "Cleaner";
      this.c1 = false;
      this.states3 = false;
      // this.chosenRole3 = this.role3;
    } else {
      this.role3 = " Cleaner Not Available";
      this.c1 = true;
      // this.chosenRole3 = null;
    }

    if (this.existing_meal_plan.rollEater == true) {
      this.role4 = "Eater";
      this.d1 = false;
      this.states4 = false;
      // this.chosenRole4 = this.role4;
    } else {
      this.role4 = " Eater Not Available";
      this.d1 = true;
      // this.chosenRole4 = null;
    }

    if (this.existing_meal_plan.rollShopper == true) {
      this.role5 = "Shopper";
      this.e1 = false;
      this.states5 = false;
      // this.chosenRole5 = this.role5;
    } else {
      this.role5 = " Shopper Not Available";
      this.e1 = true;
      // this.chosenRole5 = null;
    }


   


  }
  
  checkingOne(a) {
    // this.participant--;
    this.states1 = !(this.states1)
    if (this.states1 == true) {
      this.chg1 = "on"
      this.chosenRole1 = this.role1;
      var task = this.chosenRoles.push(this.chosenRole1);
    } else {
      this.chg1 = "off"
      this.chosenRoles.pop();
    }
  }

  checkingTwo(a) {
    // this.participant--;
    this.states2 = !(this.states2)
    if (this.states2 == true) {
      this.chg2 = "on"
      this.chosenRole2 = this.role2;
      var task = this.chosenRoles.push(this.chosenRole2);
    } else {
      this.chg2 = "off"
      this.chosenRole2 = null;
      this.chosenRoles.pop();
    }
  }

  checkingThree(a) {
    // this.participant--;
    this.states3 = !(this.states3)
    if (this.states3 == true) {
      this.chg3 = "on"
      this.chosenRole3 = this.role3;

      var task = this.chosenRoles.push(this.chosenRole3);
    } else {
      this.chg3 = "off"
      this.chosenRole3 = null;
      this.chosenRoles.pop();
    }
  }

  checkingFour(a) {
    // this.participant--;
    this.states4 = !(this.states4)
    if (this.states4 == true) {
      this.chg4 = "on"
      this.chosenRole4 = this.role4;

      var task = this.chosenRoles.push(this.chosenRole4);
    } else {
      this.chg4 = "off"
      this.chosenRole4 = null;
      this.chosenRoles.pop();
    }
  }

  checkingFive(a) {
    // this.participant--;
    this.states5 = !(this.states5)
    if (this.states5 == true) {
      this.chg5 = "on"
      var task = this.chosenRole5 = this.role5;

      this.chosenRoles.push(this.chosenRole5);
    } else {
      this.chg5 = "off"
      this.chosenRole5 = null;
      this.chosenRoles.pop();
    }
  }
  avatar = "http://www.hexatar.com/gallery/thumb/20151029_m5631acd00bba4.png";

  // continue() {
  //   // this.navCtrl.push(MealPlanGroceryPage);
  //   this.existing_meal_plan.taskAssigned = this.chosenRoles;
  //   this.navCtrl.push(MealPlanHomePage,{'existing_meal_plan':this.existing_meal_plan});

  //   this.mealPlanService.addMealPlan(this.existing_meal_plan);

  //   console.log(this.existing_meal_plan.rollChef)
  // }

  continue() {
    // this.navCtrl.push(MealPlanGroceryPage);
    this.existing_meal_plan.taskAssigned = this.chosenRoles;
    let newParticipant:Participant = new Participant();
    newParticipant.username = this.userService.getCurrentUser();
    newParticipant.chef = this.states1;
    newParticipant.cleaner = this.states3;
    newParticipant.eater = this.states4;
    newParticipant.payer = this.states2;
    newParticipant.shopper = this.states5;
    if (this.existing_meal_plan.participants == undefined || this.existing_meal_plan.participants == null) this.existing_meal_plan.participants = [];
    this.existing_meal_plan.participants.push(newParticipant);
    console.log(this.existing_meal_plan);
    if (this.states5) {
      this.navCtrl.push(MealPlanGroceryPage,{'existing_meal_plan':this.existing_meal_plan});
    } else {
      // this.mealPlanService.addMealPlan(this.existing_meal_plan);
      console.log(this.existing_meal_plan);
      this.restService.putMealPlan(this.existing_meal_plan);
      this.navCtrl.push(MealPlanHomePage,{'existing_meal_plan':this.existing_meal_plan});
      this.mealPlanService.addMealPlan(this.existing_meal_plan);
    }
    

    // console.log(this.existing_meal_plan.rollChef)
  }

  userProfile(username:string):void {
    this.navCtrl.push(MealPlanProfilePage,{'user':username});
  }
}
