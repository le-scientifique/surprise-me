
var db = require('../backend');
exports.login = function(req, res) {
    console.log(req.body.user)
    console.log(req.body.password)
    db.fn_get_user(req.body.user, req.body.password, function(err, results) {
        if (err) {
            console.log(err)
            res.send({
                "status": 500,
                "message": "Server Error"
            });
            return;
        } else if (results != undefined && results.length > 0) {
            result = results[0]
            var obj = {
                "verified": true,
                "name": result.user_login_id,
                "credits": result.user_credits
            }
            res.status(200).json(obj);
        } else {
            res.status(200).send({
                "message": "User not found!"
            });
            return;
        }
    });
};
exports.register = function(req, res) {
    console.log(req.body.user)
    console.log(req.body.password)
    db.pr_set_user(req.body.user, req.body.password, function(err, results) {
        if (err) {
            res.send({
                "status": 500,
                "message": "Server Error"
            });
            return;
        }
        // Respond with results as JSON
        res.status(200).send({
            "message": "Registered user successfully!"
        });
    });
};

exports.showSurprise = function(req,res){
	console.log(req.body.user)
    db.fn_get_challenges(req.body.user, function(err, results) {
        if (err) {
            console.log(err)
            res.send({
                "status": 500,
                "message": "Server Error"
            });
            return;
        } else if (results != undefined && results.length > 0) {
            result = results[Math.ceil(Math.random()*results.length - 1)]
            var obj = {
            	"id":result.challenge_id,
                "challenge": result.challenge_desc,
		        "skip_credits":5,
                "credits": result.challenge_credits
            }
            res.status(200).json(obj);
        } else {
            res.status(200).send({
                "message": "User not found!"
            });
            return;
        }
    });
}

exports.skipSurprise = function(req,res){
    console.log(req.body.id)
    console.log(req.body.user)
    db.fn_skip_challenge(req.body.user,req.body.id, function(err, results) {
        if (err) {
            console.log(err)
            res.send({
                "status": 500,
                "message": "Server Error"
            });
            return;
        } else if (results != undefined && results.length > 0) {
            result = results[Math.ceil(Math.random()*results.length - 1)]
            var obj = {
                "id":result.challenge_id,
                "challenge": result.challenge_desc,
                "skip_credits":5,
                "credits": result.challenge_credits
            }
            res.status(200).json(obj);
        } else {
            res.status(200).send({
                "message": "User not found!"
            });
            return;
        }
    });
}

exports.completeSurprise = function(req,res){
    console.log(req.body.id)
    console.log(req.body.user)
    db.fn_complete_challenge(req.body.user,req.body.id, function(err, results) {
        if (err) {
            console.log(err)
            res.send({
                "status": 500,
                "message": "Server Error"
            });
            return;
        } else if (results != undefined && results.length > 0) {
            result = results[Math.ceil(Math.random()*results.length - 1)]
            var obj = {
                "id":result.challenge_id,
                "challenge": result.challenge_desc,
                "skip_credits":5,
                "credits": result.challenge_credits
            }
            res.status(200).json(obj);
        } else {
            res.status(200).send({
                "message": "User not found!"
            });
            return;
        }
    });
}
