"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Shield, Users, Waves, Sun, Timer, Target, Mail, Github, Twitter, Facebook } from "lucide-react"

export default function GuardDutyWebsite() {
  const [email, setEmail] = useState("")

  const lifeguardRoles = [
    {
      name: "Security",
      image: "/images/security.png",
      description: "Learns a player's role each night",
      ability: "Knows which side that player is on",
      team: "lifeguard",
    },
    {
      name: "Camera Observer",
      image: "/images/camera-observer.png",
      description: "Observes one pool each night to determine sabotage",
      ability: "Learns if that pool was sabotaged successfully",
      team: "lifeguard",
    },
    {
      name: "Whistle Marshal",
      image: "/images/whistle-marshal.png",
      description: "Silences one player per night",
      ability: "Silenced players cannot make any actions",
      team: "lifeguard",
    },
    {
      name: "Rescue Diver",
      image: "/images/rescue-diver.png",
      description: "Eliminate a player during the night, one-time use",
      ability: "Ability unlocks after first successful sabotage",
      team: "lifeguard",
    },
    {
      name: "Supervisor",
      image: "/images/supervisor.png",
      description: "Learns if a player performed an action",
      ability: "Detects sabotage, protect, or investigate actions",
      team: "lifeguard",
    },
    {
      name: "Security Bodyguard",
      image: "/images/bodyguard.png",
      description: "Protects one player each night",
      ability: "Prevents elimination or conversion. Cannot protect the same player two nights in a row. Will be announced if protected player was attacked",
      team: "lifeguard",
    },
    {
      name: "Doctor",
      image: "/images/doctor.png",
      description: "Protects one player each night",
      ability: "Prevents only elimination. Can protect the same player multiple nights in a row.",
      team: "lifeguard",
    },
  ]

  const patronRoles = [
    {
      name: "Leader Patron",
      image: "/images/leader-patron.png",
      description: "Chooses pools to sabotage and targets to eliminate",
      ability: "Eliminates target if sabotage succeeds",
      team: "patron",
    },
    {
      name: "Disruptor Patron",
      image: "/images/disruptor-patron.png",
      description: "Mutes a player for the next day",
      ability: "Target cannot speak or defend themselves",
      team: "patron",
    },
    {
      name: "Chameleon Patron",
      image: "/images/chameleon-patron.png",
      description: "Appears as Lifeguard when investigated",
      ability: "Fools Security investigations",
      team: "patron",
    },
    {
      name: "Recruiter Patron",
      image: "/images/recruiter-patron.png",
      description: "Can convert the Sleeper Lifeguard",
      ability: "Once per game conversion attempt",
      team: "patron",
    },
    {
      name: "Tethered Patron",
      image: "/images/tethered-patron.png",
      description: "Each night chooses one player to tether",
      ability: "If eliminated, the tethered player is eliminated too.",
      team: "patron",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">Guard Duty</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-blue-700 hover:text-blue-900 font-medium">
                Home
              </a>
              <a href="#about" className="text-blue-700 hover:text-blue-900 font-medium">
                About
              </a>
              <a href="#how-to-play" className="text-blue-700 hover:text-blue-900 font-medium">
                How to Play
              </a>
              <a href="#roles" className="text-blue-700 hover:text-blue-900 font-medium">
                Roles
              </a>
              <a href="#contact" className="text-blue-700 hover:text-blue-900 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-red-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sun className="w-12 h-12 mr-4 text-yellow-300" />
            <h1 className="text-5xl md:text-7xl font-bold">Guard Duty</h1>
            <Waves className="w-12 h-12 ml-4 text-blue-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Lifeguards vs. Patrons</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Where strategy meets summer fun!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              Hidden Roles
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              Social Deduction
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              Team Strategy
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
              10+ Players
            </Badge>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            Learn to Play
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About the Game</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
              A thrilling social deduction game where teamwork and cunning decide the fate of the pool! Players are
              secretly divided into Lifeguards and Patrons, each with unique abilities and objectives.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-white border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Hidden Roles</h3>
              <p className="text-gray-600">Secret team assignments create tension and mystery</p>
            </Card>

            <Card className="text-center p-8 bg-white border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <Waves className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Pool Strategy</h3>
              <p className="text-gray-600">Strategic pool guarding vs sabotage mechanics</p>
            </Card>

            <Card className="text-center p-8 bg-white border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <Timer className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Night-Day Cycles</h3>
              <p className="text-gray-600">Dynamic gameplay with secret actions and public discussion</p>
            </Card>
          </div>

          {/* Victory Conditions */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Victory Conditions</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 border-l-4 border-l-blue-500 bg-blue-50">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Lifeguards Win If:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All Patrons are eliminated, or</li>
                  <li>• The pool stays operational for all rounds</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-500 bg-red-50">
                <h4 className="text-xl font-bold text-red-900 mb-4">Patrons Win If:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Patrons equal or outnumber Lifeguards, or</li>
                  <li>• Enough sabotage actions succeed</li>
                </ul>
              </Card>
            </div>

            {/* Player Count Card */}
            <div className="flex justify-center">
              <Card className="text-center p-8 bg-white border-2 border-blue-200 max-w-sm">
                <div className="flex justify-center mb-4">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">10+ Players</h3>
                <p className="text-gray-600">Perfect for parties and game nights</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-12">How to Play</h2>
          </div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-blue-50 border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Night Phase</h3>
              </div>
              <p className="text-gray-700">
                All players close their eyes. The narrator calls on roles to act in order, maintaining secrecy.
              </p>
            </Card>

            <Card className="p-8 bg-yellow-50 border-2 border-yellow-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Results Phase</h3>
              </div>
              <p className="text-gray-700">
                The narrator reveals outcomes like eliminations and muted players to all participants.
              </p>
            </Card>

            <Card className="p-8 bg-red-50 border-2 border-red-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="text-2xl font-bold text-red-900">Day Phase</h3>
              </div>
              <p className="text-gray-700">
                Players discuss, vote, and potentially eliminate a suspect through democratic process.
              </p>
            </Card>
          </div>

          {/* Pool Guarding System */}
          <Card className="p-8 bg-blue-50 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Pool Guarding System</h3>
            <p className="text-gray-700 mb-4">
              The game features more pools than guards (e.g., 4 pools, 3 guards). Lifeguards must strategically choose
              which pools to guard each night, while Patrons attempt to sabotage unguarded pools.
            </p>
            <p className="text-gray-700">
              <strong>Key:</strong> If the chosen sabotage pool is unguarded, sabotage succeeds and unlocks special
              abilities!
            </p>
          </Card>

          {/* Night Action Order */}
          <div className="mt-12">
            <Card className="p-8 bg-white border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-center mb-8">Night Action Order</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-6">Patron Actions (1-4)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </span>
                      <span className="text-gray-700">Leader Patron - Target Player</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </span>
                      <span className="text-gray-700">Disruptor Patron - Mute Player</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </span>
                      <span className="text-gray-700">Recruiter Patron - Convert Attempt</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </span>
                      <span className="text-gray-700">All Patrons - Confirm Sabotage</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-6">Lifeguard Actions (5-11)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        5
                      </span>
                      <span className="text-gray-700">Whistle Marshal - Silence Player</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        6
                      </span>
                      <span className="text-gray-700">Rescue Diver - Eliminate (if unlocked)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        7
                      </span>
                      <span className="text-gray-700">Lifeguards - Assign Pool Guards</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        8
                      </span>
                      <span className="text-gray-700">Supervisor - Learn Player Action</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        9
                      </span>
                      <span className="text-gray-700">Security - Learn Alignment</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        10
                      </span>
                      <span className="text-gray-700">Security Bodyguard - Protect Player</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        11
                      </span>
                      <span className="text-gray-700">Camera Observer - Observe Pool</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet the Roles</h2>
            <p className="text-xl text-gray-700">Discover the unique characters and their special abilities</p>
          </div>

          {/* Lifeguard Roles */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-blue-900">Lifeguard Team</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifeguardRoles.map((role, index) => (
                <Card key={index} className="hover:shadow-lg transition-all border-2 border-blue-200 bg-white">
                  <CardHeader className="text-center p-6">
                    <div className="flex justify-center mb-3">
                      <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={role.image || "/placeholder.svg"}
                          alt={role.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-blue-800 text-base leading-tight mb-2">{role.name}</CardTitle>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                      <strong>Special Rule:</strong> {role.ability}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Regular Lifeguards */}
              <Card className="hover:shadow-lg transition-all border-2 border-blue-200 bg-white">
                <CardHeader className="text-center p-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/images/lifeguard.png"
                        alt="Regular Lifeguards"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-blue-800 text-base leading-tight mb-2">Regular Lifeguards</CardTitle>
                  <CardDescription className="text-sm">Guard pools each night from sabotage</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                    <strong>Special Rule:</strong> If a pool is left unguarded and sabotaged, sabotage succeeds
                  </div>
                </CardContent>
              </Card>

              {/* Sleeper Lifeguard */}
              <Card className="hover:shadow-lg transition-all border-2 border-blue-200 bg-white">
                <CardHeader className="text-center p-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/images/sleeper.png"
                        alt="Sleeper Lifeguard"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-blue-800 text-base leading-tight mb-2">Sleeper Lifeguard</CardTitle>
                  <CardDescription className="text-sm">No active ability but knows their role</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                    <strong>Special Rule:</strong> Can be converted by Recruiter Patron unless protected
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Patron Roles */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-3xl font-bold text-red-900">Patron Team</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patronRoles.map((role, index) => (
                <Card key={index} className="hover:shadow-lg transition-all border-2 border-red-200 bg-white">
                  <CardHeader className="text-center p-6">
                    <div className="flex justify-center mb-3">
                      <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={role.image || "/placeholder.svg"}
                          alt={role.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-red-800 text-base leading-tight mb-2">{role.name}</CardTitle>
                    <CardDescription className="text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="text-xs text-gray-600 bg-red-50 p-3 rounded">
                      <strong>Special Rule:</strong> {role.ability}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Regular Patrons */}
              <Card className="hover:shadow-lg transition-all border-2 border-red-200 bg-white">
                <CardHeader className="text-center p-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/images/regular-patron.png"
                        alt="Regular Patrons"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-red-800 text-base leading-tight mb-2">Regular Patrons</CardTitle>
                  <CardDescription className="text-sm">Collaborate with Leader to sabotage pools</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-xs text-gray-600 bg-red-50 p-3 rounded">
                    <strong>Special Rule:</strong> Work together to choose sabotage targets strategically
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Roles scale with player count for balanced gameplay!</p>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Recommended: 10-16 Players
            </Badge>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get notified about expansions, tournaments, and special events!
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Guard Duty</span>
              </div>
              <p className="text-gray-400">
                The ultimate social deduction game that brings summer fun to your game night.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    About the Game
                  </a>
                </li>
                <li>
                  <a href="#how-to-play" className="hover:text-white">
                    How to Play
                  </a>
                </li>
                <li>
                  <a href="#roles" className="hover:text-white">
                    Meet the Roles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Download Rules
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Guard Duty: Lifeguards vs. Patrons. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
