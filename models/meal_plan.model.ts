import { GroceryItem } from './grocery_item.model';
import { Participant } from './participant.model';
export class MealPlan {
    // planName: string = " ";
    key: string;
    foodName: string = " ";
    foodDesc: string = " ";
    // address: string = " ";
    eventAddrs: string = " ";
    eventDate: string = " ";
    // time: string = " ";
    eventTime: string = " ";
    eventDay: string = " ";
    partCount: number = 0;
    rollChef: boolean = null;
    rollCleaner: boolean = null;
    rollShopper: boolean = null;
    rollPayer: boolean = null;
    rollEater: boolean = null;
    groceryList: GroceryItem[] = [];
    // groceryList: Map<string, boolean>() = ; 
    // groceryList : Map<string, boolean>;
    tagList: any = [];
    picSource: string = "https://media.gettyimages.com/photos/empty-plate-on-white-picture-id120497078?b=1&k=6&m=120497078&s=612x612&w=0&h=cJx7ftAlKmiapwKG7CqBbq_fpmxeMOhkD_Ziodj7_48=";
    ownerName: string = " ";
    taskAssigned: any = [];
    participants: Participant[] = [];
}
