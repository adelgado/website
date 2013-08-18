define [
  'views/base/view'
  'text!templates/home.hbs'
], (
  View
  template
) ->
  'use strict'

  class HomeView extends View
    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null
    
    # Automatically render after initialize.
    autoRender: true
    className: 'home'

    listen:
      'click nav': @navigationClicked

    navigationClicked: (event) ->
      console.log 'navigation was clicked'
