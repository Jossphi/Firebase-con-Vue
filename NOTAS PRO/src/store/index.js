import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null
  },
  mutations: {
    SET_USUARIO(state, usuario) {
      state.usuario = usuario
    }
  },
  actions: {
    registrarUsuario(context, { email, password, otherUserData }) {

      const usuario = {
        nombre: otherUserData.nombre,

      }

      context.commit('SET_USUARIO', usuario)
    }
  },
  modules: {

  }
})
