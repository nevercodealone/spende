(function() {
  var currentScript = document.currentScript || (function() {
      var scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();

  var timestamp = (new Date()).getTime();

  var path = currentScript.src.replace(/\/[^\/]+\.js$/i, '');

  console.log(path);

  var addScript = function addScript(url, callback) {
    var script = document.createElement('script');

    if (callback) {
      script.onload = callback;
    }

    script.src = url;

    document.getElementsByTagName('head')[0].appendChild(script);
  };

  var addStylesheet = function addStylesheet(url) {
    var stylesheet = document.createElement('link');

    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.href = url;

    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  };

  document.write('<span id="nca-app"></span>');

  addStylesheet(path + '/dist/static/css/app.css?nocache=' + timestamp);

  addScript('https://js.stripe.com/v2/', function() {
    addScript(path + '/dist/static/js/manifest.js?nocache=' + timestamp, function() {
      addScript(path + '/dist/static/js/vendor.js?nocache=' + timestamp, function() {
        addScript(path + '/dist/static/js/app.js?nocache=' + timestamp);
      });
    });
  });
})();
