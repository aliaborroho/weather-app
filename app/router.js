import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('weather', {path: '/weather/:lat/:lon'});

  this.route('index', function() {
  });
});

export default Router;

