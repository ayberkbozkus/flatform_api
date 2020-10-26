var express = require('express');
var router = express.Router();

const users = ["ayberk.bozkus@gmail.com,", "altanckr@googlemail.com", "faruk.deniz@farplas.com", "dogukan.nefis@farplas.com", "onur@fplus.ventures", "alp.kiziltan@farplas.com", "o.akin@farplas.com"];

const fakeapi = [{
    "Türkiye": {
        "workmachines": {
            "Çalışan": 12,
            "Toplam": 48
        },
        "Energy": {
            "Günlük": 369.78,
            "Haftalık": 371.33,
        },
        "hourlyPartCount": {
            "T1": 471,
            "T2": 560,
            "T3": 589,

        },
        "modePerc": {
            "Bekleme": 0.01,
            "Manuel": 0.01,
            "Seri Üretim": 0.01,
            "Setup": 0.01,
            "Yarı Otomatik": 0.01,
        }
    },
    "Romanya": {
        "workmachines": {
            "Çalışan": 0,
            "Toplam": 48
        },
        "Energy": {
            "Günlük": 0.01,
            "Haftalık": 0.01,
        },
        "hourlyPartCount": {
            "T1": 0,
            "T2": 0,
            "T3": 0,

        },
        "modePerc": {
            "Bekleme": 0.01,
            "Manuel": 0.01,
            "Seri Üretim": 0.01,
            "Setup": 0.01,
            "Yarı Otomatik": 0.01,
        }

    },
    "T3": {
        "machines": {
            "workmachines": {
                "Çalışan": 4,
                "Toplam": 16
            },
            "E009": {
                "mold": 0,
                "cycleMeanMold": 0,
                "cycleMeanLast10": 0,
                "cycleTimesLast10": 0,
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {

                },
                "hourlyPartCount": {
                    "0": 3,
                    "1": 67,
                    "2": 1,
                    "3": 1,
                    "4": 51,
                    "5": 75,
                    "6": 76,
                    "7": 76,
                    "8": 76,
                    "9": 28
                },
                "modePerc": {
                    "Bekleme": 9.45,
                    "Manuel": 24.85,
                    "Seri Üretim": 61.36,
                    "Setup": 1.98,
                    "Yarı Otomatik": 2.37
                }
            },
            "E018": {
                "mold": 2083,
                "cycleMeanMold": 26.14,
                "cycleMeanLast10": 26,
                "cycleTimesLast10": [
                    26,
                    26,
                    26,
                    26,
                    26,
                    26,
                    26,
                    26,
                    26,
                    26
                ],
                "Energy": {
                    "Günlük": 84.01,
                    "Haftalık": 528.01,
                },
                "partCount": {
                    "2083": 54
                },
                "hourlyPartCount": {
                    "0": 1,
                    "1": 1,
                    "2": 1,
                    "3": 1,
                    "4": 1,
                    "5": 1,
                    "6": 1,
                    "7": 1,
                    "8": 3,
                    "9": 52
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 87.98,
                    "Seri Üretim": 3.93,
                    "Yarı Otomatik": 8.09,
                    "Setup": 0.01,

                }
            },
            "E034": {
                "mold": 0,
                "cycleMeanMold": 0,
                "cycleMeanLast10": 0,
                "cycleTimesLast10": 0,
                "Energy": {
                    "Günlük": 317.01,
                    "Haftalık": 684.01,
                },
                "partCount": {

                },
                "hourlyPartCount": {
                    "0": 1,
                    "1": 1,
                    "2": 1,
                    "3": 1,
                    "4": 1,
                    "5": 1,
                    "6": 1,
                    "7": 1,
                    "8": 1,
                    "9": 1
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 0.01,
                    "Seri Üretim": 0.01,
                    "Yarı Otomatik": 0.01,
                    "Setup": 0.01,
                }
            },
            "E080": {
                "mold": 2555,
                "cycleMeanMold": 35.8,
                "cycleMeanLast10": 35,
                "cycleTimesLast10": [
                    35,
                    35,
                    35,
                    35,
                    35,
                    35,
                    35,
                    35,
                    35,
                    35
                ],
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {
                    "2555": 787
                },
                "hourlyPartCount": {
                    "0": 103,
                    "1": 98,
                    "2": 68,
                    "3": 92,
                    "4": 29,
                    "5": 101,
                    "6": 75,
                    "7": 89,
                    "8": 101,
                    "9": 39
                },
                "modePerc": {
                    "Bekleme": 3.14,
                    "Manuel": 10.15,
                    "Seri Üretim": 82.84,
                    "Yarı Otomatik": 3.89,
                    "Setup": 0.01,
                }
            }
        },
        "Energy": {
            "Günlük": 133.67,
            "Haftalık": 192.67,
        },
        "facilityModePerc": {
            "Bekleme": 4.197,
            "Manuel": 40.993,
            "Seri Üretim": 49.377,
            "Setup": 0.66,
            "Yarı Otomatik": 4.783
        },
        "hourlyPartCount": {
            "0": 108,
            "1": 166,
            "2": 70,
            "3": 94,
            "4": 81,
            "5": 177,
            "6": 152,
            "7": 166,
            "8": 181,
            "9": 120
        },
    },
    "T1": {
        "machines": {
            "workmachines": {
                "Çalışan": 4,
                "Toplam": 16
            },
            "E053": {
                "mold": 2263,
                "cycleMeanMold": 30.27,
                "cycleMeanLast10": 30,
                "cycleTimesLast10": [
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30,
                    30
                ],
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {
                    "2263": 760
                },
                "hourlyPartCount": {
                    "0": 30,
                    "1": 77,
                    "2": 117,
                    "3": 46,
                    "4": 115,
                    "5": 82,
                    "6": 60,
                    "7": 103,
                    "8": 93,
                    "9": 45
                },
                "modePerc": {
                    "Bekleme": 25.12,
                    "Manuel": 1.9,
                    "Seri Üretim": 67.4,
                    "Yarı Otomatik": 5.59,
                    "Setup": 0.01,
                }
            },
            "E114": {
                "mold": 2540,
                "cycleMeanMold": 76.6,
                "cycleMeanLast10": 79.86,
                "cycleTimesLast10": [
                    80.05,
                    79.46,
                    80.69,
                    79.41,
                    80.21,
                    79.46,
                    80.14,
                    79.56,
                    80.16,
                    79.42
                ],
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {
                    "2540": 55,
                    "2544": 238
                },
                "hourlyPartCount": {
                    "0": 12,
                    "1": 41,
                    "2": 44,
                    "3": 44,
                    "4": 38,
                    "5": 34,
                    "6": 22,
                    "7": 10,
                    "8": 38,
                    "9": 18
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 17.05,
                    "Seri Üretim": 73.21,
                    "Setup": 3.11,
                    "Yarı Otomatik": 6.63
                }
            },
            "E102": {
                "mold": 2977,
                "cycleMeanMold": 65.44,
                "cycleMeanLast10": 65.78,
                "cycleTimesLast10": [
                    65.8,
                    65.77,
                    65.79,
                    65.77,
                    65.77,
                    65.79,
                    65.79,
                    65.78,
                    65.79,
                    65.77
                ],
                "Energy": {
                    "Günlük": 158.01,
                    "Haftalık": 168.01,
                },
                "partCount": {
                    "2977": 429
                },
                "hourlyPartCount": {
                    "0": 1,
                    "1": 26,
                    "2": 56,
                    "3": 56,
                    "4": 55,
                    "5": 56,
                    "6": 56,
                    "7": 55,
                    "8": 55,
                    "9": 21
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 1.3,
                    "Seri Üretim": 83.03,
                    "Setup": 15.17,
                    "Yarı Otomatik": 0.51
                }
            },
            "E117": {
                "mold": 0,
                "cycleMeanMold": 0,
                "cycleMeanLast10": 0,
                "cycleTimesLast10": 0,
                "Energy": {
                    "Günlük": 261.01,
                    "Haftalık": 228.01,
                },
                "partCount": {
                    "2297": 307,
                    "2535": 297
                },
                "hourlyPartCount": {
                    "0": 48,
                    "1": 67,
                    "2": 67,
                    "3": 67,
                    "4": 62,
                    "5": 13,
                    "6": 89,
                    "7": 90,
                    "8": 75,
                    "9": 34
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 2.46,
                    "Seri Üretim": 85.99,
                    "Setup": 7.06,
                    "Yarı Otomatik": 4.48
                }
            }
        },
        "Energy": {
            "Günlük": 139.67,
            "Haftalık": 146.33,
        },
        "facilityModePerc": {
            "Bekleme": 6.28,
            "Manuel": 5.678,
            "Seri Üretim": 77.407,
            "Yarı Otomatik": 4.303,
            "Setup": 6.335
        },
        "hourlyPartCount": {
            "0": 91,
            "1": 211,
            "2": 284,
            "3": 213,
            "4": 270,
            "5": 185,
            "6": 227,
            "7": 258,
            "8": 261,
            "9": 118
        },
    },
    "T2": {
        "machines": {
            "workmachines": {
                "Çalışan": 6,
                "Toplam": 14
            },
            "E059": {
                "mold": 2765,
                "cycleMeanMold": 69.36,
                "cycleMeanLast10": 69.52,
                "cycleTimesLast10": [
                    70,
                    69.25,
                    69.77,
                    70,
                    69.23,
                    69.76,
                    69.24,
                    69.76,
                    69.24,
                    69
                ],
                "Energy": {
                    "Günlük": 1486.01,
                    "Haftalık": 1512.01,
                },
                "partCount": {
                    "2765": 352
                },
                "hourlyPartCount": {
                    "0": 16,
                    "1": 23,
                    "2": 35,
                    "3": 25,
                    "4": 49,
                    "5": 53,
                    "6": 35,
                    "7": 53,
                    "8": 52,
                    "9": 20
                },
                "modePerc": {
                    "Bekleme": 2.96,
                    "Manuel": 6.09,
                    "Seri Üretim": 72.82,
                    "Yarı Otomatik": 18.13,
                    "Setup": 0.01,
                }
            },
            "E083": {
                "mold": 2888,
                "cycleMeanMold": 113.51,
                "cycleMeanLast10": 93.4,
                "cycleTimesLast10": [
                    90,
                    91,
                    90,
                    90,
                    90,
                    90,
                    97,
                    96,
                    96,
                    104
                ],
                "Energy": {
                    "Günlük": 715.01,
                    "Haftalık": 984.01,
                },
                "partCount": {
                    "2888": 232
                },
                "hourlyPartCount": {
                    "0": 31,
                    "1": 24,
                    "2": 32,
                    "3": 33,
                    "4": 18,
                    "5": 33,
                    "6": 24,
                    "7": 15,
                    "8": 17,
                    "9": 14
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 0.26,
                    "Seri Üretim": 77.16,
                    "Setup": 1.41,
                    "Yarı Otomatik": 21.17
                }
            },
            "E096": {
                "mold": 0,
                "cycleMeanMold": 0,
                "cycleMeanLast10": 0,
                "cycleTimesLast10": 0,
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {

                },
                "hourlyPartCount": {
                    "0": 1,
                    "1": 1,
                    "2": 1,
                    "3": 1,
                    "4": 1,
                    "5": 1,
                    "6": 1,
                    "7": 1,
                    "8": 1,
                    "9": 1
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 0.01,
                    "Seri Üretim": 0.01,
                    "Yarı Otomatik": 0.01,
                    "Setup": 0.01,
                }
            },
            "E104": {
                "mold": 0,
                "cycleMeanMold": 0,
                "cycleMeanLast10": 0,
                "cycleTimesLast10": 0,
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {

                },
                "hourlyPartCount": {
                    "0": 66,
                    "1": 59,
                    "2": 66,
                    "3": 65,
                    "4": 29,
                    "5": 67,
                    "6": 43,
                    "7": 50,
                    "8": 66,
                    "9": 23
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 0.01,
                    "Seri Üretim": 86.86,
                    "Setup": 0.08,
                    "Yarı Otomatik": 13.06
                }
            },
            "E109": {
                "mold": 2290,
                "cycleMeanMold": 76.06,
                "cycleMeanLast10": 76.08,
                "cycleTimesLast10": [
                    76.05,
                    76.06,
                    76.08,
                    76.08,
                    76.08,
                    76.11,
                    76.09,
                    76.15,
                    76.04,
                    76.09
                ],
                "Energy": {
                    "Günlük": 0.01,
                    "Haftalık": 0.01,
                },
                "partCount": {
                    "2290": 131
                },
                "hourlyPartCount": {
                    "0": 77,
                    "1": 49,
                    "2": 78,
                    "3": 76,
                    "4": 16,
                    "5": 47,
                    "6": 35,
                    "7": 48,
                    "8": 49,
                    "9": 18
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 1.34,
                    "Seri Üretim": 83.47,
                    "Setup": 5.33,
                    "Yarı Otomatik": 9.86
                }
            },
            "E115": {
                "mold": 2592,
                "cycleMeanMold": 54.42,
                "cycleMeanLast10": 54.43,
                "cycleTimesLast10": [
                    54.38,
                    54.45,
                    54.38,
                    54.5,
                    54.42,
                    54.38,
                    54.48,
                    54.39,
                    54.4,
                    54.5
                ],
                "Energy": {
                    "Günlük": 307.01,
                    "Haftalık": 360.01,
                },
                "partCount": {
                    "2317": 95,
                    "2592": 332
                },
                "hourlyPartCount": {
                    "0": 46,
                    "1": 28,
                    "2": 23,
                    "3": 57,
                    "4": 27,
                    "5": 52,
                    "6": 48,
                    "7": 61,
                    "8": 68,
                    "9": 25
                },
                "modePerc": {
                    "Bekleme": 0.01,
                    "Manuel": 0.24,
                    "Seri Üretim": 72.07,
                    "Setup": 5.44,
                    "Yarı Otomatik": 22.25
                }
            }
        },
        "Energy": {
            "Günlük": 836.01,
            "Haftalık": 775.01,
        },
        "facilityModePerc": {
            "Bekleme": 0.592,
            "Manuel": 1.586,
            "Seri Üretim": 78.476,
            "Yarı Otomatik": 16.894,
            "Setup": 2.452
        },
        "hourlyPartCount": {
            "0": 237,
            "1": 183,
            "2": 235,
            "3": 256,
            "4": 139,
            "5": 252,
            "6": 189,
            "7": 233,
            "8": 245,
            "9": 102
        },
    }
}];
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
        res.send({ "login": "2314" });
    } else {
        res.send({ "fail": "9845" });
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