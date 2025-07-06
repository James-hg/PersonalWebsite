"use client";
import FlipCard from "../ui/flipcard";

export default function GallerySection() {
    return (
        <section className="overflow-x-auto whitespace-nowrap py-16 bg-gray-50">
            <div className="flex space-x-6 px-8">
                <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs">
                    <img
                        src="/images/full-setup.png"
                        alt="Full setup"
                        className="rounded-t-2xl w-full"
                    />
                    <div className="p-4 text-left">
                        <h3 className="text-xl font-bold mb-2">
                            Full Game Setup
                        </h3>
                    </div>
                </div>

                <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs">
                    <img
                        src="/images/board.png"
                        alt="Game Board"
                        className="rounded-t-2xl w-full"
                    />
                    <div className="p-4 text-left">
                        <h3 className="text-xl font-bold mb-2">Game Board</h3>
                    </div>
                </div>

                <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs">
                    <img
                        src="/images/box.png"
                        alt="Game Box"
                        className="rounded-t-2xl w-full"
                    />
                    <div className="p-4 text-left">
                        <h3 className="text-xl font-bold mb-2">Game Box</h3>
                    </div>
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/lifeguard.png"
                        backImg="/images/card-back.png"
                        alt="Lifeguard Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/bodyguard.png"
                        backImg="/images/card-back.png"
                        alt="Bodyguard Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/camera-observer.png"
                        backImg="/images/card-back.png"
                        alt="Camera Observer Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/chameleon-patron.png"
                        backImg="/images/card-back.png"
                        alt="Chameleon Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/disruptor-patron.png"
                        backImg="/images/card-back.png"
                        alt="Disruptor Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/doctor.png"
                        backImg="/images/card-back.png"
                        alt="Doctor Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/leader-patron.png"
                        backImg="/images/card-back.png"
                        alt="Leader Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/narrator.png"
                        backImg="/images/card-back.png"
                        alt="Narrator Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/recruiter-patron.png"
                        backImg="/images/card-back.png"
                        alt="Recruiter Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/regular-patron.png"
                        backImg="/images/card-back.png"
                        alt="Regular Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/rescue-diver.png"
                        backImg="/images/card-back.png"
                        alt="Rescue Diver Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/security.png"
                        backImg="/images/card-back.png"
                        alt="Security Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/sleeper.png"
                        backImg="/images/card-back.png"
                        alt="Sleeper Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/supervisor.png"
                        backImg="/images/card-back.png"
                        alt="Supervisor Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/tethered-patron.png"
                        backImg="/images/card-back.png"
                        alt="Tethered Patron Card"
                    />
                </div>

                <div className="flex-shrink-0 min-w-fit">
                    <FlipCard
                        frontImg="/images/whistle-marshal.png"
                        backImg="/images/card-back.png"
                        alt="Whistle Marshal Card"
                    />
                </div>
            </div>
        </section>
    );
}
