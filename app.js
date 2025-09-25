import { mainMenu } from './logic/logics.js';
import { mainLogic } from './logic/library.js'

let choice;

do{
    choice = mainMenu();

    mainLogic(choice);

}while(choice != 0);