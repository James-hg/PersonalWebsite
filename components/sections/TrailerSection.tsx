export default function TrailerSection() {
    return (
        <section id="trailer" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                    Watch the Trailer
                </h2>
                <div className="relative w-full h-0 pb-[56.25%] mb-6">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Guard Duty Trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A short teaser of Guard Duty gameplay and its tense social
                    dynamics.
                </p>
            </div>
        </section>
    );
}
