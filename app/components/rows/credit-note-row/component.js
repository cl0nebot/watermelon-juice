import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['row', 'stretch'],
  classNameBindings: ['emphasize:emphasize']
});
