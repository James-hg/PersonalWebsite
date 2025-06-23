import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Users, Eye, Shield, Waves, Clock, Target, Crown, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const roles = [
    {
      name: "Security",
      team: "lifeguard",
      ability: "Learns a player's alignment each night",
      icon: Eye,
      description: "Cannot target the same player on consecutive nights",
    },
    {
      name: "Camera Observer",
      team: "lifeguard",
      ability: "Observes one pool to determine sabotage",
      icon: Target,
      description: "Cannot observe the same pool twice in a row",
    },
    {
      name: "Whistle Marshal",
      team: "lifeguard",
      ability: "Silences one player per night",
      icon: Zap,
      description: "Silenced players cannot make any actions",
    },
    {
      name: "Leader Patron",
      team: "patron",
      ability: "Chooses pool to sabotage and target player",
      icon: Crown,
      description: "If sabotage succeeds, target player is eliminated",
    },
    {
      name: "Disruptor Patron",
      team: "patron",
      ability: "Mutes a player for the next day",
      icon: Zap,
      description: "That player cannot speak or defend themselves",
    },
    {
      name: "Regular Lifeguard",
      team: "lifeguard",
      ability: "Guards specific pools",
      icon: Shield,
      description: "Prevents sabotage when guarding the targeted pool",
      image: "/images/lifeguard-card.png",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Hidden Roles",
      description: "Secret team assignments create tension and mystery",
    },
    {
      icon: Waves,
      title: "Pool Strategy",
      description: "Strategic pool guarding vs sabotage mechanics",
    },
    {
      icon: Clock,
      title: "Night-Day Cycles",
      description: "Dynamic gameplay with secret actions and public discussion",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-900">Guard Duty</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-blue-700 hover:text-blue-900 font-medium">
                About
              </Link>
              <Link href="#how-to-play" className="text-blue-700 hover:text-blue-900 font-medium">
                How to Play
              </Link>
              <Link href="#roles" className="text-blue-700 hover:text-blue-900 font-medium">
                Roles
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Guard Duty</h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-blue-100">Lifeguards vs. Patrons</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">Where strategy meets summer fun!</p>
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
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            Learn to Play
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">About the Game</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              A thrilling social deduction game where teamwork and cunning decide the fate of the pool! Players are
              secretly divided into Lifeguards and Patrons, each with unique abilities and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-2 border-blue-200 hover:border-blue-400 transition-colors"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Victory Conditions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Lifeguards Win If:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• All Patrons are eliminated, or</li>
                    <li>• The pool stays operational for all rounds</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">Patrons Win If:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Patrons equal or outnumber Lifeguards, or</li>
                    <li>• Enough sabotage actions succeed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">10+ Players</h4>
                <p className="text-gray-600">Perfect for parties and game nights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How to Play</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-900 flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </div>
                  Night Phase
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  All players close their eyes. The narrator calls on roles to act in order, maintaining secrecy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-yellow-900 flex items-center">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    2
                  </div>
                  Results Phase
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  The narrator reveals outcomes like eliminations and muted players to all participants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-900 flex items-center">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    3
                  </div>
                  Day Phase
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  Players discuss, vote, and potentially eliminate a suspect through democratic process.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Pool Guarding System</h3>
            <p className="text-gray-700 mb-4">
              The game features more pools than guards (e.g., 4 pools, 3 guards). Lifeguards must strategically choose
              which pools to guard each night, while Patrons attempt to sabotage unguarded pools.
            </p>
            <p className="text-gray-700">
              <strong>Key:</strong> If the chosen sabotage pool is unguarded, sabotage succeeds and unlocks special
              abilities!
            </p>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Meet the Roles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  role.team === "lifeguard"
                    ? "border-blue-300 hover:border-blue-500"
                    : "border-red-300 hover:border-red-500"
                }`}
              >
                <CardHeader className={`${role.team === "lifeguard" ? "bg-blue-50" : "bg-red-50"}`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className={`${role.team === "lifeguard" ? "text-blue-900" : "text-red-900"}`}>
                      {role.name}
                    </CardTitle>
                    <Badge variant={role.team === "lifeguard" ? "default" : "destructive"} className="capitalize">
                      {role.team}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {role.image ? (
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={role.image || "/placeholder.svg"}
                        alt={role.name}
                        width={120}
                        height={160}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  ) : (
                    <role.icon
                      className={`h-12 w-12 mx-auto mb-4 ${
                        role.team === "lifeguard" ? "text-blue-600" : "text-red-600"
                      }`}
                    />
                  )}
                  <p className="font-semibold text-gray-900 mb-2">{role.ability}</p>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Each role has unique abilities and strategic importance. Master them all to dominate the pool!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">Download Full Rulebook</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="h-6 w-6" />
                <span className="text-xl font-bold">Guard Duty</span>
              </div>
              <p className="text-blue-200">
                The ultimate social deduction game where summer fun meets strategic gameplay.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-blue-200 hover:text-white">
                  About
                </Link>
                <Link href="#how-to-play" className="block text-blue-200 hover:text-white">
                  How to Play
                </Link>
                <Link href="#roles" className="block text-blue-200 hover:text-white">
                  Roles
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Updated</h4>
              <p className="text-blue-200 mb-4">Get notified about expansions and tournaments!</p>
              <Button variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900">
                Join Mailing List
              </Button>
            </div>
          </div>
          <Separator className="my-8 bg-blue-700" />
          <div className="text-center text-blue-200">
            <p>&copy; 2024 Guard Duty: Lifeguards vs. Patrons. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
