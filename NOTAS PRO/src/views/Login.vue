<template>
  <v-col class="pa-0" style="height: 100vh; background: #0F0955;">
    <div class="d-flex align-center justify-center" style="height: 88%;">
      <div class="card" style="background-color: transparent; border-radius: 15px; padding: 50px; text-align: center; color: #fff; margin-bottom: 300px; margin-top: 80px;">
        <div class="box" style="margin-left:390px; margin-top:-120px; padding-bottom:50px">
          <div class="group">
            <div class="overlap">
              <div class="overlap-group-wrapper">
                <div class="overlap-group">
                  <div class="rectangle"></div>
                  <div class="div"></div>
                  <img class="ellipse" alt="Ellipse" src="../../public/img/icons/Ellipse 1.png"/>
                  <div class="ellipse-2"></div>
                  <img class="logonotasconetwithe" alt="Logonotasconetwithe" src="../../public/img/icons/LogoNotasConetWithe 1.png"/>
                </div>
              </div>
              <div class="rectangle-login"></div>
              <img class="user" alt="User" src="../../public/img/icons/user_847969 1.png"/>
              <div class="text-cuenta">¿No tienes cuenta?</div>
              <a class="text-wrapper-registrar" href="/registro">Registrate!</a>
              <div class="text-wrapper-sesion">Inicia Sesión</div>
              <form @submit.prevent="Login">
                <div class="email-wrapper">
                  <label for="email"></label>
                  <input type="email" id="email" v-model="email" required placeholder="Correo Electrónico">
                </div>
                <div class="clave-wrapper">
                  <label for="password"></label>
                  <input type="password" id="password" v-model="password" required placeholder="Contraseña">
                </div>
                <div class="bo-wrapper">
                  <button type="submit">Ingresar</button>
                  <p>{{ mensaje }}</p>
                </div>
                <div class="gmail-wrapper">
                  <img src="../../public/img/icons/search_281764 1.png" height="40" width="40">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" style="background-color: #3B2387; color: #fff; text-align: center; padding: 10px; width: 100%;">
      <p>Desarrollado por: Grupo 3 - 2023</p>
    </div>
  </v-col>
</template>



<style>

</style>
