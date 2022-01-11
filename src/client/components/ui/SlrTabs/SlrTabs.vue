<template>
  <div class="slr-tabs">
    <ul class="slr-tabs__nav">
      <li
        v-for="(tab, i) in tabs"
        :key="tab.props.title"
        class="slr-tabs__nav-item"
        :class="{'slr-tabs__nav-item--active': selectedIndex === i}"
        @click="changeTab(i)"
      >
        {{ tab.props.title }}
      </li>
    </ul>
    <div class="slr-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, provide, toRefs, onBeforeMount, onBeforeUpdate, onMounted } from 'vue'

export default {
  name: 'SlrTabs',

  props: {
    defaultActiveTab: {
      type: [Number],
      default: 0
    }
  },

  emits: ['change'],

  setup (props, { slots, emit }) {
    const state = reactive({
      selectedIndex: 0,
      tabs: [],
      count: 0
    })

    provide('TabsProvider', state)

    const selectTab = i => {
      state.selectedIndex = i
    }

    const changeTab = i => {
      selectTab(i)
      emit('change', i)
    }

    const filterTabs = () => {
      if (slots.default) {
        state.tabs = slots.default().filter((child) => child.type.name === 'SlrTab')
      }
    }

    onBeforeMount(() => filterTabs())
    onBeforeUpdate(() => filterTabs())
    onMounted(() => selectTab(props.defaultActiveTab))

    return { ...toRefs(state), changeTab }
  }
}
</script>

<style
  lang="scss"
  src="./SlrTabs.scss"
  scoped
/>
