import Vue from 'vue'
import filters from '~/utils/filters'

Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})
