import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() array:any;
  constructor(private alertController: AlertController) { }

  onCheckboxChange(event: any) {
    const isChecked = event.detail.checked;
    console.log('Checkbox state changed. Is checked:', isChecked);
    // Aquí puedes realizar cualquier acción que desees según el estado del checkbox
    this.presentAlert();
  }


  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Excellent',
      subHeader: '',
      message: '¡Good job!.',
      buttons: [
        
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay clicked');
          },
        },
      ],
    });

    await alert.present();
  }

}



