import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhaseOnePage } from './../phaseone/phaseone';
import { PhaseTwoPage } from './../phasetwo/phasetwo';
import { PhaseThreePage } from './../phasethree/phasethree';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController){
    }
    openPhaseOne(){
        this.navCtrl.push(PhaseOnePage);
    }

    openPhaseTwo(){
        this.navCtrl.push(PhaseTwoPage);
    }

    openPhaseThree(){
        this.navCtrl.push(PhaseThreePage);
    }
}