<template>
  <mdc-drawer
    ref="drawer"
    class="primary-drawer"
    toggle-on="toggle-drawer">
    <mdc-drawer-header temporary/>
    <mdc-drawer-list dense>
      <mdc-drawer-item
        v-for="name in names"
        :key="name.name"
        :to="name.path">{{ name.name }}</mdc-drawer-item>
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
