<template>
  <div class="onboarding">
    <br>

    <div class="onboarding__main">
      <br>
      <img
        class="onboarding__image"
        width="276"
        height="276"
        :src="`/assets/images/${currentSlide.image}.svg`"
        :alt="currentSlide.image"
      >

      <div class="onboarding__article">
        <div class="onboarding__title">
          {{ currentSlide.title }}
        </div>
        <div class="onboarding__description">
          {{ currentSlide.description }}
        </div>

        <div class="onboarding__slide-pointer-group">
          <div
            v-for="index in slidesLength"
            :key="index"
            class="onboarding__slide-pointer"
            :class="{'onboarding__slide-pointer--active': index - 1 === currentSlideIndex}"
          />
        </div>
      </div>
      <br>
    </div>

    <div class="onboarding__buttons">
      <slr-button
        v-if="currentSlideIndex !== 2"
        class="onboarding__next-button"
        @click="showNextSlide"
      >
        <template #icon>
          <slr-icon
            :width="18"
            :height="15"
            :icon="'arrow-right'"
          />
        </template>
      </slr-button>

      <login-form v-else />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import featureSlides from '@/client/constants/featureSlides'
import LoginForm from '@/client/pages/Login/LoginForm'

export default {
  name: 'Onboarding',

  components: {
    LoginForm
  },

  setup () {
    const currentSlideIndex = ref(0)
    const currentSlide = computed(() => featureSlides[currentSlideIndex.value])
    const slidesLength = featureSlides.length
    const showNextSlide = () => {
      currentSlideIndex.value++
    }

    return { currentSlide, currentSlideIndex, showNextSlide, slidesLength }
  }
}
</script>

<style
  lang="scss"
  src="./Onboarding.scss"
  scoped
/>
