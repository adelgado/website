define [
  'chaplin'
  'routes'
], (
  Chaplin
  routes
) ->
  'use strict'

  class Application extends Chaplin.Application
    title: 'Empregos Tech RJ'

    initialize: ->
      super