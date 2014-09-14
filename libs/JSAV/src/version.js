/**
* Version support
* Depends on core.js
*/
(function() {
  if (typeof JSAV === "undefined") { return; }
  var theVERSION = "v0.7.0-236-g1262080";

  JSAV.version = function() {
    return theVERSION;
  };
})();
