angular.module('n-queens')

.component('header', {
	controller: function() {

	},
  bindings: {

  },
  template: `
    <div id="header">
    
        <h2> N Queens with Web Workers </h2>
        <br>

        <h5> Short description of N Queens. </h5>

        <h5> How to improve speed of calculations </h5>

        <h5> Speed improves even faster with web workers. </h5>


    </div>
  `
});