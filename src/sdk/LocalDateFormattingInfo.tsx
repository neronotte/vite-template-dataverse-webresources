import LocalCalendar from "./LocalCalendar";

export default class LocalDateFormattingInfo implements Xrm.DateFormattingInfo {
	AmDesignator: string;
	AbbreviatedDayNames: string[];
	AbbreviatedMonthGenitiveNames: string[];
	AbbreviatedMonthNames: string[];
	CalendarWeekRule: number;
	Calendar: Xrm.Calendar;
	DateSeparator: string;
	DayNames: string[];
	FirstDayOfWeek: number;
	FullDateTimePattern: string;
	LongDatePattern: string;
	LongTimePattern: string;
	MonthDayPattern: string;
	MonthGenitiveNames: string[];
	MonthNames: string[];
	PmDesignator: string;
	ShortDatePattern: string;
	ShortTimePattern: string;
	ShortestDayNames: string[];
	SortableDateTimePattern: string;
	TimeSeparator: string;
	UniversalSortableDateTimePattern: string;
	YearMonthPattern: string;

	constructor() {
		this.AmDesignator = "AM";
		this.AbbreviatedDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		this.AbbreviatedMonthGenitiveNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
		this.AbbreviatedMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
		this.CalendarWeekRule = 0;
		this.Calendar = new LocalCalendar();
		this.DateSeparator = "/";
		this.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		this.FirstDayOfWeek = 0;
		this.FullDateTimePattern = "dddd, MMMM dd, yyyy h:mm:ss tt";
		this.LongDatePattern = "dddd, MMMM dd, yyyy";
		this.LongTimePattern = "h:mm:ss tt";
		this.MonthDayPattern = "MMMM dd";
		this.MonthGenitiveNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		this.MonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		this.PmDesignator = "PM";
		this.ShortDatePattern = "M/d/yyyy";
		this.ShortTimePattern = "h:mm tt";
		this.ShortestDayNames = ["Su","Mo","Tu","We","Th","Fr","Sa"];
		this.SortableDateTimePattern = "yyyy'-'MM'-'dd'T'HH':'mm':'ss";
		this.TimeSeparator = ":";
		this.UniversalSortableDateTimePattern = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
		this.YearMonthPattern = "MMMM, yyyy";
	}
}
