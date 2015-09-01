import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params);
    return Ember.$.ajax(`http://alia-nerdvana.herokuapp.com/${params.lat},${params.lon}`);
  }
});
