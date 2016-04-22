(function(ng) {

	'use strict';

    ng.module('ionos-app')

    .directive('droppable', Droppable);

    Droppable.$inject = [];

    function Droppable() {

    	var _directive = {};

		_directive.restrict 	= 'AE';
		_directive.scope 		= { drop: '=' };
		_directive.link 		= linkFn;
		_directive.controllerAs = 'dropCtrl';

		return _directive;

	}

    function linkFn($scope, $element, $attrs) {
        var el = $element[0];

        el.addEventListener('dragover', function (e) {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.classList.add('over');
            return false;
        }, false);

        el.addEventListener('dragenter', function (e) {
            this.classList.add('over');
            return false;
        }, false);

        el.addEventListener('dragleave', function (e) {
            this.classList.remove('over');
            return false;
        }, false);

        el.addEventListener('drop', function (e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }

            this.classList.remove('over');

            var item = document.getElementById(e.dataTransfer.getData('Text'));
			this.appendChild(item);

			var draggedItem = item;
			var dropZone = this;

            $scope.$apply(function() {
            	$scope.drop({
            		draggedItem: draggedItem.attributes['data-text'].value, 
            		dropZone: dropZone.attributes['data-text'].value
            	});
            });

            return false;

        }, false);
    }

})(angular);