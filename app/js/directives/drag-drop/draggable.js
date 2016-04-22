(function(ng) {

	'use strict';

    ng.module('ionos-app')

    .directive('draggable', Draggable);

    Draggable.$inject = [];

    function Draggable() {

    	var _directive = {};

		_directive.restrict 	= 'AE';
		_directive.scope 		= {};
		_directive.link 		= linkFn;
		_directive.controllerAs = 'dragCtrl';

		return _directive;

	}

    function linkFn($scope, $element, $attrs) {
        var el = $element[0];
        el.draggable = true;

        el.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('drag');
            return false;
        }, false);

        el.addEventListener('dragend', function (e) {
            this.classList.remove('drag');
            return false;
        }, false);
    }

})(angular);