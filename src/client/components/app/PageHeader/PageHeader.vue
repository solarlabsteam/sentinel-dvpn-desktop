<template>
  <div class="page-header">
    <slr-button
      v-if="hasStepBackButton"
      class="page-header__step-back"
      :text="true"
      :tiny="true"
      @click="onStepBack"
    >
      {{ t('action.back') }}
    </slr-button>
    <span class="m-s18-lh22 mr-2">{{ title }}</span>

    <slot />

    <account-drawer-open-button class="ml-auto" />
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { OpenButton as AccountDrawerOpenButton } from '@/client/components/app/AccountDrawer'

export default {
  name: 'PageHeader',
  components: { AccountDrawerOpenButton },

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

    const stepBack = () => {
      const prevPath = window.history?.state?.back

      if (typeof prevPath === 'string' && prevPath.length > 0) {
        router.back()
      } else {
        router.push({ name: 'home' })
      }
    }

    const onStepBack = () => {
      if (props.to) router.push(props.to)
      else stepBack()
    }

    return {
      title: computed(() => route.meta.title),
      hasStepBackButton: computed(() => route.meta.hasStepBackButton),
      onStepBack,
      t
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;

  &__step-back.slr-button {
    @include font-template(18px, 27px)
  }
}
</style>
