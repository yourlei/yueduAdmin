var mongoose = require('mongoose'),
	  Schema = mongoose.Schema,
		bcrypt = require('bcrypt-nodejs'),
		SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	name: {
		unique: true,
		type: String
	},
	passwrod: String,
	role: {
		type: Number,
		default: 0
	},
	avatart: {
		type: String,
		default: '/images/avatart.jpg'
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// define static method
UserSchema.pre('save', function (next) {
	var _user = this,
			passwd =  this.passwrod;

	if(this.isNew)
	{
		this.meta.createAt = this.meta.updateAt =  Date.now();
	}
	else
	{
		this.meta.updateAt = Date.now();
	}
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if(err) return next(err);

		bcrypt.hash(_user.passwrod, null, null, function(err, hash) {
			if (err) return next(err);

			_user.passwrod = hash;
			next();
		});
	});
});

UserSchema.methods = {
	comparePassword: function (_password, cb) {
		bcrypt.compare(_password, this.passwrod, function (err, isMatch) {
			if (err) return cb(err);
			cb(null, isMatch);
		});
	}
};

// define static methods
UserSchema.static = {
	fetch: function (cb) {
		return this.find()
					 .sort('meta.updateAt')
					 .exec(cb);
	},
	findById: function (id, cb) {
		return this.findOne({_id: id})
		       .exec(cb);
	}
}

module.exports = UserSchema;