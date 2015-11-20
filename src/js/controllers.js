var webctrl = angular.module('app.controllers', []);

webctrl.controllers('homeCtrl', function() {

});

webctrl.controllers('adminCtrl', function() {

});

app.controller('loginModalCtrl', function ($scope, UsersApi) {

    this.cancel = $scope.$dismiss;

    this.submit = function (email, password) {
        UsersApi.login(email, password).then(function (user) {
            $scope.$close(user);
        });
    };

});