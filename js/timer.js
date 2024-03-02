import {
	hour,
	minute,
	second,
	iconOk,
	editBtn,
	playPauseBtn,
} from "./htmlElementsHandles.js";

const ZERO_STRING = "0";
const NINE_NUMBER = 9;
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;

class Timer {
	constructor() {
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;

		this.countDownHours = 0;
		this.countDownMins = 0;
		this.countDownSecs = 0;

		this.toNumberConverted = 0;

		this.listenerFunc();
	}

	listenerFunc() {
		hour.addEventListener("change", (e) => this.editHourInput(e));
		minute.addEventListener("change", (e) => this.editMinuteInput(e));
		second.addEventListener("change", (e) => this.editSecondInput(e));

		editBtn.addEventListener("click", (e) => this.editBtn(e));
		playPauseBtn.addEventListener("click", (e) => this.playPauseTimer(e));
	}

	editHourInput(e) {
		this.fromStrValueToNumberConverted(e);
		this.hourValue(MAX_MINUTES, this.hours, hour);
	}

	editMinuteInput(e) {
		this.fromStrValueToNumberConverted(e);
		this.editValue(MAX_MINUTES, this.minutes, minute);
	}

	editSecondInput(e) {
		this.fromStrValueToNumberConverted(e, second);
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

		this.hourValue(MAX_NUMBER, valueOfTimeUnit, newInputValue);
	}

	hourValue(MAX_NUMBER, valueOfTimeUnit, newInputValue) {
		if (this.toNumberConverted <= NINE_NUMBER) {
			valueOfTimeUnit = ZERO_STRING + this.toNumberConverted.toString();
			newInputValue.value = valueOfTimeUnit;
		}
	}

	editBtn() {
		hour.classList.toggle("inputs");
		minute.classList.toggle("inputs");
		second.classList.toggle("inputs");
		hour.toggleAttribute.toggle("disabled");
		minute.toggleAttribute.toggle("disabled");
		second.toggleAttribute("disabled");

		iconOk.classList.toggle("icon-pencil");
	}

	playPauseTimer() {
		this.countDownHours = this.hours;
		this.countDownMins = this.minutes;
		this.countDownSecs = this.seconds;

      setInterval(() => {
			this.countDownSec--;
			second.value = this.countDownSec;
		}, 1000);
	}
}

new Timer();
