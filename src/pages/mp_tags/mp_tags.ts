import { Component, ViewEncapsulation } from '@angular/core';
import { ItemSliding, ToastController, NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { MealPlanHomePage } from '../mp_home/mp_home';

import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import {RestServiceProvider} from '../../providers/rest-service/rest-service';
import { MealPlan } from '../../../models/meal_plan.model';
import { GroceryItem } from '../../../models/grocery_item.model';

@Component({
    selector: 'mp_tags',
  templateUrl: 'mp_tags.html',
  encapsulation: ViewEncapsulation.None
})
export class MealPlanTagsPage {
    // let map = new Map<string, boolean>(); 
    
  groceries: any = [];
  public mapping = new Map<string, boolean>();
  tags: any = [];
//   datas: any = [{
//     title: "vegetarian"
// },{
//   title: "vegan"
// },{
//   title: "peanutFr"
// },{
//   title: "glutenFr"
// }];

datas: any = [];
  name: string = "";
  addr: string = "";
  date: string = "";
  time: string = "";
  day: string = "";

//   finalTag: any = [this.tags, this.datas];


  finalTag: any = this.tags.join(this.datas);
    meal_plan: MealPlan = null;
  
     constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public mealPlanService: MealPlanProvider, public restService: RestServiceProvider) {
        this.meal_plan = navParams.get('meal_plan');
        this.name = this.meal_plan.foodName;
        this.addr = this.meal_plan.eventAddrs;
        this.date = this.meal_plan.eventDate;
        this.time = this.meal_plan.eventTime;
        this.day = this.meal_plan.eventDay;
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

    //  defaultVal() {
    //   this.tags.push("vegetarian");
    //   this.tags.push("vegan");
    //   this.tags.push("peanutFr");
    //   this.tags.push("glutenFr");
    //  }
     clickEventVegetarian(e) {
      this.states1 = !(this.states1);
      if (this.states1 == true) {
        this.chg1 = "test1";
        this.datas.push("Vegetarian");
      } else {
        this.chg1 = "test";
        this.deleteData("Vegetarian");
      }
    }
    clickEventVegan(e) {
      this.states2 = !(this.states2);
      if (this.states2 == true) {
        this.chg2 = "test1";
        this.datas.push("Vegan");
      } else {
        this.chg2 = "test";
        this.deleteData("Vegan");
      }
    }
    clickEventPeanutFr(e) {
      this.states3 = !(this.states3);
      if (this.states3 == true) {
        this.chg3 = "test1";
        this.datas.push("Peanut free");
      } else {
        this.chg3 = "test";
        this.deleteData("Peanut free");
      }
    }
    clickEventGlutenFr(e) {
      this.states4 = !(this.states4);
      if (this.states4 == true) {
        this.chg4 = "test1";
        this.datas.push("Gluten free");
      } else {
        this.chg4 = "test";
        this.deleteData("Gluten free");
      }
    }
    clickEventCustom(e) {
      let prompt = this.alertCtrl.create({
        title: 'Add Tags',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.tags.push(data["title"]);
                    
                }
            }
        ]
    });

    prompt.present();
    }
  
    //  addGrocery(){
  
    //      let prompt = this.alertCtrl.create({
    //          title: 'Add Item',
    //          inputs: [{
    //              name: 'title'
    //          }],
    //          buttons: [
    //              {
    //                  text: 'Cancel'
    //              },
    //              {
    //                  text: 'Add',
    //                  handler: data => {
    //                      this.groceries.push(data);
    //                  }
    //              }
    //          ]
    //      });
  
    //      prompt.present();
    //  }




     addGrocery(){
                // let stuff;
               let prompt = this.alertCtrl.create({
                   title: 'Add Item',
                   inputs: [{
                       name: "title"
                   }],
                   buttons: [
                       {
                           text: 'Cancel'
                       },
                       {
                           text: 'Add',
                           handler: data => {
                            //    stuff = data;
                               this.groceries.push(data["title"]);
                            //    console.log(data["anything"]);
                           }
      
                       }
                   ]
               });
        
               prompt.present();
           }





  
     editGrocery(grocery){
  
         let prompt = this.alertCtrl.create({
             title: 'Edit Item',
             inputs: [{
                 name: 'title'
             }],
             buttons: [
                 {
                     text: 'Cancel'
                 },
                 {
                     text: 'Save',
                     handler: data => {
                         let index = this.groceries.indexOf(grocery);
  
                         if(index > -1){
                           this.groceries[index] = data;
                         }
                     }
                 }
             ]
         });
  
         prompt.present();      
  
     }
  
     deleteGrocery(grocery){
  
         let index = this.groceries.indexOf(grocery);
  
         if(index > -1){
             this.groceries.splice(index, 1);
         }
     }

     deleteTag(tag){
      
             let index = this.tags.indexOf(tag);
      
             if(index > -1){
                 this.tags.splice(index, 1);
             }
         }
      
         deleteData(data){
          
                 let index = this.datas.indexOf(data);
          
                 if(index > -1){
                     this.datas.splice(index, 1);
                 }
             }

     

    // makingMap() {
    //     let someArry = this.groceries;
    //     for (let entry of someArry) {
    //         this.mapping.set(entry,false)
    //     }

    //     this.groceries = this.mapping;
    // }
    
    // testing() {
    //     this.datas = this.datas.concat(this.tags)
    //     console.log(this.datas);
    // }
     continue(){
        let someArry = this.groceries;
        let finalGroceries = [];
        for (let entry of someArry) {
            let item: GroceryItem = new GroceryItem();
            item.itemName = entry;
            item.username = null;
            finalGroceries.push(item);
            //this.mapping.set(entry,false)
        }
        console.log(finalGroceries);
        //console.log(this.mapping);

        // this.groceries = this.mapping;

      //this.meal_plan.groceryList = this.mapping;
      this.datas = this.datas.concat(this.tags)
      this.meal_plan.groceryList = finalGroceries;
      this.meal_plan.tagList = this.datas;
        
    //   console.log(this.meal_plan.groceryList);
      //console.log(this.meal_plan.tagList);

      this.restService.post(JSON.stringify(this.meal_plan));
      //console.log("here it is")
      console.log(this.meal_plan);
      this.mealPlanService.addMealPlan(this.meal_plan);
      this.navCtrl.push(MealPlanHomePage);
    }
}
