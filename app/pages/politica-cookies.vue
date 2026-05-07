<template>
  <div class="container mx-auto max-w-3xl px-4 py-20 lg:px-6">
    <h1 class="text-3xl font-bold text-zinc-800">{{ $t('cookiespolicy') }}</h1>
    <div v-if="locale === 'ge'" class="prose prose-zinc mt-10 max-w-none">
      <p>Este sitio web utiliza cookies propias y de terceros con la finalidad de mejorar la experiencia de navegación y el servicio ofrecido.</p>
      <h2>¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten al sitio recordar sus preferencias y mejorar su experiencia.</p>
      <h2>Tipos de cookies utilizadas</h2>
      <ul>
        <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web.</li>
        <li><strong>Cookies analíticas:</strong> Nos permiten analizar el uso del sitio para mejorar nuestros servicios.</li>
      </ul>
      <h2>Cómo desactivar las cookies</h2>
      <p>Puede configurar su navegador para rechazar las cookies o para que le avise cuando se envíen. Consulte la ayuda de su navegador para más información.</p>
      <h2>Contacto</h2>
      <p>Si tiene dudas sobre nuestra política de cookies, puede contactarnos en info@bildex.com.</p>
    </div>
    <div v-else class="prose prose-zinc mt-10 max-w-none">
      <p>Diese Website verwendet eigene Cookies und Cookies von Drittanbietern, um das Nutzungserlebnis und den angebotenen Service zu verbessern.</p>
      <h2>Was sind Cookies?</h2>
      <p>Cookies sind kleine Textdateien, die auf Ihrem Geraet gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website, Ihre Praeferenzen zu speichern und die Nutzung zu verbessern.</p>
      <h2>Verwendete Cookie-Arten</h2>
      <ul>
        <li><strong>Technische Cookies:</strong> Notwendig fuer den Betrieb der Website.</li>
        <li><strong>Analyse-Cookies:</strong> Sie helfen uns, die Nutzung der Website zu analysieren und unsere Dienste zu verbessern.</li>
      </ul>
      <h2>Cookies deaktivieren</h2>
      <p>Sie koennen Ihren Browser so einstellen, dass Cookies abgelehnt werden oder Sie benachrichtigt werden, wenn Cookies gesendet werden. Weitere Informationen finden Sie in der Hilfe Ihres Browsers.</p>
      <h2>Kontakt</h2>
      <p>Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns unter info@bildex.com.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default', headerSolid: true })
const { t, locale } = useI18n()
useSeoMeta({ title: `${t('cookiespolicy')} — Bildex` })
</script>
