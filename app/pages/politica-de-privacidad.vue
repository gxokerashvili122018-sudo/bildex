<template>
  <div class="container mx-auto max-w-3xl px-4 py-20 lg:px-6">
    <h1 class="text-3xl font-bold text-zinc-800">{{ $t('privacypolicy') }}</h1>
    <div v-if="locale === 'ge'" class="prose prose-zinc mt-10 max-w-none">
      <p>En cumplimiento con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPD), la Asociación Cultural y Educativo Español Bildex informa sobre su política de privacidad.</p>
      <h2>Responsable del tratamiento</h2>
      <p>Asociación Cultural y Educativo Español Bildex<br/>Email: info@bildex.com</p>
      <h2>Finalidad del tratamiento</h2>
      <p>Los datos personales que nos facilite a través del formulario de contacto serán utilizados exclusivamente para responder a su consulta y mantener comunicación con usted.</p>
      <h2>Legitimación</h2>
      <p>La base legal para el tratamiento de sus datos es el consentimiento que nos otorga al enviarnos el formulario de contacto.</p>
      <h2>Destinatarios</h2>
      <p>Sus datos no serán cedidos a terceros salvo obligación legal.</p>
      <h2>Derechos</h2>
      <p>Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un email a info@bildex.com.</p>
    </div>
    <div v-else class="prose prose-zinc mt-10 max-w-none">
      <p>In Uebereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) informiert die spanische Kultur- und Bildungsvereinigung Bildex ueber ihre Datenschutzerklaerung.</p>
      <h2>Verantwortlicher</h2>
      <p>Spanische Kultur- und Bildungsvereinigung Bildex<br/>E-Mail: info@bildex.com</p>
      <h2>Zweck der Verarbeitung</h2>
      <p>Personenbezogene Daten, die Sie ueber das Kontaktformular bereitstellen, werden ausschliesslich verwendet, um Ihre Anfrage zu beantworten und mit Ihnen zu kommunizieren.</p>
      <h2>Rechtsgrundlage</h2>
      <p>Die Rechtsgrundlage fuer die Verarbeitung Ihrer Daten ist Ihre Einwilligung beim Absenden des Kontaktformulars.</p>
      <h2>Empfaenger</h2>
      <p>Ihre Daten werden nicht an Dritte weitergegeben, ausser wenn eine gesetzliche Verpflichtung besteht.</p>
      <h2>Rechte</h2>
      <p>Sie koennen Ihre Rechte auf Auskunft, Berichtigung, Loeschung und Widerspruch per E-Mail an info@bildex.com ausueben.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default', headerSolid: true })
const { t, locale } = useI18n()
useSeoMeta({ title: `${t('privacypolicy')} — Bildex` })
</script>
