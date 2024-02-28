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

		if (this.toNumberConverted > MAX_MINUTES) {
			this.minutes = MAX_MINUTES;
			minute.value = this.minutes;
		}

		if (this.toNumberConverted < MAX_MINUTES) {
			if (this.toNumberConverted > NINE_NUMBER) {
				this.minutes = this.toNumberConverted;
            minute.value = this.minutes;
			}
		}

		if (this.toNumberConverted <= NINE_NUMBER) {
			this.minutes = ZERO_STRING + this.toNumberConverted.toString();
         minute.value = this.minutes;
		}
   }
   
   editSecondInput(e) {
      this.fromStrValueToNumberConverted(e);

		if (this.toNumberConverted > MAX_SECONDS) {
			this.seconds = MAX_SECONDS;
			second.value = this.seconds;
		}

		if (this.toNumberConverted < MAX_SECONDS) {
			if (this.toNumberConverted > NINE_NUMBER) {
				this.seconds = this.toNumberConverted;
            second.value = this.seconds;
			}
		}

		if (this.toNumberConverted <= NINE_NUMBER) {
			this.seconds = ZERO_STRING + this.toNumberConverted.toString();
         second.value = this.seconds;
		}
   }

   fromStrValueToNumberConverted(e) {
		this.toNumberConverted = Number(e.target.value);
	}
}

new Timer();