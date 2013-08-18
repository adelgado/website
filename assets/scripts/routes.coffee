define ->
  'use strict'

  # The routes for the application. This module returns a function.
  # `match` is match method of the Router
  (match) ->
    match '', 'home#show'

    match 'profiles'     , 'profile#show'
    match 'profile/new'  , 'profile#add'
    match 'profile/:id'  , 'profile#display'
    match 'positions'    , 'position#show'
    match 'position/new' , 'position#add'
    match 'search'       , 'search#show'