((scope, modName)->
  'use strict'

  if typeof scope is "object" and scope and typeof scope.exports is "object"
    module.exports = {}
  else if typeof define is "function" and define.amd
    define modName, [], () -> {}

  if typeof scope is "object" and scope.document and typeof scope.document is "object"
    objName = modName.toUpperCase()
    scope[objName] = scope[objName] or {}

  return
)((if (typeof window is 'object') then window else (if (typeof module is 'object') then module else undefined)), 'blade')
