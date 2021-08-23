<template>
  <div class="quota">
    <p>{{ quota?.balanceGb || 0 }} GB</p>
    <span>remaining of {{ quota?.allocatedGb || 0 }} GB</span>
  </div>
</template>

<script>
import { watch } from 'vue'
import { mapGetters, useStore } from 'vuex'

export default {
  name: 'Quota',

  props: {
    subscription: {
      type: Object,
      default: null
    }
  },

  setup (props) {
    const store = useStore()
    if (props.subscription) {
      store.dispatch('fetchQuota', JSON.stringify(props.subscription))
    }

    watch(() => props.subscription, (subscription) => {
      if (!subscription) {
        return
      }

      store.dispatch('fetchQuota', JSON.stringify(subscription))
    })
  },

  computed: {
    ...mapGetters(['quota', 'isQuotaLoading', 'currentSubscription'])
  }
}
</script>

<style
  lang="scss"
>
.quota {
  border: 1px solid black;
}
</style>
