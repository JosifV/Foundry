var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 0;
    $scope.copper = [
        wire1 = 0,
        wire2 = 0,
        wire3 = 0,
        wire4 = 0,
        sheet1 = 0,
        sheet2 = 0,
        sheet3 = 0,
        sheet4 = 0,
        cast1 = 0,
        cast2 = 0,
        cast3 = 0,
        cast4 = 0,
        dust1 = 0,
        dust2 = 0,
        dust3 = 0,
        dust4 = 0,
    ];
    $scope.steel = [
        wire1 = 0,
        wire2 = 0,
        wire3 = 0,
        wire4 = 0,
        sheet1 = 0,
        sheet2 = 0,
        sheet3 = 0,
        sheet4 = 0,
        chain1 = 0,
        chain2 = 0,
        chain3 = 0,
        chain4 = 0,
        machine1 = 0,
        machine2 = 0,
        machine3 = 0,
        machine4 = 0,
    ];
    $scope.silver = [
        wire1 = 0,
        wire2 = 0,
        wire3 = 0,
        wire4 = 0,
        cast1 = 0,
        cast2 = 0,
        cast3 = 0,
        cast4 = 0,
        electro1 = 0,
        electro2 = 0,
        electro3 = 0,
        electro4 = 0,
        ves1 = 0,
        ves2 = 0,
        ves3 = 0,
        ves4 = 0,
        jwl1 = 0,
        jwl2 = 0,
        jwl3 = 0,
        jwl4 = 0,
    ];

    // PRICE
    $scope.copperPrice = [
        wire1 = 150,
        wire2 = 200,
        wire3 = 250,
        wire4 = 300,
        sheet1 = 200,
        sheet2 = 250,
        sheet3 = 300,
        sheet4 = 350,
        cast1 = 250,
        cast2 = 300,
        cast3 = 350,
        cast4 = 400,
        dust1 = 300,
        dust2 = 350,
        dust3 = 400,
        dust4 = 450,
    ];
    $scope.steelPrice = [
        wire1 = 150,
        wire2 = 200,
        wire3 = 250,
        wire4 = 300,
        sheet1 = 200,
        sheet2 = 250,
        sheet3 = 300,
        sheet4 = 350,
        chain1 = 250,
        chain2 = 300,
        chain3 = 350,
        chain4 = 400,
        machine1 = 300,
        machine2 = 350,
        machine3 = 400,
        machine4 = 450,
    ];
    $scope.silverPrice = [
        wire1 = 150,
        wire2 = 200,
        wire3 = 250,
        wire4 = 300,
        cast1 = 250,
        cast2 = 300,
        cast3 = 350,
        cast4 = 400,
        electro1 = 300,
        electro2 = 350,
        electro3 = 400,
        electro4 = 450,
        ves1 = 350,
        ves2 = 400,
        ves3 = 450,
        ves4 = 500,
        jwl1 = 400,
        jwl2 = 450,
        jwl3 = 500,
        jwl4 = 550,
    ];

    $scope.coppSum = function() {
        let a = ($scope.copper[0] * $scope.copperPrice[0]) + ($scope.copper[1] * $scope.copperPrice[1]) + ($scope.copper[2] * $scope.copperPrice[2]) + ($scope.copper[3] * $scope.copperPrice[3]) + ($scope.copper[4] * $scope.copperPrice[4]) + ($scope.copper[5] * $scope.copperPrice[5]) + ($scope.copper[6] * $scope.copperPrice[6]) + ($scope.copper[7] * $scope.copperPrice[7]) + ($scope.copper[8] * $scope.copperPrice[8]) + ($scope.copper[9] * $scope.copperPrice[9]) + ($scope.copper[10] * $scope.copperPrice[10]) + ($scope.copper[11] * $scope.copperPrice[11]) + ($scope.copper[12] * $scope.copperPrice[12]) + ($scope.copper[13] * $scope.copperPrice[13]) + ($scope.copper[14] * $scope.copperPrice[14]) + ($scope.copper[15] * $scope.copperPrice[15]);
        return a;
    };
    $scope.steelSum = function() {
        let a = ($scope.steel[0] * $scope.steelPrice[0]) + ($scope.steel[1] * $scope.steelPrice[1]) + ($scope.steel[2] * $scope.steelPrice[2]) + ($scope.steel[3] * $scope.steelPrice[3]) + ($scope.steel[4] * $scope.steelPrice[4]) + ($scope.steel[5] * $scope.steelPrice[5]) + ($scope.steel[6] * $scope.steelPrice[6]) + ($scope.steel[7] * $scope.steelPrice[7]) + ($scope.steel[8] * $scope.steelPrice[8]) + ($scope.steel[9] * $scope.steelPrice[9]) + ($scope.steel[10] * $scope.steelPrice[10]) + ($scope.steel[11] * $scope.steelPrice[11]) + ($scope.steel[12] * $scope.steelPrice[12]) + ($scope.steel[13] * $scope.steelPrice[13]) + ($scope.steel[14] * $scope.steelPrice[14]) + ($scope.steel[15] * $scope.steelPrice[15]);
        return a;
    };
    $scope.silverSum = function() {
        let a = ($scope.silver[0] * $scope.silverPrice[0]) + ($scope.silver[1] * $scope.silverPrice[1]) + ($scope.silver[2] * $scope.silverPrice[2]) + ($scope.silver[3] * $scope.silverPrice[3]) + ($scope.silver[4] * $scope.silverPrice[4]) + ($scope.silver[5] * $scope.silverPrice[5]) + ($scope.silver[6] * $scope.silverPrice[6]) + ($scope.silver[7] * $scope.silverPrice[7]) + ($scope.silver[8] * $scope.silverPrice[8]) + ($scope.silver[9] * $scope.silverPrice[9]) + ($scope.silver[10] * $scope.silverPrice[10]) + ($scope.silver[11] * $scope.silverPrice[11]) + ($scope.silver[12] * $scope.silverPrice[12]) + ($scope.silver[13] * $scope.silverPrice[13]) + ($scope.silver[14] * $scope.silverPrice[14]) + ($scope.silver[15] * $scope.silverPrice[15]) + ($scope.silver[16] * $scope.silverPrice[16]) + ($scope.silver[17] * $scope.silverPrice[17]) + ($scope.silver[18] * $scope.silverPrice[18]) + ($scope.silver[19] * $scope.silverPrice[19]);
        return a;
    };

});

/* (copper[0] * copperPrice[0]) + (copper[1] * copperPrice[1]) + (copper[2] * copperPrice[2]) + (copper[3] * copperPrice[3]) + (copper[4] * copperPrice[4]) + (copper[5] * copperPrice[5]) + (copper[6] * copperPrice[6]) + (copper[7] * copperPrice[7]) + (copper[8] * copperPrice[8]) + (copper[9] * copperPrice[9]) + (copper[10] * copperPrice[10]) + (copper[11] * copperPrice[11]) + (copper[12] * copperPrice[12]) + (copper[13] * copperPrice[13]) + (copper[14] * copperPrice[14]) + (copper[15] * copperPrice[15]);  */