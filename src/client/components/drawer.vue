<template>
  <mdc-drawer class="primary-drawer" ref="drawer" toggle-on="toggle-drawer">
    <mdc-drawer-header temporary></mdc-drawer-header>
    <mdc-drawer-list dense>
      <mdc-drawer-item :to='name.path' v-for="name in names">{{name.name}}</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script>
import names from '../routes.js'
export default {
  data () {
    return {
      names
    }
  }
}
</script>
