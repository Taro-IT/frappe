const { concat, mergeDeepWith, reduce } = require('ramda')

const base = require('../../../tailwind.config')

const deepMerge = reduce(mergeDeepWith(concat), {})

module.exports = deepMerge([
  base, 
  { 

  }

])