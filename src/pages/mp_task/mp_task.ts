import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController} from 'ionic-angular';

import { MealPlanTagsPage } from '../mp_tags/mp_tags';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MealPlan } from '../../../models/meal_plan.model';

@Component({
  selector: 'mp_task',
  templateUrl: 'mp_task.html'
})
export class MealPlanTaskPage {

  name: string = "";
  addr: string = "";
  date: string = "";
  time: string = "";
  day: string = "";
  meal_plan: MealPlan = null;

 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
        this.meal_plan = navParams.get('meal_plan');
        
        this.name = this.meal_plan.foodName;
        this.addr = this.meal_plan.eventAddrs;
        this.date = this.meal_plan.eventDate;
        this.time = this.meal_plan.eventTime;
        this.day = this.meal_plan.eventDay;
    }

  public total: number = 2;
  public states1: boolean = false;
  // public c1: boolean = null;
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


  tapEvent(e) {
    this.total++
  }


  tapEvent2(e) {
    if (this.total <= 0) {
      this.total = 0;
    } else {

      this.total--
    }
    
  }

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
    if ( ((this.states1 == false)&&(this.states2 == false)&&(this.states3 == false)&&(this.states4 == false)&&(this.states5 == false) )&&(this.total >= 0) ) {
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
    this.meal_plan.partCount = this.total;
    this.meal_plan.rollChef = this.states1;
    this.meal_plan.rollCleaner = this.states2;
    this.meal_plan.rollEater = this.states5;
    this.meal_plan.rollPayer = this.states4
    this.meal_plan.rollShopper = this.states3;
    this.navCtrl.push(MealPlanTagsPage, {'meal_plan': this.meal_plan});
  }
  


  }


      
    




