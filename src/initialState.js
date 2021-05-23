const initialState = {
	requests: [
		{requestNumber: 1, date: 1602744351000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "доставить к 15-00", codeATI: 100000},
		{requestNumber: 2, date: 1603531965000, nameCompany: "АО Петрович", nameCarrier: "Петров И.В.", phoneCarrier: "89138905029", comments: "", codeATI: 100450},
		{requestNumber: 3, date: 1603531965000, nameCompany: "ЗАО Строймаш", nameCarrier: "Сидоров А.С.", phoneCarrier: "89058979089", comments: "нужны два грузчика", codeATI: 100234},
		{requestNumber: 4, date: 1604229065000, nameCompany: "ООО Рога и копыта", nameCarrier: "Емельянов А.А.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
		{requestNumber: 5, date: 1604734215000, nameCompany: "ООО Волна", nameCarrier: "Сидоров А.С.", phoneCarrier: "89138905029", comments: ":)", codeATI: 100123},
		{requestNumber: 6, date: 1605189421000, nameCompany: "ООО Волна", nameCarrier: "Васин Е.Е.", phoneCarrier: "89105673445", comments: "", codeATI: 100123},
		{requestNumber: 7, date: 1605342940000, nameCompany: "АО Петрович", nameCarrier: "Сенин Е.А.", phoneCarrier: "89091234567", comments: "какой-то коммент", codeATI: 100450},
		{requestNumber: 8, date: 1605531176000, nameCompany: "АО Петрович", nameCarrier: "Бовин Н.Н.", phoneCarrier: "89209009123", comments: "и еще коммент)", codeATI: 100450},
		{requestNumber: 9, date: 1605676636000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
		{requestNumber: 10, date: 1605686636000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
	],
	searchValue: "",
	showAddRequest: false,
	requestDetails: null,
	sortField: "requestNumber",
	sortType: "toTop"
};

export default initialState;