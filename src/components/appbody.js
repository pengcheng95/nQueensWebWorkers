angular.module('n-queens')

.component('appbody', {
	// controller: function(queen, $scope) {
 //    $scope.value = '';
 //    $scope.values = [];
 //    this.changeValue = (val) => {
 //      $scope.value = val;

 //    };
 //    $scope.$watch("value",function(newValue,oldValue) {
 //      console.log("testing");
 //      $scope.values = queen.runQueen($scope.value);
 //    });

	// },
  controller: function(queen, $scope) {
    this.value = '';
    $scope.values = [];
    $scope.total = 0;
    $scope.time = 0;
    this.changeValue = function(val) {
      queen.runQueen.call(this, val, this.setValues);
      this.value = '';
    };
    this.setValues = function(vals) {
      $scope.values = vals;
      $scope.total = _.reduce(vals, function(sum, n) {
        return sum += n.count;
      }, 0);
      $scope.time = _.reduce(vals, function(sum, n) {
        return sum += n.time;
      }, 0);
      $scope.$apply();
    };
    this.changeValue = this.changeValue.bind(this);
  },
  bindings: {

  },
  template: `
    <div id="appbody">
      <inputline value="$ctrl.value" change-value="$ctrl.changeValue"> </inputline>

      <results values="values" total="total" time="time"> </results>

    </div>
  `
});