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
import { onMounted, ref } from 'vue'

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

    onMounted(function () {
      // eslint-disable-next-line no-new
      new QRious({
        element: document.getElementById('qr'),
        value: props.value,
        size: props.size
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
  padding: 18px;
  background-color: $slr__clr-white;
}
</style>
