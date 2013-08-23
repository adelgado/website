define [
  'views/base/view'
  'text!templates/position.hbs'
], (
  View
  template
) ->
  'use strict'

  class PositionView extends View
    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null
    
    # Automatically render after initialize.
    autoRender: true
    className: 'position'
