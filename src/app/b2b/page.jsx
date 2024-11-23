import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import goals from '../../../public/goals.jpg'
import uitvoeren from '../../../public/uitvoeren.jpg'


function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Program() {
  return (
    <Section title="Wat houdt het programma in ?" image={{ src: goals }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Iedere deelnemer ontvangt maandelijkse begeleiding afgestemd op hun
          unieke behoeften en doelen. Onze aanpak heeft al geleid tot meetbare
          verbeteringen in vitaliteit, prestaties en werkplezier bij deelnemers.
        </p>

        <p>
        Wij
          monitoren de voortgang en impact op gezondheid, welzijn en
          productiviteit. Coaching kan zowel online als fysiek plaatsvinden,
          afhankelijk van de voorkeuren van uw medewerkers.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Doel van de pilot
      </h3>
      <p className="mt-4 text-neutral-600">
        Het pilotprogramma biedt bedrijven een unieke kans om inzicht te krijgen
        in de impact van persoonlijke coaching en de bijbehorende pijlers,
        zoals:
      </p>

      <TagList className="mt-4">
        <TagListItem>Fysieke en mentale gezondheid</TagListItem>
        <TagListItem>Sociale cohesie</TagListItem>
        <TagListItem>Preventie en duurzame inzetbaarheid</TagListItem>
        <TagListItem>Coachingstijl-analyse</TagListItem>
        <TagListItem>Evaluatie van voortgang</TagListItem>
        <TagListItem>Op maat gemaakte coachingaanpak</TagListItem>
      </TagList>

      <h3 className="mt-16 font-display text-base font-semibold text-neutral-950">
        Uitkomst
      </h3>
      <p className="mt-4 text-neutral-600">
        Na afloop van de pilot ontvangt u een concrete analyse van de
        resultaten, inclusief strategische aanbevelingen over hoe deze pijlers
        verder geïmplementeerd kunnen worden op organisatiebreed niveau.
      </p>
    </Section>
  )
}

function Opbouwen() {
  return (
    <Section title="Samenwerking op maat" image={{ src: uitvoeren, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>Het kennismakingsgesprek vindt plaats op twee niveaus:</p>
        <p>
          <strong>Bestuursniveau (optioneel):</strong> Indien gewenst bespreken
          we de gezondheidsimpact en potentiële voordelen van het programma op
          organisatieniveau. Denk hierbij aan een reductie van ziekteverzuim,
          verbetering van productiviteit en andere meetbare voordelen voor de
          organisatie.
        </p>
        <p>
          <strong>Individueel niveau:</strong> Door gesprekken met werknemers te
          voeren, krijgen we inzicht in hun behoeften en uitdagingen. Dit zorgt
          ervoor dat het coachingprogramma optimaal wordt afgestemd op zowel
          individuele als organisatorische behoeften.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Kosten en Mogelijke Bijdrage van de Werkgever
      </h3>
      <div className="mt-4 space-y-4 text-base text-neutral-600">
        <p>
          Het individuele coachingpakket kost normaal €400 per maand per
          medewerker (excl. BTW).
        </p>
        <p>
          Bij deelname met meerdere medewerkers bieden wij aantrekkelijke
          kortingen:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>5–9 personen: 10% korting</li>
          <li>10–14 personen: 15% korting</li>
          <li>15–19 personen: 20% korting</li>
          <li>20+ personen: 25% korting</li>
        </ul>
        <p>
          Hoewel de kosten gericht zijn op de werknemer, kunnen werkgevers
          ervoor kiezen een bijdrage te leveren of de kosten volledig te
          vergoeden als onderdeel van een bredere investering in welzijn en
          productiviteit. Samen bespreken we graag wat de beste regeling is voor
          uw organisatie.
        </p>
      </div>

  
    </Section>
  )
}

function Uitvoer() {
  return (
    <Section
      title="Bewezen Resultaten & Hoe Werkt Het?"
      image={{
        src: uitvoeren,
        shape: 2,
        style: { objectFit: 'cover', objectPosition: 'top' },
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <h3 className="font-display text-base font-semibold text-neutral-950">
          Bewezen Resultaten
        </h3>
        <p>
          <strong>Focus en prestaties:</strong> Werknemers ervaren hogere
          productiviteit en betere focus na deelname.
        </p>
        <p>
          <strong>Duurzame gedragsveranderingen:</strong> Coaching leidt tot
          meetbare verbeteringen in gezondheid en welzijn, die ook na afloop van
          het programma blijven bestaan.
        </p>
        <p>
          <strong>Tevreden deelnemers:</strong> Onze deelnemers waarderen de
          persoonlijke aandacht en praktische aanpak, met positieve feedback
          over de impact op hun werk en privéleven.
        </p>

        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Hoe Werkt Het?
        </h3>
        <List className="mt-8">
          <ListItem title="Kennismakingsgesprek">
            <strong>Bestuursniveau (indien gewenst):</strong> We bespreken de
            gezondheidseffecten en potentiële voordelen van het programma op
            organisatieniveau, zoals verbeterde productiviteit en
            kostenbesparingen. <br />
            <strong>Individueel niveau:</strong> We voeren gesprekken met
            werknemers om hun persoonlijke uitdagingen en doelen in kaart te
            brengen.
          </ListItem>
          <ListItem title="Kick-off">
            We starten met het coachen van de deelnemers en bieden ondersteuning
            op maat.
          </ListItem>
          <ListItem title="Evaluatie en advies">
            Aan het einde van de pilot ontvangt u een rapport met analyses,
            resultaten en strategische aanbevelingen voor bredere implementatie.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Onze kernwaarden"
        title="Bouwen aan gezondheid en welzijn"
      >
        <p>
          Ons doel is om een positieve en blijvende impact te maken op de
          gezondheid en het welzijn van onze klanten. We combineren bewezen
          methoden met nieuwe inzichten, waardoor we zowel betrouwbaar als
          vooruitstrevend blijven in onze aanpak. Samen werken we aan duurzame
          resultaten en een gezonder, gelukkiger leven.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Persoonlijke begeleiding">
            We luisteren naar je specifieke doelen en uitdagingen en bieden
            maatwerk dat volledig is afgestemd op jouw unieke behoeften.
          </GridListItem>
          <GridListItem title="Resultaatgericht">
            Ons succes wordt gemeten door jouw vooruitgang. We werken efficiënt
            en doelgericht om je te helpen meetbare resultaten te behalen.
          </GridListItem>
          <GridListItem title="Aanpassingsvermogen">
            Het leven is dynamisch, en dat begrijpen we. We passen ons aan aan
            veranderingen in jouw omstandigheden, zodat je consistent
            vooruitgang blijft boeken.
          </GridListItem>
          <GridListItem title="Eerlijke communicatie">
            Transparantie is de sleutel tot vertrouwen. We delen openlijk
            informatie over je voortgang, zodat je altijd weet waar je aan toe
            bent.
          </GridListItem>
          <GridListItem title="Duurzame groei">
            Ons werk stopt niet bij het behalen van een doel. We richten ons op
            het creëren van gewoonten en structuren die je helpen om langdurig
            gezond en gelukkig te blijven.
          </GridListItem>
          <GridListItem title="Voortdurende verbetering">
            We blijven investeren in kennis en innovatie om onze diensten te
            verbeteren, zodat we altijd het beste kunnen bieden aan onze
            klanten.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Coaching Proces voor Bedrijven',
  description:
    'Een op maat gemaakt coachingproces dat gericht is op het verbeteren van de productiviteit, het welzijn van werknemers en het behalen van duurzame resultaten binnen uw organisatie.',
}

export default function B2B() {
  return (
    <>
      <PageIntro
        eyebrow="Individuele Coaching voor Werknemers"
        title="Gezonde, energieke en productieve werknemers zijn de sleutel tot een succesvolle organisatie."
      >
        <p>
          Ons pilotprogramma bouwt voort op onze uitgebreide ervaring met
          individuele coaching, waar we al talloze positieve resultaten hebben
          geboekt. Medewerkers hebben hun fysieke en mentale gezondheid
          verbeterd, hun prestaties verhoogd en duurzame gedragsveranderingen
          bereikt. Dit programma biedt een exclusieve kans voor bedrijven om
          deze voordelen direct toe te passen binnen hun organisatie.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Program />
        <Opbouwen />
        <Uitvoer />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
