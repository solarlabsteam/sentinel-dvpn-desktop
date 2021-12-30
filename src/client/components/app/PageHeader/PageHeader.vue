<template>
  <div class="page-header">
    <slr-button
      v-if="hasStepBackButton"
      class="page-header__step-back"
      :text="true"
      :tiny="true"
      @click="stepBack"
    >
      {{ t('action.back') }}
    </slr-button>
    <span class="m-s18-lh22">{{ title }}</span>

    <slr-button
      :text="true"
      :tiny="true"
      @click="openAccountDrawer"
    >
      <template #icon>
        <slr-icon
          :size="32"
          :icon="'account'"
        />
      </template>
    </slr-button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import useAccount from '@/client/hooks/useAccount'

export default {
  name: 'PageHeader',

  props: {
    to: {
      type: Object,
      default: null
    }
  },

  setup (props) {
    const route = useRoute()
    const router = useRouter()
    const { t } = useI18n()
    const { openAccountDrawer } = useAccount()

    const stepBack = () => {
      if (props.to) {
        router.push(props.to)
      } else {
        router.push({ path: window.history.state.back })
      }
    }

    return {
      title: computed(() => route.meta.title),
      hasStepBackButton: computed(() => route.meta.hasStepBackButton),
      stepBack,
      t,
      openAccountDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;

  &__step-back.slr-button {
    color: $slr__clr-light-blue-2;
    @include font-template(18px, 27px)
  }
}
</style>
