'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('onefootballApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a player we selected to the scope', function () {
    expect(scope.done).not.toBeDefined();
  });
});
