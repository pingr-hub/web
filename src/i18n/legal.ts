// Legal page content for privacy / terms / refund, in every supported locale.
// Rendered with set:html, so values may contain inline HTML (<b>, <a>, &amp; …).
// Structured as sections so the page can stay a dumb loop and content lives here.
import type { Lang } from "./ui";

export type LegalDoc = "privacy" | "terms" | "refund";

type Block =
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "lead"; html: string };

interface Section {
  h?: string;
  blocks: Block[];
}

interface LegalPage {
  title: string;
  description: string;
  lastUpdated: string;
  sections: Section[];
}

type LegalContent = Record<LegalDoc, LegalPage>;

const lastUpdated: Record<Lang, string> = {
  en: "July 11, 2026",
  es: "11 de julio de 2026",
  de: "11. Juli 2026",
  tr: "11 Temmuz 2026",
};

const content: Record<Lang, LegalContent> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      description: "How Pingr handles your data — everything stays on your device.",
      lastUpdated: lastUpdated.en,
      sections: [
        {
          blocks: [
            {
              type: "lead",
              html: `Pingr is built privacy-first. Your notifications, credentials, and preferences never leave your device. This policy explains what data the App accesses, how it is used, and where it is stored.`,
            },
          ],
        },
        {
          h: "1. Overview",
          blocks: [
            { type: "p", html: `Pingr (&ldquo;the App&rdquo;) is a macOS menu bar application that aggregates notifications from third-party services you connect. The App is designed to operate entirely on-device, with no account, no cloud sync, and no analytics.` },
          ],
        },
        {
          h: "2. Data We Do Not Collect",
          blocks: [
            { type: "p", html: `Pingr does <strong>not</strong> collect, transmit, or store any personal data on servers operated by us. Specifically, the App does <strong>not</strong>:` },
            { type: "ul", items: [
              `Run any analytics, tracking, or telemetry`,
              `Sync your data to a cloud account`,
              `Send your notification content or credentials to any server other than the third-party services you connect`,
              `Profile your usage or sell data to third parties`,
            ] },
          ],
        },
        {
          h: "3. Data Accessed From Connected Services",
          blocks: [
            { type: "p", html: `To surface notifications, the App reads data from the third-party services you choose to connect, using the official APIs of each provider over secure HTTPS connections. The data accessed is limited to what is needed to display notifications:` },
            { type: "ul", items: [
              `<strong>GitHub</strong> &mdash; notifications, repository metadata, and your user profile`,
              `<strong>Gmail</strong> &mdash; email metadata (subject, sender, date) for notification purposes`,
              `<strong>Zammad</strong> &mdash; ticket notifications and status updates`,
              `<strong>WhatsApp, Slack, Discord and others</strong> &mdash; message notifications (where supported)`,
            ] },
            { type: "p", html: `This data is fetched on demand, rendered as notifications, and stored locally in your notification history. It is never relayed through our servers.` },
          ],
        },
        {
          h: "4. Local Data Storage",
          blocks: [
            { type: "p", html: `All data is stored locally on your device in an on-device SQLite database. This includes:` },
            { type: "ul", items: [
              `Notification history and read/unread state`,
              `API tokens and OAuth credentials (stored in the macOS Keychain / secure storage on your device)`,
              `App preferences, filters, and snooze settings`,
            ] },
            { type: "p", html: `No data is synced to cloud services or external servers operated by Pingr.` },
          ],
        },
        {
          h: "5. Third-Party Services",
          blocks: [
            { type: "p", html: `Pingr communicates directly with the APIs of the third-party services you connect. Each provider has its own privacy policy that governs the data held on their servers:` },
            { type: "ul", items: [
              `<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Policy</a>`,
              `<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google (Gmail) Privacy Policy</a>`,
              `<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">WhatsApp Privacy Policy</a>`,
              `<a href="https://slack.com/trust/privacy/privacy-policy" target="_blank" rel="noopener">Slack Privacy Policy</a>`,
              `<a href="https://zammad.com/en/company/privacy" target="_blank" rel="noopener">Zammad Privacy Policy</a>`,
            ] },
          ],
        },
        {
          h: "6. AI Features",
          blocks: [
            { type: "p", html: `Pingr may offer optional AI features such as a daily brief or natural-language search over your notifications. When enabled, the content required to fulfill your request is processed solely on-device wherever possible. If an AI feature requires a third-party model, only the minimum data needed to answer your request is sent, and it is never used to train any model. AI features are opt-in.` },
          ],
        },
        {
          h: "7. Analytics and Tracking",
          blocks: [
            { type: "p", html: `Pingr does <strong>not</strong> use any analytics, tracking, crash-reporting, or advertising SDKs. No usage data is collected or transmitted.` },
          ],
        },
        {
          h: "8. Children's Privacy",
          blocks: [
            { type: "p", html: `The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.` },
          ],
        },
        {
          h: "9. Data Deletion",
          blocks: [
            { type: "p", html: `Because all data is stored locally, you can delete everything Pingr holds at any time from the App's settings, or by uninstalling the App. No residual data remains on any external server operated by us.` },
          ],
        },
        {
          h: "10. Changes to This Policy",
          blocks: [
            { type: "p", html: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.` },
          ],
        },
        {
          h: "11. Contact",
          blocks: [
            { type: "p", html: `If you have questions about this Privacy Policy, contact us at <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` },
          ],
        },
      ],
    },

    terms: {
      title: "Terms of Service",
      description: "The terms for using Pingr and subscribing to Pingr plans.",
      lastUpdated: lastUpdated.en,
      sections: [
        {
          blocks: [
            { type: "lead", html: `These Terms of Service govern your use of Pingr. By downloading, installing, or using the App, you agree to be bound by them.` },
          ],
        },
        {
          h: "1. Acceptance of Terms",
          blocks: [
            { type: "p", html: `By downloading, installing, or using Pingr (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.` },
          ],
        },
        {
          h: "2. Description of Service",
          blocks: [
            { type: "p", html: `Pingr is a macOS menu bar application that aggregates notifications from third-party services &mdash; including GitHub, Gmail, Zammad, WhatsApp, Slack and others &mdash; into a single interface. The App acts as a notification aggregator and does not modify or interfere with the underlying services.` },
          ],
        },
        {
          h: "3. Plans, Trials, and Billing",
          blocks: [
            { type: "p", html: `Pingr is offered through the following plans: a 14-day free trial, followed by optional paid subscriptions (Lite, Pro, and Max). The features and prices of each plan are shown on the <a href="/#pricing">pricing section</a> of our website and may change from time to time.` },
            { type: "ul", items: [
              `<strong>Free trial.</strong> New users get a 14-day free trial. You will not be charged during the trial. You can cancel at any time before the trial ends to avoid being billed.`,
              `<strong>Billing cycle.</strong> Paid plans are billed either monthly or yearly, depending on the option you select at checkout. Yearly plans are billed upfront for the full year.`,
              `<strong>Automatic renewal.</strong> Subscriptions renew automatically at the end of each billing cycle unless canceled before the renewal date.`,
              `<strong>App Store purchases.</strong> When you subscribe through the Apple App Store, your subscription and billing are managed by Apple under Apple's terms. Apple may also offer promotional or introductory pricing.`,
            ] },
            { type: "p", html: `Prices are displayed in USD unless otherwise stated. Taxes may apply depending on your region.` },
          ],
        },
        {
          h: "4. User Accounts and Authentication",
          blocks: [
            { type: "p", html: `To use Pingr, you must provide valid credentials or authorization for the third-party services you wish to connect. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your connected accounts. Pingr stores your credentials locally on your device and does not transmit them to any server other than the respective third-party service APIs.` },
          ],
        },
        {
          h: "5. Acceptable Use",
          blocks: [
            { type: "p", html: `You agree not to:` },
            { type: "ul", items: [
              `Reverse engineer, decompile, or disassemble the App`,
              `Use the App for any unlawful purpose`,
              `Attempt to gain unauthorized access to any third-party service through the App`,
              `Redistribute, resell, or sublicense the App without prior written consent`,
              `Abuse, overload, or interfere with the third-party APIs the App connects to`,
            ] },
          ],
        },
        {
          h: "6. Intellectual Property",
          blocks: [
            { type: "p", html: `The App and its original content, features, and functionality are owned by Pingr and are protected by international copyright, trademark, and other intellectual property laws.` },
          ],
        },
        {
          h: "7. Third-Party Services",
          blocks: [
            { type: "p", html: `Pingr integrates with third-party services. Your use of those services is governed by their respective terms of service and privacy policies. Pingr is not responsible for the availability, accuracy, or content of third-party services, and any notifications displayed are drawn directly from them.` },
          ],
        },
        {
          h: "8. Cancellation and Termination",
          blocks: [
            { type: "p", html: `You can cancel your subscription at any time from the App, the App Store, or the platform where you subscribed. Cancellation stops future renewals; you retain access to your paid features until the end of the current billing cycle. We may suspend or terminate your access to the App if you breach these Terms.` },
          ],
        },
        {
          h: "9. Refunds",
          blocks: [
            { type: "p", html: `Refund eligibility is described in our separate <a href="/refund">Refund Policy</a>. For App Store purchases, refunds are handled by Apple in accordance with Apple's policies.` },
          ],
        },
        {
          h: "10. Disclaimer of Warranties",
          blocks: [
            { type: "p", html: `The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or that notifications from third-party services will always be timely or accurate.` },
          ],
        },
        {
          h: "11. Limitation of Liability",
          blocks: [
            { type: "p", html: `In no event shall Pingr be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, including but not limited to missed notifications, delayed notifications, or data loss.` },
          ],
        },
        {
          h: "12. Changes to Terms",
          blocks: [
            { type: "p", html: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the App after changes constitutes acceptance of the new terms.` },
          ],
        },
        {
          h: "13. Contact",
          blocks: [
            { type: "p", html: `If you have questions about these Terms of Service, contact us at <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` },
          ],
        },
      ],
    },

    refund: {
      title: "Refund Policy",
      description: "Refund terms for Pingr subscriptions and App Store purchases.",
      lastUpdated: lastUpdated.en,
      sections: [
        {
          blocks: [
            { type: "lead", html: `We want you to be happy with Pingr. This policy explains when you can get a refund and how to request one.` },
          ],
        },
        {
          h: "1. Free Trial",
          blocks: [
            { type: "p", html: `Pingr offers a 14-day free trial on its paid plans. You will not be charged during the trial period. If you cancel before the trial ends, you will not be billed at all, so no refund is necessary. If you do not cancel, your selected plan begins billing automatically when the trial ends.` },
          ],
        },
        {
          h: "2. Subscriptions",
          blocks: [
            { type: "p", html: `Paid plans (Lite, Pro, and Max) are billed either monthly or yearly, depending on the option you select at checkout.` },
            { type: "ul", items: [
              `You can cancel at any time to stop future renewals. Cancellation does not refund the current billing period.`,
              `When you cancel, you keep access to your paid features until the end of the billing cycle you already paid for.`,
            ] },
          ],
        },
        {
          h: "3. Yearly Plans",
          blocks: [
            { type: "p", html: `Yearly plans are billed upfront for the full year. If you cancel a yearly plan, you keep access until the end of the paid year. Unused time beyond the current paid term is not automatically refunded &mdash; see <strong>Requesting a Refund</strong> below for discretionary refunds.` },
          ],
        },
        {
          h: "4. App Store Purchases",
          blocks: [
            { type: "p", html: `When you subscribe through the Apple App Store, your purchase and any refund are processed by Apple under Apple's terms and policies. Pingr cannot issue refunds for App Store billing directly. To request a refund from Apple, visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>.` },
          ],
        },
        {
          h: "5. Requesting a Refund",
          blocks: [
            { type: "p", html: `For subscriptions billed directly by us (outside the App Store), we will consider a refund on a case-by-case basis, in particular:` },
            { type: "ul", items: [
              `Where you were charged as a result of a clear error on our part`,
              `Where you forgot to cancel shortly after a renewal and have not used the paid features`,
              `Where required by applicable consumer law in your country of residence`,
            ] },
            { type: "p", html: `To request a refund, contact us at <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> with your account details and the date of the charge. We aim to respond within a reasonable time.` },
          ],
        },
        {
          h: "6. Statutory Rights",
          blocks: [
            { type: "p", html: `Nothing in this policy affects any statutory rights you may have under the consumer protection laws of your country of residence, which may entitle you to a refund in circumstances beyond those described here.` },
          ],
        },
        {
          h: "7. Changes to This Policy",
          blocks: [
            { type: "p", html: `We may update this Refund Policy from time to time. Changes will be posted on this page with an updated revision date.` },
          ],
        },
        {
          h: "8. Contact",
          blocks: [
            { type: "p", html: `If you have any questions about this Refund Policy, contact us at <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` },
          ],
        },
      ],
    },
  },

  es: {
    privacy: {
      title: "Política de Privacidad",
      description: "Cómo gestiona Pingr tus datos — todo se queda en tu dispositivo.",
      lastUpdated: lastUpdated.es,
      sections: [
        { blocks: [ { type: "lead", html: `Pingr está pensado para que la privacidad vaya primero. Tus notificaciones, credenciales y preferencias nunca salen de tu dispositivo. Esta política explica a qué datos accede la App, cómo se usan y dónde se almacenan.` } ] },
        { h: "1. Resumen", blocks: [ { type: "p", html: `Pingr (&laquo;la App&raquo;) es una aplicación de barra de menús para macOS que reúne las notificaciones de los servicios de terceros que conectes. La App está diseñada para funcionar completamente en el dispositivo, sin cuenta, sin sincronización en la nube y sin analítica.` } ] },
        { h: "2. Datos que no recopilamos", blocks: [
          { type: "p", html: `Pingr <strong>no</strong> recopila, transmite ni almacena ningún dato personal en servidores propios. En concreto, la App <strong>no</strong>:` },
          { type: "ul", items: [ `Ejecuta ninguna analítica, seguimiento ni telemetría`, `Sincroniza tus datos con una cuenta en la nube`, `Envía el contenido de tus notificaciones o credenciales a ningún servidor que no sea de los servicios de terceros que conectas`, `Crea perfiles de tu uso ni vende datos a terceros` ] },
        ] },
        { h: "3. Datos a los que se accede desde los servicios conectados", blocks: [
          { type: "p", html: `Para mostrar notificaciones, la App lee datos de los servicios de terceros que decides conectar, usando las API oficiales de cada proveedor mediante conexiones HTTPS seguras. Los datos a los que se accede se limitan a lo necesario para mostrar notificaciones:` },
          { type: "ul", items: [ `<strong>GitHub</strong> &mdash; notificaciones, metadatos de repositorios y tu perfil de usuario`, `<strong>Gmail</strong> &mdash; metadatos del correo (asunto, remitente, fecha) para notificaciones`, `<strong>Zammad</strong> &mdash; notificaciones de tickets y actualizaciones de estado`, `<strong>WhatsApp, Slack, Discord y otros</strong> &mdash; notificaciones de mensajes (cuando esté soportado)` ] },
          { type: "p", html: `Estos datos se obtienen bajo demanda, se muestran como notificaciones y se guardan localmente en tu historial. Nunca se reenvían a través de nuestros servidores.` },
        ] },
        { h: "4. Almacenamiento local de datos", blocks: [
          { type: "p", html: `Todos los datos se almacenan localmente en tu dispositivo, en una base de datos SQLite local. Esto incluye:` },
          { type: "ul", items: [ `Historial de notificaciones y estado leído/no leído`, `Tokens de API y credenciales OAuth (guardados en el Llavero de macOS / almacenamiento seguro de tu dispositivo)`, `Preferencias de la App, filtros y ajustes de posposición` ] },
          { type: "p", html: `Los datos no se sincronizan con servicios en la nube ni con servidores externos operados por Pingr.` },
        ] },
        { h: "5. Servicios de terceros", blocks: [
          { type: "p", html: `Pingr se comunica directamente con las API de los servicios de terceros que conectas. Cada proveedor tiene su propia política de privacidad que rige los datos en sus servidores:` },
          { type: "ul", items: [ `<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Política de Privacidad de GitHub</a>`, `<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidad de Google (Gmail)</a>`, `<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de WhatsApp</a>`, `<a href="https://slack.com/trust/privacy/privacy-policy" target="_blank" rel="noopener">Política de Privacidad de Slack</a>`, `<a href="https://zammad.com/en/company/privacy" target="_blank" rel="noopener">Política de Privacidad de Zammad</a>` ] },
        ] },
        { h: "6. Funciones de IA", blocks: [ { type: "p", html: `Pingr puede ofrecer funciones opcionales de IA, como un resumen diario o búsqueda en lenguaje natural sobre tus notificaciones. Cuando se activan, el contenido necesario para responder a tu solicitud se procesa exclusivamente en el dispositivo siempre que sea posible. Si una función de IA requiere un modelo de terceros, solo se envían los datos mínimos para responder a tu solicitud, y nunca se usan para entrenar ningún modelo. Las funciones de IA son opcionales.` } ] },
        { h: "7. Analítica y seguimiento", blocks: [ { type: "p", html: `Pingr <strong>no</strong> usa ningún SDK de analítica, seguimiento, informe de errores ni publicidad. No se recopila ni transmite ningún dato de uso.` } ] },
        { h: "8. Privacidad infantil", blocks: [ { type: "p", html: `La App no está destinada a menores de 13 años. No recopilamos deliberadamente información personal de niños.` } ] },
        { h: "9. Eliminación de datos", blocks: [ { type: "p", html: `Como todos los datos se almacenan localmente, puedes eliminar todo lo que Pingr guarda en cualquier momento desde los ajustes de la App o desinstalándola. No queda ningún dato residual en ningún servidor externo nuestro.` } ] },
        { h: "10. Cambios en esta política", blocks: [ { type: "p", html: `Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de revisión actualizada.` } ] },
        { h: "11. Contacto", blocks: [ { type: "p", html: `Si tienes preguntas sobre esta Política de Privacidad, escríbenos a <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
    terms: {
      title: "Términos del Servicio",
      description: "Las condiciones para usar Pingr y suscribirte a sus planes.",
      lastUpdated: lastUpdated.es,
      sections: [
        { blocks: [ { type: "lead", html: `Estos Términos del Servicio rigen tu uso de Pingr. Al descargar, instalar o usar la App, aceptas quedar vinculado por ellos.` } ] },
        { h: "1. Aceptación de los términos", blocks: [ { type: "p", html: `Al descargar, instalar o usar Pingr (&laquo;la App&raquo;), aceptas quedar vinculado por estos Términos del Servicio. Si no estás de acuerdo con estos términos, no uses la App.` } ] },
        { h: "2. Descripción del servicio", blocks: [ { type: "p", html: `Pingr es una aplicación de barra de menús para macOS que reúne las notificaciones de servicios de terceros &mdash; incluidos GitHub, Gmail, Zammad, WhatsApp, Slack y otros &mdash; en una sola interfaz. La App actúa como agregador de notificaciones y no modifica ni interfiere con los servicios subyacentes.` } ] },
        { h: "3. Planes, pruebas y facturación", blocks: [
          { type: "p", html: `Pingr se ofrece con los siguientes planes: una prueba gratis de 14 días, seguida de suscripciones de pago opcionales (Lite, Pro y Max). Las funciones y precios de cada plan se muestran en la <a href="/es/#pricing">sección de precios</a> de nuestra web y pueden cambiar de vez en cuando.` },
          { type: "ul", items: [ `<strong>Prueba gratis.</strong> Los nuevos usuarios disponen de una prueba gratis de 14 días. No se te cobrará durante la prueba. Puedes cancelar en cualquier momento antes de que termine para que no se te facture.`, `<strong>Ciclo de facturación.</strong> Los planes de pago se facturan mensual o anualmente, según la opción que elijas al pagar. Los planes anuales se facturan por adelantado por el año completo.`, `<strong>Renovación automática.</strong> Las suscripciones se renuevan automáticamente al final de cada ciclo salvo que se cancelen antes de la fecha de renovación.`, `<strong>Compras en el App Store.</strong> Cuando te suscribes a través de Apple App Store, tu suscripción y facturación las gestiona Apple bajo sus condiciones. Apple también puede ofrecer precios promocionales o de introducción.` ] },
          { type: "p", html: `Los precios se muestran en USD salvo que se indique lo contrario. Pueden aplicarse impuestos según tu región.` },
        ] },
        { h: "4. Cuentas de usuario y autenticación", blocks: [ { type: "p", html: `Para usar Pingr, debes facilitar credenciales o autorización válidas para los servicios de terceros que quieras conectar. Tú eres responsable de mantener la confidencialidad de tus credenciales y de toda la actividad que ocurra en tus cuentas conectadas. Pingr guarda tus credenciales localmente en tu dispositivo y no las transmite a ningún servidor que no sea la API del servicio de terceros correspondiente.` } ] },
        { h: "5. Uso aceptable", blocks: [
          { type: "p", html: `Te comprometes a no:` },
          { type: "ul", items: [ `Ingeniería inversa, descompilar o desensamblar la App`, `Usar la App para fines ilícitos`, `Intentar acceder sin autorización a cualquier servicio de terceros a través de la App`, `Redistribuir, revender o sublicenciar la App sin consentimiento previo por escrito`, `Abusar, sobrecargar o interferir con las API de terceros a las que se conecta la App` ] },
        ] },
        { h: "6. Propiedad intelectual", blocks: [ { type: "p", html: `La App y su contenido original, funciones y características son propiedad de Pingr y están protegidas por las leyes internacionales de propiedad intelectual, marca y derechos de autor.` } ] },
        { h: "7. Servicios de terceros", blocks: [ { type: "p", html: `Pingr se integra con servicios de terceros. El uso que hagas de esos servicios se rige por sus propios términos del servicio y políticas de privacidad. Pingr no es responsable de la disponibilidad, exactitud o contenido de los servicios de terceros, y las notificaciones mostradas provienen directamente de ellos.` } ] },
        { h: "8. Cancelación y terminación", blocks: [ { type: "p", html: `Puedes cancelar tu suscripción en cualquier momento desde la App, el App Store o la plataforma donde te suscribiste. La cancelación detiene las renovaciones futuras; conservas el acceso a las funciones de pago hasta el final del ciclo de facturación en curso. Podemos suspender o terminar tu acceso a la App si incumples estos Términos.` } ] },
        { h: "9. Reembolsos", blocks: [ { type: "p", html: `La elegibilidad para reembolso se describe en nuestra <a href="/es/refund">Política de Reembolso</a> independiente. Para compras en el App Store, los reembolsos los gestiona Apple conforme a sus políticas.` } ] },
        { h: "10. Exención de garantías", blocks: [ { type: "p", html: `La App se ofrece &laquo;tal cual&raquo; y &laquo;según disponibilidad&raquo;, sin garantías de ningún tipo, expresas o implícitas. No garantizamos que la App sea ininterrumpida, esté libre de errores o que las notificaciones de servicios de terceros sean siempre puntuales o exactas.` } ] },
        { h: "11. Limitación de responsabilidad", blocks: [ { type: "p", html: `En ningún caso Pingr será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos derivados o relacionados con tu uso de la App, incluidos, entre otros, notificaciones perdidas, retrasadas o pérdida de datos.` } ] },
        { h: "12. Cambios en los términos", blocks: [ { type: "p", html: `Nos reservamos el derecho a modificar estos términos en cualquier momento. Los cambios se publicarán en esta página con una fecha de revisión actualizada. El uso continuado de la App tras los cambios implica la aceptación de los nuevos términos.` } ] },
        { h: "13. Contacto", blocks: [ { type: "p", html: `Si tienes preguntas sobre estos Términos del Servicio, escríbenos a <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
    refund: {
      title: "Política de Reembolso",
      description: "Condiciones de reembolso para suscripciones de Pingr y compras en el App Store.",
      lastUpdated: lastUpdated.es,
      sections: [
        { blocks: [ { type: "lead", html: `Queremos que estés contento con Pingr. Esta política explica cuándo puedes obtener un reembolso y cómo solicitarlo.` } ] },
        { h: "1. Prueba gratis", blocks: [ { type: "p", html: `Pingr ofrece una prueba gratis de 14 días en sus planes de pago. No se te cobrará durante el periodo de prueba. Si cancelas antes de que termine, no se te facturará en absoluto, así que no hace falta ningún reembolso. Si no cancelas, tu plan seleccionado empezará a facturarse automáticamente al terminar la prueba.` } ] },
        { h: "2. Suscripciones", blocks: [
          { type: "p", html: `Los planes de pago (Lite, Pro y Max) se facturan mensual o anualmente, según la opción que elijas al pagar.` },
          { type: "ul", items: [ `Puedes cancelar en cualquier momento para detener futuras renovaciones. La cancelación no reembolsa el periodo de facturación en curso.`, `Al cancelar, conservas el acceso a las funciones de pago hasta el final del ciclo de facturación que ya has pagado.` ] },
        ] },
        { h: "3. Planes anuales", blocks: [ { type: "p", html: `Los planes anuales se facturan por adelantado por el año completo. Si cancelas un plan anual, conservas el acceso hasta el final del año pagado. El tiempo no usado más allá del periodo pagado en curso no se reembolsa automáticamente &mdash; consulta <strong>Solicitar un reembolso</strong> más abajo para reembolsos discrecionales.` } ] },
        { h: "4. Compras en el App Store", blocks: [ { type: "p", html: `Cuando te suscribes a través de Apple App Store, tu compra y cualquier reembolso los procesa Apple bajo sus términos y políticas. Pingr no puede emitir reembolsos directamente por la facturación del App Store. Para solicitar un reembolso a Apple, visita <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>.` } ] },
        { h: "5. Solicitar un reembolso", blocks: [
          { type: "p", html: `Para suscripciones facturadas directamente por nosotros (fuera del App Store), estudiaremos un reembolso caso por caso, en particular:` },
          { type: "ul", items: [ `Cuando se te haya cobrado por un error claro por nuestra parte`, `Cuando olvidaste cancelar poco después de una renovación y no has usado las funciones de pago`, `Cuando lo exija la legislación de consumo aplicable en tu país de residencia` ] },
          { type: "p", html: `Para solicitar un reembolso, escríbenos a <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> con los datos de tu cuenta y la fecha del cargo. Procuramos responder en un plazo razonable.` },
        ] },
        { h: "6. Derechos legales", blocks: [ { type: "p", html: `Nada en esta política afecta a los derechos legales que pudieras tener según las leyes de protección de consumidores de tu país de residencia, que podrían darte derecho a un reembolso en circunstancias distintas de las descritas aquí.` } ] },
        { h: "7. Cambios en esta política", blocks: [ { type: "p", html: `Podemos actualizar esta Política de Reembolso de vez en cuando. Los cambios se publicarán en esta página con una fecha de revisión actualizada.` } ] },
        { h: "8. Contacto", blocks: [ { type: "p", html: `Si tienes preguntas sobre esta Política de Reembolso, escríbenos a <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
  },

  de: {
    privacy: {
      title: "Datenschutzerklärung",
      description: "Wie Pingr mit deinen Daten umgeht — alles bleibt auf deinem Gerät.",
      lastUpdated: lastUpdated.de,
      sections: [
        { blocks: [ { type: "lead", html: `Pingr ist datenschutzorientiert aufgebaut. Deine Benachrichtigungen, Zugangsdaten und Einstellungen verlassen niemals dein Gerät. Diese Richtlinie erklärt, auf welche Daten die App zugreift, wie sie verwendet und wo sie gespeichert werden.` } ] },
        { h: "1. Übersicht", blocks: [ { type: "p", html: `Pingr (&bdquo;die App&ldquo;) ist eine macOS-Menüleisten-Anwendung, die Benachrichtigungen von den von dir verbundenen Drittanbieter-Diensten bündelt. Die App ist so konzipiert, dass sie vollständig auf dem Gerät arbeitet &mdash; ohne Konto, ohne Cloud-Synchronisation und ohne Analytics.` } ] },
        { h: "2. Daten, die wir nicht erheben", blocks: [
          { type: "p", html: `Pingr erhebt, überträgt oder speichert <strong>keine</strong> personenbezogenen Daten auf Servern, die von uns betrieben werden. Insbesondere macht die App <strong>folgendes nicht</strong>:` },
          { type: "ul", items: [ `Analytics, Tracking oder Telemetrie auszuführen`, `Deine Daten mit einem Cloud-Konto zu synchronisieren`, `Deine Benachrichtigungsinhalte oder Zugangsdaten an einen Server zu senden, außer an die von dir verbundenen Dritdienste`, `Deine Nutzung zu profilieren oder Daten an Dritte zu verkaufen` ] },
        ] },
        { h: "3. Datenzugriff über verbundene Dienste", blocks: [
          { type: "p", html: `Um Benachrichtigungen anzuzeigen, liest die App Daten aus den Dritdiensten, die du verbindest &mdash; über die offiziellen APIs der jeweiligen Anbieter über sichere HTTPS-Verbindungen. Die abgerufenen Daten beschränken sich auf das zur Anzeige von Benachrichtigungen Notwendige:` },
          { type: "ul", items: [ `<strong>GitHub</strong> &mdash; Benachrichtigungen, Repository-Metadaten und dein Benutzerprofil`, `<strong>Gmail</strong> &mdash; E-Mail-Metadaten (Betreff, Absender, Datum) für Benachrichtigungen`, `<strong>Zammad</strong> &mdash; Ticket-Benachrichtigungen und Statusaktualisierungen`, `<strong>WhatsApp, Slack, Discord und andere</strong> &mdash; Nachrichtenbenachrichtigungen (sofern unterstützt)` ] },
          { type: "p", html: `Diese Daten werden bei Bedarf abgerufen, als Benachrichtigungen angezeigt und lokal in deinem Verlauf gespeichert. Sie werden niemals über unsere Server weitergeleitet.` },
        ] },
        { h: "4. Lokale Datenspeicherung", blocks: [
          { type: "p", html: `Alle Daten werden lokal auf deinem Gerät in einer lokalen SQLite-Datenbank gespeichert. Dazu gehören:` },
          { type: "ul", items: [ `Benachrichtigungsverlauf und Gelesen-/Ungelesen-Status`, `API-Token und OAuth-Zugangsdaten (im macOS-Schlüsselbund / sicheren Speicher deines Geräts)`, `App-Einstellungen, Filter und Snooze-Einstellungen` ] },
          { type: "p", html: `Es finden keine Synchronisationen mit Cloud-Diensten oder externen, von Pingr betriebenen Servern statt.` },
        ] },
        { h: "5. Drittanbieter-Dienste", blocks: [
          { type: "p", html: `Pingr kommuniziert direkt mit den APIs der von dir verbundenen Dritdienste. Jeder Anbieter hat eine eigene Datenschutzerklärung, die die auf seinen Servern gehaltenen Daten regelt:` },
          { type: "ul", items: [ `<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub-Datenschutzerklärung</a>`, `<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google (Gmail) Datenschutzerklärung</a>`, `<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">WhatsApp-Datenschutzerklärung</a>`, `<a href="https://slack.com/trust/privacy/privacy-policy" target="_blank" rel="noopener">Slack-Datenschutzerklärung</a>`, `<a href="https://zammad.com/en/company/privacy" target="_blank" rel="noopener">Zammad-Datenschutzerklärung</a>` ] },
        ] },
        { h: "6. KI-Funktionen", blocks: [ { type: "p", html: `Pingr kann optionale KI-Funktionen anbieten, etwa ein tägliches Briefing oder eine Natursprach-Suche über deinen Benachrichtigungen. Falls aktiviert, wird der zur Bearbeitung deiner Anfrage nötige Inhalt soweit möglich ausschließlich auf dem Gerät verarbeitet. Falls eine KI-Funktion ein Modell eines Drittanbieters erfordert, werden nur die zur Beantwortung deiner Anfrage nötigen Daten gesendet, und sie werden niemals zum Training eines Modells verwendet. KI-Funktionen sind optional.` } ] },
        { h: "7. Analytics und Tracking", blocks: [ { type: "p", html: `Pingr verwendet <strong>keine</strong> Analytics-, Tracking-, Absturzbericht- oder Werbe-SDKs. Es werden keine Nutzungsdaten erhoben oder übertragen.` } ] },
        { h: "8. Datenschutz für Kinder", blocks: [ { type: "p", html: `Die App richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern.` } ] },
        { h: "9. Datenlöschung", blocks: [ { type: "p", html: `Da alle Daten lokal gespeichert werden, kannst du alles, was Pingr speichert, jederzeit über die Einstellungen der App löschen oder die App deinstallieren. Auf keinen externen Servern von uns bleiben Restdaten zurück.` } ] },
        { h: "10. Änderungen dieser Richtlinie", blocks: [ { type: "p", html: `Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.` } ] },
        { h: "11. Kontakt", blocks: [ { type: "p", html: `Wenn du Fragen zu dieser Datenschutzerklärung hast, kontaktiere uns unter <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      description: "Die Bedingungen für die Nutzung von Pingr und den Abschluss von Pingr-Abos.",
      lastUpdated: lastUpdated.de,
      sections: [
        { blocks: [ { type: "lead", html: `Diese Nutzungsbedingungen regeln deine Nutzung von Pingr. Mit dem Herunterladen, der Installation oder der Nutzung der App erklärst du dich mit ihnen einverstanden.` } ] },
        { h: "1. Anerkennung der Bedingungen", blocks: [ { type: "p", html: `Mit dem Herunterladen, Installieren oder Verwenden von Pingr (&bdquo;die App&ldquo;) erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du diesen Bedingungen nicht zustimmst, nutze die App nicht.` } ] },
        { h: "2. Beschreibung des Dienstes", blocks: [ { type: "p", html: `Pingr ist eine macOS-Menüleisten-Anwendung, die Benachrichtigungen von Dritdiensten &mdash; darunter GitHub, Gmail, Zammad, WhatsApp, Slack und andere &mdash; in einer einzigen Oberfläche bündelt. Die App fungiert als Benachrichtigungs-Aggregator und modifiziert oder stört die zugrunde liegenden Dienste nicht.` } ] },
        { h: "3. Pläne, Testzeiträume und Abrechnung", blocks: [
          { type: "p", html: `Pingr wird über folgende Pläne angeboten: eine 14-tägige kostenlose Testphase, gefolgt von optionalen kostenpflichtigen Abos (Lite, Pro und Max). Funktionen und Preise der einzelnen Pläne werden im <a href="/de/#pricing">Preis-Bereich</a> unserer Website angezeigt und können sich ändern.` },
          { type: "ul", items: [ `<strong>Kostenlose Testphase.</strong> Neue Nutzer erhalten eine 14-tägige kostenlose Testphase. Während der Testphase fallen keine Kosten an. Du kannst jederzeit vor Ablauf der Testphase kündigen, um eine Abrechnung zu vermeiden.`, `<strong>Abrechnungszyklus.</strong> Kostenpflichtige Pläne werden monatlich oder jährlich abgerechnet, je nach beim Checkout gewählter Option. Jahrespläne werden im Voraus für das gesamte Jahr abgerechnet.`, `<strong>Automatische Verlängerung.</strong> Abos verlängern sich am Ende jedes Abrechnungszyklus automatisch, sofern nicht vor dem Verlängerungsdatum gekündigt wird.`, `<strong>App-Store-Käufe.</strong> Wenn du über den Apple App Store abonnierst, werden dein Abo und die Abrechnung von Apple unter dessen Bedingungen verwaltet. Apple kann auch Aktions- oder Einführungspreise anbieten.` ] },
          { type: "p", html: `Preise werden in USD ausgewiesen, sofern nicht anders angegeben. Je nach Region können Steuern anfallen.` },
        ] },
        { h: "4. Benutzerkonten und Authentifizierung", blocks: [ { type: "p", html: `Um Pingr zu nutzen, musst du gültige Zugangsdaten oder eine Autorisierung für die zu verbindenden Dritdienste bereitstellen. Du bist für die Vertraulichkeit deiner Zugangsdaten und für alle Aktivitäten unter deinen verbundenen Konten verantwortlich. Pingr speichert deine Zugangsdaten lokal auf deinem Gerät und überträgt sie an keinen anderen Server als die jeweiligen Dritdienst-APIs.` } ] },
        { h: "5. Zulässige Nutzung", blocks: [
          { type: "p", html: `Du stimmst zu, Folgendes zu unterlassen:` },
          { type: "ul", items: [ `Reverse Engineering, Dekompilierung oder Disassemblierung der App`, `Die App für rechtswidrige Zwecke zu nutzen`, `Versuch, unbefugten Zugang zu einem Dritdienst über die App zu erlangen`, `Die App ohne vorherige schriftliche Zustimmung weiterzuverteilen, weiterzuverkaufen oder unterzulizenzieren`, `Die Dritdienst-APIs, mit denen die App sich verbindet, zu missbrauchen, zu überlasten oder zu stören` ] },
        ] },
        { h: "6. Geistiges Eigentum", blocks: [ { type: "p", html: `Die App und ihre originalen Inhalte, Funktionen und Merkmale gehören Pingr und sind durch internationales Urheber-, Marken- und sonstiges geistiges Eigentum geschützt.` } ] },
        { h: "7. Drittanbieter-Dienste", blocks: [ { type: "p", html: `Pingr integriert Dritdienste. Deine Nutzung dieser Dienste unterliegt deren jeweiligen Nutzungsbedingungen und Datenschutzerklärungen. Pingr ist nicht für die Verfügbarkeit, Richtigkeit oder den Inhalt Dritdienste verantwortlich, und angezeigte Benachrichtigungen stammen direkt von diesen.` } ] },
        { h: "8. Kündigung und Beendigung", blocks: [ { type: "p", html: `Du kannst dein Abo jederzeit über die App, den App Store oder die Plattform, über die du abonniert hast, kündigen. Die Kündigung stoppt zukünftige Verlängerungen; du behältst Zugang zu den kostenpflichtigen Funktionen bis zum Ende des laufenden Abrechnungszyklus. Wir können deinen Zugang zur App aussetzen oder beenden, wenn du diese Bedingungen verstößt.` } ] },
        { h: "9. Erstattungen", blocks: [ { type: "p", html: `Die Erstattungsberechtigung ist in unserer separaten <a href="/de/refund">Erstattungsrichtlinie</a> beschrieben. Für App-Store-Käufe werden Erstattungen von Apple gemäß den Apple-Richtlinien abgewickelt.` } ] },
        { h: "10. Gewährleistungsausschluss", blocks: [ { type: "p", html: `Die App wird &bdquo;wie besehen&ldquo; und &bdquo;wie verfügbar&ldquo; ohne jegliche Gewährleistung, weder ausdrücklich noch stillschweigend, bereitgestellt. Wir gewährleisten nicht, dass die App unterbrechungsfrei oder fehlerfrei ist oder dass Benachrichtigungen Dritdienste stets rechtzeitig oder korrekt sind.` } ] },
        { h: "11. Haftungsbeschränkung", blocks: [ { type: "p", html: `In keinem Fall haftet Pingr für indirekte, beiläufige, besondere, Folge- oder Strafschäden, die sich aus oder im Zusammenhang mit deiner Nutzung der App ergeben, einschließlich, aber nicht beschränkt auf verpasste oder verzögerte Benachrichtigungen oder Datenverlust.` } ] },
        { h: "12. Änderungen der Bedingungen", blocks: [ { type: "p", html: `Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht. Die fortgesetzte Nutzung der App nach Änderungen gilt als Zustimmung zu den neuen Bedingungen.` } ] },
        { h: "13. Kontakt", blocks: [ { type: "p", html: `Wenn du Fragen zu diesen Nutzungsbedingungen hast, kontaktiere uns unter <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
    refund: {
      title: "Erstattungsrichtlinie",
      description: "Erstattungsbedingungen für Pingr-Abos und App-Store-Käufe.",
      lastUpdated: lastUpdated.de,
      sections: [
        { blocks: [ { type: "lead", html: `Wir möchten, dass du mit Pingr zufrieden bist. Diese Richtlinie erklärt, wann du eine Erstattung erhältst und wie du sie beantragst.` } ] },
        { h: "1. Kostenlose Testphase", blocks: [ { type: "p", html: `Pingr bietet für seine kostenpflichtigen Pläne eine 14-tägige kostenlose Testphase an. Während der Testphase fallen keine Kosten an. Wenn du vor Ablauf kündigst, wird überhaupt nicht abgerechnet &mdash; eine Erstattung ist dann nicht nötig. Wenn du nicht kündigst, beginnt dein gewählter Plan am Ende der Testphase automatisch mit der Abrechnung.` } ] },
        { h: "2. Abonnements", blocks: [
          { type: "p", html: `Kostenpflichtige Pläne (Lite, Pro und Max) werden monatlich oder jährlich abgerechnet, je nach beim Checkout gewählter Option.` },
          { type: "ul", items: [ `Du kannst jederzeit kündigen, um zukünftige Verlängerungen zu stoppen. Die Kündigung erstattet nicht den laufenden Abrechnungszeitraum.`, `Bei Kündigung behältst du Zugang zu den kostenpflichtigen Funktionen bis zum Ende des bereits bezahlten Abrechnungszyklus.` ] },
        ] },
        { h: "3. Jahrespläne", blocks: [ { type: "p", html: `Jahrespläne werden im Voraus für das gesamte Jahr abgerechnet. Wenn du einen Jahresplan kündigst, behältst du Zugang bis zum Ende des bezahlten Jahres. Nicht genutzte Zeit über den laufenden bezahlten Zeitraum hinaus wird nicht automatisch erstattet &mdash; siehe <strong>Erstattung beantragen</strong> unten für Ermessenserstattungen.` } ] },
        { h: "4. App-Store-Käufe", blocks: [ { type: "p", html: `Wenn du über den Apple App Store abonnierst, werden dein Kauf und eine eventuelle Erstattung von Apple unter dessen Bedingungen und Richtlinien abgewickelt. Pingr kann für die App-Store-Abrechnung direkt keine Erstattungen ausstellen. Um eine Erstattung von Apple zu beantragen, besuche <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>.` } ] },
        { h: "5. Erstattung beantragen", blocks: [
          { type: "p", html: `Für Abos, die direkt von uns abgerechnet werden (auhalb des App Store), prüfen wir Erstattungen von Fall zu Fall, insbesondere:` },
          { type: "ul", items: [ `Wenn dir aufgrund eines offensichtlichen Fehlers unsererseits berechnet wurde`, `Wenn du kurz nach einer Verlängerung vergessen hast zu kündigen und die kostenpflichtigen Funktionen nicht genutzt hast`, `Wenn dies nach dem anwendbaren Verbraucherrecht deines Wohnsitzlandes erforderlich ist` ] },
          { type: "p", html: `Um eine Erstattung zu beantragen, kontaktiere uns unter <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> mit deinen Kontodaten und dem Datum der Abbuchung. Wir bemühen uns, in angemessener Zeit zu antworten.` },
        ] },
        { h: "6. Gesetzliche Rechte", blocks: [ { type: "p", html: `Nichts in dieser Richtlinie berührt gesetzliche Rechte, die du nach den Verbraucherschutzgesetzen deines Wohnsitzlandes haben könntest und die dir unter Umständen über die hier beschriebenen hinaus Anspruch auf Erstattung geben.` } ] },
        { h: "7. Änderungen dieser Richtlinie", blocks: [ { type: "p", html: `Wir können diese Erstattungsrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.` } ] },
        { h: "8. Kontakt", blocks: [ { type: "p", html: `Wenn du Fragen zu dieser Erstattungsrichtlinie hast, kontaktiere uns unter <a href="mailto:info@pingrhub.com">info@pingrhub.com</a>.` } ] },
      ],
    },
  },

  tr: {
    privacy: {
      title: "Gizlilik Politikası",
      description: "Pingr verilerinizi nasıl işler — her şey cihazınızda kalır.",
      lastUpdated: lastUpdated.tr,
      sections: [
        { blocks: [ { type: "lead", html: `Pingr, gizlilik öncelikli tasarlanmıştır. Bildirimleriniz, kimlik bilgileriniz ve tercihleriniz cihazınızdan asla çıkmaz. Bu politika; uygulamanın hangi verilere eriştiğini, bunların nasıl kullanıldığını ve nerede saklandığını açıklar.` } ] },
        { h: "1. Genel Bakış", blocks: [ { type: "p", html: `Pingr (&ldquo;Uygulama&rdquo;), bağladığınız üçüncü taraf hizmetlerin bildirimlerini tek bir yerde toplayan bir macOS menü çubuğu uygulamasıdır. Uygulama tamamen cihaz üzerinde çalışacak şekilde tasarlanmıştır &mdash; hesız, bulut senkronizasyonu yok, analitik yok.` } ] },
        { h: "2. Toplamadığımız Veriler", blocks: [
          { type: "p", html: `Pingr, bizim işlettiğimiz sunucularda hiçbir kişisel veriyi <strong>toplamaz, iletmez veya saklamaz</strong>. Uygulama özellikle şunları <strong>yapmaz</strong>:` },
          { type: "ul", items: [ `Analitik, takip veya telemetri çalıştırmak`, `Verilerinizi bir bulut hesabına senkronize etmek`, `Bildirim içeriğinizi veya kimlik bilgilerinizi, bağladığınız üçüncü taraf hizmetler dışındaki herhangi bir sunucuya göndermek`, `Kullanımınızı profillenmesine tabi tutmak veya verileri üçüncü taraflara satmak` ] },
        ] },
        { h: "3. Bağlı Hizmetlerden Erişilen Veriler", blocks: [
          { type: "p", html: `Bildirimleri gösterebilmek için Uygulama, bağladığınız üçüncü taraf hizmetlerden, her sağlayıcının resmi API'si üzerinden güvenli HTTPS bağlantılarıyla veri okur. Erişilen veriler yalnızca bildirimleri görüntülemek için gerekli olanlarla sınırlıdır:` },
          { type: "ul", items: [ `<strong>GitHub</strong> &mdash; bildirimler, repository meta verileri ve kullanıcı profiliniz`, `<strong>Gmail</strong> &mdash; bildirim amacıyla e-posta meta verileri (konu, gönderen, tarih)`, `<strong>Zammad</strong> &mdash; bilet bildirimleri ve durum güncellemeleri`, `<strong>WhatsApp, Slack, Discord ve diğerleri</strong> &mdash; mesaj bildirimleri (desteklendiği durumlarda)` ] },
          { type: "p", html: `Bu veriler talep üzerine çekilir, bildirim olarak görüntülenir ve bildirim geçmişinizde yerel olarak saklanır. Asla sunucularımız üzerinden aktarılmaz.` },
        ] },
        { h: "4. Yerel Veri Depolama", blocks: [
          { type: "p", html: `Tüm veriler cihazınızda, cihaz üzerindeki bir SQLite veritabanında saklanır. Bunlar şunları içerir:` },
          { type: "ul", items: [ `Bildirim geçmişi ve okundu/okunmadı durumu`, `API belirteçleri ve OAuth kimlik bilgileri (cihazınızdaki macOS Anahtarlık'ta / güvenli depolamada saklanır)`, `Uygulama tercihleri, süzgeçler ve erteleme ayarları` ] },
          { type: "p", html: `Pingr tarafından işletilen bulut hizmetlerine veya harici sunuculara hiçbir veri senkronize edilmez.` },
        ] },
        { h: "5. Üçüncü Taraf Hizmetler", blocks: [
          { type: "p", html: `Pingr, bağladığınız üçüncü taraf hizmetlerin API'leriyle doğrudan iletişim kurar. Her sağlayıcının, kendi sunucularındaki verileri yöneten ayrı bir gizlilik politikası vardır:` },
          { type: "ul", items: [ `<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Gizlilik Politikası</a>`, `<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google (Gmail) Gizlilik Politikası</a>`, `<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">WhatsApp Gizlilik Politikası</a>`, `<a href="https://slack.com/trust/privacy/privacy-policy" target="_blank" rel="noopener">Slack Gizlilik Politikası</a>`, `<a href="https://zammad.com/en/company/privacy" target="_blank" rel="noopener">Zammad Gizlilik Politikası</a>` ] },
        ] },
        { h: "6. Yapay Zekâ Özellikleri", blocks: [ { type: "p", html: `Pingr; bildirimleriniz üzerinde günlük özet veya doğal dil araması gibi isteğe bağlı yapay zekâ özellikleri sunabilir. Etkinleştirildiğinde, isteğinizi yerine getirmek için gereken içerik mümkün olduğunca yalnızca cihaz üzerinde işlenir. Bir yapay zekâ özelliği üçüncü taraf model gerektiriyorsa, yalnızca isteğinize yanıt vermek için gereken en az veri gönderilir ve bu veriler asla hiçbir modeli eğitmek için kullanılmaz. Yapay zekâ özellikleri isteğe bağlıdır.` } ] },
        { h: "7. Analitik ve Takip", blocks: [ { type: "p", html: `Pingr hiçbir analitik, takip, çökme raporlama veya reklam SDK'sı <strong>kullanmaz</strong>. Hiçbir kullanım verisi toplanmaz veya iletilmez.` } ] },
        { h: "8. Çocukların Gizliliği", blocks: [ { type: "p", html: `Uygulama 13 yaşın altındaki çocukların kullanımı için tasarlanmamıştır. Bilerek çocuklardan kişisel bilgi toplamıyoruz.` } ] },
        { h: "9. Veri Silme", blocks: [ { type: "p", html: `Tüm veriler yerel olarak saklandığından, Pingr'ın tuttuğu her şeyi istediğiniz zaman Uygulama ayarlarından veya Uygulamayı kaldırarak silebilirsiniz. Bizim işlettiğimiz hiçbir harici sunucuda artık veri kalmaz.` } ] },
        { h: "10. Bu Politikadaki Değişiklikler", blocks: [ { type: "p", html: `Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada, güncellenmiş bir revizyon tarihiyle yayımlanacaktır.` } ] },
        { h: "11. İletişim", blocks: [ { type: "p", html: `Bu Gizlilik Politikası hakkında sorularınız varsa bize <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> adresinden ulaşın.` } ] },
      ],
    },
    terms: {
      title: "Kullanım Şartları",
      description: "Pingr'ı kullanma ve Pingr planlarına abone olma koşulları.",
      lastUpdated: lastUpdated.tr,
      sections: [
        { blocks: [ { type: "lead", html: `Bu Kullanım Şartları, Pingr'ı kullanımınızı düzenler. Uygulamayı indirerek, kurarak veya kullanarak bu şartlara bağlı kalmayı kabul edersiniz.` } ] },
        { h: "1. Şartların Kabulü", blocks: [ { type: "p", html: `Pingr'ı (&ldquo;Uygulama&rdquo;) indirerek, kurarak veya kullanarak bu Kullanım Şartları'na bağlı kalmayı kabul edersiniz. Bu şartları kabul etmiyorsanız Uygulamayı kullanmayın.` } ] },
        { h: "2. Hizmetin Açıklaması", blocks: [ { type: "p", html: `Pingr; GitHub, Gmail, Zammad, WhatsApp, Slack ve diğerleri dahil üçüncü taraf hizmetlerin bildirimlerini tek bir arayüzde toplayan bir macOS menü çubuğu uygulamasıdır. Uygulama bir bildirim toplayıcı işlevi görür ve temeldeki hizmetleri değiştirmez veya müdahale etmez.` } ] },
        { h: "3. Planlar, Deneme Süreleri ve Faturalandırma", blocks: [
          { type: "p", html: `Pingr şu planlarla sunulur: 14 günlük ücretsiz deneme ve ardından isteğe bağlı ücretli abonelikler (Lite, Pro ve Max). Her planın özellikleri ve fiyatları web sitemizin <a href="/tr/#pricing">fiyatlandırma bölümünde</a> gösterilir ve zaman zaman değişebilir.` },
          { type: "ul", items: [ `<strong>Ücretsiz deneme.</strong> Yeni kullanıcılar 14 günlük ücretsiz deneme hakkına sahiptir. Deneme sırasında ücretlendirilmezsiniz. Faturalandırılmamak için deneme süresi sona ermeden önce istediğiniz zaman iptal edebilirsiniz.`, `<strong>Faturalandırma dönemi.</strong> Ücretli planlar, ödeme sırasında seçtiğiniz seçeneğe bağlı olarak aylık veya yıllık faturalandırılır. Yıllık planlar, tüm yıl için peşin faturalandırılır.`, `<strong>Otomatik yenileme.</strong> Abonelikler, yenileme tarihinden önce iptal edilmedikçe her faturalandırma döneminin sonunda otomatik olarak yenilenir.`, `<strong>App Store satın alımları.</strong> Apple App Store üzerinden abone olduğunuzda aboneliğiniz ve faturalandırmanız Apple'ın şartları kapsamında Apple tarafından yönetilir. Apple ayrıca tanıtım veya giriş fiyatları sunabilir.` ] },
          { type: "p", html: `Fiyatlar aksi belirtilmedikçe USD cinsinden gösterilir. Bölgenize bağlı olarak vergiler uygulanabilir.` },
        ] },
        { h: "4. Kullanıcı Hesapları ve Kimlik Doğrulama", blocks: [ { type: "p", html: `Pingr'ı kullanmak için bağlamak istediğiniz üçüncü taraf hizmetler için geçerli kimlik bilgileri veya yetkilendirme sağlamalısınız. Kimlik bilgilerinizin gizliliğini korumak ve bağlı hesaplarınız altındaki tüm etkinliklerden siz sorumlusunuz. Pingr kimlik bilgilerinizi cihazınızda yerel olarak saklar ve bunları ilgili üçüncü taraf hizmet API'leri dışındaki hiçbir sunucuya iletmez.` } ] },
        { h: "5. Kabul Edilebilir Kullanım", blocks: [
          { type: "p", html: `Şunları yapmamayı kabul edersiniz:` },
          { type: "ul", items: [ `Uygulamayı tersine mühendislik yapmak, derlemek veya ayrıştırmak`, `Uygulamayı herhangi bir yasa dışı amaçla kullanmak`, `Uygulama üzerinden herhangi bir üçüncü taraf hizmete yetkisiz erişim elde etmeye çalışmak`, `Önceden yazılı izin olmadan Uygulamayı yeniden dağıtmak, satmak veya alt lisanslamak`, `Uygulamanın bağlandığı üçüncü taraf API'leri kötüye kullanmak, aşırı yüklemek veya bunlara müdahale etmek` ] },
        ] },
        { h: "6. Fikri Mülkiyet", blocks: [ { type: "p", html: `Uygulama ve özgün içeriği, özellikleri ve işlevleri Pingr'a aittir ve uluslararası telif hakkı, marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır.` } ] },
        { h: "7. Üçüncü Taraf Hizmetler", blocks: [ { type: "p", html: `Pingr üçüncü taraf hizmetlerle entegre olur. Bu hizmetleri kullanımınız, kendi kullanım şartları ve gizlilik politikalarına tabidir. Pingr üçüncü taraf hizmetlerin kullanılabilirliği, doğruluğu veya içeriğinden sorumlu değildir ve gösterilen bildirimler doğrudan bu hizmetlerden gelir.` } ] },
        { h: "8. İptal ve Sonlandırma", blocks: [ { type: "p", html: `Aboneliğinizi istediğiniz zaman Uygulamadan, App Store'dan veya abone olduğunuz platformdan iptal edebilirsiniz. İptal, gelecekteki yenilemeleri durdurur; ücretli özelliklere erişiminizi geçerli faturalandırma döneminin sonuna kadar sürdürürsünüz. Bu Şartları ihlal ederseniz Uygulamaya erişiminizi askıya alabilir veya sonlandırabiliriz.` } ] },
        { h: "9. İadeler", blocks: [ { type: "p", html: `İade uygunluğu, ayrı <a href="/tr/refund">İade Politikamızda</a> açıklanmıştır. App Store satın alımları için iadeler, Apple'ın politikaları doğrultusunda Apple tarafından işlenir.` } ] },
        { h: "10. Garanti Reddi", blocks: [ { type: "p", html: `Uygulama &ldquo;olduğu gibi&rdquo; ve &ldquo;kullanılabilir olduğu şekilde&rdquo;, açık veya zımni herhangi bir garanti olmaksızın sunulur. Uygulamanın kesintisiz veya hatasız olacağını veya üçüncü taraf hizmetlerden gelen bildirimlerin her zaman zamanında veya doğru olacağını garanti etmiyoruz.` } ] },
        { h: "11. Sorumluluğun Sınırlandırılması", blocks: [ { type: "p", html: `Pingr; Uygulamayı kullanmanızdan kaynaklanan veya bununla ilgili hiçbir dolaylı, arızi, özel, sonuçsal veya cezai zarardan sorumlu tutulamaz; bunlar arasında kaçırılan veya geciken bildirimler veya veri kaybı da bulunur.` } ] },
        { h: "12. Şartlardaki Değişiklikler", blocks: [ { type: "p", html: `Bu şartları istediğimiz zaman değiştirme hakkımızı saklı tutarız. Değişiklikler bu sayfada, güncellenmiş bir revizyon tarihiyle yayımlanacaktır. Değişikliklerden sonra Uygulamayı kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.` } ] },
        { h: "13. İletişim", blocks: [ { type: "p", html: `Bu Kullanım Şartları hakkında sorularınız varsa bize <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> adresinden ulaşın.` } ] },
      ],
    },
    refund: {
      title: "İade Politikası",
      description: "Pingr abonelikleri ve App Store satın alımları için iade koşulları.",
      lastUpdated: lastUpdated.tr,
      sections: [
        { blocks: [ { type: "lead", html: `Pingr'dan memnun kalmanızı istiyoruz. Bu politika, ne zaman iade alabileceğinizi ve nasıl talep edeceğinizi açıklar.` } ] },
        { h: "1. Ücretsiz Deneme", blocks: [ { type: "p", html: `Pingr, ücretli planlarında 14 günlük ücretsiz deneme sunar. Deneme süresi boyunca ücretlendirilmezsiniz. Deneme süresi sona ermeden önce iptal ederseniz hiç faturalandırılmazsınız, dolayısıyla iade gerekmez. İptal etmezseniz, seçtiğiniz plan deneme süresi sona erdiğinde otomatik olarak faturalandırmaya başlar.` } ] },
        { h: "2. Abonelikler", blocks: [
          { type: "p", html: `Ücretli planlar (Lite, Pro ve Max), ödeme sırasında seçtiğiniz seçeneğe bağlı olarak aylık veya yıllık faturalandırılır.` },
          { type: "ul", items: [ `Gelecekteki yenilemeleri durdurmak için istediğiniz zaman iptal edebilirsiniz. İptal, geçerli faturalandırma dönemini iade etmez.`, `İptal ettiğinizde, zaten ödemiş olduğunuz faturalandırma döneminin sonuna kadar ücretli özelliklere erişiminizi sürdürürsünüz.` ] },
        ] },
        { h: "3. Yıllık Planlar", blocks: [ { type: "p", html: `Yıllık planlar, tüm yıl için peşin faturalandırılır. Yıllık bir planı iptal ederseniz, ödenen yılın sonuna kadar erişiminizi sürdürürsünüz. Geçerli ödenmiş dönem ötesindeki kullanılmamış süre otomatik olarak iade edilmez &mdash; inisiyatifli iadeler için aşağıdaki <strong>İade Talep Etme</strong> bölümüne bakın.` } ] },
        { h: "4. App Store Satın Alımları", blocks: [ { type: "p", html: `Apple App Store üzerinden abone olduğunuzda satın alımınız ve olası iadeniz, Apple'ın şartları ve politikaları kapsamında Apple tarafından işlenir. Pingr, App Store faturalandırması için doğrudan iade çıkaramaz. Apple'dan iade talep etmek için <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a> adresini ziyaret edin.` } ] },
        { h: "5. İade Talep Etme", blocks: [
          { type: "p", html: `Doğrudan bizim faturalandırdığımız (App Store dışındaki) abonelikler için iade taleplerini örnek olay bazında değerlendiririz; özellikle:` },
          { type: "ul", items: [ `Bizim tarafımızdaki açık bir hata sonucu sizden ücret alındıysa`, `Bir yenilemeden kısa süre sonra iptal etmeyi unuttuysanız ve ücretli özellikleri kullanmadıysanız`, `İkamet ettiğiniz ülkedeki yürürlükteki tüketici mevzuatı bunu gerektiriyorsa` ] },
          { type: "p", html: `İade talep etmek için hesap bilgileriniz ve ücretin tahsil edildiği tarihle birlikte bize <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> adresinden ulaşın. Makul bir süre içinde yanıt vermeye özen gösteririz.` },
        ] },
        { h: "6. Yasal Haklar", blocks: [ { type: "p", html: `Bu politikadaki hiçbir şey, ikamet ettiğiniz ülkenin tüketici koruma yasaları kapsamında sahip olabileceğiniz ve burada açıklananların ötesinde iade hakkı tanıyabilecek yasal haklarınızı etkilemez.` } ] },
        { h: "7. Bu Politikadaki Değişiklikler", blocks: [ { type: "p", html: `Bu İade Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada, güncellenmiş bir revizyon tarihiyle yayımlanacaktır.` } ] },
        { h: "8. İletişim", blocks: [ { type: "p", html: `Bu İade Politikası hakkında sorularınız varsa bize <a href="mailto:info@pingrhub.com">info@pingrhub.com</a> adresinden ulaşın.` } ] },
      ],
    },
  },
};

export function getLegalPage(lang: Lang, doc: LegalDoc): LegalPage {
  return content[lang][doc];
}
