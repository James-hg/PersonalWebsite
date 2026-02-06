"use client";
import FlipCard from "../ui/FlipCard";

export default function GallerySection() {
    return (
        <section
            id="gallery"
            className="whitespace-nowrap text-center py-16 bg-slate-100"
        >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Gallery</h2>
            <div className="overflow-x-auto whitespace-nowrap text-center py-16 bg-slate-100">
                <div className="flex space-x-6 px-8">
                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/iat210/images/full-setup-2.png"
                            alt="Full setup"
                            className="rounded-t-2xl w-full"
                        />
                        <div className="p-4 text-left justify-center">
                            <h3 className="text-xl font-bold mb-2">
                                Full Game Setup
                            </h3>
                        </div>
                    </div>

                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/iat210/images/board.png"
                            alt="Game Board"
                            className="rounded-t-2xl w-full"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-xl font-bold mb-2">
                                Game Board
                            </h3>
                        </div>
                    </div>

                    <div className="flex-shrink-0 bg-white rounded-2xl shadow-lg max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/iat210/images/box.png"
                            alt="Game Box"
                            className="rounded-t-2xl w-full"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-xl font-bold mb-2">Game Box</h3>
                        </div>
                    </div>

                    {/* narrator */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/narrator.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Narrator Card"
                        />
                    </div>

                    {/* lifeguard1 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/lifeguard.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Lifeguard Card"
                        />
                    </div>
                    {/* lifeguard2 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/card-back.png"
                            backImg="/iat210/images/lifeguard2.png"
                            alt="Lifeguard Card"
                        />
                    </div>
                    {/* lifeguard3 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/lifeguard3.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Lifeguard Card"
                        />
                    </div>
                    {/* lifeguard4 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/lifeguard4.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Lifeguard Card"
                        />
                    </div>
                    {/* lifeguard5 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/lifeguard5.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Lifeguard Card"
                        />
                    </div>

                    {/* bodyguard */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/bodyguard.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Bodyguard Card"
                        />
                    </div>

                    {/* camera-observer */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/camera-observer.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Camera Observer Card"
                        />
                    </div>

                    {/* whistle marshal */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/whistle-marshal.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Whistle Marshal Card"
                        />
                    </div>

                    {/* rescue diver */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/rescue-diver.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Rescue Diver Card"
                        />
                    </div>

                    {/* security */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/security.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Security Card"
                        />
                    </div>

                    {/* sleeper */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/sleeper.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Sleeper Card"
                        />
                    </div>

                    {/* supervisor */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/supervisor.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Supervisor Card"
                        />
                    </div>

                    {/* doctor */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/doctor.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Doctor Card"
                        />
                    </div>

                    {/* chameleon patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/chameleon-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Chameleon Patron Card"
                        />
                    </div>

                    {/* disruptor patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/disruptor-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Disruptor Patron Card"
                        />
                    </div>

                    {/* leader patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/leader-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Leader Patron Card"
                        />
                    </div>

                    {/* recruiter patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/recruiter-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Recruiter Patron Card"
                        />
                    </div>

                    {/* regular patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/card-back.png"
                            backImg="/iat210/images/regular-patron.png"
                            alt="Regular Patron Card"
                        />
                    </div>

                    {/* regular patron2 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/regular-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Regular Patron Card"
                        />
                    </div>
                    {/* regular patron3 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/regular-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Regular Patron Card"
                        />
                    </div>

                    {/* regular patron4 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/regular-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Regular Patron Card"
                        />
                    </div>

                    {/* regular patron5 */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/regular-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Regular Patron Card"
                        />
                    </div>

                    {/* tethered patron */}
                    <div className="flex-shrink-0 min-w-fit">
                        <FlipCard
                            frontImg="/iat210/images/tethered-patron.png"
                            backImg="/iat210/images/card-back.png"
                            alt="Tethered Patron Card"
                        />
                    </div>
                </div>
            </div>
            <div className="px-10">
                <p className="text-xs text-gray-500 mt-1 text-left">
                    Artwork generated by AI for Guard Duty.
                </p>
            </div>
        </section>
    );
}
