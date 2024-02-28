import { hour, minute, second } from "./htmlElementsHandles.js";

const ZERO_STRING = "0";
const NINE_NUMBER = 9;
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;

class Timer {
	constructor() {
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;

		this.toNumberConverted = 0;

		this.listenerFunc();
	}

	listenerFunc() {
		hour.addEventListener("change", (e) => this.editHourInput(e));
		minute.addEventListener("change", (e) => this.editMinuteInput(e));
		second.addEventListener("change", (e) => this.editSecondInput(e));
	}

	editMinuteInput(e) {
		this.fromStrValueToNumberConverted(e);
      this.editValue(MAX_MINUTES, this.minutes, minute);
	}

	editSecondInput(e) {
      this.fromStrValueToNumberConverted(e);
      this.editValue(MAX_SECONDS, this.seconds, second);
	}

	fromStrValueToNumberConverted(e) {
		this.toNumberConverted = Number(e.target.value);
   }
   
   editValue(MAX_NUMBER, valueOfTimeUnit, newInputValue) {
      if (this.toNumberConverted > MAX_NUMBER) {
         valueOfTimeUnit = MAX_NUMBER;
         newInputValue.value = valueOfTimeUnit;
      }

      if (this.toNumberConverted < MAX_NUMBER) {
         if (this.toNumberConverted > NINE_NUMBER) {
            valueOfTimeUnit = this.toNumberConverted;
            newInputValue.value = valueOfTimeUnit;
         }
      }

      if (this.toNumberConverted <= NINE_NUMBER) {
         valueOfTimeUnit = ZERO_STRING + this.toNumberConverted.toString();
         newInputValue.value = valueOfTimeUnit;
      }
   }
}

new Timer();
