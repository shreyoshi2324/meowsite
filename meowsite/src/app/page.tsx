"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, PawPrintIcon as Paw, Mail, ArrowRight, Cat } from "lucide-react"
import ClickSpark from '@/components/ui/ClickSpark/ClickSpark';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <ClickSpark
        sparkColor='brown'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-amber-200 bg-amber-50/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-amber-900">
            <Cat className="h-6 w-6" />
            <span>Meowsite</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
              Gallery
            </Link>
            <Link href="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
              Adoption
            </Link>
            <Link href="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-amber-900 hover:text-amber-700">
              Contact
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">Support Us</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-200 px-3 py-1 text-sm font-medium text-amber-900">
                  Discover Feline Companions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-5xl xl:text-6xl/none">
                
                  Fostering Love for Our Feline Friends
                </h1>
                <p className="max-w-[600px] text-amber-800 md:text-xl">
                  Join our community dedicated to celebrating, protecting, and finding homes for cats. Every purr
                  matters.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Explore Cats</Button>
                  <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[700px]">
                <Image
                  src="/cat1.jpg?height=500&width=500"
                  alt="Beautiful cat portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-300 to-amber-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center rounded-md bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  <Heart className="mr-1 h-3 w-3" /> Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-4xl md:text-5xl">
                  Why We Love Cats
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Cats bring joy, companionship, and a touch of magic to our lives. Here's why we're dedicated to them.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="group relative overflow-hidden rounded-lg border border-amber-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-amber-950">Unconditional Love</h3>
                <p className="text-amber-700">
                  Cats offer companionship and affection that enriches our lives in countless ways.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-amber-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Paw className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-amber-950">Unique Personalities</h3>
                <p className="text-amber-700">
                  Each cat has its own character, making every relationship special and one-of-a-kind.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-amber-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-amber-950">Community Building</h3>
                <p className="text-amber-700">
                  Our shared love for cats creates connections and communities that span the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-amber-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-4xl md:text-5xl">
                  Featured Felines
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Meet some of our most adorable cat friends who are looking for forever homes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/cat2.jpg?height=300&width=300&text=Cat 1"
                    alt="Cat 1"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-amber-950">Whiskers</h3>
                  <p className="text-sm text-amber-700">Calm and affectionate • 3 years old</p>
                  <Button variant="link" className="mt-2 p-0 text-amber-600 hover:text-amber-800">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/cat3.jpg?height=300&width=300&text=Cat 2"
                    alt="Cat 2"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-amber-950">Mittens</h3>
                  <p className="text-sm text-amber-700">Playful and energetic • 4 years old</p>
                  <Button variant="link" className="mt-2 p-0 text-amber-600 hover:text-amber-800">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/cat4.jpg?height=300&width=300&text=Cat 3"
                    alt="Cat 3"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-amber-950">Shadow</h3>
                  <p className="text-sm text-amber-700">Calm and affectionate • 5 years old</p>
                  <Button variant="link" className="mt-2 p-0 text-amber-600 hover:text-amber-800">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">View All Cats</Button>
            </div>
          </div>
        </section>

        {/* Adoption Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <ClickSpark
              sparkColor='brown'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[500px]">
                <Image
                  src="/cats.jpg?height=500&width=500&text=Adoption"
                  alt="Cat adoption"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-200 px-3 py-1 text-sm font-medium text-amber-900">
                  Make a Difference
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-4xl md:text-5xl">
                  Adopt a Forever Friend
                </h2>
                <p className="max-w-[600px] text-amber-800 md:text-xl">
                  Thousands of cats are waiting for a loving home. By adopting, you're not just gaining a companion –
                  you're saving a life.
                </p>
                <ul className="space-y-2">
                  {["Complete screening process", "Meet available cats", "Home visit", "Adoption finalization"].map(
                    (step, i) => (
                      <li key={i} className="flex items-center text-amber-800">
                        <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-amber-900 text-xs font-medium">
                          {i + 1}
                        </div>
                        {step}
                      </li>
                    ),
                  )}
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Start Adoption Process</Button>
              </div>
            </div>
            </ClickSpark>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-amber-950 sm:text-4xl">Stay Connected</h2>
                <p className="mx-auto max-w-[600px] text-amber-800 md:text-xl">
                  Join our newsletter to receive updates on adoptable cats, events, and cat care tips.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 border-amber-300 bg-white focus-visible:ring-amber-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-amber-700">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-amber-50 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-2 font-bold text-amber-900">
                <Cat className="h-6 w-6" />
                <span>Cat Lovers Haven</span>
              </Link>
              <p className="text-sm text-amber-700">Dedicated to fostering love and care for cats everywhere.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-amber-950">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Gallery", "Adoption", "About", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-amber-700 hover:text-amber-900">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-amber-950">Resources</h3>
              <ul className="space-y-2">
                {["Cat Care Tips", "Health Guides", "Training Advice", "FAQs", "Support"].map((resource) => (
                  <li key={resource}>
                    <Link href="#" className="text-sm text-amber-700 hover:text-amber-900">
                      {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-amber-950">Contact</h3>
              <address className="not-italic text-sm text-amber-700">
                <p>123 Whisker Lane</p>
                <p>Purrington, CA 90210</p>
                <p className="mt-2">info@catlovershaven.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-amber-200 pt-6 text-center text-sm text-amber-700">
            <p>© {new Date().getFullYear()} Cat Lovers Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </ClickSpark>
    </div>
  )
}
