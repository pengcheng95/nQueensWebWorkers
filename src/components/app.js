angular.module('n-queens')

.component('app', {
	controller: function() {
    this.test = 'test';
    console.log(this);
	},
  bindings: {

  },
  template: `
    <div>

      <header> </header>

      <appbody> </appbody>

    </div>
  `
});