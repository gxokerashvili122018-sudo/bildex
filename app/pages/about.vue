<template>
  <div>

    <PageHero
      :eyebrow="$t('aboutus')"
      :title="$t('aboutus7')"
      :subtitle="$t('aboutus1_html')"
      centered
    />

    <!-- Mission & origin — 2 columns -->
    <section class="py-12 lg:py-20 xl:py-28">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

          <!-- Left: Mission -->
          <div>
            <div class="flex size-12 items-center justify-center rounded-2xl bg-bildex/10">
              <svg class="size-6 text-bildex" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
            </div>
            <h2 class="mt-5 text-xl font-bold text-zinc-800 lg:text-2xl">
              {{ locale === 'ge' ? 'ჩვენი მისია' : 'Unsere Mission' }}
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-zinc-500 lg:text-base">{{ $t('aboutus2') }}</p>
          </div>

          <!-- Right: Origin -->
          <div>
            <div class="flex size-12 items-center justify-center rounded-2xl bg-bildex/10">
              <svg class="size-6 text-bildex" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h2 class="mt-5 text-xl font-bold text-zinc-800 lg:text-2xl">
              {{ locale === 'ge' ? 'ჩვენი ისტორია' : 'Unsere Geschichte' }}
            </h2>
            <div class="mt-4 text-sm leading-relaxed text-zinc-500 lg:text-base" v-html="$t('aboutus1_html')" />
          </div>

        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-zinc-50 py-20 lg:py-28">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="mb-14 text-center">
          <p class="text-sm font-semibold tracking-wider text-bildex uppercase">
            {{ locale === 'ge' ? 'ჩვენი ღირებულებები' : 'Was uns ausmacht' }}
          </p>
          <h2 class="mt-3 text-3xl font-bold text-zinc-800">
            {{ locale === 'ge' ? 'ჩვენი ფასეულობები' : 'Unsere Werte' }}
          </h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="value in values"
            :key="value.titleDe"
            class="rounded-2xl bg-white p-8"
          >
            <div class="flex size-11 items-center justify-center rounded-xl bg-bildex/10">
              <component :is="value.icon" class="size-5 text-bildex" />
            </div>
            <h3 class="mt-5 font-semibold text-zinc-800">
              {{ locale === 'ge' ? value.titleGe : value.titleDe }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-zinc-500">
              {{ locale === 'ge' ? value.descGe : value.descDe }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Full values text -->
    <section class="py-20 lg:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-semibold tracking-wider text-bildex uppercase">
            {{ locale === 'ge' ? 'დეტალურად' : 'Im Detail' }}
          </p>
          <div
            class="mt-5 text-lg leading-relaxed text-zinc-500"
            v-html="$t('aboutus3_html')"
          />
        </div>
      </div>
    </section>

    <!-- Team CTA -->
    <section class="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-20">
      <div class="absolute -left-40 -top-40 size-96 rounded-full bg-bildex/15 blur-3xl" />
      <div class="absolute -bottom-20 -right-20 size-64 rounded-full bg-bildex/10 blur-3xl" />
      <div class="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/6 blur-3xl" />
      <div class="container relative mx-auto px-4 text-center lg:px-6">
        <h2 class="text-3xl font-bold text-white">{{ $t('aboutus4') }}</h2>
        <p class="mt-4 text-lg text-zinc-400">{{ $t('aboutus5') }}</p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink
            :to="localePath('/our-team')"
            class="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-100"
          >
            {{ $t('ourteam') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white"
          >
            {{ $t('contactus') }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const { t, locale } = useI18n()
const localePath = useLocalePath()

const url = useRequestURL()
const OG_IMAGE = 'https://res.cloudinary.com/dj6draudd/image/upload/v1771671526/contact_scaled_8ca2bf7adb.jpg'

useSeoMeta({
  title: `${t('aboutus')} — Bildex`,
  description: t('aboutus7'),
  ogTitle: t('aboutus'),
  ogDescription: t('aboutus7'),
  ogImage: OG_IMAGE,
  ogUrl: url.href,
  ogType: 'website',
  ogLocale: locale.value === 'ge' ? 'ka_GE' : 'de_DE',
  twitterTitle: t('aboutus'),
  twitterDescription: t('aboutus7'),
  twitterImage: OG_IMAGE,
})

useHead({ link: [{ rel: 'canonical', href: url.href }] })

// ── Iconos inline ──────────────────────────────────────────────────────────
const makeIcon = (paths: ReturnType<typeof h>[]) =>
  defineComponent({
    render: () => h('svg', {
      viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      'stroke-width': '1.75', 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    }, paths),
  })

const IconTeam = makeIcon([
  h('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }),
  h('circle', { cx: '9', cy: '7', r: '4' }),
  h('path', { d: 'M23 21v-2a4 4 0 00-3-3.87' }),
  h('path', { d: 'M16 3.13a4 4 0 010 7.75' }),
])

const IconHandshake = makeIcon([
  h('path', { d: 'M18 8h1a4 4 0 010 8h-1' }),
  h('path', { d: 'M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z' }),
  h('line', { x1: '6', y1: '1', x2: '6', y2: '4' }),
  h('line', { x1: '10', y1: '1', x2: '10', y2: '4' }),
  h('line', { x1: '14', y1: '1', x2: '14', y2: '4' }),
])

const IconScale = makeIcon([
  h('line', { x1: '12', y1: '3', x2: '12', y2: '21' }),
  h('path', { d: 'M3 6h18' }),
  h('path', { d: 'M3 6l3 6s0 3-3 3-3-3-3-3l3-6' }),
  h('path', { d: 'M21 6l3 6s0 3-3 3-3-3-3-3l3-6' }),
  h('path', { d: 'M5 21h14' }),
])

const IconTrending = makeIcon([
  h('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
  h('polyline', { points: '17 6 23 6 23 12' }),
])

const IconEye = makeIcon([
  h('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
  h('circle', { cx: '12', cy: '12', r: '3' }),
])

const IconStar = makeIcon([
  h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }),
])

// ── Valores ────────────────────────────────────────────────────────────────
const values = [
  {
    icon: IconTeam,
    titleDe: 'Professionelles Team',
    titleGe: 'პროფესიონალური გუნდი',
    descDe: 'Ein Team von Fachleuten, das jederzeit bereit ist zu helfen.',
    descGe: 'პროფესიონალებით დაკომპლექტებული გუნდი, მზად დასახმარებლად ნებისმიერ დროს.',
  },
  {
    icon: IconHandshake,
    titleDe: 'Vertrauen und Teamarbeit',
    titleGe: 'ნდობა და გუნდური მუშაობა',
    descDe: 'Gegenseitiges Vertrauen und Zusammenarbeit sind die Grundlage unserer Arbeit.',
    descGe: 'ურთიერთსანდოობა და გუნდური მუშაობა ჩვენი საქმიანობის საფუძველია.',
  },
  {
    icon: IconScale,
    titleDe: 'Ethik und Gerechtigkeit',
    titleGe: 'ეთიკა და სამართლიანობა',
    descDe: 'Wir handeln stets mit Ethik, Gerechtigkeit und hoher sozialer Verantwortung.',
    descGe: 'ვმოქმედებთ ეთიკით, სამართლიანობითა და მაღალი სოციალური პასუხისმგებლობით.',
  },
  {
    icon: IconTrending,
    titleDe: 'Ständige Weiterentwicklung',
    titleGe: 'მუდმივი განვითარება',
    descDe: 'Wir suchen ständig nach Innovation und kontinuierlicher Verbesserung.',
    descGe: 'მუდმივად ვეძებთ სიახლეს და გაუმჯობესებას ყველაფერში, რასაც ვთავაზობთ.',
  },
  {
    icon: IconEye,
    titleDe: 'Transparenz',
    titleGe: 'გამჭვირვალეობა',
    descDe: 'Unsere Prozesse sind transparent und offen für alle, die uns vertrauen.',
    descGe: 'ჩვენი ყველა პროცესი გამჭვირვალეა იმათ წინაშე, ვინც გვენდობა.',
  },
  {
    icon: IconStar,
    titleDe: 'Soziale Verantwortung',
    titleGe: 'სოციალური პასუხისმგებლობა',
    descDe: 'Wir setzen uns für eine positive Wirkung in den Gemeinschaften ein, denen wir dienen.',
    descGe: 'ვიღებთ ვალდებულებას დადებითი გავლენა მოვახდინოთ იმ თემებზე, რომლებსაც ვემსახურებით.',
  },
]
</script>
