# Aamir's Animated Portfolio

Build a complete premium animated portfolio website for **Mohammad Aamir**, a **Full Stack Java Developer**.

This is a NEW Lovable project.

Do not act as a mentor.
Do not give me a roadmap.
Do not stop after planning.
Do not ask me to manually create files.
Do not generate only a Hero section.

Implement the complete working website directly in the Lovable project.

---

# PRIMARY DESIGN REFERENCE

Use the MotionSites template specification I provided as the main design and animation reference.

The portfolio should preserve the same overall visual language and interaction style:

* dark `#0C0C0C` background
* huge uppercase hero typography
* centered portrait composition
* magnetic mouse-following portrait effect
* scroll-based horizontal marquee
* character-by-character animated About text
* large section headings
* bold black/white section contrast
* rounded section transitions
* sticky stacking project cards
* scroll-based project scaling
* pill-shaped CTA buttons
* fluid responsive typography using `clamp()`
* premium Framer Motion transitions
* smooth mobile-first responsive behavior

Do not copy any original person's name, text, images, client names, logos, or copyrighted assets.

Create an original implementation using **Mohammad Aamir's information**.

The final site should visually feel like the provided MotionSites template, but all content must belong to Mohammad Aamir.

---

# TECHNOLOGY STACK

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React
* Three.js
* @react-three/fiber
* @react-three/drei
* EmailJS

Use npm-compatible packages.

Do not use:

* Next.js
* TanStack Start
* Bun
* Supabase
* a database
* a separate backend

---

# SOURCE CODE REQUIREMENT

The complete source code must remain fully editable.

Use normal React + TypeScript files.

Do not hide important logic inside proprietary generated blocks.

Keep the project easy to open and modify later in VS Code.

The final project must run with:

```bash
npm install
npm run dev
npm run build
```

Use clean naming and reusable components.

---

# CENTRAL DATA ARCHITECTURE

Keep all editable portfolio content inside:

```text
src/data/portfolioData.ts
```

This file must contain:

* name
* title
* animated roles
* intro text
* About text
* social links
* skill groups
* project data
* education
* experience / learning journey
* resume path
* contact configuration references

Do not repeat the same personal information across many components.

Keep TypeScript interfaces inside:

```text
src/types/portfolio.ts
```

---

# RECOMMENDED STRUCTURE

Create a maintainable structure similar to:

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx

    sections/
      HeroSection.tsx
      MarqueeSection.tsx
      AboutSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      JourneySection.tsx
      ContactSection.tsx

    ui/
      ContactButton.tsx
      ViewProjectButton.tsx
      FadeIn.tsx
      Magnet.tsx
      AnimatedText.tsx
      SectionHeading.tsx
      TechTag.tsx
      SocialLinks.tsx

    cards/
      SkillCard.tsx
      ProjectCard.tsx
      TimelineItem.tsx

    three/
      HeroCanvas.tsx
      FloatingShapes.tsx
      Particles.tsx
      SceneLights.tsx

  data/
    portfolioData.ts

  hooks/
    useReducedMotion.ts
    useMousePosition.ts

  types/
    portfolio.ts

  utils/
    emailService.ts
    validation.ts

  App.tsx
  main.tsx
  index.css
```

Use slightly different filenames only when technically necessary.

---

# PORTFOLIO OWNER

Name:

**Mohammad Aamir**

Main role:

**Full Stack Java Developer**

Animated roles:

* Full Stack Java Developer
* Java Backend Developer
* Spring Boot Developer
* React Developer
* AI Application Developer

Location:

Mumbai, Maharashtra, India

Do not display private contact details unless explicitly requested below.

---

# HERO SECTION

Preserve the reference template's overall Hero composition.

Use:

* full viewport height
* dark `#0C0C0C` background
* large uppercase heading
* centered portrait
* compact navigation
* bottom-left intro text
* bottom-right CTA button
* Framer Motion entrance animation

Replace the original heading with:

```text
HI, I'M AAMIR
```

Use the same massive responsive typography feeling:

```text
clamp() / viewport-based sizing
```

Use a gradient heading inspired by:

```css
linear-gradient(180deg, #646973 0%, #BBCCD7 100%)
```

Hero subtitle:

```text
FULL STACK JAVA DEVELOPER
```

Hero short text:

```text
A Full Stack Java Developer focused on scalable backend systems,
responsive web interfaces and AI-powered applications.
```

Add animated role switching under or near the main heading.

Use the uploaded profile image as the Hero portrait.

---

# PROFILE IMAGE

Use the profile image uploaded with this prompt.

Store it as:

```text
public/images/profile.png
```

Use it in:

* Hero
* About

Portrait behavior should preserve the reference template's magnetic feeling.

Create a reusable `Magnet` component.

Requirements:

* mouse-following magnetic movement
* smooth translate3d
* movement based on pointer position relative to image center
* smooth active transition
* smooth return transition
* use `will-change: transform`
* disable or simplify on touch devices
* responsive positioning

Also add:

* subtle floating animation
* soft glow behind portrait
* slight perspective depth
* no image distortion
* professional crop

---

# HERO 3D LAYER

In addition to the magnetic portrait, add a real 3D background layer.

This must use actual React Three Fiber.

Do not fake the 3D scene using only CSS.

Use:

```text
Canvas from @react-three/fiber
@react-three/drei helpers
```

Create:

* subtle floating geometry
* small particles
* slow rotation
* atmospheric depth
* violet / blue lighting
* subtle mouse parallax
* transparent or wireframe materials

Suggested geometry:

* torus
* sphere
* octahedron
* icosahedron
* floating points

Keep the 3D subtle so the MotionSites-inspired layout remains the main visual identity.

3D must not overpower the portrait or typography.

Performance requirements:

* lazy-load the 3D canvas
* reduce particles on mobile
* reduce device pixel ratio where needed
* disable expensive mouse interactions on touch
* respect `prefers-reduced-motion`
* use lightweight geometry
* no heavy GLB/GLTF models

Provide a CSS background fallback while the 3D layer loads.

Do not finish the Hero without a clearly visible real React Three Fiber scene.

---

# NAVIGATION

Keep the navigation minimal and premium.

Use links:

* About
* Skills
* Projects
* Contact

Style:

* uppercase
* tracking-wide
* light gray text
* responsive sizes
* opacity hover transition
* clean horizontal spacing

Use smooth scrolling.

---

# MARQUEE SECTION

Preserve the reference template's two-row scroll-driven marquee behavior.

Create two horizontal rows.

Row 1 moves right based on vertical scroll.

Row 2 moves left based on vertical scroll.

Use:

* scroll position
* translateX
* passive scroll listener or Framer Motion scroll values
* `will-change: transform`

Do NOT reuse the original MotionSites GIF URLs unless those assets are explicitly permitted for reuse.

Instead create original portfolio-related cards/mockups.

Use visuals representing:

* Java
* Spring Boot
* APIs
* React
* MySQL
* AI chatbot
* code editor
* backend architecture
* REST API
* project UI

Use original local mockups or generated abstract tech visuals.

Tiles should preserve the same feel:

* rounded corners
* wide landscape ratio
* close spacing
* seamless repeated movement

---

# ABOUT SECTION

Preserve the reference template's full-screen centered About composition.

Use large heading:

```text
ABOUT ME
```

Use the same oversized heading style and gradient treatment.

Create four decorative 3D/tech objects around the About section.

Do not use the original moon / Lego / copyrighted assets.

Instead use original decorative objects such as:

* glowing Java-style orb
* database cylinder
* code cube
* abstract Spring-inspired shape

These can be CSS/3D generated or local abstract assets.

Use the same corner-placement feeling.

---

# ABOUT TEXT ANIMATION

Preserve the character-by-character scroll-driven reveal effect.

Create a reusable `AnimatedText` component.

Each character should animate from low opacity to full opacity based on scroll progress.

Use Framer Motion `useScroll` / `useTransform`.

Use this About text:

```text
I am a Full Stack Java Developer and B.Sc. Information Technology student
focused on building scalable backend applications, responsive web interfaces
and AI-powered solutions.

I work with Core Java, JDBC, Hibernate, Spring Framework, Spring Boot,
MySQL, REST APIs and React. I also build AI-integrated applications using
Spring AI, Groq API and voice-processing technologies.

I enjoy understanding how applications work internally and creating projects
with clean architecture, reusable code, database integration and
user-friendly interfaces.
```

Do not invent professional experience.

---

# SKILLS SECTION

Replace the original template's "Services" section with:

```text
SKILLS
```

Keep the same bold contrast:

* white background
* black text
* rounded top corners
* huge uppercase heading
* numbered vertical list
* large numbers
* divider lines
* staggered FadeIn

Create 5 main skill groups:

### 01 — Java Development

Description:

```text
Core Java, Java 8, Object-Oriented Programming, Collections,
Multithreading, Exception Handling and Data Structures.
```

### 02 — Spring Ecosystem

Description:

```text
Spring Framework, Spring Boot, Spring AI, REST APIs and MVC architecture.
```

### 03 — Database & Persistence

Description:

```text
MySQL, JDBC, Hibernate, JPA, database transactions and relational database design.
```

### 04 — Frontend Development

Description:

```text
React, JavaScript, TypeScript, HTML, CSS and Tailwind CSS.
```

### 05 — Development Tools

Description:

```text
Git, GitHub, Maven, VS Code, STS and Eclipse.
```

Preserve the reference Services section layout:

* huge numeric index on left
* skill title + description on right
* 1px separators
* generous vertical padding
* staggered Framer Motion entrance

Do not use fake percentage bars.

---

# PROJECTS SECTION

Preserve the reference template's sticky stacking cards.

Use:

* dark background
* rounded top corners
* large gradient heading
* sticky project cards
* scroll-driven scale effect
* card offset per index
* heavy rounded corners
* light border
* premium spacing

Heading:

```text
PROJECTS
```

Create exactly 3 main project cards.

---

# PROJECT 01

Title:

**College Voice Assistant Chatbot**

Category:

```text
AI / FULL STACK
```

Description:

```text
An AI-powered college assistant that supports voice and text interaction.
It uses Java, Spring Boot and Spring AI with Groq API for intelligent
responses and Deepgram API for speech processing. The frontend is built
with React for a responsive user experience.
```

Technologies:

* Java
* Spring Boot
* Spring AI
* Groq API
* Deepgram API
* React
* JavaScript
* HTML
* CSS

GitHub:

```text
https://github.com/Aamirkhan-04/College-Assistant-Voice-Chatbot
```

---

# PROJECT 02

Title:

**Student Management System**

Category:

```text
JAVA / DATABASE
```

Description:

```text
A Java and MySQL application for managing student records with
database-backed CRUD operations using JDBC and a clean layered design.
```

Technologies:

* Core Java
* JDBC
* MySQL
* OOP

GitHub:

```text
https://github.com/Aamirkhan-04/student_management_system
```

---

# PROJECT 03

Title:

**Note Taker Application**

Category:

```text
JAVA WEB
```

Description:

```text
A note management web application that allows users to create, view,
update and delete notes using Servlet, JSP, Hibernate and MySQL.
It follows MVC architecture for clean separation of concerns.
```

Technologies:

* Java
* Servlet
* JSP
* Hibernate
* MySQL
* MVC

GitHub:

```text
https://github.com/Aamirkhan-04/Note-Taker
```

---

# PROJECT CARD VISUALS

Preserve the reference template's multi-image layout:

* left column with 2 smaller images
* right column with 1 larger image
* strong rounded corners
* responsive image heights

Do NOT reuse the original template's CloudFront images.

Create original project mockups.

Project 1 visuals should resemble:

* AI chatbot UI
* voice waveform
* assistant dashboard

Project 2 visuals should resemble:

* student dashboard
* database records
* CRUD interface

Project 3 visuals should resemble:

* notes dashboard
* editor
* note cards

Use local assets inside:

```text
public/images/projects/
```

---

# PROJECT BUTTON

Replace "Live Project" with:

```text
VIEW CODE
```

Each button must open the correct GitHub repository.

Use:

```text
target="_blank"
rel="noopener noreferrer"
```

No fake Live Demo button.

---

# JOURNEY SECTION

Add a Journey section after Projects.

Keep design consistent with the main site.

Heading:

```text
JOURNEY
```

Create timeline entries:

### Education

Bachelor of Science — Information Technology

University of Mumbai

Shri GPM Degree College of Science and Commerce

June 2025 — Present

### Learning Experience

Self-Directed Backend Development Training

July 2025 — Present

Description:

```text
Learning Java, Spring Boot, Hibernate and MySQL while building backend,
full-stack and AI-integrated projects independently and through coursework.
```

Do not present this as formal company employment.

---

# RESUME

Use the resume PDF uploaded with this prompt.

This is the resume that should be used in the final portfolio.

Store it at:

```text
public/resume/Mohammad_Aamir_Resume.pdf
```

Add:

```text
DOWNLOAD RESUME
```

button in the Hero and Contact area.

Use the `download` attribute.

Make sure it works after deployment.

---

# GITHUB

Profile:

```text
https://github.com/Aamirkhan-04
```

---

# LINKEDIN

Profile:

```text
https://www.linkedin.com/in/mohammad-aamir-550a0b332/
```

Add GitHub and LinkedIn icons using Lucide React.

Open links in a new tab.

---

# EMAIL AND PHONE PRIVACY

My email is:

```text
khanaamir129845@gmail.com
```

My phone number is:

```text
8052116050
```

Do NOT display my email or phone number publicly on the website.

The email should only be used privately for the contact form configuration.

---

# CONTACT SECTION

Create a premium Contact section matching the overall dark visual style.

Fields:

* Full Name
* Email Address
* Subject
* Message
* Send Message

Use EmailJS.

Install/use:

```text
@emailjs/browser
```

Use environment variables:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Create:

```text
.env.example
```

with:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not hardcode private EmailJS credentials.

Form behavior:

* required validation
* valid email validation
* trim whitespace
* loading state
* disabled button during send
* success feedback
* error feedback
* reset after successful send
* prevent duplicate submission

If EmailJS is not configured yet, the website must still load normally.

---

# REUSABLE MOTION COMPONENTS

Create equivalents of the template's reusable components.

### FadeIn

Framer Motion wrapper.

Support:

* delay
* duration
* x
* y

Use:

* `whileInView`
* one-time viewport animation
* smooth easing

### Magnet

Mouse-following magnetic effect.

Use:

* pointer position
* element center
* translate3d
* configurable strength
* smooth active and inactive transitions
* `willChange: transform`

### AnimatedText

Character-by-character scroll reveal.

Use:

* Framer Motion
* scroll progress
* opacity interpolation

### ContactButton

Rounded pill CTA.

Use a premium multi-color gradient inspired by the template.

Keep the original spirit:

* purple
* magenta
* violet
* warm highlight

Do not use an exact proprietary style if it is not permitted; create an original close visual treatment.

---

# GLOBAL DESIGN SYSTEM

Background:

```text
#0C0C0C
```

Primary light text:

```text
#D7E2EA
```

Heading gradient direction:

```text
#646973 → #BBCCD7
```

Use Kanit or a very similar bold geometric font.

Prefer:

```text
Kanit
```

Load from Google Fonts with multiple weights.

Use:

* uppercase major headings
* heavy weight
* tight tracking
* fluid `clamp()` typography
* `overflow-x: clip`
* smooth scrolling
* modern responsive spacing

---

# RESPONSIVE REQUIREMENTS

Use mobile-first design.

Support:

* 320px phones
* normal phones
* tablets
* laptops
* ultra-wide screens

Use fluid typography.

Preserve the reference template's graceful scaling.

Check:

* Hero heading
* portrait position
* marquee
* About decorative elements
* skills rows
* sticky project cards
* project image grid
* contact form
* buttons
* 3D canvas

No horizontal scrollbar.

---

# ACCESSIBILITY

Include:

* semantic HTML
* correct headings
* alt text
* keyboard navigation
* visible focus states
* accessible buttons
* accessible contact labels
* reduced motion support

---

# SEO

Page title:

```text
Mohammad Aamir — Full Stack Java Developer
```

Meta description:

```text
Portfolio of Mohammad Aamir, a Full Stack Java Developer skilled in
Java, Spring Boot, Hibernate, MySQL, React, REST APIs and Spring AI.
```

Add:

* Open Graph metadata
* theme color
* favicon support
* `lang="en"`

---

# FINAL IMPLEMENTATION REQUIREMENTS

Build the entire site now.

Do not stop after describing it.

Do not give me a plan.

Create all files and components.

Install missing packages.

Use my uploaded profile photo.

Use my uploaded resume.

Create the complete MotionSites-inspired animation system.

Add the real React Three Fiber layer.

Implement the magnetic portrait.

Implement the scroll marquee.

Implement the character-by-character About animation.

Implement the numbered Skills section.

Implement the sticky stacking project cards.

Implement the Journey section.

Implement the Contact form.

Implement all GitHub links.

Implement LinkedIn.

Implement Resume download.

Keep all editable data centralized.

---

# FINAL TECHNICAL CHECK

Before finishing:

Run:

```bash
npm run build
```

Fix:

* TypeScript errors
* broken imports
* build errors
* console errors
* responsive issues
* animation bugs
* 3D WebGL issues
* broken links
* resume path
* mobile overflow

Verify:

* profile image loads
* resume downloads
* all project GitHub buttons work
* GitHub profile opens
* LinkedIn opens
* private email is not visible
* phone number is not visible
* no original MotionSites person's content remains
* no "Jack" content remains
* no original template client names remain
* all visible data belongs to Mohammad Aamir

After completion, provide a short report with:

* files created
* packages installed
* environment variables needed
* 3D components created
* `npm run build` result
* GitHub export readiness

The final website should look like a premium MotionSites-inspired portfolio for **Mohammad Aamir — Full Stack Java Developer**, with the same strong animation philosophy and layout feeling, but with an original implementation and my own content.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aamir-animated-craft.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ab866448-c052-4095-9527-daad3039fbda).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
