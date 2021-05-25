const state = {
  cars: [],
  car: [],
  report: {}
}

const getters = {
  getCars: state => state.cars,
  getCar: state => state.car,
  getFuelings: state => state.car.Fuelings,
  getReport: state => state.report
}

const mutations = {
  setCars(state, data) {
    state.cars = data
  },
  appendCars(state, data) {
    state.cars.push(data)
  },
  setMileage(state, data) {
    state.car.milage = data
  },
  setAverageFuelConsumption(state, data) {
    state.car.averageFuelConsumption = data
  },
  setCar(state, data) {
    state.car = data
  },
  setReport(state, data) {
    state.report = data
  }
}

const actions = {
  async countMileage({ commit, getters }, fuelings) {
    let car = getters.getCar
    let sum = 0
    fuelings.forEach(elem => {
      sum = sum + parseFloat(elem.kilometers)
    })
    sum = parseFloat(sum) + parseFloat(car.startMileage)
    const response = await axios.put(`/car/${car.id}`, { milage: sum })

    commit('setMileage', sum)
  },

  async countAverageFuelConsumptionAll({ commit, getters }, fuelings) {
    let car = getters.getCar
    let sum = 0
    console.log(fuelings)
    fuelings.forEach(elem => {
      sum = sum + parseInt(elem.averageFuelConsumption)
    })
    console.log(fuelings.length)
    let ave = parseInt(sum) / fuelings.length
    console.log('ave -> ', ave)
    const response = await axios.put(`/car/${car.id}`, {
      averageFuelConsumption: ave
    })

    commit('setAverageFuelConsumption', ave)
  },

  async fetchReport({ commit }, payload) {
    console.log(payload)
    const response = await axios.post(`/car/report/${payload.id}`, payload.data)
    console.log(response.data)
    commit('setReport', response.data)
  },

  async fetchCars({ commit }) {
    const response = await axios.get('/cars')
    console.log(response.data)
    commit('setCars', response.data)
  },

  async fetchCarById({ commit }, id) {
    console.log(id)
    const response = await axios.get(`/car/${id}`)
    console.log(response.data)
    commit('setCar', response.data)
  },

  async add({ commit, dispatch }, payload) {
    console.log('cccc')
    console.log(typeof payload.milage)
    console.log(payload.milage)
    delete payload.mileage
    // payload.milage = parseFloat(
    //   payload.milage.replace(',', '.').replace(' ', '')
    // )
    // payload.mileage = parseInt(payload.mileage)
    // payload.dateRegistration = payload.dateRegistration.replaceAll('/', '-')
    console.log(payload)

    const response = await axios.post(`/car`, payload)
    console.log(response.data)
    let d = new Date(response.data.dateRegistration)
    response.data.dateRegistration = new Date(
      d.getTime() - d.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split('T')[0]
    // dispatch('fetchCars')
    commit('appendCars', response.data)
  },

  async dalete({ commit, dispatch }, id) {
    const response = await axios.delete(`/car/${id}`)
    console.log(response.data)
    dispatch('fetchCars')
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
