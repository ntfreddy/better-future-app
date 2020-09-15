const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

var Mailchimp = require('mailchimp-api-v3');

var mailchimp = new Mailchimp("");
const cors = require('cors')({ origin: true });


exports.subscribe = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        mailchimp.post('/lists//members', {
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
            })

    })

});