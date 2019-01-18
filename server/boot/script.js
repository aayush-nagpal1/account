module.exports = function(app) {
    var ds = app.loopback.createDataSource({
      connector: require("loopback-connector-rest"),
      debug: false,
      baseURL: 'http://localhost:3000'
    });

    var User = ds.createModel('user', {
        name: Object
    });

    User.services(function(err, user) {
        console.log(err, user);
    });
}