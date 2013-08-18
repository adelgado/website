define [
  'views/base/view'
  'text!templates/home.hbs'
], (
  View
  template
) ->
  'use strict'

  class HomeView extends View
    # Automatically render after initialize.
    autoRender: true
    className: 'home'

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null
