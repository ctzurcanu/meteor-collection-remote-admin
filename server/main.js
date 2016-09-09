import { Meteor } from 'meteor/meteor';
import { Picker } from 'meteor/meteorhacks:picker';

Meteor.startup(() => {
  // code to run on server at startup
  Post.insert({title: "Ulysses", author: "James Joyce",content:"some summary"}, function(error, result) {
	  //The insert will fail, error will be set,
	  //and result will be undefined or false because "copies" is required.
	  //
	  //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().validationErrors()
	});
});

Picker.route('/api/', function(params, req, res, next) {
  var post = Post.find().fetch();
  console.log(JSON.stringify(post))
  res.end(JSON.stringify(post));
});
