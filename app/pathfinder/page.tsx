import fs from "fs";
import path from "path";
import Link from "next/link";
import { Fraunces, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

const headingFont = Fraunces({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const bodyFont = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

type MarkdownBlock =
    | { type: "heading"; level: number; text: string }
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "code"; language: string; code: string }
    | { type: "image"; alt: string; src: string }
    | { type: "quote"; text: string };

function parseMarkdown(markdown: string): MarkdownBlock[] {
    const lines = markdown.split(/\r?\n/);
    const blocks: MarkdownBlock[] = [];
    let paragraphLines: string[] = [];
    let listItems: string[] = [];
    let quoteLines: string[] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];
    let codeLanguage = "";

    const flushParagraph = () => {
        if (paragraphLines.length) {
            blocks.push({
                type: "paragraph",
                text: paragraphLines.join(" "),
            });
            paragraphLines = [];
        }
    };

    const flushList = () => {
        if (listItems.length) {
            blocks.push({
                type: "list",
                items: listItems,
            });
            listItems = [];
        }
    };

    const flushQuote = () => {
        if (quoteLines.length) {
            blocks.push({
                type: "quote",
                text: quoteLines.join(" "),
            });
            quoteLines = [];
        }
    };

    const flushTextBlocks = () => {
        flushParagraph();
        flushList();
        flushQuote();
    };

    lines.forEach((line) => {
        if (line.trim().startsWith("```")) {
            if (inCodeBlock) {
                blocks.push({
                    type: "code",
                    language: codeLanguage,
                    code: codeLines.join("\n"),
                });
                inCodeBlock = false;
                codeLines = [];
                codeLanguage = "";
            } else {
                flushTextBlocks();
                inCodeBlock = true;
                codeLanguage = line.trim().replace(/^```/, "").trim();
            }
            return;
        }

        if (inCodeBlock) {
            codeLines.push(line);
            return;
        }

        if (!line.trim()) {
            flushTextBlocks();
            return;
        }

        const imageMatch = line.match(/^!\[(.*)\]\((.*)\)$/);
        if (imageMatch) {
            flushTextBlocks();
            blocks.push({
                type: "image",
                alt: imageMatch[1],
                src: imageMatch[2],
            });
            return;
        }

        const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
        if (headingMatch) {
            flushTextBlocks();
            blocks.push({
                type: "heading",
                level: headingMatch[1].length,
                text: headingMatch[2].trim(),
            });
            return;
        }

        if (line.startsWith("- ")) {
            flushParagraph();
            flushQuote();
            listItems.push(line.replace(/^- /, "").trim());
            return;
        }

        if (line.startsWith("> ")) {
            flushParagraph();
            flushList();
            quoteLines.push(line.replace(/^> /, "").trim());
            return;
        }

        if (listItems.length) {
            flushList();
        }

        paragraphLines.push(line.trim());
    });

    flushTextBlocks();

    if (inCodeBlock) {
        blocks.push({
            type: "code",
            language: codeLanguage,
            code: codeLines.join("\n"),
        });
    }

    return blocks;
}

function renderInline(text: string) {
    const nodes: ReactNode[] = [];
    const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null = tokenRegex.exec(text);
    let keyIndex = 0;

    while (match) {
        if (match.index > lastIndex) {
            nodes.push(text.slice(lastIndex, match.index));
        }

        const token = match[0];
        if (token.startsWith("**")) {
            nodes.push(
                <strong key={`bold-${keyIndex++}`}>
                    {token.slice(2, -2)}
                </strong>,
            );
        } else if (token.startsWith("`")) {
            nodes.push(
                <code
                    key={`code-${keyIndex++}`}
                    className="rounded bg-slate-100 px-1 py-0.5 text-sm text-slate-700"
                >
                    {token.slice(1, -1)}
                </code>,
            );
        } else if (token.startsWith("[")) {
            const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (linkMatch) {
                nodes.push(
                    <a
                        key={`link-${keyIndex++}`}
                        href={linkMatch[2]}
                        className="font-semibold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4 transition hover:text-slate-700"
                    >
                        {linkMatch[1]}
                    </a>,
                );
            } else {
                nodes.push(token);
            }
        } else {
            nodes.push(token);
        }

        lastIndex = tokenRegex.lastIndex;
        match = tokenRegex.exec(text);
    }

    if (lastIndex < text.length) {
        nodes.push(text.slice(lastIndex));
    }

    return nodes;
}

function getMarkdownContent() {
    const filePath = path.join(
        process.cwd(),
        "public",
        "pathfinder",
        "pathfinder.md",
    );
    return fs.readFileSync(filePath, "utf8");
}

export default function PathfinderPage() {
    const markdown = getMarkdownContent();
    const blocks = parseMarkdown(markdown);

    return (
        <main
            className={`${bodyFont.className} min-h-screen bg-[#f4f1ea] text-slate-900`}
        >
            <div className="relative overflow-hidden">
                <div className="absolute -top-40 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200 via-amber-100 to-rose-200 blur-3xl opacity-70" />
                <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-sky-200 to-emerald-100 blur-2xl opacity-60" />

                <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                        <span>Project Showcase</span>
                        <Link
                            href="/"
                            className="text-xs font-semibold text-slate-700 underline decoration-amber-300 decoration-2 underline-offset-4 transition hover:text-slate-900"
                        >
                            Back to landing
                        </Link>
                    </div>

                    <header className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <h1
                                className={`${headingFont.className} text-4xl font-semibold sm:text-5xl`}
                            >
                                Pathfinder demo walkthrough
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                A guided look at the Pathfinder Travel Advisor
                                experience.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-6 shadow-lg">
                            <div className="flex aspect-video items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-amber-50 text-center">
                                <div className="space-y-2 px-6">
                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                        Demo Video Slot
                                    </p>
                                    <p className="text-lg font-semibold text-slate-800">
                                        Upload or embed your video here.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-slate-500">
                                Replace this card with a &lt;video&gt; tag or an
                                embed when the demo is ready.
                            </p>
                        </div>
                    </header>

                    <section className="mt-14 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur">
                        <div className="space-y-8">
                            {blocks.map((block, index) => {
                                if (block.type === "heading") {
                                    const HeadingTag =
                                        block.level === 1
                                            ? "h2"
                                            : block.level === 2
                                              ? "h3"
                                              : "h4";
                                    const headingSize =
                                        block.level === 1
                                            ? "text-3xl"
                                            : block.level === 2
                                              ? "text-2xl"
                                              : "text-xl";
                                    return (
                                        <HeadingTag
                                            key={`heading-${index}`}
                                            className={`${headingFont.className} ${headingSize} font-semibold text-slate-900`}
                                        >
                                            {renderInline(block.text)}
                                        </HeadingTag>
                                    );
                                }

                                if (block.type === "paragraph") {
                                    return (
                                        <p
                                            key={`paragraph-${index}`}
                                            className="text-base leading-7 text-slate-700"
                                        >
                                            {renderInline(block.text)}
                                        </p>
                                    );
                                }

                                if (block.type === "list") {
                                    return (
                                        <ul
                                            key={`list-${index}`}
                                            className="list-disc space-y-2 pl-6 text-base text-slate-700"
                                        >
                                            {block.items.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        key={`list-item-${index}-${itemIndex}`}
                                                    >
                                                        {renderInline(item)}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    );
                                }

                                if (block.type === "code") {
                                    return (
                                        <pre
                                            key={`code-${index}`}
                                            className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-900 p-5 text-sm text-slate-100"
                                        >
                                            <code>{block.code}</code>
                                        </pre>
                                    );
                                }

                                if (block.type === "quote") {
                                    return (
                                        <blockquote
                                            key={`quote-${index}`}
                                            className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 text-sm text-slate-700"
                                        >
                                            {renderInline(block.text)}
                                        </blockquote>
                                    );
                                }

                                if (block.type === "image") {
                                    const isRemote = /^https?:\/\//.test(
                                        block.src,
                                    );
                                    const cleanedSrc = block.src.replace(
                                        /^\.?\//,
                                        "",
                                    );
                                    const publicSrc = cleanedSrc.startsWith(
                                        "pathfinder/",
                                    )
                                        ? `/${cleanedSrc}`
                                        : `/pathfinder/${cleanedSrc}`;
                                    const altText = block.alt.toLowerCase();
                                    const isCompactImage =
                                        altText.includes("upcoming stops") ||
                                        altText.includes("today's stops") ||
                                        altText.includes("summary cards") ||
                                        altText.includes("sidebar widget") ||
                                        altText.includes("ai travel coach");
                                    const figureClass = isCompactImage
                                        ? "mx-auto max-w-xl"
                                        : "";
                                    if (isRemote) {
                                        return (
                                            <figure
                                                key={`image-${index}`}
                                                className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${figureClass}`}
                                            >
                                                <img
                                                    src={block.src}
                                                    alt={block.alt}
                                                    className="h-auto w-full"
                                                />
                                                {block.alt ? (
                                                    <figcaption className="px-4 py-3 text-sm text-slate-600">
                                                        {block.alt}
                                                    </figcaption>
                                                ) : null}
                                            </figure>
                                        );
                                    }

                                    return (
                                        <figure
                                            key={`image-${index}`}
                                            className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${figureClass}`}
                                        >
                                            <img
                                                src={publicSrc}
                                                alt={block.alt}
                                                className="h-auto w-full"
                                            />
                                            {block.alt ? (
                                                <figcaption className="px-4 py-3 text-sm text-slate-600">
                                                    {block.alt}
                                                </figcaption>
                                            ) : null}
                                        </figure>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
