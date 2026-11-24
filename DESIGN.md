# Portfolio design plan

## Direction

A one-page portfolio for a computer science student pursuing software engineering internships. The opening pairs a large name with a real portrait. Selected projects come next, with a short route to GitHub, demos, and the résumé. Backend and cloud can appear in project descriptions where the work supports them.

## Reference notes

| Reference | Observed on the homepage | Idea for this portfolio |
| --- | --- | --- |
| [Majd](https://majd-portfolio.framer.website/) | Warm off-white (`#FAF7F3`), near-black text, oversized Archivo heading, portrait imagery, and image-led projects. | Use warm neutrals, one dominant headline, and generous space around photography. |
| [Anshul Raman](https://www.anshulraman.com/) | An immediate introduction, a link straight to projects, featured case studies, education, and a skills section that invites hover. | Make the engineering content easy to reach. Give the lead project a deeper write-up about a real technical decision. |
| [Aahil Khan](https://www.aahil-khan.xyz/) | Space Grotesk, yellow and mint accents, a personal photo, and a link to a separate desktop-oriented desk experience. | Give the portfolio one playful interaction alongside straightforward navigation. |
| [Aathif Zahir](https://aathifzahir.vercel.app/) | Black and white, oversized Clash Display, prominent portrait imagery, a local clock, and large linked project previews. | Use a dark opening, a wide project image, and a clear change of pace when the page moves into the work. |

Reference evidence comes from homepage content and branding data, with a text-only capture for Anshul. The screenshot previews and live pointer and scroll behavior could not be verified during this review. The motion below describes the proposed portfolio.

## Proposed design system

These are original starting tokens. We’ll confirm them against your photo and project imagery during the mockup.

**Design constraint for Codex.** Avoid default AI design clichés in both mockups and implementation. Do not use purple-blue gradients, heavy drop shadows, glassmorphism, or generic card grids. Use flat graphite and paper surfaces, crisp borders, real photography, and a layout with one large featured project followed by simpler project rows.

| Role | Color | Use |
| --- | --- | --- |
| Hero orange | `#fa720c` | Portrait-side highlight, fading into burnt orange and rust |
| Graphite | `#101010` | Hero, footer, and text on light surfaces |
| Paper | `#f5f4f0` | Main content and text on dark surfaces |
| Mid gray | `#565656` | Secondary copy on paper |
| Muted text on dark | `#bcbcbc` | Secondary copy on graphite |
| Silver | `#e5e5e5` | Accent and focus outline on graphite. Use graphite text on silver fills. |
| Graphite accent | `#494949` | Accent links and focus outline on paper |
| Divider on paper | `#d3d3d3` | Decorative project and section rules |
| Divider on graphite | `#393939` | Decorative rules on dark surfaces |
| Control border on paper | `#797979` | Outlined controls on paper |
| Control border on graphite | `#848484` | Outlined controls on graphite |

Use 1 px solid dividers and control borders. Keep section rules square and use a 4 px corner radius for buttons. Use a 2 px focus outline with a 3 px offset in the surface-appropriate accent. Underline inline text links so color is one of two cues.

- Layout. Start with a 12-column desktop grid. Give the hero copy five columns and the portrait seven. Stack the hero on tablet and mobile with the name, intro, and links above the photo. Align the first project and section headings to the same left edge. Give the featured image a wide frame and use thin rules between supporting project rows.
- Imagery. Use an actual portrait with soft side lighting, a simple background, and enough space around the face to crop. Bring in a real screenshot, short recording, or architecture diagram for each featured project. A clean screenshot of a working API is enough when there is no frontend.

### Typography

Start with [Clash Display](https://www.fontshare.com/fonts/clash-display) and [Satoshi](https://www.fontshare.com/fonts/satoshi). Fontshare offers its fonts free for personal and commercial use under the applicable license. [Fontshare licensing](https://fontshare.com/licenses/sil-ofl)

Use the following sizes in the first mockup. Each pair is **font size / line height**, in pixels. Mobile is below 768 px, tablet is 768–1023 px, and desktop starts at 1024 px. These are the default values for each range. Check the actual name and headings at 320, 390, 768, 1024, and 1440 px before finalizing line breaks.

| Role | Typeface and weight | Mobile | Tablet | Desktop | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Hero name | Clash Display 600 | 52 / 54 | 80 / 82 | 120 / 118 | −0.035 em |
| Section heading | Clash Display 500 | 36 / 40 | 44 / 48 | 56 / 60 | −0.025 em |
| Project heading | Clash Display 500 | 26 / 30 | 30 / 34 | 36 / 40 | −0.015 em |
| Hero intro | Satoshi 400 | 18 / 28 | 20 / 30 | 22 / 32 | Normal |
| Body | Satoshi 400 | 16 / 26 | 17 / 28 | 18 / 30 | Normal |
| Navigation and buttons | Satoshi 500 | 14 / 20 | 15 / 22 | 15 / 22 | Normal |
| Captions and project metadata | Satoshi 500 | 13 / 18 | 13 / 20 | 14 / 20 | Normal |

Aim for 55–65 characters per line in longer paragraphs when the column allows, with a maximum measure of 65ch. Keep body copy left-aligned. The hero sizes are upper targets when the available space is tight. Test the actual name within its column, wrap at a natural word break, and scale the type down fluidly if it still crowds the photo or viewport. Check that ascenders and descenders clear the hero crop. Use relative units in implementation so text responds to user font settings.

For a calmer version closer to Majd, test [Archivo](https://fonts.google.com/specimen/Archivo) with [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans). For a more magazine-like version, test [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) with Satoshi. Compare the proposed pair and one alternative with the same name and portrait so the type is the only variable.

### Layout spacing

Use a 1280 px maximum inner content width, centered within the viewport. Use these default gaps in pixels.

| Spacing role | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Page side padding | 20 | 32 | 64 |
| Grid column gap | Single column | 24 | 32 |
| Section top and bottom padding, each | 56 | 80 | 112 |
| Hero name to intro | 16 | 20 | 24 |
| Intro to primary links | 24 | 24 | 32 |
| Hero copy to portrait when stacked | 32 | 40 | Use the grid gap |
| Section heading to first item | 24 | 32 | 40 |
| Featured image to caption or text | 16 | 20 | 24 |
| Project row padding, top and bottom | 20 | 24 | 32 |
| Gap between paragraphs | 16 | 16 | 20 |

### What gives the page its character

- Compose the name and portrait together. Start with a square portrait frame on desktop and a 4:3 frame on phones, then adjust the crop around the face. Use a 16:10 frame for the lead project if the asset fits. Show technical screenshots in full when cropping would hide meaningful content.
- Give each project a clear title, your role, and one meaningful engineering detail. Use a real image or recording and link to the repo or demo when available.
- Carry the same accent color into focus states and key links. Keep interaction cues clear on touch and keyboard, and check that images and fonts load without shifting the layout.

## Page and motion storyboard

Navigation is **Work · About · Contact**, plus a **Résumé** link when the PDF is ready. Use **What I’m Learning** as the visible label for the learning section and its optional jump link from About.

| Section | Content | Proposed interaction |
| --- | --- | --- |
| Hero | Real portrait, name, and a one-sentence intro as a CSE student. Lead with **View work** and show **Résumé** when available. | On desktop, the portrait and its backdrop move at different speeds over the first part of the scroll. Start around 24–40 px of portrait travel and tune against the crop. Keep the name and links steady. |
| Selected work | One lead case study and up to two supporting projects. Coursework, personal builds, and hackathon prototypes qualify when you can explain your contribution. Show the problem, what you built, one technical decision, and links to available code or demos. Label in-progress work clearly. | Reveal the lead image as it enters the viewport. Preview a short recording for the project if we have one. Keyboard users get the same links, and touch users get a visible Play button when there is a clip. |
| About and education | A short personal introduction, degree, college, expected graduation, and a few skills tied to your work or coursework. | Use a readable text layout with an optional second photo. |
| What I’m Learning | Two or three things you are actively learning or building. Write each as a topic plus a concrete practice task or artifact. DSA, Python APIs, SQL, and cloud are candidates from your roadmap. Confirm what is current before publishing. | Use a compact list with optional links to notes or code. |
| Hackathons, competitions, and open source | Include when you have an entry to share. For a hackathon or competition, give the event, date, what you did, and the result if relevant. For open source, link to the issue, pull request, or documentation change and indicate its status. Feature a substantial hackathon build under Selected work and cross-link it from the activity entry when useful. | Use simple rows grouped together under **Activities & Contributions**. |
| Contact | Public email, GitHub, LinkedIn, and résumé when available. Mention internship availability if relevant. | Use a clear focus state and a small hover change on links. |

Add a short **What I Work With** list under About. Python, C, SQL, Git, and GitHub are candidates to confirm against coursework or projects. Put FastAPI, PostgreSQL, or cloud services on the projects that use them. Use **What I’m Learning** for topics currently in practice.

Show professional experience once there is an internship, job, or relevant role to describe. The launch page can go from **What I’m Learning** directly to **Contact** when activities are still in progress. The first published activity can be a single line under About. Give activities their own section when there are several entries or one substantial contribution.

An optional second-pass interaction is a small desktop-only workbench with one draggable object tied to a real project. Its project link also appears in the normal work section. For mobile, use a steady portrait crop and direct project links. With reduced motion enabled, show the photos and projects in their settled positions.

### Mockup checks

- Check the hero and first project at 320, 390, 768, 1024, and 1440 px. Verify that the name fits its column, the portrait keeps its focal point, links wrap cleanly, and the page has no horizontal overflow. Test at 200% text zoom.
- Keep the portrait parallax and first project reveal as the two launch effects. Let the visitor scroll normally. Keep content visible when motion is unavailable and test keyboard navigation, touch controls, and reduced motion.
- Reserve space for photography before it loads. Prioritize the hero portrait, load lower project images as needed, and give videos a still preview so visitors can choose when to play them.

## Before coding

1. Gather the exact name to display, one or two original portraits, your strongest project link, and a résumé or short bio. A few notes on what you personally built help shape the case study.
2. Draft the actual headline and case study from your résumé, repositories, or project notes.
3. Mock up the hero and first project at desktop and phone widths. Confirm the palette, crop, and handoff from the dark hero to the light work section.
4. Prototype the opening parallax and project interaction, then build the rest once the layout is agreed.
