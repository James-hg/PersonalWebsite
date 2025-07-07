export default function DocumentationSection() {
    return (
        <section id="documentation" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Project Documentation
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            name: "Group Meeting Log",
                            file: "MeetingLog.pdf",
                        },
                        {
                            name: "Playtesting Log",
                            file: "TestingLog.pdf",
                        },
                        {
                            name: "Flowcharts",
                            file: "Flowchart.pdf",
                        },
                        {
                            name: "Quantitative Analysis",
                            file: "Analysis.pdf",
                        },
                    ].map((doc, i) => (
                        <a
                            key={i}
                            href={doc.file}
                            target="_blank"
                            className="block bg-white border-2 border-blue-200 rounded-lg p-6 shadow hover:shadow-lg transition text-left"
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-2">
                                {doc.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Download PDF
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
