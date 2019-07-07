import Vue from 'vue';
import filters from '@/filters'

Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})