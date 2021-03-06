import Ember from "ember";

export default Ember.Mixin.create({
  click() {
    if(!this.get("disabledClick")){
      if(this.get("model")) {
        this.get("onClick")(this.get("model"));
      } else {
        this.get("onClick")();
      }
    }
  }
});
