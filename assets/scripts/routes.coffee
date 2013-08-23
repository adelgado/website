define ->
  'use strict'

  # The routes for the application. This module returns a function.
  # `match` is match method of the Router
  (match) ->
    match '', 'home#show'

    match 'profiles'    , 'profile#index'
    match 'profile/new' , 'profile#add'
    match 'profile/:id' , 'profile#show'

    match 'positions'    , 'position#index'
    match 'position/new' , 'position#add'

    match 'search', 'search#index'