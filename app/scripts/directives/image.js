/**
 * Created by sinisa on 30.07.14.
 */
'use strict';

angular.module('onefootballApp').directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr('src', iAttrs.fallbackSrc);
            });
        }
    };
    return fallbackSrc;
});
