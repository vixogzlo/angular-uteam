uteamApp.directive('imageselector', ['$scope', '$rootScope', '$modal', function ($scope, $rootScope, $modal ) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<div class="imageselector" ng-file-drop="onFileSelect($files);" accept="image/*">    <img />    <div class="toolbar">        <button class="btn btn-orange" ng-click="webcam()">            <i class="glyphicon glyphicon-camera"></i>        </button>        <button class="btn btn-orange">            <i class="glyphicon glyphicon-picture"></i>            <input type="file" ng-file-select="onFileSelect($files)" accept="image/*" />        </button>    </div></div>',
            /*templateUrl: 'src/imageselector/angular-uteam-imageselector.html',*/
            controller: function ($scope, $rootScope, $modal) {
                var captureImage = function (image) {
                    var reader = new FileReader();

                    reader.readAsDataURL(image);
                    reader.onloadend = function () {
                        $rootScope.img = reader.result;
                        $rootScope.showImage();
                    };
                };

                $scope.onFileSelect = function (files) {
                    captureImage(files[0]);
                };

                $scope.webcam = function () {
                    $modal.open({
                        template: '<div class="modal-header">    <button type="button" class="close" data-dismiss="modal" aria-hidden="true" ng-click="close()">&times;</button>    <h4 class="modal-title">TOMA TU FOTO</h4></div><div class="modal-body">    <div id="takePhoto" class="modal-container">        <webcam></webcam>    </div></div><div class="modal-footer">    <div class="pull-right">        <button type="button" class="btn btn-orange" ng-click="select()">Aceptar</button>        <button type="button" class="btn btn-orange" ng-click="close()">Cancelar</button>    </div></div>',
                        /*templateUrl: 'src/webcam/angular-uteam-webcam.html',*/
                        controller: 'webcam-ctrl',
                        size: 'sm' /* lg */
                    });
                };
            }
        };
    }
]);
