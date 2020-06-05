export var years = [];
export var months = [
  { value: "January" },
  { value: "February" },
  { value: "March" },
  { value: "April" },
  { value: "June" },
  { value: "May" },
  { value: "July" },
  { value: "August" },
  { value: "September" },
  { value: "October" },
  { value: "November" },
  { value: "December" },
];
export var days = [];
export var grades = [
  { value: "C5" },
  { value: "Alba" },
  { value: "C4" },
  { value: "M5" },
  { value: "M4" },
  { value: "H1" },
  { value: "H2 Super" },
  { value: "H2 Normal" },
  { value: "H2 FAQ" },
  { value: "H3" },
];
export var types = [
  { value: "Quilling No1" },
  { value: "Powder" },
  { value: "Quilling No2" },
  { value: "Off Cut Inch 3" },
  { value: "Off Cut Inch 9" },
  { value: "Off Cut Inch 12" },
  { value: "Chips" },
];

for (var i = 2020; i < 2071; i++) {
  years.push({ value: i });
}

for (var i = 1; i < 32; i++) {
  days.push({ value: i });
}
