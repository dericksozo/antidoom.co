import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Clock,
  BarChart3,
  Settings,
  Chrome,
  Download,
  Star,
  Twitter,
  Instagram,
  Github,
  ArrowRight,
  CheckCircle,
  Target,
  Brain,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">ANTIDOOM</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-zinc-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-zinc-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-zinc-300 hover:text-white transition-colors">
              Reviews
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
            <Chrome className="w-4 h-4 mr-2" />
            Add to Chrome
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
        <div className="container mx-auto px-4 text-center relative">
          <Badge variant="outline" className="mb-6 border-red-500/20 text-red-400 bg-red-500/10">
            🚀 Now Available for Chrome
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            KILL THE
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              DOOM SCROLL
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take back control of your time. ANTIDOOM blocks distracting websites and helps you focus on what actually
            matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 text-lg px-8 py-6"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Install Free Extension
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 text-lg px-8 py-6 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Free Forever
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No Account Required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Privacy First
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Features That Actually
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Work</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              No BS. No fluff. Just powerful tools to help you reclaim your focus and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Blocking</h3>
                <p className="text-zinc-400">
                  Automatically blocks time-wasting sites. Customize your blocklist or use our curated defaults.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Focus Sessions</h3>
                <p className="text-zinc-400">
                  Set focused work periods with strict blocking. Break the cycle of endless scrolling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Analytics</h3>
                <p className="text-zinc-400">
                  See exactly where your time goes. Get insights that will shock you into better habits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Rules</h3>
                <p className="text-zinc-400">
                  Create your own blocking rules. Schedule breaks, set time limits, and take full control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Get started in under 60 seconds. No complex setup, no account creation, no BS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-lg font-bold mb-2">
                STEP 1
              </div>
              <h3 className="text-xl font-semibold mb-2">Install Extension</h3>
              <p className="text-zinc-400">
                Add ANTIDOOM to Chrome in one click. No registration, no personal info required.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-lg font-bold mb-2">
                STEP 2
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Your Targets</h3>
              <p className="text-zinc-400">
                Choose which sites to block or use our pre-built lists of the worst time-wasters.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-lg font-bold mb-2">
                STEP 3
              </div>
              <h3 className="text-xl font-semibold mb-2">Reclaim Your Mind</h3>
              <p className="text-zinc-400">
                Watch your productivity soar as you break free from the doom scroll cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What People Are
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Saying</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real reviews from people who escaped the doom scroll trap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "Holy shit, this actually works. I went from 6 hours of mindless scrolling to actually finishing my
                  side project. Game changer."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold">Marcus Chen</div>
                    <div className="text-sm text-zinc-400">Software Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "I was skeptical but ANTIDOOM literally saved my GPA. No more falling into TikTok holes when I should
                  be studying."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Kim</div>
                    <div className="text-sm text-zinc-400">College Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">
                  "Finally, an extension that doesn't try to be your therapist. It just blocks the crap and lets you
                  work. Perfect."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold">Alex Rodriguez</div>
                    <div className="text-sm text-zinc-400">Freelance Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-orange-500/20" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Break Free?
            </span>
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join thousands who've already escaped the doom scroll. Your future self will thank you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 text-lg px-8 py-6"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Install ANTIDOOM Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-zinc-500">Free forever • No account required • Privacy focused</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ANTIDOOM</span>
              </div>
              <p className="text-zinc-400 text-sm">Kill the doom scroll. Reclaim your time. Take back control.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bug Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Feature Requests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-400 mb-4 md:mb-0">© 2024 ANTIDOOM. All rights reserved.</p>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
