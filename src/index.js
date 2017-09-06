angular.module('n-queens', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self'
  ]);
});
