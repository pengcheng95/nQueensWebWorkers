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
  controller: function(queen) {
    this.value = '';
    this.values = [];
    this.changeValue = (val) => {
      this.value = val;
      console.log("test");
      this.values = queen.runQueen(val);
      this.value = '';
      console.log(this);
    };
  },
  bindings: {

  },
  // template: `
  //   <div id="appbody">
  //     <inputline value="value" change-value="$ctrl.changeValue"> </inputline>

  //     <results values="values"> </results>

  //   </div>
  // `
  template: `
    <div id="appbody">
      <inputline value="$ctrl.value" change-value="$ctrl.changeValue"> </inputline>

      <results values="$ctrl.values"> </results>

    </div>
  `
});