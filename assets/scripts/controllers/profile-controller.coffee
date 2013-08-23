define [
  'controllers/base/controller'
  'models/profile'
  'views/profile-view'
], (
  Controller
  Profile
  ProfileView
) ->
  'use strict'

  class ProfileController extends Controller
    index: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'

    add: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'
        
    show: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'
