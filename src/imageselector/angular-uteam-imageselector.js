uteamApp.directive('imageselector',
    function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<div class="imageselector" ng-file-drop="onFileSelect($files);" accept="image/*"><img ng-src="{{img}}" /><div class="toolbar"><button class="btn btn-orange" ng-click="webcam()"><i class="glyphicon glyphicon-camera"></i></button><button class="btn btn-orange"><i class="glyphicon glyphicon-picture"></i><input type="file" ng-file-select="onFileSelect($files)" accept="image/*" /></button></div></div>',
            /*templateUrl: 'src/imageselector/angular-uteam-imageselector.html',*/
            controller: 'imageselector-ctrl'
        };
    }
);

