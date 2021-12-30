<template>
  <div class="qr-code">
    <canvas
      id="qr"
      ref="qr"
    />
  </div>
</template>

<script>
import QRious from 'qrious'
import { onMounted, ref, watch } from 'vue'

export default {
  name: 'QrCode',

  props: {
    value: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },

  setup (props) {
    const qr = ref(null)

    function draw () {
      // eslint-disable-next-line no-new
      new QRious({
        element: qr.value,
        value: props.value,
        size: props.size,
        background: 'transparent',
        foreground: '#edf4ff'
      })
    }

    onMounted(() => {
      if (props.value) draw()

      watch(() => props.value, () => {
        draw()
      })
    })

    return {
      qr
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.qr-code {
  display: inline-flex;
  border-radius: 15px;
}
</style>
