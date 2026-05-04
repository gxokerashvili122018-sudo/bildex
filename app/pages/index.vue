<template>
  <div>

    <!-- Hero -->
    <section class="relative overflow-hidden bg-white pb-28 pt-44 lg:pb-40 lg:pt-56">

      <!-- Background image -->
      <img 
        src="https://res.cloudinary.com/dj6draudd/image/upload/v1777911012/Gemini_Generated_Image_wzj6cwzj6cwzj6cw_e5ebfcd23b.png"
        alt="Hero background"
        class="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-[64%_center]"
        loading="lazy"
        decoding="async"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/88 via-white/55 to-white/0"></div>

      <!-- Decorative blobs -->
      <div class="absolute -top-40 -right-40 size-96 rounded-full bg-bildex/20 blur-3xl" />
      <div class="absolute -bottom-20 -left-20 size-64 rounded-full bg-bildex/10 blur-3xl" />
      <div class="absolute top-1/2 -right-24 size-72 -translate-y-1/2 rounded-full bg-yellow-400/8 blur-3xl" />
      <div class="absolute -top-10 left-1/3 size-56 rounded-full bg-yellow-300/6 blur-3xl" />

      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-3xl">

          <span class="inline-block rounded-full border border-bildex/30 bg-bildex/10 px-4 py-1.5 text-sm font-medium text-bildex">
            საერთაშორისო ცენტრი
          </span>

          <h1 class="mt-6 max-w-4xl leading-tight text-zinc-900">
            <span class="block font-display text-6xl font-black tracking-normal text-zinc-950 sm:text-7xl lg:text-8xl">
              BILDEX
            </span>
            <span class="mt-4 block font-display text-lg font-bold lg:text-2xl xl:text-3xl">
              განათლების, პრაქტიკისა და კარიერული განვითარების საერთაშორისო ცენტრი
            </span>
          </h1>

          <div class="mt-10 flex flex-wrap gap-4">

            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center gap-2 rounded-xl bg-bildex px-6 py-3 text-sm font-semibold text-white hover:bg-bildex-dark"
            >
              {{ $t('contactus') }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/about')"
              class="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:border-zinc-900 hover:text-zinc-900"
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
          <p class="text-sm font-semibold tracking-wider text-bildex uppercase">Blog</p>
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
const OG_IMAGE = 'https://res.cloudinary.com/dj6draudd/image/upload/v1777908914/0_06c5a89adc.png'

useSeoMeta({
  title: 'BILDEX - განათლების, პრაქტიკისა და კარიერული განვითარების საერთაშორისო ცენტრი',
  description: 'BILDEX - განათლების, პრაქტიკისა და კარიერული განვითარების საერთაშორისო ცენტრი',
  ogTitle: 'BILDEX - განათლების, პრაქტიკისა და კარიერული განვითარების საერთაშორისო ცენტრი',
  ogDescription: 'BILDEX - განათლების, პრაქტიკისა და კარიერული განვითარების საერთაშორისო ცენტრი',
  ogImage: OG_IMAGE,
  ogUrl: url.href,
  ogType: 'website',
})

useHead({
  link: [{ rel: 'canonical', href: url.href }],
})

</script>
