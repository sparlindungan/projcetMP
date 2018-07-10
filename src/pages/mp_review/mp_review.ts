import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MealPlanProvider } from '../../../providers/meal_plan/meal_plan';
import { MealPlanHomePage } from '../mp_home/mp_home';
import { UserProvider } from '../../../providers/user/user';
import { User } from '../../../models/user.model';
import { MealPlan } from '../../../models/meal_plan.model';
import { Review } from '../../../models/review.model';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';


@Component({
  selector: 'mp_review',
  templateUrl: 'mp_review.html'
})
export class MealPlanReviewPage {

  review: string;
  rating: number;

  username: string;
  task: string;
  src: string = "http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg";

  toReview = [];
  reviews = [];

  meal_plan: MealPlan;

  users: User[] = [];

  finished: boolean = false;

  constructor(public navParams: NavParams, public navCtrl: NavController, public mealPlanService: MealPlanProvider,public userService: UserProvider, public restService: RestServiceProvider) {

      restService.getUsers().subscribe((data)=>{
        this.users = [];
        Object.keys(data).forEach(key => {
          data[key].key = key;
          this.users.push(data[key]);
          console.log(data[key].key, key);
        });
        console.log(this.users);
      });
      this.meal_plan = this.navParams.get('existing_meal_plan');

      if (this.meal_plan.ownerName == this.userService.getCurrentUser()) {
        if (this.meal_plan.participants != undefined && this.meal_plan.participants != null && this.meal_plan.participants.length != 0) {
          for(let p of this.meal_plan.participants) {
            let taskVal = "";
            if (p.chef) {
              taskVal = "Co-Chef";
            } else if (p.cleaner) {
              taskVal = "Cleaner";
            } else if (p.shopper) {
              taskVal = "Grocery Shopper";
            } else if (p.eater) {
              taskVal = "Free Eater";
            } else if (p.payer) {
              taskVal = "Payer";
            }

            let object = {name:p.username, task:taskVal};
            this.toReview.push(object);   
          }
        }
      } else {
        let object = {name:this.meal_plan.ownerName, task:"Planner"}; 
        this.toReview.push(object);
      }

    if (this.toReview.length == 0) {
        alert("Nothing to Review");
        this.deleteMealPlan();
        this.returnToHomePage();
    } else {
        this.reviewNew(this.toReview.pop())
    }
  }

  reviewNew(person) {
    this.username = person.name;
    this.task = person.task;
    this.rating = 0;
    this.review = "";
  }

  deleteMealPlan() {
    if (this.meal_plan.ownerName == this.userService.getCurrentUser()) {
      this.restService.removeMealPlan(this.meal_plan.key);
    } else {
      // Remove this user from the meal plan
      let participantsNew = [];
      for (let p of this.meal_plan.participants) {
        if (p.username != this.userService.getCurrentUser()) {
          participantsNew.push(p);
        }
      }

      this.meal_plan.participants = participantsNew;
      this.restService.putMealPlan(this.meal_plan);
    }
  }

  returnToHomePage() {
    this.navCtrl.push(MealPlanHomePage);
  }

  continue() {
    if (this.toReview.length > 0) {
        let r = {username: this.username, review: this.review, rating: this.rating};
        this.reviews.push(r);

        this.reviewNew(this.toReview.pop())
        
    } else {
      if (!this.finished) {
        let r = {username: this.username, review: this.review, rating: this.rating};
        this.reviews.push(r);
        this.finished = true;
      }

        console.log(this.reviews);
        for (let r of this.reviews) {
            let reviewObject: Review = new Review();
            reviewObject.authorUsername = this.userService.getCurrentUser();
            reviewObject.body = r.review;
            reviewObject.rating = r.rating;

            // Push to user with username r.username
            let reviewingUser: User = null;

            for (let user of this.users) {
              if (user.userName == r.username) {
                reviewingUser = user;
              }
            }

            if (reviewingUser != null) {
              reviewingUser.reviews.push(reviewObject);
              this.restService.updateReview(JSON.stringify(reviewingUser), reviewingUser.key);
            } else {
              console.log("NULL USER");
            }
        }

        this.deleteMealPlan();
        this.returnToHomePage();
    }
  }

}
