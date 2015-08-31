import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.transitionTo('weather', position.coords.latitude, position.coords.longitude);
    });
  }
});
