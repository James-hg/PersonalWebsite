"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Shield, Target, Users } from "lucide-react";

export default function RolesSection() {
    const lifeguardRoles = [
        {
            name: "Security",
            image: "/images/security.png",
            description: "Learns a player's role each night",
            ability: "Knows which side that player is on",
        },
        {
            name: "Camera Observer",
            image: "/images/camera-observer.png",
            description: "Observes one pool each night to determine sabotage",
            ability: "Learns if that pool was sabotaged successfully",
        },
        {
            name: "Whistle Marshal",
            image: "/images/whistle-marshal.png",
            description: "Silences one player per night",
            ability: "Silenced players cannot make any actions",
        },
        {
            name: "Rescue Diver",
            image: "/images/rescue-diver.png",
            description: "Eliminate a player during the night, one-time use",
            ability: "Ability unlocks after first successful sabotage",
        },
        {
            name: "Supervisor",
            image: "/images/supervisor.png",
            description: "Learns if a player performed an action",
            ability: "Detects sabotage, protect, or investigate actions",
        },
        {
            name: "Security Bodyguard",
            image: "/images/bodyguard.png",
            description: "Protects one player each night",
            ability:
                "Prevents elimination or conversion; announces if triggered",
        },
        {
            name: "Doctor",
            image: "/images/doctor.png",
            description: "Protects one player each night",
            ability:
                "Prevents only elimination; can protect same player repeatedly",
        },
    ];

    const patronRoles = [
        {
            name: "Leader Patron",
            image: "/images/leader-patron.png",
            description: "Chooses pools to sabotage and targets to eliminate",
            ability: "Eliminates target if sabotage succeeds",
        },
        {
            name: "Disruptor Patron",
            image: "/images/disruptor-patron.png",
            description: "Mutes a player for the next day",
            ability: "Target cannot speak or defend themselves",
        },
        {
            name: "Chameleon Patron",
            image: "/images/chameleon-patron.png",
            description: "Appears as Lifeguard when investigated",
            ability: "Fools Security investigations",
        },
        {
            name: "Recruiter Patron",
            image: "/images/recruiter-patron.png",
            description: "Can convert the Sleeper Lifeguard",
            ability: "Once per game conversion attempt",
        },
        {
            name: "Tethered Patron",
            image: "/images/tethered-patron.png",
            description: "Each night chooses one player to tether",
            ability: "If eliminated, the tethered player is eliminated too.",
        },
    ];

    return (
        <section id="roles" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Meet the Roles
                    </h2>
                    <p className="text-xl text-gray-700">
                        Discover the unique characters and their special
                        abilities
                    </p>
                </div>

                {/* Narrator Role */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-800">
                            Narrator
                        </h3>
                    </div>
                    <div className="flex justify-center">
                        <Card className="hover:shadow-lg transition-all border-2 border-gray-300 bg-white max-w-sm">
                            <CardHeader className="text-center p-6">
                                <div className="flex justify-center mb-3">
                                    <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                                        <Image
                                            src="/images/narrator.png" // Your generated image path
                                            alt="Narrator"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <CardTitle className="text-gray-800 text-base leading-tight mb-2">
                                    Narrator
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    Guides the game flow, calls role actions,
                                    and enforces rules without taking a side.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
                                    <strong>Rule:</strong> The Narrator must
                                    remain neutral, keep all night actions
                                    secret, and announce results clearly each
                                    round.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Lifeguard Roles */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <Shield className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-3xl font-bold text-blue-900">
                            Lifeguard Team
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lifeguardRoles.map((role, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all border-2 border-blue-200 bg-white"
                            >
                                <CardHeader className="text-center p-6">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={
                                                    role.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={role.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <CardTitle className="text-blue-800 text-base leading-tight mb-2">
                                        {role.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {role.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                                        <strong>Special Rule:</strong>{" "}
                                        {role.ability}
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
                                        />
                                    </div>
                                </div>
                                <CardTitle className="text-blue-800 text-base leading-tight mb-2">
                                    Regular Lifeguards
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    Guard pools each night from sabotage
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                                    <strong>Special Rule:</strong> If a pool is
                                    left unguarded and sabotaged, sabotage
                                    succeeds
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
                                        />
                                    </div>
                                </div>
                                <CardTitle className="text-blue-800 text-base leading-tight mb-2">
                                    Sleeper Lifeguard
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    No active ability but knows their role
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded">
                                    <strong>Special Rule:</strong> Can be
                                    converted by Recruiter Patron unless
                                    protected
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Patron Roles */}
                <div>
                    <div className="flex items-center justify-center mb-8">
                        <Target className="w-8 h-8 text-red-600 mr-3" />
                        <h3 className="text-3xl font-bold text-red-900">
                            Patron Team
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {patronRoles.map((role, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all border-2 border-red-200 bg-white"
                            >
                                <CardHeader className="text-center p-6">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-48 h-72 relative rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={
                                                    role.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={role.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <CardTitle className="text-red-800 text-base leading-tight mb-2">
                                        {role.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {role.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <div className="text-xs text-gray-600 bg-red-50 p-3 rounded">
                                        <strong>Special Rule:</strong>{" "}
                                        {role.ability}
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
                                        />
                                    </div>
                                </div>
                                <CardTitle className="text-red-800 text-base leading-tight mb-2">
                                    Regular Patrons
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    Collaborate with Leader to sabotage pools
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="text-xs text-gray-600 bg-red-50 p-3 rounded">
                                    <strong>Special Rule:</strong> Work together
                                    to choose sabotage targets strategically
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            Roles scale with player count for balanced gameplay!
                        </p>
                        <Badge
                            variant="outline"
                            className="text-lg px-4 py-2 bg-slate-200"
                        >
                            <Users className="w-4 h-4 mr-2" />
                            Recommended: 10+ Players
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}
