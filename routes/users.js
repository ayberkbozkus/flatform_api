var express = require('express');
var router = express.Router();

const users = ["ayberk.bozkus@gmail.com,", "altanckr@googlemail.com", "faruk.deniz@farplas.com", "dogukan.nefis@farplas.com", "onur@fplus.ventures", "alp.kiziltan@farplas.com", "o.akin@farplas.com"];

const fakeapi = [{
    "T1": {
        "Facility": {
            "Facility_modes": {
                "Manuel": 1,
                "Seri Üretim": 3
            },
            "total_machine": 4
        },
        "machines": {
            "E053": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "2836",
                "partCount": 429.0
            },
            "E102": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "2977",
                "partCount": 233.0
            },
            "E114": {
                "alarm": "1",
                "mode": "Manuel",
                "mold": "-",
                "partCount": 436.0
            },
            "E117": {
                "alarm": "0",
                "mode": "Seri Üretim",
                "mold": "2535",
                "partCount": 343.0
            }
        }
    },
    "T2": {
        "Facility": {
            "Facility_modes": {
                "Seri Üretim": 5,
                "Setup": 1
            },
            "total_machine": 6
        },
        "machines": {
            "E059": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "2260",
                "partCount": 138.0
            },
            "E083": {
                "alarm": "1",
                "mode": "Setup",
                "mold": "2888",
                "partCount": 595132.0
            },
            "E096": {
                "alarm": "0",
                "mode": "Seri Üretim",
                "mold": "2750",
                "partCount": 69.0
            },
            "E104": {
                "alarm": "0",
                "mode": "Seri Üretim",
                "mold": "2331",
                "partCount": 236.0
            },
            "E109": {
                "alarm": "0",
                "mode": "Seri Üretim",
                "mold": "2344",
                "partCount": 462.0
            },
            "E115": {
                "alarm": "0",
                "mode": "Seri Üretim",
                "mold": "2592",
                "partCount": 86.0
            }
        }
    },
    "T3": {
        "Facility": {
            "Facility_modes": {
                "Seri Üretim": 3
            },
            "total_machine": 4
        },
        "machines": {
            "E009": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "2422",
                "partCount": 499.0
            },
            "E018": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "2083",
                "partCount": 1815.0
            },
            "E034": {
                "alarm": "-",
                "mode": "-",
                "mold": "-",
                "partCount": "-"
            },
            "E080": {
                "alarm": "1",
                "mode": "Seri Üretim",
                "mold": "-",
                "partCount": 837.0
            }
        }
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