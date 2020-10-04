var express = require('express');
var router = express.Router();

const users = ["ayberk.bozkus@gmail.com,","altanckr@googlemail.com","faruk.deniz@farplas.com","dogukan.nefis@farplas.com","onur@fplus.ventures","alp.kiziltan@farplas.com","o.akin@farplas.com"];

const fakeapi = [{"T3": {"machines": {"E009": {"mold": "-", "cycleMeanMold": "-", "cycleMeanLast10": "-", "cycleTimesLast10": "-", "energyMeanDay": "-", "energyMeanInterval": "-", "partCount": {}, "hourlyPartCount": {"0": 3.0, "1": 67.0, "2": 1.0, "3": 1.0, "4": 51.0, "5": 75.0, "6": 76.0, "7": 76.0, "8": 76.0, "9": 28.0}, "modePerc": {"Bekleme": 9.45, "Manuel": 24.85, "Seri Üretim": 61.36, "Setup": 1.98, "Yarı Otomatik": 2.37}}, "E018": {"mold": 2083, "cycleMeanMold": 26.14, "cycleMeanLast10": 26.0, "cycleTimesLast10": [26.0, 26.0, 26.0, 26.0, 26.0, 26.0, 26.0, 26.0, 26.0, 26.0], "energyMeanDay": 84, "energyMeanInterval": 528, "partCount": {"2083": 54}, "hourlyPartCount": {"0": 1.0, "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0, "5": 1.0, "6": 1.0, "7": 1.0, "8": 3.0, "9": 52.0}, "modePerc": {"Manuel": 87.98, "Seri Üretim": 3.93, "Yarı Otomatik": 8.09}}, "E034": {"mold": "-", "cycleMeanMold": "-", "cycleMeanLast10": "-", "cycleTimesLast10": "-", "energyMeanDay": 317, "energyMeanInterval": 684, "partCount": {}, "hourlyPartCount": {"0": 1.0, "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0, "5": 1.0, "6": 1.0, "7": 1.0, "8": 1.0, "9": 1.0}, "modePerc": {}}, "E080": {"mold": 2555, "cycleMeanMold": 35.8, "cycleMeanLast10": 35.0, "cycleTimesLast10": [35.0, 35.0, 35.0, 35.0, 35.0, 35.0, 35.0, 35.0, 35.0, 35.0], "energyMeanDay": 0, "energyMeanInterval": 0, "partCount": {"2555": 787}, "hourlyPartCount": {"0": 103.0, "1": 98.0, "2": 68.0, "3": 92.0, "4": 29.0, "5": 101.0, "6": 75.0, "7": 89.0, "8": 101.0, "9": 39.0}, "modePerc": {"Bekleme": 3.14, "Manuel": 10.15, "Seri Üretim": 82.84, "Yarı Otomatik": 3.89}}}, "totalEnergy": {"dailyMean": 133.67, "weeklyMean": 192.67, "monthlyMean": 163.17}, "facilityModePerc": {"Bekleme": 4.197, "Manuel": 40.993, "Seri Üretim": 49.377, "Setup": 0.66, "Yarı Otomatik": 4.783}}, "T1": {"machines": {"E053": {"mold": 2263, "cycleMeanMold": 30.27, "cycleMeanLast10": 30.0, "cycleTimesLast10": [30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0], "energyMeanDay": "-", "energyMeanInterval": "-", "partCount": {"2263": 760}, "hourlyPartCount": {"0": 30.0, "1": 77.0, "2": 117.0, "3": 46.0, "4": 115.0, "5": 82.0, "6": 60.0, "7": 103.0, "8": 93.0, "9": 45.0}, "modePerc": {"Bekleme": 25.12, "Manuel": 1.9, "Seri Üretim": 67.4, "Yarı Otomatik": 5.59}}, "E114": {"mold": 2540, "cycleMeanMold": 76.6, "cycleMeanLast10": 79.86, "cycleTimesLast10": [80.05, 79.46, 80.69, 79.41, 80.21, 79.46, 80.14, 79.56, 80.16, 79.42], "energyMeanDay": 0, "energyMeanInterval": 0, "partCount": {"2540": 55, "2544": 238}, "hourlyPartCount": {"0": 12.0, "1": 41.0, "2": 44.0, "3": 44.0, "4": 38.0, "5": 34.0, "6": 22.0, "7": 10.0, "8": 38.0, "9": 18.0}, "modePerc": {"Manuel": 17.05, "Seri Üretim": 73.21, "Setup": 3.11, "Yarı Otomatik": 6.63}}, "E102": {"mold": 2977, "cycleMeanMold": 65.44, "cycleMeanLast10": 65.78, "cycleTimesLast10": [65.8, 65.77, 65.79, 65.77, 65.77, 65.79, 65.79, 65.78, 65.79, 65.77], "energyMeanDay": 158, "energyMeanInterval": 168, "partCount": {"2977": 429}, "hourlyPartCount": {"0": 1.0, "1": 26.0, "2": 56.0, "3": 56.0, "4": 55.0, "5": 56.0, "6": 56.0, "7": 55.0, "8": 55.0, "9": 21.0}, "modePerc": {"Manuel": 1.3, "Seri Üretim": 83.03, "Setup": 15.17, "Yarı Otomatik": 0.51}}, "E117": {"mold": "-", "cycleMeanMold": "-", "cycleMeanLast10": "-", "cycleTimesLast10": "-", "energyMeanDay": 261, "energyMeanInterval": 228, "partCount": {"2297": 307, "2535": 297}, "hourlyPartCount": {"0": 48.0, "1": 67.0, "2": 67.0, "3": 67.0, "4": 62.0, "5": 13.0, "6": 89.0, "7": 90.0, "8": 75.0, "9": 34.0}, "modePerc": {"Manuel": 2.46, "Seri Üretim": 85.99, "Setup": 7.06, "Yarı Otomatik": 4.48}}}, "totalEnergy": {"dailyMean": 139.67, "weeklyMean": 146.33, "monthlyMean": 143.0}, "facilityModePerc": {"Bekleme": 6.28, "Manuel": 5.678, "Seri Üretim": 77.407, "Yarı Otomatik": 4.303, "Setup": 6.335}}, "T2": {"machines": {"E059": {"mold": 2765, "cycleMeanMold": 69.36, "cycleMeanLast10": 69.52, "cycleTimesLast10": [70.0, 69.25, 69.77, 70.0, 69.23, 69.76, 69.24, 69.76, 69.24, 69.0], "energyMeanDay": 1486, "energyMeanInterval": 1512, "partCount": {"2765": 352}, "hourlyPartCount": {"0": 16.0, "1": 23.0, "2": 35.0, "3": 25.0, "4": 49.0, "5": 53.0, "6": 35.0, "7": 53.0, "8": 52.0, "9": 20.0}, "modePerc": {"Bekleme": 2.96, "Manuel": 6.09, "Seri Üretim": 72.82, "Yarı Otomatik": 18.13}}, "E083": {"mold": 2888, "cycleMeanMold": 113.51, "cycleMeanLast10": 93.4, "cycleTimesLast10": [90.0, 91.0, 90.0, 90.0, 90.0, 90.0, 97.0, 96.0, 96.0, 104.0], "energyMeanDay": 715, "energyMeanInterval": 984, "partCount": {"2888": 232}, "hourlyPartCount": {"0": 31.0, "1": 24.0, "2": 32.0, "3": 33.0, "4": 18.0, "5": 33.0, "6": 24.0, "7": 15.0, "8": 17.0, "9": 14.0}, "modePerc": {"Manuel": 0.26, "Seri Üretim": 77.16, "Setup": 1.41, "Yarı Otomatik": 21.17}}, "E096": {"mold": "-", "cycleMeanMold": "-", "cycleMeanLast10": "-", "cycleTimesLast10": "-", "energyMeanDay": "-", "energyMeanInterval": "-", "partCount": {}, "hourlyPartCount": {"0": 1.0, "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0, "5": 1.0, "6": 1.0, "7": 1.0, "8": 1.0, "9": 1.0}, "modePerc": {}}, "E104": {"mold": "-", "cycleMeanMold": "-", "cycleMeanLast10": "-", "cycleTimesLast10": "-", "energyMeanDay": "-", "energyMeanInterval": "-", "partCount": {}, "hourlyPartCount": {"0": 66.0, "1": 59.0, "2": 66.0, "3": 65.0, "4": 29.0, "5": 67.0, "6": 43.0, "7": 50.0, "8": 66.0, "9": 23.0}, "modePerc": {"Seri Üretim": 86.86, "Setup": 0.08, "Yarı Otomatik": 13.06}}, "E109": {"mold": 2290, "cycleMeanMold": 76.06, "cycleMeanLast10": 76.08, "cycleTimesLast10": [76.05, 76.06, 76.08, 76.08, 76.08, 76.11, 76.09, 76.15, 76.04, 76.09], "energyMeanDay": "-", "energyMeanInterval": "-", "partCount": {"2290": 131}, "hourlyPartCount": {"0": 77.0, "1": 49.0, "2": 78.0, "3": 76.0, "4": 16.0, "5": 47.0, "6": 35.0, "7": 48.0, "8": 49.0, "9": 18.0}, "modePerc": {"Manuel": 1.34, "Seri Üretim": 83.47, "Setup": 5.33, "Yarı Otomatik": 9.86}}, "E115": {"mold": 2592, "cycleMeanMold": 54.42, "cycleMeanLast10": 54.43, "cycleTimesLast10": [54.38, 54.45, 54.38, 54.5, 54.42, 54.38, 54.48, 54.39, 54.4, 54.5], "energyMeanDay": 307, "energyMeanInterval": 360, "partCount": {"2317": 95, "2592": 332}, "hourlyPartCount": {"0": 46.0, "1": 28.0, "2": 23.0, "3": 57.0, "4": 27.0, "5": 52.0, "6": 48.0, "7": 61.0, "8": 68.0, "9": 25.0}, "modePerc": {"Manuel": 0.24, "Seri Üretim": 72.07, "Setup": 5.44, "Yarı Otomatik": 22.25}}}, "totalEnergy": {"dailyMean": 836.0, "weeklyMean": 775.0, "monthlyMean": 805.5}, "facilityModePerc": {"Bekleme": 0.592, "Manuel": 1.586, "Seri Üretim": 78.476, "Yarı Otomatik": 16.894, "Setup": 2.452}}}
];

const ticket = [];

const notification = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(ticket);
});

router.get('/notification', function(req, res, next) {
  res.send({ notification });
});

router.get('/fakeapi', function(req, res, next) {
  res.send({ fakeapi });
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  if (email == "flatform@flatform.com" && password == "flatform@flatform2020!") {
    res.send({ "login":"2314" });
  }
  else{
    res.send({ "fail":"9845" });
  }
});

router.post('/ticket', function(req, res, next) {
  const { email, issue, message, color } = req.body;
  ticket.push({ email, issue, message, color });
  res.send({ success: true });
});

router.post('/notification', function(req, res, next) {
  const { email, title, message, color } = req.body;
  notification.push({ email, title, message, color });
  res.send({ success: true });
});

module.exports = router;
