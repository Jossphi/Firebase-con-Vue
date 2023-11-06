<template lang="pug">
<div class="v-col pa-0" style="background: #0F0955; height: 101vh;">
  <div class="card" style="background-color: transparent; border-radius: 15px; padding: 50px; text-align: center; color: #fff; margin-bottom: 400px; margin-top: 0px; padding-bottom: 00px; margin-right: 100px;">
    <div class="box" style="margin-left: 390px; margin-top: -50px; padding-bottom: 50px;">
      <div class="group">
        <div class="overlap">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="rectangle-fondo"></div>
              <div class="div-fondo">
                <img class="ellipse" alt="Ellipse" src="../../public/img/icons/Ellipse 1.png" />
              </div>
              <div class="ellipse-2">
                <img class="logonotasconetwithe" alt="Logonotasconetwithe" src="../../public/img/icons/LogoNotasConetWithe 1.png" />
              </div>
              <div class="rectangle-registrar"></div>
              <img class="user-registrar" alt="User" src="../../public/img/icons/user_847969 1.png" />
              <div class="re-wrapper">
                <h2>Registrarse</h2>
              </div>
              <form v-on:submit.prevent="registrar">
                <div class="form-group-nombre">
                  <label for="nombre"></label>
                  <input class="input" type="text" placeholder="Nombres" v-model="name" />
                </div>
                <div class="form-group-apellido">
                  <label for="apellido"></label>
                  <input type="text" id="apellido" v-model="apellido" placeholder="Apellido" required />
                </div>
                <div class="form-group-email">
                  <label for="email"></label>
                  <input type="email" id="email" v-model="email" placeholder="Correo" required />
                </div>
                <div class="form-group-clave">
                  <label for="password"></label>
                  <input type="password" id="password" v-model="password" placeholder="Contraseña" required />
                </div>
                <div class="form-group-confirmar">
                  <label for="confirm-password"></label>
                  <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirmar Contraseña" required />
                </div>
                <div class="form-group-registrar">
                  <button type="submit">Registrarse</button>
                </div>
                <div class="gmail-wrapper-registrar">
                  <img src="../../public/img/icons/search_281764 1.png" height="40" width="40" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" style="background-color: #3B2387; color: #fff; text-align: center; padding: 10px; width: 100%; margin-top: 280px;">
      <p>Desarrollado por: Grupo 3 - 2023</p>
    </div>
  </div>
</div>

</template>
  
<script>


export default {
  data() {
    return {
      name: '',
      apellido: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  },
  methods: {
    registrar() {
      this.error = '';


      if (!this.name || !this.email || !this.password) {
        this.error = 'Todos los campos son requeridos';
        return;
      }

    
      this.$store.dispatch('registrarUsuario', {
        email: this.email,
        password: this.password,
        otherUserData: {
          nombre: this.name,
          apellido: this.apellido
        }
      })
      .then(() => {

      })
      .catch((error) => {
        this.error = error.message;
    }
  }
};
</script>

