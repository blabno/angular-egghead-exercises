(function ()
{
  'use strict';
  var moneyApp = angular.module('moneyApp', []);

  moneyApp.directive('money', function ()
  {
    return {
      restrict: 'E',

      scope: {
        forWhat: '@', howMany: '='
      },
      template: '<label for="devote" class="label label-default">How much to devote</label>\n<select ng-model="howMany" id="devote" ng-options="proposal for proposal in proposals" class="form-control form-group"></select>\n<div class="text-center">\n    <button class="btn btn-default">{{forWhat || "For poor pets"}}</button> \n    <div ng-show="isContentVisible">\n        <!--here display values-->\n    </div>\n</div>',
      link: function (scope)
      {
        scope.proposals = [10, 20, 30, 40, 50, 60];
        scope.howMany = scope.proposals[0];
        scope.isContentVisible = false;
        scope.takeMyMoney = 'Shut up and take my money!';
      }
    };
  });
})();