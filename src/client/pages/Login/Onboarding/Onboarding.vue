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

      <template v-else>
        <slr-button
          class="mr-3"
          @click="goToCreate"
        >
          {{ t('account.createNewAccount') }}
        </slr-button>

        <slr-button @click="goToImport">
          {{ t('account.restoreAccount') }}
        </slr-button>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import featureSlides from '@/client/constants/featureSlides'

export default {
  name: 'Onboarding',

  setup () {
    const router = useRouter()
    const { t } = useI18n()
    const currentSlideIndex = ref(0)
    const currentSlide = computed(() => featureSlides[currentSlideIndex.value])
    const slidesLength = featureSlides.length
    const showNextSlide = () => {
      currentSlideIndex.value++
    }

    const goToImport = () => {
      router.push({ name: 'login', query: { isImport: true } })
    }

    const goToCreate = () => {
      router.push({ name: 'login' })
    }

    return { currentSlide, currentSlideIndex, showNextSlide, slidesLength, goToImport, goToCreate, t }
  }
}
</script>

<style
  lang="scss"
  src="./Onboarding.scss"
  scoped
/>
