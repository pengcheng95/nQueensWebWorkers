angular.module('n-queens')

  .component('results', {
    controller: function() {

    },
    bindings: {
      values: '<'
    },
    template: `
    <div>
      <h1> results </h1>
      {{ $ctrl.values }}
      	<ul>
	      <li ng-repeat="count in $ctrl.values">
	        {{ count.count }}
	      </li>
	    </ul>
    </div>
  `
  });