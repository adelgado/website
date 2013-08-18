// Generated by CoffeeScript 1.6.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['controllers/base/controller', 'models/home', 'views/home-view'], function(Controller, Home, HomeView) {
  'use strict';
  var HomeController, _ref;
  return HomeController = (function(_super) {
    __extends(HomeController, _super);

    function HomeController() {
      _ref = HomeController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HomeController.prototype.show = function(params) {
      this.model = new Home();
      return this.view = new HomeView({
        model: this.model,
        region: 'main'
      });
    };

    return HomeController;

  })(Controller);
});