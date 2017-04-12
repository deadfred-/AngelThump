'use strict';

// users-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
	const mongooseClient = app.get('mongooseClient');
	const users = new mongooseClient.Schema({
  
	email: {type: String, unique: true},
	username: { type: String, unique: true },
	password: { type: String },
	streamkey: { type: String, unique: true},
	verified_email: { type: Boolean, 'default': false},
	banned:    {type: Boolean, 'default': false},
	patreon: {type: Boolean, 'default': false},

	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

  return mongooseClient.model('users', users);
};
