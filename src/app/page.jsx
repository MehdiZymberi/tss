import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { CASESTUDYARRAY } from '@/app/util/caseStudyArray'
import tannoHP from '../../public/tannohp.svg'

import analystics from '../../public/analystics.png'
import DialogBtn from '@/components/Dialog'
import { StatList, StatListItem } from '@/components/StatList'

const usp = [
  ['Focus op Resultaten ','Bewezen, effectieve methoden die zijn afgestemd op jouw doelen – geen onzin, alleen echte vooruitgang.', '/', analystics],
  ['Wetenschappelijk Onderbouwd', 'Onze aanpak is gebaseerd op data en expertise, met focus op wat écht werkt.','/', analystics],
  ['No-Nonsense Begeleiding', 'Eerlijke, duidelijke coaching die je verantwoordelijk houdt en resultaten oplevert.','/', analystics],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
        <div className="h-px flex-auto bg-neutral-800" />
          <h2 className="text-center font-display  text-lg  sm:text-3xl font-semibold tracking-wider text-white">
            The Strength Society <br className='md:hidden'/> <span className='italic'>Zet In Op Zekerheid</span>
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {usp.map(([client, content,href, logo]) => (
              <li
              
                key={client}
                className="transition-transform duration-200 hover:scale-105"
              >
                <FadeIn>
                  <div className=" text-center items-center justify-center hover:">
                    <Image
                      src={logo}
                      alt={client}
                      unoptimized
                      className="w-12 invert mx-auto"
                    />
                    <p className=" justify-center  text-white sm:flex sm:text-xl font-bold tracking-wider">
                      {client}
                    </p>
                    <p className=' text-white/60 sm:flex sm:text-base'>{content}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Waarom Kiezen Voor The Strength Society?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ongekwalificeerde coaching kan je vooruitgang beperken en waardevolle
          tijd en investering verspillen. Elke gemiste kans kan voelen als een
          stap terug, wat leidt tot frustratie en twijfels over haalbare
          vooruitgang.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <p>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.imgsrc}
                      alt={caseStudy.alt}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </p>
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 line-clamp-4 text-base text-neutral-600 sm:line-clamp-none">
                  {caseStudy.description}
                </p>
                <DialogBtn caseStudy={caseStudy} />
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Waarom Genoegen Nemen met Minder?"
        title="Bij The Strength Society draait alles om topprestaties en blijvende resultaten."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Bij The Strength Society bieden we meer dan alleen training: we zetten
          in op prestaties op het hoogste niveau. Onze aanpak combineert een
          rijke expertise, diverse specialisaties en een sterke focus op
          meetbare vooruitgang. Met een team van coaches die ervaring hebben in
          zowel topsport als persoonlijke transformaties, bieden we een
          begeleiding die écht aansluit op jouw ambities.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={tannoHP}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
          <ListItem title="Fysieke & Mentale Gezondheid">
  Verbeter het fysieke en mentale welzijn van medewerkers met gerichte programma’s op beweging, voeding en veerkracht.
</ListItem>
<ListItem title="Sociale Cohesie">
  Stimuleer sterke samenwerking en duurzame verbinding binnen teams voor een hechte en gezonde bedrijfscultuur.
</ListItem>
<ListItem title="Preventie & Duurzaamheid">
  Creëer een werkomgeving die gezond en toekomstbestendig is door middel van preventieve en duurzame initiatieven.
</ListItem>
<ListItem title="Innovatie & Gamification">
  Maak gezondheid toegankelijk en leuk met innovatieve technologieën en interactieve spelelementen.
</ListItem>

          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
  'Bij The Strength Society bieden we exclusieve coachingervaringen gebaseerd op expertise uit de topsport, wetenschappelijke inzichten, en persoonlijke begeleiding.',
}

export default async function Home() {
  let caseStudies = CASESTUDYARRAY

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Streef naar meer, Ontdek je Potentieel - met The Streasdasdngth Societyasdasdasd
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Wij werken uitsluitend met mensen die gaan voor resultaat en
            maatwerk op het hoogste niveau. Bij The Strength Society bieden we
            geen standaardtrainingen, maar een exclusieve coachingervaring. Onze
            programmaʼs combineren expertise uit de topsport, wetenschappelijke
            inzichten en persoonlijke begeleiding die aansluit bij jouw doelen
            en niveau. Of je nu de eerste stappen zet of al vergevorderd bent –
            wij helpen je om te groeien en je grenzen te verleggen, in training
            én daarbuiten.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}
  

      <Services />
      <Container className="mt-24  ">
        <StatList>
          <StatListItem value="17+" label="Jaren aan expertise" />
          <StatListItem value="100+" label="Gecoachte topsporters" />
          <StatListItem value="4" label="Olympische medailles" />
        </StatList>
      </Container>
      <ContactSection />
    </>
  )
}
