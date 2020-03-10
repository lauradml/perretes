import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogsList: [],
    breedList: []
  },
  mutations: {
    saveDogs(state, list) {
      state.dogsList = Object.keys(list);
    },

    saveBreed(state, list) {
      state.breedList = list
    }

  },
  actions: {
    getDogs({ commit }) {
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
          console.log(response.data)
          commit('saveDogs', response.data.message);
        }).catch(() => {
          console.warn('I have failed');
        })
    },
    getBreed({ commit }) {
      axios.get(`https://dog.ceo/api/breed/akita/images`)
        .then((response) => {
          console.log(response.data)
          commit('saveBreed', response.data.message);
        }).catch(() => {
          console.warn('I have failed');
        })
    }
  },
  modules: {
  },
  // getters: {
  //   filteredList(state){
  //     return name =>
  //     state.dogsList.filter(item => item === name)
  //   }
  // },
})

