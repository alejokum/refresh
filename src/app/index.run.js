(function() {
  'use strict';

  angular
    .module('recarga')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
