<template>
  <NuxtLink
    :to="localePath({ name: 'news-slug', params: { slug: post.slug } })"
    class="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
  >
    <!-- Image -->
    <div class="aspect-[16/9] overflow-hidden bg-zinc-100">
      <img
        v-if="cardImage"
        :src="cardImage"
        :alt="post.title"
        :class="imageOverride ? 'size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105' : 'size-full object-cover transition-transform duration-500 group-hover:scale-105'"
        loading="lazy"
      />
      <div v-else class="flex size-full items-center justify-center">
        <span class="flex size-12 items-center justify-center rounded-lg bg-bildex/10 text-lg font-bold text-bildex/30">
          B
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-5">
      <h3 class="line-clamp-2 text-base font-semibold text-zinc-800 transition-colors group-hover:text-bildex">
        {{ post.title }}
      </h3>

      <div
        v-if="post.excerpt"
        class="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-500"
        v-html="cleanExcerpt(post.excerpt)"
      />

      <div class="mt-4 flex items-center justify-between">
        <time v-if="post.date" class="text-xs text-zinc-400">
          {{ formatDate(post.date) }}
        </time>
        <span class="inline-flex items-center gap-1 text-xs font-medium text-bildex transition-all group-hover:gap-1.5">
          {{ $t('more') }}
          <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/types/content'

const props = defineProps<{
  post: Post
  imageOverride?: string
}>()

const localePath = useLocalePath()
const { locale } = useI18n()

const cardImage = computed(() => props.imageOverride ?? props.post.featuredImage?.node.sourceUrl)

function cleanExcerpt(html: string) {
  return html.replace(/<\/?p>/g, '').trim()
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'ge' ? 'ka-GE' : 'de-DE',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )
}
</script>
