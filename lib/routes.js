FlowRouter.route('/', {
	name: 'home',
	action() {
    GAnalytics.pagview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
    GAnalytics.pagview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});
