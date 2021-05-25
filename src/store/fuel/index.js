const state = {
  fueling: []
}

const getters = {
  getFuelings: state => state.fueling
}

const mutations = {
  setFueling(state, data) {
    state.fueling = data
  },
  appendFueling(state, data) {
    state.fueling.push(data)
  },
  removeElement(state, index) {
    state.fueling.splice(index, 1)
  }
}

const actions = {
  async fetchByCarId({ commit }, id) {
    console.log(id)
    const response = await axios.get(`/fueling/car/${id}`)
    commit('setFueling', response.data)
  },

  async add({ commit, dispatch, getters }, payload) {
    console.log(payload)
    const response = await axios.post(`/fueling`, payload)
    console.log(response.data)
    let d = new Date(response.data.date)
    response.data.date = new Date(
      d.getTime() - d.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split('T')[0]

    response.data.averageFuelConsumption = parseFloat(
      response.data.averageFuelConsumption
    )
    commit('appendFueling', response.data)
    setTimeout(function() {
      dispatch('car/countMileage', getters.getFuelings, { root: true })
      dispatch('car/countAverageFuelConsumptionAll', getters.getFuelings, {
        root: true
      })
    }, 600)
    return response.data
  },

  async edit({ commit, dispatch }, payload) {
    console.log(payload)
    const response = await axios.put(`/fueling`, payload)
    console.log(response.data)
    let d = new Date(response.data.date)
    response.data.date = new Date(
      d.getTime() - d.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split('T')[0]

    commit('appendFueling', response.data)
    return response.data
  },

  async delete({ commit, dispatch, getters }, payload) {
    console.log(payload.item)
    const response = await axios.delete(`/fueling/${payload.item.id}`)
    commit('removeElement', payload.index)
    console.log(response)
    setTimeout(function() {
      dispatch('car/countMileage', getters.getFuelings, { root: true })
      dispatch('car/countAverageFuelConsumptionAll', getters.getFuelings, {
        root: true
      })
    }, 600)
  }
}
import axios from 'axios'
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
