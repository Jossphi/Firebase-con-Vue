<template lang="pug">
  v-col.pa-0(style="background: #0F0955;")
    nav.navbar
      .container
        .navbar-menu
          .navbar-start
            img.logo(src="../../public/img/icons/Group 1.png" height="60" width="200")
            router-link(to="/Descargar")
            a.navbar-item(href="descargar", style="color: #fff; margin-left: 1cm;") Descargar
          .navbar-end
            router-link(to="/Registro")
              a.navbar-item(href="#", style="color: #fff; margin-left: 13cm;") Registrarse
            router-link(to="/Login")
              a.navbar-item(href="#", style="color: #fff; margin-left:  1cm;") Iniciar sesión
</template>

<style scoped>

</style>