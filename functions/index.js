const functions = require('firebase-functions');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});*/


const cors = require('cors')({ origin: true });

var appKey = functions.config().mailchimp.key;
var audienceId = functions.config().mailchimp.id;

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(appKey);


exports.subscribe = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        mailchimp.post('/lists/' + audienceId + '/members ', {
                email_address: request.body.email,
                merge_fields: {
                    "FNAME": request.body.fname,
                    "LNAME": request.body.lname
                },
                status: "subscribed",
                tags: [request.body.tag]
            })
            .then(function(results) {
                return response.json(results);
            })
            .catch(function(err) {
                response.json(err);
            });
    });
});


var hubspotId = functions.config().hubspot.hubspotid;
var hubspotFormIdRegistration = functions.config().hubspot.hubspotformidregistration;
var hubspotFormIdPrayerRequest = functions.config().hubspot.hubspotformidprayerrequest;
var hubspotFormIdBibleStudy = functions.config().hubspot.hubspotformidbiblestudy;
var hubspotFormIdAskQuestion = functions.config().hubspot.hubspotformidaskquestion;


// XMLHttpRequest wrapper using callbacks
let HubSpot = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else if (xhr.readyState === 4) {
                reject(xhr.responseText);
            }
        };
        xhr.onerror = () => reject(xhr.responseText);
        xhr.send(JSON.stringify(obj.body));
    });
};


exports.register = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        HubSpot({
                url: 'https://api.hsforms.com/submissions/v3/integration/submit/' + hubspotId + '/' + hubspotFormIdRegistration,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "fields": [{
                            "name": "email",
                            "value": request.body.email
                        },
                        {
                            "name": "firstname",
                            "value": request.body.firstname
                        }
                    ]
                }
            })
            .then(results => {
                return response.json(results);
            })
            .catch(err => {
                response.json(err);
            });
    });
});

exports.sendPrayerRequest = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        HubSpot({
                url: 'https://api.hsforms.com/submissions/v3/integration/submit/' + hubspotId + '/' + hubspotFormIdPrayerRequest,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "fields": [{
                            "name": "email",
                            "value": request.body.email
                        },
                        {
                            "name": "firstname",
                            "value": request.body.firstname
                        },
                        {
                            "name": "message",
                            "value": request.body.message
                        }
                    ]
                }
            })
            .then(results => {
                return response.json(results);
            })
            .catch(err => {
                response.json(err);
            });
    });
});

exports.sendBibleStudy = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        HubSpot({
                url: 'https://api.hsforms.com/submissions/v3/integration/submit/' + hubspotId + '/' + hubspotFormIdBibleStudy,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "fields": [{
                            "name": "email",
                            "value": request.body.email
                        },
                        {
                            "name": "firstname",
                            "value": request.body.firstname
                        },
                        {
                            "name": "message",
                            "value": request.body.message
                        }
                    ]
                }
            })
            .then(results => {
                return response.json(results);
            })
            .catch(err => {
                response.json(err);
            });
    });
});

exports.sendAskQuestion = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        HubSpot({
                url: 'https://api.hsforms.com/submissions/v3/integration/submit/' + hubspotId + '/' + hubspotFormIdAskQuestion,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "fields": [{
                            "name": "email",
                            "value": request.body.email
                        },
                        {
                            "name": "firstname",
                            "value": request.body.firstname
                        },
                        {
                            "name": "message",
                            "value": request.body.message
                        }
                    ]
                }
            })
            .then(results => {
                return response.json(results);
            })
            .catch(err => {
                response.json(err);
            });
    });
});