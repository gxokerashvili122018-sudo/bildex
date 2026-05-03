<template>
  <div>

    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pb-28 pt-44 lg:pb-40 lg:pt-56">

      <!-- Background image -->
      <img 
        src="https://res.cloudinary.com/dj6draudd/image/upload/v1777754113/QR_245_8ee0315e5a.png"
        alt="Hero background"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <!-- Decorative blobs -->
      <div class="absolute -top-40 -right-40 size-96 rounded-full bg-iberia/20 blur-3xl" />
      <div class="absolute -bottom-20 -left-20 size-64 rounded-full bg-iberia/10 blur-3xl" />
      <div class="absolute top-1/2 -right-24 size-72 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-3xl" />
      <div class="absolute -top-10 left-1/3 size-56 rounded-full bg-yellow-300/6 blur-3xl" />

      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-3xl">

          <span class="inline-block rounded-full border border-iberia/30 bg-iberia/10 px-4 py-1.5 text-sm font-medium text-iberia">
            {{ $t('home2') }}
          </span>

          <h1 class="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
            {{ $t('indexTitle') }}
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200">
            {{ $t('home3') }}
          </p>

          <div class="mt-10 flex flex-wrap gap-4">

            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 rounded-xl bg-iberia px-6 py-3 text-sm font-semibold text-white hover:bg-iberia-dark"
            >
              {{ $t('contactus') }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/about')"
              class="inline-flex items-center gap-2 rounded-xl border border-zinc-500 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-white hover:text-white"
            >
              {{ $t('aboutus6') }}
            </NuxtLink>

          </div>

        </div>
      </div>

    </section>

    <!-- Latest news -->
    <section class="py-20 lg:py-28">
      <div class="container mx-auto px-4 lg:px-6">

        <div class="mb-12">
          <p class="text-sm font-semibold tracking-wider text-iberia uppercase">Blog</p>
          <h2 class="mt-2 text-3xl font-bold text-zinc-800">{{ $t('home4') }}</h2>
        </div>

        <div v-if="pending" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 3" :key="i" class="h-72 animate-pulse rounded-2xl bg-zinc-100" />
        </div>

        <div v-else-if="posts?.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PostCard
            v-for="post in posts.slice(0, 3)"
            :key="post.id"
            :post="post"
          />
        </div>

        <p v-else class="text-center text-zinc-400">
          {{ $t('no_more_news') }}
        </p>

      </div>
    </section>

    <!-- About -->
    <section class="bg-zinc-50 py-20 lg:py-28">
      <div class="container mx-auto px-4 lg:px-6">

        <h2 class="text-3xl font-bold text-zinc-800">
          {{ $t('aboutus') }}
        </h2>

        <p class="mt-6 text-zinc-600">
          {{ $t('home7') }}
        </p>

        <!-- About images -->
        <div class="mt-10 grid grid-cols-2 gap-4">
          <img src="https://res.cloudinary.com/dj6draudd/image/upload/v1771671535/kety_914387b234.jpg" class="rounded-2xl" />
          <img src="https://res.cloudinary.com/dj6draudd/image/upload/v1771671524/ani_d5ee585957.jpg" class="rounded-2xl" />
          <img src="https://res.cloudinary.com/dj6draudd/image/upload/v1771671511/Lana_602a5902aa.jpg" class="rounded-2xl" />
          <img src="https://res.cloudinary.com/dj6draudd/image/upload/v1771675264/tako_7aa23e6a3a.jpg" class="rounded-2xl" />
        </div>

      </div>
    </section>

    <!-- Partners -->
    <section class="py-20">
      <div class="container mx-auto px-4 lg:px-6">

        <div class="flex flex-wrap items-center justify-center gap-6">
          <img
            v-for="partner in partners"
            :key="partner.alt"
            :src="partner.src"
            :alt="partner.alt"
            class="h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { getHomePosts } from '~/composables/useStrapi'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: posts, pending } = await useAsyncData(
  'home-posts',
  () => getHomePosts(locale.value),
  { watch: [locale] }
)

const url = useRequestURL()
const OG_IMAGE = 'https://res.cloudinary.com/dj6draudd/image/upload/v1777752483/thumbnail_q23_5ff7c5953f.png'

useSeoMeta({
  title: t('indexTitle'),
  description: t('indexDescription'),
  ogTitle: t('indexTitle'),
  ogDescription: t('indexDescription'),
  ogImage: OG_IMAGE,
  ogUrl: url.href,
  ogType: 'website',
})

useHead({
  link: [{ rel: 'canonical', href: url.href }],
})

const partners = [
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671709/unnamed_1_652d1f197b.jpg', alt: 'Universidad' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671530/gau_en_2_7eea4ab556.png', alt: 'GAU' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/hablamos_015c8f3162.png', alt: 'Hablamos Escuela' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/logo_ua_5e1063ac71.jpg', alt: 'Universidad de Alicante' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/escudouva_a992162a1d.png', alt: 'Universidad de Valladolid' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/escola_1265e7daa7.png', alt: 'Escola de Enoturismo' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/logo_um_peq_06afad17b2.png', alt: 'Universidad de Murcia' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771675151/aia_2_ae945959a7.jpg', alt: 'AIA' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671512/UBU_f0498d57c9.png', alt: 'Universidad de Burgos' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671570/rioja_76533187a8.gif', alt: 'Universidad de La Rioja' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671571/seu_467ba4d2c9.png', alt: 'SEU' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671560/logo_ihdemu_bdc0bd50cf.jpg', alt: 'IHDEMU' },
  { src: 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671528/cyleon_829a9a9b86.png', alt: 'Cyleon' },
]
</script>