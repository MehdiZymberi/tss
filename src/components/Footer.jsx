import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Coaching',
    links: [
      { title: 'Personal coaching', href: '/' },
      { title: 'Group Coaching', href: '/' },
      { title: 'Nutrition Coaching', href: '/' },
      {
        title: (
          <>
         
             {/* <span aria-hidden="true">&rarr;</span> */}
          </>
        ),
        href: '/',
      },
    ],
  },
  {
    title: 'B2B',
    links: [
      { title: 'Fysieke & Mentale Gezondheid', href: '/' },
      { title: 'Sociale Cohesie', href: '/' },
      { title: 'Preventie & Duurzaamheid', href: '/' },
      { title: 'Innovatie & Gamification ', href: '/' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
  {
    title: 'Pricing',
    links: [
      { title: 'Starter ', href: '/mentale-veerkracht' },
      { title: 'Pro', href: '/fysieke-gezondheid' },
      { title: 'Elite', href: '/voedingstips' }
    ]
  },
  {
    title: 'Blog',
    links: [
      { title: 'Mentale veerkracht', href: '/mentale-veerkracht' },
      { title: 'Fysieke gezondheid', href: '/fysieke-gezondheid' },
      { title: 'Voedingstips', href: '/voedingstips' }
    ]
  },
  {
    title: 'Tools',
    links: [

      { title: 'Workout Planner', href: '/workout-planner' }, // Personaliseer je trainingsschema
      { title: 'Mindfulness Timer', href: '/mindfulness-timer' }, // Timer voor meditatie en ademhalingsoefeningen
      { title: 'Voedingswaarde Checker', href: '/voedingswaarde-checker' }, // Analyseer voedingswaarden van maaltijden
      { title: 'Slaaptracker Tips', href: '/slaaptracker-tips' } // Verbeter je slaappatroon met praktische tips
    ]
  }
  
  
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Blijft op de hoogte met onze wekelijkse nieuwsbrief
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Abonneer je om het laatste ontwerpnieuws, artikelen, bronnen en
        inspiratie te ontvangen
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            {/* <Logo className="h-8" fillOnHover /> */}
          </Link>
          <p className="text-sm text-neutral-700">
            © Valitech. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
