angular.module('n-queens')

.component('inputline', {
	controller: function() {
	},
  bindings: {
    value: "=",
    changeValue: "<"
  },
  template: `
    <span class="search-bar>
      <div class="form-inline">
        <input class="form-control" type="text" ng-model="$ctrl.value" />
        <button class="form-button" ng-click="$ctrl.changeValue($ctrl.value)"> Compute </button>
      </div>
    </span>
  `
});