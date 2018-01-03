angular.module('n-queens')

  .component('resultLine', {
    controller: function() {
      console.log(this);
    },
    bindings: {
      data: '<'
    },
    template: `
    <li>
      Hello
    </li>
  `
  });