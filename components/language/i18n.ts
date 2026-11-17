export const dictionaries = {
  EN: {
    homepage: {
      hero: {
        h1: "DIPHTONG",
        tagline: "Your web development partner.",
        textone: "You stay close to your clients.",
        texttwo: "We move their web projects forward, right by your side.",
        collabbutton: "How we work together",
        contactbutton: "Discuss a project",
      },

      services: {
        eyebrow: "Your starting point / How we help",
        h2: "Web development support for agencies",
        h2content:
          "We take care of the web development for your clients’ projects, stepping in wherever your agency needs a trusted specialist. Work with us behind the scenes under your brand, or introduce us as your web partner.",
        servarray: [
          {
            id: "01",
            h3: "Turn an approved design into a website",
            content:
              "We build a responsive website that brings your approved design to life while preserving its visual direction.",
          },
          {
            id: "02",
            h3: "Build a new website from the ground up",
            content:
              "From early wireframes to responsive web development, we help turn your client’s idea into a launch-ready website.",
          },
          {
            id: "03",
            h3: "Improve an existing website",
            content:
              "We test and fix live websites, resolve issues, and add new features to support your client’s next stage of growth.",
          },
        ],
        closing:
          "Have a project that fits one of these situations? Let’s talk about it.",
        button: "Discuss a project",
      },

      projservSection: {
        workstitle: "Featured projects",
        works: [
          {
            id: "4",
            title: "Chambre de Commerce de Lotbinière",
            serv: ["Projet collaboratif", "Front-end Development"],
            imageSrc: "/images/projserv/ccl.png",
            hash: "collaborations",
            stack: ["Wordpress", "Elementor", "Yapla"],
          },
          {
            id: "2",
            title: "Plein la tête studio éclaté",
            serv: ["Agency collaboration", "Full-stack web development"],
            imageSrc: "/images/projserv/plt.svg",
            hash: "collaborations",
            stack: ["SvelteKit", "Sanity", "GSAP"],
          },
          {
            id: "3",
            title: "Analogizing",
            serv: ["Full-stack web development", "Web design"],
            imageSrc: "/images/projserv/analogizing.svg",
            hash: "analogizing",
            stack: ["NextJs", "Sanity", "GSAP", "Figma"],
          },
          {
            id: "0",
            title: "Béances Editions",
            serv: ["Full-stack web development", "Web design"],
            imageSrc: "/images/projserv/beancesthree.jpg",
            hash: "beances",
            stack: ["NextJs", "Sanity", "Figma"],
          },
        ],
        button: "Explore all projects",
      },

      collaboration: {
        eyebrow: "Working together / Our commitment",
        h2: "A clear scope from day one. Support through delivery.",
        content:
          "You lead the project and stay connected with your client. We handle the web work, either behind the scenes under your agency’s brand or directly as your client’s web development partner, depending on what the project needs.",
        steps: [
          {
            h3: "Before the project starts",
            content:
              "We agree on the project scope, budget, and timeline together.",
          },
          {
            h3: "Throughout the project",
            content:
              "We keep you informed and share progress at key project milestones.",
          },
          {
            h3: "When the scope changes",
            content:
              "We explain how the change affects the budget and timeline, then wait for your approval before starting any additional work.",
          },
        ],
        closing:
          "You always know what’s planned, what’s in progress, and what’s changing.",
        button: "How we work together",
      },
      reachoutsection: {
        h2: "Web development support that keeps pace with your client projects.",
        content:
          "Deliver your clients’ projects without hiring in-house every time a new web need comes up.",
        cta: "Have a web project in mind? Let’s talk.",
      },
    },
    collaboration: {
      hero: {
        h1: "Web development support\nthat keeps pace with your projects.",
        content:
          "Deliver your clients’ projects without hiring in-house for every new need.",
        collabbutton: "How we work together",
        contactbutton: "Discuss a project",
      },

      agencySupport: {
        h2: "Your agency leads the project. Diphtong delivers the web work.",
        intro:
          "The right time to bring in extra support depends on your agency’s specialty.",
        cases: [
          {
            h3: "Design, branding, marketing, and communications agencies",
            need: "You have set the visual direction, approved a design, or scoped a web project for your client.",
            content:
              "We design the UX/UI and build a responsive website from your brief, designs, and supplied content.",
          },
          {
            h3: "SEO agencies",
            need: "Your technical recommendations are ready, but the website implementation is still outstanding.",
            content:
              "Your team leads SEO strategy. We implement the agreed website changes and check that they work properly and meet quality standards.",
          },
          {
            h3: "Web and digital agencies",
            need: "Your team needs extra production support for a specific project.",
            content:
              "We implement designs, develop pages and features, and QA the agreed scope.",
          },
          {
            h3: "Existing websites",
            content:
              "We fix bugs, improve website performance, and add content, sections, or features. For WordPress sites, we update WordPress core, plugins, and themes.",
          },
        ],
      },

      securityDisclosure: {
        h2: "Reduce security risks and keep visitors on track",
        items: [
          {
            h3: "Security updates and vulnerabilities",
            content:
              "Depending on the issue, a vulnerability can allow an attacker to inject content into a website, redirect visitors, access certain functions, or steal data. Patchstack, a WordPress security specialist, recorded 11,334 new vulnerabilities in the WordPress ecosystem in 2025: 91% affected plugins and 9% affected themes. When a fix is released, updating the affected component applies it and helps reduce exposure to that vulnerability.",
            sources: [
              { label: "Patchstack report", href: null },
              {
                label: "Examples of vulnerabilities and their impact",
                href: null,
              },
            ],
          },
          {
            h3: "Performance and browsing experience",
            content:
              "In its analysis of ecommerce websites, Akamai found that a two-second slowdown in page loading was associated with nearly 47% fewer pages viewed per visit on desktop and 51% fewer on mobile. The figures cover both device types in the ecommerce sites analyzed.",
            sources: [{ label: "Akamai report", href: null }],
          },
        ],
      },

      collaboration: {
        eyebrow: "Our collaboration, step by step",
        h2: "A clear framework\nfrom kickoff to delivery",
        content:
          "Have a web project to deliver? We handle the web work behind the scenes under your agency’s brand. For one-off or ongoing support, our collaboration fits the pace of your projects, without hiring for every new need.",
        steps: [
          {
            id: "01",
            h3: "1. You send us the project brief",
            outcome: "A clarified brief, with missing information identified.",
            content:
              "You introduce the project, the client context, and the materials available: designs, content, or instructions. We review the brief, identify missing information, and ask the questions we need answered.",
          },
          {
            id: "02",
            h3: "2. We agree on the project framework",
            outcome: "Scope, budget, and timeline agreed before work begins.",
            content:
              "Together, we define the scope, deliverables, acceptance criteria, budget, and timeline. The agreed budget covers the defined scope.",
          },
          {
            id: "03",
            h3: "3. We deliver the work and keep you updated",
            outcome:
              "Updates at the agreed cadence; approval before any additional work.",
            content:
              "We complete the agreed work and update you at the cadence we set together. You share your client’s feedback and provide the planned approvals. The agreed budget and timeline remain in effect as long as the scope stays the same. If a request changes the scope, we outline its cost and timeline impact, then wait for your approval before starting additional work.",
          },
          {
            id: "04",
            h3: "4. You approve; we hand over the work",
            outcome: "Deliverables checked and handed over to your agency.",
            content:
              "We complete the planned QA and fix items covered by the agreed scope. Each project stage includes two rounds of revisions. You approve the work before passing it to your client; we hand over the specified deliverables. For 30 days after launch, any fixes or adjustments related to the project are covered.",
          },
        ],
      },

      cta: {
        content:
          "Planning a web project? Let’s discuss the scope and support you’ll need.",
        button: "Discuss a project",
      },

      faq: {
        h2: "FAQ",
        items: [
          {
            question: "Who stays in contact with my client during the project?",
            answer:
              "You remain in charge of the project and handle communication with your client. We deliver the web work behind the scenes under your agency’s brand. You relay your client’s feedback and provide the planned approvals.",
          },
          {
            question:
              "What happens if the project scope changes after work begins?",
            answer:
              "The agreed budget and timeline remain in effect as long as the scope stays the same. If a request changes the scope, we explain its cost and timeline impact before starting any additional work. We proceed once you approve.",
          },
        ],
      },
    },
    contactPage: {
      PageTitle: "Contact",
      h2: "Let’s talk about your project",
      h3: "Ask your questions or schedule a meeting to explore how we can move forward.",
      form: {
        name: "name",
        email: "email (required)",
        website: "website (optional)",
      },
      contactInfo: "Contact Information",
      adress: "2861 Ontario St E, Montréal (QC), H2K 1X6  (514) 265-6791",
    },

    projectsPage: {
      AnalogProject: {
        h1: "Analogizing",
        id: "analogizing",
        subtitle: "Artist Portfolio",
        services: [" web design ", "full stack development"],
        content: [
          "Analogizing is the digital portfolio of a ",
          { bold: "multidisciplinary artist based in Montreal. " },
          "Their practice spans writing, translation, photography, collage, and sculpture.",
          {
            br: "I designed a minimalist website offering ",
          },
          { bold: "an elegant and fluid experience," },
          " with smooth animations, no visual noise, and a layout inspired by contemporary art galleries. ",
          {
            br: "To reflect the diversity of the artist’s work, the site is structured around three dimensions — 1D for written works, 2D for visual pieces, and 3D for sculptural objects — allowing visitors to explore each field intuitively.",
          },
        ],
        href: "https://www.analogizing.art/home",
      },
      beancesProject: {
        h1: "béances éditions",
        id: "beances_editions",
        subtitle: "QUEER ZINES EDITIONS",
        services: [" web design ", "full stack development"],
        content: [
          "Béances Éditions is a Montreal-based publishing house amplifying ",
          { bold: "lesbo-queer, lesbian, and trans voices " },
          "rarely heard in the Francophone world. Their mission: to reclaim space, pleasure, and time for stories that inspire, challenge, and resist erasure.",
          { br: "I designed a bold, characterful website that echoes " },
          { bold: " feminist punk and grunge aesthetics: " },
          "vibrant colors, stencil-style visuals, and unapologetic energy. The result is a platform that feels both rebellious and accessible, staying true to Béances’ vision of literature as a space for liberation and collective expression.",
        ],
        href: "https://www.beanceseditions.com/",
      },

      estherProject: {
        h1: "esther lhuillery",
        id: "esther_portfolio",
        subtitle: "video editor",
        span: "portfolio",
        services: [" web design ", "full stack development"],
        content: [
          "Esther Lhuillery is a Montreal-based video editor specializing in movie trailers. Her work blends precision and emotion, capturing the essence of each film in just a few minutes. ",
          { br: "I designed a " },
          { bold: "minimalist one-page website " },
          "that mirrors the atmosphere of a dark cinema room : elegant, and focused entirely on the moving image. ",
          {
            br: "The layout lets Esther’s editing shine, offering a seamless viewing experience that draws the eye to what matters most: the videos themselves.",
          },
        ],
        href: "https://www.estherlhuillery.com/",
      },
      collavoratives: {
        h1: "Collaborations",
        id: "collaborations",

        projects: [
          {
            id: 0,
            projectName: "Plein la tête - studio éclaté",
            projectSubtitle: " studio éclaté",
            services: ["Front-End development"],
            projecDescription:
              "Front-end development and motion design for a digital marketing agency based in Lévis, Québec.",
            href: "https://pleinlatete.ca/",
          },
          {
            id: 1,
            projectName: "Chambre de commerce de Lotbinière",
            services: ["Front-end integration: Wordpress/Elementor"],
            projecDescription:
              "Collaborated with the agency Plein la Tête to integrate the client’s custom design into a WordPress site using Elementor, ensuring responsive layouts and a faithful representation of the UI/UX for the Chambre de Commerce Lotbinière, Quebec.",
            href: "https://cclotbiniere.com/",
          },
        ],
      },
      upcomingProjects: {
        h1: "Upcoming Projects",
        id: "upcoming",

        projects: [
          "Espace art nature",
          "Christian Maria Brun Del Re Portfolio",
          "Physiothérapie Hélène Morin",
        ],
      },
    },
    footer: {
      services: {
        h2: "Services",
        servicearray: [
          {
            id: "dev",
            h3: "Web Development",
          },
          {
            id: "design",
            h3: "Web Design",
          },
          {
            id: "maintenance",
            h3: "Maintenance",
          },
          {
            id: "seo",
            h3: "Content & SEO strategy",
          },
        ],
      },
      h22: "About",
      about: "about me",
      projects: "my work",
      // sitemap: "sitemap",
      contact: "contact me",
      cta: ["let's talk about your next", { br: "project" }],
    },
    navbar: {
      collab: "collboration",
      proj: "projects",
      contact: "contact",
    },
    mobilenav: [
      { txt: "home", href: "/home" },
      { txt: "collaboration", href: "/collaboration" },
      { txt: "projects", href: "/projects" },
      { txt: "contact", href: "/contact" },
    ],
  },
  FR: {
    homepage: {
      hero: {
        h1: "DIPHTONG",
        tagline: "Votre allié web.",
        textone: "Vous gardez le lien avec vos clients.",
        texttwo: "Nous faisons avancer leurs projets web, à vos côtés.",
        collabbutton: "Comment on collabore",
        contactbutton: "Parler d’un mandat",
      },

      services: {
        eyebrow: "Votre point de départ / Nos interventions",
        h2: "Pour les agences qui ont un volet web à livrer",
        h2content:
          "Nous prenons en charge le volet web des mandats de vos clients, à l’étape où votre agence a besoin d’un renfort spécialisé.",
        servarray: [
          {
            id: "01",
            h3: "Une maquette validée",
            content:
              "À transformer en site responsive, sans perdre la direction visuelle.",
          },
          {
            id: "02",
            h3: "Un nouveau site",
            content:
              "À concevoir, des premiers wireframes au développement responsive.",
          },
          {
            id: "03",
            h3: "Un site en ligne",
            content:
              "À tester et corriger, ou à faire évoluer avec de nouvelles fonctionnalités.",
          },
        ],
        closing: "Votre mandat ressemble à l’un de ces cas ? Parlons-en.",
        button: "Parler d’un mandat",
      },

      projservSection: {
        workstitle: "Réalisations",
        works: [
          {
            id: "4",
            title: "Chambre de Commerce de Lotbinière",
            serv: ["Projet collaboratif", "Développement front-end"],
            imageSrc: "/images/projserv/ccl.png",
            hash: "collaborations",
            stack: ["Wordpress", "Elementor", "Yapla"],
          },
          {
            id: "2",
            title: "Plein la tête studio éclaté",
            serv: ["Projet collaboratif", "Développement full stack"],
            imageSrc: "/images/projserv/plt.png",
            hash: "collaborations",
            stack: ["SvelteKit", "Sanity", "GSAP"],
          },
          {
            id: "3",
            title: "Analogizing",
            serv: ["Développement full stack", "Design web"],
            imageSrc: "/images/projserv/analogizing.svg",
            hash: "analogizing",
            stack: ["NextJs", "Sanity", "GSAP", "Figma"],
          },
          {
            id: "0",
            title: "Béances Editions",
            serv: ["Développement full stack", "Design web"],
            imageSrc: "/images/projserv/beancesthree.jpg",
            hash: "beances",
            stack: ["NextJs", "Sanity", "Figma"],
          },
        ],
        button: "Voir toutes les réalisations",
      },

      collaboration: {
        eyebrow: "Collaboration / Notre engagement",
        h2: "Un cadre clair dès le départ\n Un suivi jusqu’à la livraison.",
        content:
          "Vous gardez la direction du mandat et le lien avec votre client. Nous prenons en charge le volet web, en coulisses sous la marque de votre agence ou ouvertement comme partenaire web auprès de votre client, selon le mandat.",
        steps: [
          {
            h3: "Avant le démarrage",
            content:
              "Nous convenons ensemble du périmètre, du budget et de l’échéancier.",
          },
          {
            h3: "Pendant le mandat",
            content:
              "Nous vous tenons informés de l’avancement aux étapes clés.",
          },
          {
            h3: "Si le périmètre évolue",
            content:
              "Nous vous présentons les effets sur le budget et l’échéancier, puis attendons votre accord avant d’engager le travail supplémentaire.",
          },
        ],
        closing: "Vous savez ce qui est prévu, ce qui avance et ce qui change.",
        button: "Comment on collabore",
      },
      reachoutsection: {
        h2: "Le renfort web qui suit le rythme de vos mandats.",
        content:
          "Livrez les projets de vos clients sans embaucher pour chaque nouveau besoin.",
        cta: "Un mandat web en tête? Parlons-en.",
      },
    },
    collaboration: {
      hero: {
        h1: "Le renfort web\nqui suit le rythme de vos mandats.",
        content:
          "Livrez les projets de vos clients sans embaucher pour chaque nouveau besoin.",
        collabbutton: "Comment on collabore",
        contactbutton: "Parler d’un mandat",
      },

      agencySupport: {
        h2: "Votre agence pilote le mandat. Diphtong réalise le volet web.",
        intro:
          "Selon votre spécialité, le besoin de renfort ne se présente pas à la même étape.",
        cases: [
          {
            h3: "Agences de design, branding, marketing et communication",
            need: "Vous avez défini la direction visuelle, validé une maquette ou cadré un projet web pour votre client.",
            content:
              "Nous concevons l’UX/UI et réalisons le site responsive à partir de votre brief, de vos maquettes et des contenus fournis.",
          },
          {
            h3: "Agences SEO",
            need: "Vos recommandations techniques sont prêtes, mais leur mise en œuvre reste à faire.",
            content:
              "Votre équipe pilote la stratégie SEO; nous réalisons les changements web convenus et en vérifions le fonctionnement et la qualité.",
          },
          {
            h3: "Agences web et numériques",
            need: "Votre équipe a besoin d’un renfort de production sur un mandat précis.",
            content:
              "Nous intégrons les maquettes, développons des pages ou fonctionnalités et effectuons le QA du périmètre convenu.",
          },
          {
            h3: "Sites déjà en ligne",
            content:
              "Nous corrigeons les bugs, améliorons les performances, ajoutons du contenu, de nouvelles sections ou fonctionnalités. Pour les sites WordPress, nous mettons à jour WordPress, ses extensions et son thème.",
          },
        ],
      },

      securityDisclosure: {
        h2: "Réduire les risques d’attaque et garder les visiteurs dans leur parcours",
        items: [
          {
            h3: "Mises à jour et failles de sécurité",
            content:
              "Une faille peut permettre à une personne malveillante d’injecter du contenu dans le site, de rediriger ses visiteurs, d’accéder à certaines fonctions ou de dérober des données, selon le problème en cause. Patchstack, spécialiste de la sécurité WordPress, a recensé 11 334 nouvelles vulnérabilités dans l’écosystème WordPress en 2025 : 91 % touchaient des extensions et 9 % des thèmes. Lorsqu’un correctif est publié, mettre à jour le composant concerné permet de l’appliquer et de réduire l’exposition à cette faille.",
            sources: [
              {
                label: "Rapport Patchstack",
                href: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/",
              },
              { label: "Exemples de failles et de leurs effets", href: "" },
            ],
          },
          {
            h3: "Performance et navigation",
            content:
              "Dans son analyse de sites de commerce en ligne, Akamai a observé qu’un chargement ralenti de deux secondes était associé à près de 47 % moins de pages consultées par visite sur ordinateur et 51 % moins sur mobile. La donnée concerne les deux types d’appareils dans le contexte des sites de commerce analysés.",
            sources: [
              {
                label: "Rapport Akamai",
                href: "https://www.igds.org/fileadmin/uploads/igds/Documents/Research_Reports/2017/akamai-state-of-online-retail-performance-spring-2017.pdf",
              },
            ],
          },
        ],
      },

      collaboration: {
        eyebrow: "Notre collaboration, étape par étape",
        h2: "Un cadre clair\ndu démarrage à la livraison",
        content:
          "Vous avez un mandat web à livrer? Nous prenons en charge le volet web en coulisses, sous la marque de votre agence. Pour un besoin ponctuel ou récurrent, la collaboration suit le rythme de vos mandats, sans embaucher pour chaque nouveau besoin.",
        steps: [
          {
            id: "01",
            h3: "1. Vous nous transmettez le dossier",
            outcome: "Dossier clarifié, éléments manquants identifiés.",
            content:
              "Vous nous présentez le mandat, le contexte client et les éléments disponibles : maquettes, contenus ou directives. Nous examinons le dossier, relevons les informations manquantes et vous posons les questions nécessaires.",
          },
          {
            id: "02",
            h3: "2. Nous convenons du cadre",
            outcome: "Périmètre, budget et échéancier validés avant démarrage.",
            content:
              "Nous définissons ensemble le périmètre, les livrables, les critères de validation, le budget et l’échéancier. Le budget convenu couvre le périmètre défini.",
          },
          {
            id: "03",
            h3: "3. Nous réalisons le mandat et faisons le point",
            outcome:
              "Suivi à la fréquence convenue, changements approuvés avant travaux supplémentaires.",
            content:
              "Nous réalisons le travail convenu et vous informons de l’avancement à la fréquence convenue avec vous. Vous transmettez les retours de votre client et donnez les validations prévues. Le budget et l’échéancier convenus restent en vigueur tant que le périmètre ne change pas. Si une demande le fait évoluer, nous vous présentons son coût et son effet sur l’échéancier, puis attendons votre accord avant d’engager le travail supplémentaire.",
          },
          {
            id: "04",
            h3: "4. Vous validez, nous remettons le travail",
            outcome: "Livrables vérifiés et remis à votre agence.",
            content:
              "Nous effectuons le QA prévu et corrigeons les éléments couverts par le périmètre convenu. Chaque étape du projet comprend deux rondes de révision. Vous validez le travail avant qu’il soit transmis à votre client; nous vous remettons les livrables prévus. Toute demande de correctif ou d’ajustement liée au mandat est couverte pendant les 30 jours suivant la mise en ligne.",
          },
        ],
      },

      cta: {
        content:
          "Vous préparez un mandat web? Parlons du cadre et du renfort à prévoir.",
        button: "Parler d’un mandat",
      },

      faq: {
        h2: "FAQ",
        items: [
          {
            question:
              "Qui reste en contact avec mon client pendant le mandat ?",
            answer:
              "Vous gardez la direction du mandat et les échanges avec votre client. Nous réalisons le volet web en coulisses, sous la marque de votre agence. Vous nous transmettez les retours et validations prévus.",
          },
          {
            question:
              "Que se passe-t-il si le périmètre du mandat change après le démarrage ?",
            answer:
              "Le budget et l’échéancier convenus restent en vigueur tant que le périmètre ne change pas. Si une demande le fait évoluer, nous vous présentons son coût et son effet sur l’échéancier avant d’engager le travail supplémentaire. Nous poursuivons après votre accord.",
          },
        ],
      },
    },
    contactPage: {
      PageTitle: "Contact",
      h2: "Parlons de votre projet.",
      h3: "Posez-moi vos questions ou réservez une rencontre",
      form: {
        name: "name",
        email: "email (required)",
        website: "website (optional)",
      },
      contactInfo: "Information de Contact ",
      adress: "2861 Rue Ontario Est, Montréal (QC), H2K 1X6  (514) 265-6791",
    },

    projectsPage: {
      AnalogProject: {
        h1: "Analogizing",
        id: "analogizing",
        subtitle: "Artist Portfolio",
        services: [" web design ", "full stack development"],
        content: [
          "Analogizing est le portfolio numérique d’un·e ",
          { bold: "artiste pluridisciplinaire basé·e à Montréal. " },
          "Sa pratique englobe l’écriture, la traduction, la photographie, le collage et la sculpture.",
          {
            br: "J'ai conçu un site web minimaliste offrant ",
          },
          { bold: "une expérience élégante et fluide," },
          " avec des animations douces, aucune distraction visuelle, et une mise en page inspirée des galeries d’art contemporain. ",
          {
            br: "Pour refléter la diversité de la pratique de l’artiste, le site est structuré autour de trois dimensions — 1D pour les œuvres écrites, 2D pour les pièces visuelles et 3D pour les objets sculpturaux — permettant aux visiteurs d’explorer chaque domaine de façon intuitive.",
          },
        ],
        href: "https://www.analogizing.art/home",
      },
      beancesProject: {
        h1: "béances éditions",
        id: "beances_editions",
        subtitle: "QUEER ZINES EDITIONS",
        services: [" web design ", "full stack development"],
        content: [
          "Béances Éditions est une maison d’édition montréalaise qui met en lumière ",
          { bold: "des voix lesbo-queer, lesbiennes et trans " },
          "rarement entendues dans le monde francophone. Leur mission : réinvestir l’espace, le plaisir et le temps pour des récits qui inspirent, bousculent et résistent à l’effacement.",
          {
            br: "J'ai conçu un site web qui fait écho aux ",
          },
          { bold: "esthétiques féministes punk et grunge : " },
          "couleurs vibrantes, visuels inspirés du pochoir et énergie revendicatrice. Le résultat : une plateforme à la fois rebelle et accessible, fidèle à la vision de Béances, où la littérature devient un espace de libération et d’expression collective.",
        ],
        href: "https://www.beanceseditions.com/",
      },
      estherProject: {
        h1: "esther lhuillery",
        id: "esther_portfolio",
        subtitle: "video editor",
        span: "portfolio",
        services: [" web design ", "full stack development"],
        content: [
          "Esther Lhuillery est une monteuse vidéo basée à Montréal, spécialisée dans les bandes-annonces de films. Son travail allie précision et émotion, capturant l’essence de chaque œuvre en quelques minutes seulement. ",
          { br: "J'ai conçu un " },
          { bold: "site web minimaliste d’une seule page " },
          "qui évoque l’atmosphère d’une salle de cinéma sombre : élégant, et entièrement centré sur l’image en mouvement. ",
          {
            br: "La mise en page met en valeur le travail de montage d’Esther, offrant une expérience de visionnement fluide qui attire le regard sur l’essentiel : les vidéos elles-mêmes.",
          },
        ],
        href: "https://www.estherlhuillery.com/",
      },

      collavoratives: {
        h1: "collaborations",
        id: "collaborations",
        projects: [
          {
            id: 0,
            projectName: "Plein la tête - studio éclaté",
            projectSubtitle: " studio éclaté",
            services: ["Front-End development"],
            projecDescription:
              "Développement Front-End et motion design pour une agence de marketing digital basée à Lévis, Québec.",
            href: "https://pleinlatete.ca/",
          },
          {
            id: 1,
            projectName: "Chambre de commerce de Lotbinière",
            services: ["Intégration de maquette: Wordpress/Elementor"],
            projecDescription:
              "En collaboration avec l’agence Plein la Tête, intégration du design personnalisé du client dans un site WordPress utilisant Elementor, avec des mises en page responsives et une reproduction fidèle de l’UI/UX pour la Chambre de Commerce Lotbinière, Québec.",
            href: "https://cclotbiniere.com/",
          },
        ],
      },
      upcomingProjects: {
        h1: "À venir",
        id: "upcoming",
        projects: [
          "Espace art nature",
          "Christian Maria Brun Del Re Portfolio",
          "Physiothérapie Hélène Morin",
        ],
      },
    },
    footer: {
      services: {
        h2: "Services",
        servicearray: [
          {
            id: "dev",
            h3: "Développement web",
          },
          {
            id: "design",
            h3: "Design Web",
          },
          {
            id: "maintenance",
            h3: "Maintenance",
          },
          {
            id: "seo",
            h3: "Contenu & stratégie SEO",
          },
        ],
      },

      h22: "À propos",
      about: "qui suis-je?",
      projects: "mes projets",
      // sitemap: "sitemap",
      contact: "me contacter",
      cta: ["Discutons de votre prochain ", { br: "projet en ligne" }],
    },
    navbar: {
      collab: "collboration",

      proj: "projets",
      contact: "contact",
    },
    mobilenav: [
      { txt: "accueil", href: "/home" },
      { txt: "collaboration", href: "/collaboration" },
      { txt: "projets", href: "/projects" },
      { txt: "contact", href: "/contact" },
    ],
  },
};

export type Language = keyof typeof dictionaries;
