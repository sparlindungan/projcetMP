import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealPlanNewPage } from '../mp_new/mp_new';

import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { MealPlan } from '../../../models/meal_plan.model';
import { RestServiceProvider } from '../../../src/providers/rest-service/rest-service';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

	public result: any;
	public res: any;

  constructor(public restService: RestServiceProvider) {
  }

  get(){
        this.restService.get().subscribe((data)=>{
            this.result = data.iquuvk;
        });
    }

    // out() {
    //   this.restService.put("").subscribe((data)=>{
    //         this.res = data;
    //     });
    // }

}
