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
import goals  from '@/images/coaching/goals.jpg'
import uitvoeren  from '@/images/coaching/uitvoeren.jpg'
import tssProgram from '@/images/coaching/ProgramTss.svg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start  "
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

function Coachingpad() {
  return (
    <Section title="Ontdek Jouw Coaching Pad" image={{ src: goals }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Voordat je begint, is het belangrijk om te begrijpen welk type coaching het beste bij je past. Bij ons draait alles om het afstemmen van coaching op jouw persoonlijke doelen, zodat we samen kunnen werken aan de vooruitgang die jij zoekt.
        </p>
        <p>
          Wij helpen je ontdekken welke coachingstijl jou het beste ondersteunt. Of je nu op zoek bent naar resultaatgerichte coaching, wetenschappelijke benaderingen of praktische begeleiding, we begeleiden je stap voor stap om de juiste keuze te maken.
        </p>
        <p>
          We nemen de tijd om je sterke punten, uitdagingen en verwachtingen te begrijpen, zodat we een coachingaanpak kunnen ontwikkelen die perfect aansluit bij jouw behoeften en levensstijl.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Wat we doen om het juiste coachingtype te vinden
      </h3>
      <TagList className="mt-4">
        <TagListItem>Diepgaande gesprekken</TagListItem>
        <TagListItem>Beoordeling van je behoeften</TagListItem>
        <TagListItem>Persoonlijke doelstellingen vaststellen</TagListItem>
        <TagListItem>Coachingstijl-analyse</TagListItem>
        <TagListItem>Evaluatie van de voortgang</TagListItem>
        <TagListItem>Op maat gemaakte coachingaanpak</TagListItem>
      </TagList>
    </Section>
  )
}

function Opbouwen() {
  return (
    <Section title="Opbouwen" image={{ src: tssProgram, shape: 1 ,style:{objectFit:'cover', objectPosition:'center'}  }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Na de ontdekkingsfase beginnen we met het ontwikkelen van een op maat gemaakt trainingsprogramma dat volledig is afgestemd op jouw doelen en behoeften. We creëren een gedetailleerd plan dat de basis legt voor jouw succes, en we zorgen ervoor dat elke stap goed doordacht is.
        </p>
        <p>
          Elk programma wordt zorgvuldig opgebouwd, van de opwarming en trainingsintensiteit tot herstel- en mobiliteitsstrategieën. We integreren wetenschap en ervaring om een effectieve en duurzame benadering van training te waarborgen.
        </p>
        <p>
          Naast het trainingsprogramma ontwikkelen we ook gepersonaliseerde voedings- en herstelplannen, zodat je niet alleen fysiek sterker wordt, maar ook mentaal en emotioneel in balans blijft. Ons doel is om je op elk aspect van je welzijn te ondersteunen.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Tanno de Pender', role: 'Klant naam' }}
        className="mt-12"
      >
        Het trainingsprogramma dat werd opgesteld was niet alleen effectief, maar werd ook volledig afgestemd op onze persoonlijke doelen en voorkeuren. Het is een ware transformatie!
      </Blockquote>
    </Section>
  )
}

function Uitvoer() {
  return (
    <Section title="Uitvoeren" image={{ src: uitvoeren, shape: 2,  style: { objectFit: "cover", objectPosition: "top" } }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Gedurende de uitvoeringsfase zorgen we ervoor dat het trainingsprogramma in de praktijk wordt gebracht en dat elke sessie is afgestemd op jouw voortgang en specifieke behoeften. We monitoren je prestaties nauwkeurig en passen het programma indien nodig aan om ervoor te zorgen dat je doelen binnen het gestelde tijdsbestek worden behaald.
        </p>
        <p>
          Als er obstakels zoals blessures of vermoeidheid opduiken, worden we flexibel in de uitvoering. We passen je training aan om ervoor te zorgen dat je veilig en effectief blijft trainen. Indien nodig passen we ook je voedings- en herstelplan aan om je te ondersteunen tijdens het proces.
        </p>
        <p>
          Onze focus blijft liggen op het leveren van duurzame resultaten, en we blijven je begeleiden, motiveren en bijsturen om ervoor te zorgen dat je steeds vooruitgaat, ongeacht de uitdagingen die je tegenkomt.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Wat is inbegrepen in deze fase?
      </h3>
      <List className="mt-8">
        <ListItem title="Prestatieanalyse">
          We monitoren continu je prestaties en passen de training en voeding aan op basis van je voortgang en feedback.
        </ListItem>
        <ListItem title="Blessurepreventie">
          We zorgen ervoor dat je trainingsbelasting geschikt blijft voor jouw lichaam, met een focus op blessurepreventie en herstel.
        </ListItem>
        <ListItem title="Voedingsaanpassingen">
          Indien nodig passen we je voedingsplan aan om je energielevels en herstel te optimaliseren, zodat je elke training kunt geven wat je hebt.
        </ListItem>
      </List>
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
        title="Balanceren tussen betrouwbaarheid en innovatie"
      >
        <p>
          We streven ernaar om de nieuwste trends en technologieën te omarmen, maar blijven altijd trouw aan de fundamenten die bewezen effectief zijn. Onze benadering van training en coaching draait om het bieden van betrouwbare, gepersonaliseerde begeleiding, terwijl we innovatieve technieken blijven integreren om onze klanten vooruit te helpen.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Grondigheid">
            We besteden aandacht aan elk detail, van de opzet van je trainingsprogramma tot je voedingsschema, om ervoor te zorgen dat je elke stap in je traject met vertrouwen kunt zetten.
          </GridListItem>
          <GridListItem title="Efficiëntie">
            We streven naar resultaten in de kortst mogelijke tijd, met een focus op duurzame vooruitgang. Efficiëntie in training betekent voor ons slimme keuzes maken voor maximale impact.
          </GridListItem>
          <GridListItem title="Flexibiliteit">
            Elke klant heeft unieke behoeften. We passen onze aanpak aan, zodat we je kunnen helpen bij het bereiken van je doelen, zelfs als dat betekent dat we de trainingsroutine moeten aanpassen vanwege blessures of veranderingen in je levensstijl.
          </GridListItem>
          <GridListItem title="Transparantie">
            We zijn open over ons proces en stellen je altijd op de hoogte van je voortgang, zodat je precies weet waar je staat en wat er van je wordt verwacht om je doelen te bereiken.
          </GridListItem>
          <GridListItem title="Toewijding">
            We geloven in langdurige relaties met onze klanten, waarbij we je blijven ondersteunen, zelfs nadat je je doelen hebt bereikt. Wij zijn er om je op de lange termijn te begeleiden.
          </GridListItem>
          <GridListItem title="Innovatie">
            We blijven zoeken naar nieuwe methoden en technologieën die je training kunnen verbeteren, van geavanceerde fitness apps tot innovatieve technieken voor herstel en voeding.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export const metadata = {
  title: 'Coaching proces',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Coaching" title="Welke coaching past bij jou">
        <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quae sint ipsum enim corrupti culpa odio nemo! Fugiat quae minus adipisci sint libero inventore praesentium, laudantium quia suscipit tempora ratione.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Coachingpad />
        <Opbouwen />
        <Uitvoer />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
