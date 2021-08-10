import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CreditCardValidators } from 'angular-cc-library';
@Component({
	selector: 'app-add-payment-methode',
	templateUrl: './add-payment-methode.page.html',
	styleUrls: ['./add-payment-methode.page.scss'],
})
export class AddPaymentMethodePage implements OnInit {

	isSubmit = false;
	cardForm: FormGroup;
	months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	years = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'];
	cType: any = '';
	cardno: any = '';
	constructor(public modalController: ModalController, private fb: FormBuilder) {
		this.createCardForm();
	}



	ngOnInit() {
	}



	cardType(cardNumber) {
		var cardType = (/^5[1-5]/.test(cardNumber)) ? "Mastercard" : (/^4/.test(cardNumber)) ? "Visa" : (/^3[47]/.test(cardNumber)) ? 'Amex' : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(cardNumber)) ? 'Discover' : (/^3(?:0[0-5]|[68][0-9])[0-9]{4,}/.test(cardNumber)) ? 'Diners Club' : (/^(?:2131|1800|35[0-9]{3})[0-9]{3,}/.test(cardNumber)) ? 'JCB' : 'Unknown';
		this.cType = cardType;
		return cardType;
	}
	/*****GET  CONTROLS FOR FORM****** */

	get form() {

		return this.cardForm.controls;
	}

	/*****MATCH CARD DIGITS****** */


	checkDigit(e) {
		var val = e.target.value;
		var v = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

		var matches = v.match(/\d{4,16}/g);

		var match = (matches && matches[0]) || "";

		var parts = [];

		for (var i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}
		console.log(parts);

		if (parts.length) {
			return parts.join(" ");
		} else {
			return val;
		}
	}

	/*****CREATE THE CARD FORM****** */

	year:any='';
	createCardForm() {
		this.cardForm = this.fb.group({
			name: ["", [Validators.required, Validators.pattern('[A-z]+$')]],
			number: ["", [Validators.required, Validators.pattern('[0-9]+$'), Validators.minLength(16), Validators.maxLength(16), this.chk_card()]],
			month: ["", [Validators.required, this.chk_month()]],
			year: ["", [Validators.required, this.chk_year()]],
			// cvv: ["", [Validators.required]]
		});

	}
	chk_card(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			let input = control.value;
			let cards = [];
			cards = JSON.parse(localStorage.getItem('cards'));
			let isValid;

			if (cards && cards.length > 0) {

				for (let z of cards) {

					if (input === z.number) {
						console.log('card already added');
						if (!isValid) return { chk_card: { isValid } };
						else return null;
					}
					else {
						isValid = z.number !== input;
						if (!isValid) return { chk_card: { isValid } };
						else return null;
					}
				}

			}

		};

	}
	onChange($event){
		console.log(this.cardForm.value.year);		
	}
	chk_month(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			if(this.cardForm && this.cardForm != undefined){
				let input = control.value;
				let today = new Date();
				let someyear = this.cardForm.value.year;
				console.log('selected year', this.cardForm.value.year);
				let nowday = today.getFullYear();
				if(someyear === null || someyear === '' || someyear === undefined){
					console.log('in null case');
					return null;        
				}
				else if(someyear == nowday ) {
					console.log('in equal case');
				let someday = today.getMonth();
				let isValid = someday <= input;
				if (!isValid) return { chk_month: { isValid } };
				else return null;
				}
				else {
					console.log('in last case');
					return null;
				}
			}
		};

	}
	chk_year(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } => {
			let input = control.value;
			let today = new Date();
			let someday = today.getFullYear();
			let isValid = someday <= input;
			if (!isValid) return { chk_year: { isValid } };
			else return null;
		};

	}
	checkLuhns = num => {
		let arr = (num + '')
			.split('')
			.reverse()
			.map(x => parseInt(x));
		let lastDigit = arr.splice(0, 1)[0];
		let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
		sum += lastDigit;
		console.log(sum % 10 === 0);
		return sum % 10 === 0;
	};

	/*****SAVING CARD FORM****** */
	validateCard: any = false;
	validateExpMonthYear: any = false;

	addCard(value: any): void {
		console.log(this.cardForm);
		this.chk_month();
		this.isSubmit = true;
		if (this.cardForm.invalid) {
			console.log('not valid');
			return;
		}
		else {
			this.cardType(this.cardForm.value.number);
			
			console.log('card ', this.cType);


			if (this.checkLuhns(this.cardForm.value.number) === true) {
				const data = {
					name: this.cardForm.value.name,
					number: this.cardForm.value.number,
					type: this.cType,
					month: this.cardForm.value.month,
					year: this.cardForm.value.year
				}

				this.modalController.dismiss(data);
				console.log('Data', data);
			}
			else if (this.checkLuhns(this.cardForm.value.number) === false) {
				alert('Card No is Not Valid, Please Enter Valid Card Number');
			}
		}


	}

	/*****DISMISS THE MODAL****** */


	dismiss2() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modalController.dismiss({
			'dismissed': true
		});
	}
}
