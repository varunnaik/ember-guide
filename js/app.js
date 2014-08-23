App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', { path: ':post_id'});	
	});
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return posts.findBy('id', params.post_id);
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		
		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [
	{
		id: '1',
		title: 'Chirashizushi',
		author: {name: "Varun"},
		date: new Date('12-27-2012'),
		excerpt: 'It is pronounced chi-rs-shi-zu-shi',
		body: 'Chirashizushi hai'
	},
	{
		id: '2',
		title: 'Zaku Soba',
		author: {name: "Varun"},
		date: new Date('12-24-2012'),
		excerpt: 'Wheat Noodles',
		body: 'Chilled with ice'
	}
	
]
