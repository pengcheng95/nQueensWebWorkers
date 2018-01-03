angular.module('n-queens')

  .component('results', {
    controller: function() {

    },
    bindings: {
      values: '<',
      total: '<'
    },
    template: `
    <div class="resultDiv">
      <h1> results </h1>
      <ul>
	      <li ng-repeat="count in $ctrl.values track by $index" class="resultLine">
          <p> Worker {{$index + 1}} found {{ count.count }} solutions in {{ count.time }} ms </p>
        </li>
	    </ul>
      {{$ctrl.total}}
    </div>
  `
  });


  //<resultLine ng-repeat="count in $ctrl.values" data="count" />