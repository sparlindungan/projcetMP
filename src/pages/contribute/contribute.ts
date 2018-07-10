import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { MealPlan } from '../../../models/meal_plan.model';
import { MealPlanNewPage } from '../mp_new/mp_new';
import { ExistingMealPlanProvider } from '../../../providers/existing_meal_plan/existing_meal_plan';
import { MealPlanJoinPage } from '../mp_join/mp_join';


/**
 * Generated class for the ContributePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'contribute',
  templateUrl: 'contribute.html'
  //encapsulation: ViewEncapsulation.None
})
export class ContributePage {

meal_plan: MealPlan = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public mealPlanService: MealPlanProvider) {
      this.meal_plan = navParams.get('meal_plan');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContributePage');
  }

  public states1: boolean = false;
  public states2: boolean = false;
  public states3: boolean = false;
  public states4: boolean = false;
  public states5: boolean = false;
  public chg1: string = "test";
  public chg2: string = "test"; 
  public chg3: string = "test"; 
  public chg4: string = "test";  
  public chg5: string = "test"; 
  public disable:boolean = true;
  public mssg: string = "Please Choose at least one role";
  public styling: string = "goMsg";  


clickEventChef(e) {
    this.states1 = !(this.states1);
    // this.c1 = this.states1;
    if (this.states1 == true) {
      this.chg1 = "test1";
    } else {
      this.chg1 = "test";
    }
  }
  clickEventCleaner(e) {
    this.states2 = !(this.states2);
    if (this.states2 == true) {
      this.chg2 = "test1";
    } else {
      this.chg2 = "test";
    }
  }
  clickEventShopper(e) {
    this.states3 = !(this.states3);
    if (this.states3 == true) {
      this.chg3 = "test1";
    } else {
      this.chg3 = "test";
    }
  }
  clickEventPayer(e) {
    this.states4 = !(this.states4);
    if (this.states4 == true) {
      this.chg4 = "test1";
    } else {
      this.chg4 = "test";
    }
  }
  clickEventEater(e) {
    this.states5 = !(this.states5);
    if (this.states5 == true) {
      this.chg5 = "test1";
    } else {
      this.chg5 = "test";
    }
  }

  checkingStates(e) {
    if ( ((this.states1 == false)&&(this.states2 == false)&&(this.states3 == false)&&(this.states4 == false)&&(this.states5 == false) ) ) {
      this.disable = true;
      this.mssg = "Must choose at least one role!"
      this.styling = "red";
    } else {
      this.disable = false;
      this.mssg = "You are good to go!"
      this.styling = "green";
    }
  }

  continue(){
    //this.meal_plan.partCount = this.total;

    this.meal_plan.rollChef = this.states1;
    this.meal_plan.rollCleaner = this.states2;
    this.meal_plan.rollEater = this.states5;
    this.meal_plan.rollPayer = this.states4
    this.meal_plan.rollShopper = this.states3;
    this.navCtrl.push(MealPlanHomePage);
    
    // this.navCtrl.push(MealPlanTagsPage, {'meal_plan': this.meal_plan});
  }

//   continue(){
    
//   }

}