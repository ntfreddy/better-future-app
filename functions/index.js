const functions = require('firebase-functions');

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


var hubspotSubmit = require('hubspot-form-submit');
var hubspotId = functions.config().hubspot.hubspotid;
var hubspotFormIdRegistration = functions.config().hubspot.hubspotformidregistration;
var hubspotFormIdPrayerRequest = functions.config().hubspot.hubspotformidprayerrequest;
var hubspotFormIdBibleStudy = functions.config().hubspot.hubspotformidbiblestudy;
var hubspotFormIdAskQuestion = functions.config().hubspot.hubspotformidaskquestion;

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

exports.register = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        hubspotSubmit(hubspotId, hubspotFormIdRegistration, {
                email: request.body.email,
                firstname: request.body.firstname,
            })
            .then(function(results) {
                return response.json(results);
            })
            .catch(function(err) {
                response.json(err);
            });
    });
});

exports.sendPrayerRequest = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        hubspotSubmit(hubspotId, hubspotFormIdPrayerRequest, {
                email: request.body.email,
                firstname: request.body.firstname,
                message: request.body.message,
            })
            .then(function(results) {
                return response.json(results);
            })
            .catch(function(err) {
                response.json(err);
            });
    })
});

exports.sendBibleStudy = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        hubspotSubmit(hubspotId, hubspotFormIdBibleStudy, {
                email: request.body.email,
                firstname: request.body.firstname,
                message: request.body.message,
            })
            .then(function(results) {
                return response.json(results);
            })
            .catch(function(err) {
                response.json(err);
            });
    });
});

exports.sendAskQuestion = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        hubspotSubmit(hubspotId, hubspotFormIdAskQuestion, {
                email: request.body.email,
                firstname: request.body.firstname,
                message: request.body.message,
            })
            .then(function(results) {
                return response.json(results);
            })
            .catch(function(err) {
                response.json(err);
            });
    });
});