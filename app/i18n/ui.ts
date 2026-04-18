export type Lang = 'es' | 'en'

export const ui = {
  es: {
    meta: {
      title: 'Marco Limache — SRE · Arquitecto Cloud · DevOps',
      description:
        'Marco Limache — SRE, Arquitecto Cloud e Ingeniero DevOps. Fundador de Trevia. Basado en Huancayo, Perú.',
      locale: 'es_PE',
    },
    nav: {
      about: 'Sobre mí',
      stack: 'Stack',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certs: 'Certs',
      blog: 'Blog',
    },
    hero: {
      sectionLabel: '01 / Marco Limache',
      line1: 'Infraestructura',
      line2: 'que sostiene.',
      line3: 'A cualquier escala.',
      roles: ['SRE', 'Arquitecto Cloud', 'Ingeniero DevOps'],
      introPre: '8 años diseñando infraestructura crítica a escala. Fundador de',
      introPost: 'Basado en Huancayo, Perú.',
      cta: 'Leer más',
      status: 'Disponible para consultoría',
    },
    about: {
      sectionLabel: '02 / Manifiesto',
      engineerTitle1: 'El',
      engineerTitle2: 'Ingeniero.',
      personTitle1: 'La',
      personTitle2: 'Persona.',
      engineerP1:
        'Pasé 8 años resolviendo problemas que la mayoría no ve — los que aparecen a las 2am, los que cuestan miles por minuto, los que ninguna alerta te advirtió.',
      engineerP2:
        'Mi dominio está donde la confiabilidad se encuentra con la arquitectura: clusters de Kubernetes con cargas críticas, plataformas multicloud que no conocen el horario comercial, e infraestructura que escala antes de que se lo pidas.',
      engineerP3Pre: 'Fundé',
      engineerP3Post:
        'porque creo que la buena consultoría técnica transfiere conocimiento — no crea dependencia.',
      personP1:
        'Soy Danzante de Tunantada — una danza andina tradicional de Jauja, Perú. La disciplina, el esfuerzo colectivo, el orgullo de llevar una identidad cultural hacia adelante: eso no está separado de mi ingeniería. Es el mismo músculo.',
      personP2:
        'Mi filosofía es directa: primero la familia, crecimiento constante, y la búsqueda incansable de ser la mejor versión de uno mismo. La libertad — financiera, creativa, geográfica — es el objetivo.',
      quoteLine1: '"Construye sistemas como si los fueras a mantener para siempre.',
      quoteLine2: 'Vive como si no."',
    },
    stack: {
      sectionLabel: '03 / Stack',
      heading: 'Herramientas del oficio.',
      groups: [
        { category: 'Orquestación', items: ['Kubernetes', 'Helm', 'ArgoCD', 'Istio'] },
        { category: 'Nube', items: ['AWS', 'Azure', 'Cloudflare'] },
        { category: 'Observabilidad', items: ['Datadog', 'Dynatrace', 'New Relic', 'SumoLogic'] },
        { category: 'IaC y Seguridad', items: ['Terraform', 'HCP Vault', 'OPA / Gatekeeper'] },
        { category: 'CI / CD', items: ['GitHub Actions', 'GitLab CI', 'ArgoCD'] },
        { category: 'Lenguajes', items: ['Go', 'Python', 'Bash / Shell', 'SQL'] },
      ],
    },
    experience: {
      sectionLabel: '04 / Experiencia',
      headingLine1: '8 años. Sistemas reales.',
      headingLine2: 'Escala real.',
      items: [
        {
          period: '2023 — Presente',
          company: 'Trevia',
          role: 'Fundador y Arquitecto Cloud',
          impact:
            'Construyendo una firma de consultoría técnica enfocada en infraestructura cloud en LATAM.',
        },
        {
          period: '2021 — 2023',
          company: 'Belcorp',
          role: 'SRE Senior y Gerente de SRE',
          impact:
            'Lideré equipo SRE de 20+. Despliegues con Terraform, AWS, K8s, DevOps (Jenkins, GH Actions) y observabilidad para 20+ proyectos.',
        },
        {
          period: '2020 — 2021',
          company: 'Lumen Technologies',
          role: 'Arquitecto de Soluciones Multicloud',
          impact:
            'Lideré operaciones del equipo Cloud y automatización. Diseñé y desplegué arquitecturas complejas en AWS y Azure.',
        },
        {
          period: '2018 — 2020',
          company: 'Business Analytics SAC',
          role: 'Arquitecto de Soluciones Cloud',
          impact:
            'Lideré operaciones de infraestructura. Diseñé arquitecturas Azure para desarrollo, BI y ciencia de datos.',
        },
        {
          period: '2017 — 2018',
          company: 'ITG Solutions',
          role: 'Consultor de Operaciones Cloud',
          impact:
            'Analicé, diseñé y desplegué arquitecturas migrando entornos on-premise a la nube en 15+ proyectos.',
        },
      ],
    },
    projects: {
      sectionLabel: '05 / Proyectos Seleccionados',
      headingLine1: 'Problemas resueltos.',
      headingLine2: 'Sistemas entregados.',
      labelProblem: 'Problema',
      labelDecision: 'Decisión',
      labelResult: 'Resultado',
      items: [
        {
          number: '01',
          title: 'Aplicación Azure de Alto Tráfico y SRE',
          tags: ['Azure', '.NET', 'SRE', 'SLI/SLO'],
          problem:
            'Una aplicación con 100k+ solicitudes diarias carecía de visibilidad profunda y prácticas operativas formalizadas.',
          decision:
            'Implementé un framework SRE completo con SLIs, SLOs y error budgets definidos, manteniendo el codebase en .NET.',
          result:
            'Visibilidad total del sistema y mayor confiabilidad mediante gestión estricta de error budgets y monitoreo.',
        },
        {
          number: '02',
          title: 'Dashboard de Observabilidad a Medida y Refactor en Go',
          tags: ['Go', 'Kubernetes', 'Datadog', 'Terraform'],
          problem:
            'Se requería una vista centralizada de métricas personalizadas de Terraform Cloud, Prometheus y Grafana adaptadas para Datadog.',
          decision:
            'Refactoricé la aplicación en Go para agregar métricas y desplegué la infraestructura resultante en Kubernetes.',
          result:
            'Integración fluida de métricas en Datadog, con un dashboard unificado y robusto para observabilidad.',
        },
        {
          number: '03',
          title: 'Arquitectura Zero-Trust de Secretos con Terraform',
          tags: ['Terraform', 'Vault', 'Zero Trust', 'Security'],
          problem:
            'Los secretos estaban expuestos en los state files de Terraform, representando una vulnerabilidad de seguridad significativa.',
          decision:
            'Diseñé una arquitectura zero-trust usando Vault como única fuente de verdad para secretos efímeros sin atributos.',
          result:
            'Secretos enmascarados en todos los states de Terraform, mejorando drásticamente la seguridad del sistema.',
        },
        {
          number: '04',
          title: 'Agente SRE Autónomo con IA',
          tags: ['AI', 'Azure', 'Claude', 'MCP'],
          problem:
            'Las tareas rutinarias de SRE, análisis de logs y monitoreo de métricas en Azure requerían demasiado esfuerzo manual.',
          decision:
            'Desarrollé un agente SRE autónomo usando Claude MCPs y skills personalizados para gestionar logs, insights y métricas.',
          result:
            'Productividad del equipo aumentada significativamente al automatizar flujos SRE complejos y resolución de incidencias.',
        },
        {
          number: '05',
          title: 'Terraformización Integral de la Nube',
          tags: ['AWS', 'GitLab', 'Terraform', 'Datadog'],
          problem:
            'La gestión manual y fragmentada de infraestructura en AWS, GitLab y herramientas de tracking generaba ineficiencias operativas.',
          decision:
            'Ejecuté una terraformización completa de la infraestructura AWS, recursos GitLab e integraciones con Vault/Datadog.',
          result:
            'Infraestructura completamente codificada y reproducible, sin impacto para los usuarios finales durante la transición.',
        },
      ],
    },
    certs: {
      sectionLabel: '07 / Certificaciones',
      headingLine1: 'Credenciales obtenidas.',
      headingLine2: 'Conocimiento probado.',
      groups: [
        {
          category: 'Kubernetes',
          certs: [
            { name: 'CKA: Certified Kubernetes Administrator', issued: '2022' },
            { name: 'ICA: Istio Certified Associate (Prep)', issued: '2026' },
          ],
        },
        {
          category: 'Amazon Web Services',
          certs: [
            { name: 'Solutions Architect – Associate', issued: '2020' },
            { name: 'SysOps Administrator – Associate', issued: '2020' },
            { name: 'Developer – Associate', issued: '2021' },
          ],
        },
        {
          category: 'Microsoft Azure',
          certs: [
            { name: 'Azure Administrator Associate', issued: '2019' },
            { name: 'Azure Solutions Architect Expert', issued: '2021' },
          ],
        },
        {
          category: 'Microsoft (Legado)',
          certs: [
            { name: 'MCSA: Cloud Platform', issued: '2018' },
            { name: 'MCSA: Windows Server 2016', issued: '2018' },
            { name: 'MCSE: Cloud Platform & Infrastructure', issued: '2018' },
          ],
        },
        {
          category: 'IaC y Observabilidad',
          certs: [
            { name: 'HashiCorp Certified: Terraform Associate', issued: '2021' },
            { name: 'New Relic Full Stack Observability Practitioner', issued: '2021' },
          ],
        },
        {
          category: 'Redes y Académico',
          certs: [
            { name: 'Cisco CCENT', issued: '2017' },
            { name: 'IELTS C1 (7.0)', issued: '2023' },
            { name: 'WES: Verified International Qualifications', issued: '2022' },
          ],
        },
      ],
    },
    blog: {
      sectionLabel: '06 / Escritura',
      headingLine1: 'Escritura técnica.',
      headingLine2: 'Opiniones honestas.',
      allPosts: 'Todos los artículos',
      empty: 'Primer artículo próximamente.',
    },
    contact: {
      sectionLabel: '08 / Contacto',
      headingLine1: 'Construyamos',
      headingLine2: 'algo que',
      headingLine3: 'perdure.',
      description:
        'Disponible para consultoría de infraestructura, revisiones de arquitectura cloud y proyectos de ingeniería de plataformas.',
    },
    footer: {
      status: 'Disponible para consultoría',
      location: 'Basado en Huancayo, Perú',
    },
  },

  en: {
    meta: {
      title: 'Marco Limache — SRE · Cloud Architect · DevOps',
      description:
        'Marco Limache — SRE, Cloud Architect & DevOps Engineer. Founder of Trevia. Based in Huancayo, Peru.',
      locale: 'en_US',
    },
    nav: {
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      certs: 'Certs',
      blog: 'Blog',
    },
    hero: {
      sectionLabel: '01 / Marco Limache',
      line1: 'Infrastructure',
      line2: 'that holds.',
      line3: 'At any scale.',
      roles: ['SRE', 'Cloud Architect', 'DevOps Engineer'],
      introPre: '8 years designing critical infrastructure at scale. Founder of',
      introPost: 'Based in Huancayo, Peru.',
      cta: 'Read more',
      status: 'Available for consulting',
    },
    about: {
      sectionLabel: '02 / Manifesto',
      engineerTitle1: 'The',
      engineerTitle2: 'Engineer.',
      personTitle1: 'The',
      personTitle2: 'Person.',
      engineerP1:
        "I've spent 8 years solving problems most people don't see — the ones that surface at 2am, the ones that cost thousands per minute, the ones no alert warned you about.",
      engineerP2:
        "My domain is where reliability meets architecture: Kubernetes clusters running critical workloads, multi-cloud platforms that don't care about business hours, and infrastructure that scales before you ask it to.",
      engineerP3Pre: 'I founded',
      engineerP3Post:
        "because I believe good technical consulting transfers knowledge — it doesn't create dependency.",
      personP1:
        "I'm a Danzante de Tunantada — a traditional Andean dance from Jauja, Peru. The discipline, the collective effort, the pride of carrying a cultural identity forward: that's not separate from my engineering. It's the same muscle.",
      personP2:
        'My philosophy is straightforward: family first, constant growth, and the relentless pursuit of becoming the best version of yourself. Freedom — financial, creative, geographical — is the goal.',
      quoteLine1: '"Build systems like you\'ll maintain them forever.',
      quoteLine2: 'Live like you won\'t."',
    },
    stack: {
      sectionLabel: '03 / Stack',
      heading: 'Tools of the trade.',
      groups: [
        { category: 'Orchestration', items: ['Kubernetes', 'Helm', 'ArgoCD', 'Istio'] },
        { category: 'Cloud', items: ['AWS', 'Azure', 'Cloudflare'] },
        { category: 'Observability', items: ['Datadog', 'Dynatrace', 'New Relic', 'SumoLogic'] },
        { category: 'IaC & Security', items: ['Terraform', 'HCP Vault', 'OPA / Gatekeeper'] },
        { category: 'CI / CD', items: ['GitHub Actions', 'GitLab CI', 'ArgoCD'] },
        { category: 'Languages', items: ['Go', 'Python', 'Bash / Shell', 'SQL'] },
      ],
    },
    experience: {
      sectionLabel: '04 / Experience',
      headingLine1: '8 years. Real systems.',
      headingLine2: 'Real scale.',
      items: [
        {
          period: '2023 — Present',
          company: 'Trevia',
          role: 'Founder & Cloud Architect',
          impact: 'Building a technical consulting firm focused on cloud infrastructure in LATAM.',
        },
        {
          period: '2021 — 2023',
          company: 'Belcorp',
          role: 'Senior SRE & SRE Manager',
          impact:
            'Managed SRE team of 20+. Led infra deployment (Terraform, AWS, K8s), DevOps (Jenkins, GH Actions), and observability for 20+ projects.',
        },
        {
          period: '2020 — 2021',
          company: 'Lumen Technologies',
          role: 'Multicloud Solutions Architect',
          impact:
            'Led Cloud team operations and automated processes. Designed and deployed complex AWS and Azure architectures.',
        },
        {
          period: '2018 — 2020',
          company: 'Business Analytics SAC',
          role: 'Cloud Solutions Architect',
          impact:
            'Led tech infrastructure operations. Designed Azure cloud architectures for development, business intelligence, and data science.',
        },
        {
          period: '2017 — 2018',
          company: 'ITG Solutions',
          role: 'Cloud Operations Consultant',
          impact:
            'Analyzed, designed, and deployed architectures migrating on-premise environments to the cloud across 15+ projects.',
        },
      ],
    },
    projects: {
      sectionLabel: '05 / Selected Projects',
      headingLine1: 'Problems solved.',
      headingLine2: 'Systems shipped.',
      labelProblem: 'Problem',
      labelDecision: 'Decision',
      labelResult: 'Result',
      items: [
        {
          number: '01',
          title: 'High-Traffic Azure Application & SRE',
          tags: ['Azure', '.NET', 'SRE', 'SLI/SLO'],
          problem:
            'An application handling 100k+ daily requests lacked deep visibility and formalized operational practices.',
          decision:
            'Adopted a full SRE framework with defined SLIs, SLOs, and error budgets, while maintaining the .NET codebase.',
          result:
            'Achieved full system visibility and improved reliability through strict error budget management and monitoring.',
        },
        {
          number: '02',
          title: 'Custom Observability Dashboard & Go Refactor',
          tags: ['Go', 'Kubernetes', 'Datadog', 'Terraform'],
          problem:
            'Needed a centralized view of custom Terraform Cloud, Prometheus, and Grafana metrics adapted for Datadog.',
          decision:
            'Fully refactored the application in Go to aggregate metrics and deployed the resulting infrastructure on Kubernetes.',
          result:
            'Seamless integration of custom metrics into Datadog, providing a robust, unified dashboard for observability.',
        },
        {
          number: '03',
          title: 'Zero-Trust Terraform Secrets Architecture',
          tags: ['Terraform', 'Vault', 'Zero Trust', 'Security'],
          problem:
            'Secrets were exposed in Terraform state files, presenting a significant security vulnerability.',
          decision:
            'Engineered a zero-trust architecture using Vault as a single source of truth for ephemeral, attribute-free secrets.',
          result:
            'Successfully masked secrets across all Terraform states, dramatically tightening system security.',
        },
        {
          number: '04',
          title: 'Autonomous AI-Powered SRE Agent',
          tags: ['AI', 'Azure', 'Claude', 'MCP'],
          problem:
            'Routine SRE tasks, log analysis, and metric monitoring in Azure required excessive manual effort and time.',
          decision:
            'Developed an autonomous SRE agent utilizing Claude MCPs and customized skills to handle logs, insights, and metrics.',
          result:
            'Significantly boosted team productivity by automating complex SRE workflows and issue resolution natively in Azure.',
        },
        {
          number: '05',
          title: 'Comprehensive Cloud Terraformization',
          tags: ['AWS', 'GitLab', 'Terraform', 'Datadog'],
          problem:
            'Manual and fragmented infrastructure management across AWS, GitLab, and tracking tools led to operational inefficiencies.',
          decision:
            'Executed a comprehensive terraformization of AWS cloud infrastructure, GitLab resources, and Vault/Datadog integrations.',
          result:
            'Achieved fully codified, reproducible infrastructure with zero impact on end-users during the transition.',
        },
      ],
    },
    certs: {
      sectionLabel: '07 / Certifications',
      headingLine1: 'Credentials earned.',
      headingLine2: 'Knowledge proven.',
      groups: [
        {
          category: 'Kubernetes',
          certs: [
            { name: 'CKA: Certified Kubernetes Administrator', issued: '2022' },
            { name: 'ICA: Istio Certified Associate (Prep)', issued: '2026' },
          ],
        },
        {
          category: 'Amazon Web Services',
          certs: [
            { name: 'Solutions Architect – Associate', issued: '2020' },
            { name: 'SysOps Administrator – Associate', issued: '2020' },
            { name: 'Developer – Associate', issued: '2021' },
          ],
        },
        {
          category: 'Microsoft Azure',
          certs: [
            { name: 'Azure Administrator Associate', issued: '2019' },
            { name: 'Azure Solutions Architect Expert', issued: '2021' },
          ],
        },
        {
          category: 'Microsoft (Legacy)',
          certs: [
            { name: 'MCSA: Cloud Platform', issued: '2018' },
            { name: 'MCSA: Windows Server 2016', issued: '2018' },
            { name: 'MCSE: Cloud Platform & Infrastructure', issued: '2018' },
          ],
        },
        {
          category: 'IaC & Observability',
          certs: [
            { name: 'HashiCorp Certified: Terraform Associate', issued: '2021' },
            { name: 'New Relic Full Stack Observability Practitioner', issued: '2021' },
          ],
        },
        {
          category: 'Networking & Academic',
          certs: [
            { name: 'Cisco CCENT', issued: '2017' },
            { name: 'IELTS C1 (7.0)', issued: '2023' },
            { name: 'WES: Verified International Qualifications', issued: '2022' },
          ],
        },
      ],
    },
    blog: {
      sectionLabel: '06 / Writing',
      headingLine1: 'Technical writing.',
      headingLine2: 'Honest opinions.',
      allPosts: 'All posts',
      empty: 'First post coming soon.',
    },
    contact: {
      sectionLabel: '08 / Contact',
      headingLine1: "Let's build",
      headingLine2: 'something',
      headingLine3: 'that holds.',
      description:
        'Available for infrastructure consulting, cloud architecture reviews, and platform engineering engagements.',
    },
    footer: {
      status: 'Available for consulting',
      location: 'Based in Huancayo, Peru',
    },
  },
} as const
