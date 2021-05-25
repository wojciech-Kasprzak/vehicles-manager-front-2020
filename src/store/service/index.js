const state = {
  servicing: []
}

const getters = {
  getServicings: state => state.servicing
}

const mutations = {
  setServicing(state, data) {
    state.servicing = data
  },
  appendServicing(state, data) {
    state.servicing.push(data)
  },
  removeElement(state, index) {
    state.servicing.splice(index, 1)
  }
}

const actions = {
  async fetchByCarId({ commit }, id) {
    console.log(id)
    const response = await axios.get(`/servicing/car/${id}`)
    console.log(response)
    commit('setServicing', response.data)
  },

  async add({ commit, dispatch, getters }, payload) {
    console.log(payload)
    const response = await axios.post(`/servicing`, payload)
    console.log(response.data)
    for (const key in response.data) {
      if (key == 'current' || key == 'next') {
        let d = new Date(response.data[key])
        response.data[key] = new Date(
          d.getTime() - d.getTimezoneOffset() * 60 * 1000
        )
          .toISOString()
          .split('T')[0]
      }
    }

    commit('appendServicing', response.data)

    return response.data
  },

  async edit({ commit, dispatch }, payload) {
    console.log(payload)
    const response = await axios.put(`/servicing`, payload)
    console.log(response.data)
    let d = new Date(response.data.date)
    response.data.date = new Date(
      d.getTime() - d.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split('T')[0]

    commit('appendServicing', response.data)
    return response.data
  },

  async delete({ commit, dispatch, getters }, payload) {
    console.log(payload.item)
    const response = await axios.delete(`/servicing/${payload.item.id}`)
    commit('removeElement', payload.index)
    console.log(response)
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
