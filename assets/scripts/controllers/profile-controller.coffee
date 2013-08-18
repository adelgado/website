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
    show: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'

    display: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'

    add: (params) ->
      @model = new Profile()
      @view = new ProfileView
        model: @model
        region: 'main'