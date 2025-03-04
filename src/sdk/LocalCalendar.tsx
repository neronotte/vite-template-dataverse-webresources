export default class LocalCalendar implements Xrm.Calendar {
	MinSupportedDateTime: Date;
	MaxSupportedDateTime: Date;
	AlgorithmType: number;
	CalendarType: number;
	Eras: number[];
	TwoDigitYearMax: number;
	IsReadOnly: boolean;
	
	constructor() {
		this.MinSupportedDateTime = new Date(1970, 1, 1);
		this.MaxSupportedDateTime = new Date(9999, 12, 31);
		this.AlgorithmType = 1;
		this.CalendarType = 1;
		this.Eras = [1];
		this.TwoDigitYearMax = 2029;
		this.IsReadOnly = true;	
	}
}