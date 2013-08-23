define [
  'controllers/base/controller'
  # 'models/position'
  'views/position-view'
], (
  Controller
  # Position
  PositionView
) ->
  'use strict'

  class PositionController extends Controller
    index: (params) ->
      # @model = new Position()
      @view = new PositionView
        # model: @model
        region: 'main'

    add: (params) ->
      # @model = new Position()
      @view = new PositionView
        # model: @model
        region: 'main'
        
    show: (params) ->
      # @model = new Position()
      @view = new PositionView
        # model: @model
        region: 'main'
