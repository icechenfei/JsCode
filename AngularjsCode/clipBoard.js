angular.module('myTestModule')
  .directive('clipBoard', clipBoard);

  function clipBoard($injector){
    return {
      restrict: 'ACEM'.
      scope: {
        data: '=clipValue'
      },
      link: function(scope, element) {
        var toastr = $injector.get('toastr');
        var local  = $injector.get('Local');
        element.on('mousedown', function(event){
          var aux = document.createElement("input");
          var content = scoep.data;
          aux.setAttribute("value", content)
          document.body.appendChild(aux);
          aux.select()
          try{
            document.execCommand("copy");
            toastr.success(local.lang("Copy Success"))
          }
          catch(err){
            toastr.warning(local.lang("Please press Ctrl/Cmd+C to copy"))
          }
          document.body.removeChild(aux);
        })
      }
    }
  }
})();
