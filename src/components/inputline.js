angular.module('n-queens')

.component('inputline', {
	controller: function() {
	},
  bindings: {
    value: "=",
    changeValue: "<"

  },
  template: `
    <div>

      <div class="search-bar form-inline">
        <input class="form-control" type="text" ng-model="$ctrl.value" />
        <button ng-click="$ctrl.changeValue($ctrl.value)"> Compute </button>
      </div>

    </div>
  `
});