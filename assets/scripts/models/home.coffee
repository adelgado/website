define [
  'chaplin',
  'models/base/model'
], (
  Chaplin
  Model
) ->
  'use strict'

  class Home extends Model
    defaults:
      message: 'Bem-vindo!'

    # initialize: (attributes, options) ->
    #   super
    #   console.debug 'HelloWorld#initialize'
