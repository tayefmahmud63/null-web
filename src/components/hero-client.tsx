"use client";

import * as React from "react";
import {
  Activity,
  ArrowRight,
  BarChart,
  Bird,
  Menu,
  Plug,
  Sparkles,
  Zap,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "SOLUTIONS", href: "#" },
  { title: "INDUSTRIES", href: "#" },
  { title: "RESOURCES", href: "#" },
  { title: "ABOUT US", href: "#" },
];

const labels = [
  { icon: Sparkles, label: "Predictive Analytics" },
  { icon: Plug, label: "Machine Learning" },
  { icon: Activity, label: "Natural Language Processing" },
];

const features = [
  {
    icon: BarChart,
    label: "Advanced Analytics",
    description:
      "Gain deeper insights from your data with our cutting-edge predictive models.",
  },
  {
    icon: Zap,
    label: "Intelligent Automation",
    description: "Streamline your processes with AI-powered automation solutions.",
  },
  {
    icon: Activity,
    label: "Real-time Insights",
    description: "Make informed decisions faster with our real-time data processing capabilities.",
  },
];

export default function HeroClient() {
  // Render static markup only (no framer-motion) to avoid hydration mismatches.
  const titleWords = ["THE", "AI", "REVOLUTION", "FOR", "BUSINESS", "INTELLIGENCE"];

  return (
    <div className="container mx-auto px-4 min-h-screen bg-background">
      <header>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <Bird className="h-8 w-8" />
              <span className="font-mono text-xl font-bold">Myna UI</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-mono text-foreground hover:text-[#141414] transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="rounded-none hidden md:inline-flex bg-[#141414] hover:bg-[#FF6B2C]/90 font-mono"
            >
              GET STARTED <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-6 mt-6">
                  {navigationItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-sm font-mono text-foreground hover:text-[#FF6B2C] transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Button className="cursor-pointer rounded-none bg-[#141414] hover:bg-[#FF6B2C]/90 font-mono">
                    GET STARTED <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="flex flex-col items-center text-center">
            <h1 className="relative font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
              {titleWords.map((w, i) => (
                <span key={i} className="inline-block mx-2 md:mx-4">{w}</span>
              ))}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-foreground font-mono">We empower businesses with cutting-edge AI solutions to transform data into actionable insights.</p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {labels.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 px-6">
                  <feature.icon className="h-5 w-5 text-[#141414]" />
                  <span className="text-sm font-mono">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button size="lg" className="cursor-pointer rounded-none mt-12 bg-[#141414] hover:bg-[#FF6B2C]/90 font-mono">GET STARTED <ArrowRight className="ml-1 w-4 h-4" /></Button>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="text-center text-4xl font-mono font-bold mb-6">Unlock the Power of AI</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center p-8 bg-background border">
                <div className="mb-6 rounded-full bg-[#141414]/10 p-4">
                  <feature.icon className="h-8 w-8 text-[#141414]" />
                </div>
                <h3 className="mb-4 text-xl font-mono font-bold">{feature.label}</h3>
                <p className="leading-relaxed flex-grow text-gray-100 font-medium">{feature.description}</p>

                <div className="mt-6 flex items-center text-sm font-bold text-gray-200">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
