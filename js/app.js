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
