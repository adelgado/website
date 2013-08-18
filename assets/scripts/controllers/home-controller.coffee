define [
  'controllers/base/controller'
  'models/home'
  'views/home-view'
], (
  Controller
  Home
  HomeView
) ->
  'use strict'

  class HomeController extends Controller
    show: (params) ->
      @model = new Home()
      @view = new HomeView
        model: @model
        region: 'main'
