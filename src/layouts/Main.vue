<template>
   <sb-shared-layout :menuItems="menuItems" :is-shared-menu="isSharedMenu">

  </sb-shared-layout>

</template>

<script>
import localMenuItems from './navDrawerMenuItems'
export default {
  name: 'Main',
  data () {
    return {
      isSharedMenu: false,
      menuItems: localMenuItems
    }
  }
}
</script>

<style></style>
