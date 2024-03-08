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

		this.inter = null;

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
		this.fromStrValueToNumberConverted(e, hour);
		this.hourValue(MAX_MINUTES, this.hours, hour);
	}

	editMinuteInput(e) {
		this.fromStrValueToNumberConverted(e, minute);
		this.editValue(MAX_MINUTES, this.minutes, minute);
	}

	editSecondInput(e) {
		this.fromStrValueToNumberConverted(e, second);
		this.editValue(MAX_SECONDS, this.seconds, second);
	}

	fromStrValueToNumberConverted(e, input) {
		this.toNumberConverted = Number(e.target.value);

		if (input.classList.contains("form__second")) {
			this.seconds = Number(e.target.value);
		}
		if (input.classList.contains("form__minute")) {
			this.minutes = Number(e.target.value);
		}
		if (input.classList.contains("form__hour")) {
			this.hours = Number(e.target.value);
		}
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
		this.countDownHours = this.hours;
		this.countDownMins = this.minutes;
		this.countDownSecs = this.seconds;

		hour.classList.toggle("inputs");
		minute.classList.toggle("inputs");
		second.classList.toggle("inputs");
		hour.toggleAttribute("disabled");
		minute.toggleAttribute("disabled");
		second.toggleAttribute("disabled");

		iconOk.classList.toggle("icon-pencil");
	}

	playPauseTimer() {
		playPauseBtn.classList.toggle("icon-pause");

		this.countSec(
			this.seconds,
			second,
			this.countDownMins,
			minute,
			this.countDownHours,
			hour,
			playPauseBtn,
			this.inter
		);
	}

	countSec(
		counterDownSec,
		newInputValue,
		counterDownMin,
		newInputValueMin,
		counterDownHour,
		newInputValueHr,
		playBtn,
		d
	) {
		d = setInterval(() => {
			counterDownSec--;
			if (counterDownSec <= NINE_NUMBER) {
				newInputValue.value = ZERO_STRING + counterDownSec.toString();
			} else {
				newInputValue.value = counterDownSec;
				counterDownSec = counterDownSec;
			}

			if (counterDownSec == 0) {
				clearInterval(d);
				if (!counterDownMin == 0) {
					counterDownMin--;
					if (counterDownMin <= NINE_NUMBER) {
						newInputValueMin.value =
							ZERO_STRING + counterDownMin.toString();
					} else {
						newInputValueMin.value = counterDownMin;
					}
					counterDownSec = 59;
					newInputValue.value = counterDownSec;
					this.countSec(
						counterDownSec,
						newInputValue,
						counterDownMin,
						newInputValueMin,
						counterDownHour,
						newInputValueHr,
						playBtn,
						d
					);
				}
				if (counterDownMin == 0) {
					if (!counterDownHour == 0) {
						counterDownHour--;
						if (counterDownHour <= NINE_NUMBER) {
							newInputValueHr.value =
								ZERO_STRING + counterDownHour.toString();
						} else {
							newInputValueHr.value = counterDownHour;
						}
						counterDownMin = 59;
						newInputValueMin.value = counterDownMin;
						this.countSec(
							counterDownSec,
							newInputValue,
							counterDownMin,
							newInputValueMin,
							counterDownHour,
							newInputValueHr,
							playBtn,
							d
						);
					}
				}
			}

			if (!playBtn.classList.contains("icon-pause")) {
				newInputValue.value = counterDownSec;
				clearInterval(d);
			}
		}, 1000);
	}
}
new Timer();
