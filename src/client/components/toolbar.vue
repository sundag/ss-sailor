<template>
  <mdc-toolbar
    waterfall
    class="main-toolbar">
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"/>
        <mdc-toolbar-title @click="$router.push('/')">{{ $t('message.appTitle') }}</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section
        shrink-to-fit
        align-end>
        <mdc-toolbar-icon
          href="https://github.com/sundag/ss-sailor"
          target="_blank">
          <img :src="githubLogo" >
        </mdc-toolbar-icon>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
</template>

<script>
import githubLogo from '../asserts/github-logo.svg'
export default {
    data () {
        return {
            githubLogo
        }
    }
}
</script>

<style>
.vue-avatar {
  width: 32px;
  height: 32px;
}
.vue-avatar img {
  border-radius: 32px;
  background-color: #F0F0F0;
}
</style>
