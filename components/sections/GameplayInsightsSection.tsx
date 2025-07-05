export default function GameplayInsightsSection() {
    return (
        <section id="insights" className="py-16 px-4 bg-slate-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Gameplay Insights
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Main Game Dynamics
                        </h3>
                        {/* <p className="text-gray-700">
                            Guard Duty: Lifeguards vs. Patrons thrives on a
                            unique blend of social deduction, strategic
                            guarding, and hidden roles. Each game unfolds in a
                            tense cycle of Night, Results, and Day phases, where
                            players must read their opponents, bluff
                            convincingly, and coordinate or deceive to
                            outmaneuver the other team. For Lifeguards,
                            effective dynamics include coordinating guards
                            across multiple pools, sharing subtle information
                            during discussions, and protecting high-value roles
                            like Security or Supervisor. Patrons rely on
                            calculated sabotage, silence abilities, and roles
                            like Chameleon and Disruptor to sow confusion and
                            fracture the Lifeguards’ trust. Both teams navigate
                            evolving probabilities: sabotage success increases
                            with misdirected guards, while investigations become
                            more accurate as patterns emerge. Players face
                            constant trade-offs — pursue aggressive eliminations
                            or keep cover, protect one player or spread defense
                            — leading to shifting alliances and momentum swings.
                            Every round amplifies tension, rewarding clever
                            deduction, psychological strategy, and well-timed
                            role abilities over sheer luck. The interplay of
                            hidden identities and special powers ensures no two
                            games play the same, creating dynamic, replayable
                            sessions full of dramatic reveals and hard-fought
                            victories.
                        </p> */}
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <li>
                                Coordinating Lifeguard roles like Security and
                                Camera Observer is essential for uncovering
                                Patrons. By sharing information carefully,
                                Lifeguards can force Patrons to act defensively
                                and make mistakes.
                            </li>
                            <li>
                                Balancing pool guarding between predictability
                                and randomness creates ongoing mind games.
                                Lifeguards who rotate guards unpredictably keep
                                Patrons guessing, while Patrons who read
                                patterns can exploit gaps.
                            </li>
                            <li>
                                Using Whistle Marshal or Disruptor abilities at
                                the right moments can silence critical players,
                                stalling the opposing team’s momentum and
                                shifting debates in your favor.
                            </li>
                            <li>
                                Deciding whether to reveal investigative
                                information early is a tough call: it can rally
                                your team for decisive votes but exposes key
                                roles to Patron attacks.
                            </li>
                            <li>
                                Patrons face constant pressure to choose between
                                aggressive sabotage that risks exposure and
                                subtle sabotage that prolongs the game but
                                delays their victory.
                            </li>
                            <li>
                                Rescue Diver’s one-time elimination power can be
                                a game-changer if used soon after sabotage, but
                                waiting too long risks missing the opportunity
                                entirely.
                            </li>
                            <li>
                                Protecting the Sleeper Lifeguard is a critical
                                dilemma for Lifeguards, as losing them to the
                                Recruiter Patron can instantly swing the game in
                                the Patrons’ favor.
                            </li>
                            <li>
                                Tethered Patron introduces high-risk stakes to
                                every vote, forcing all players to consider that
                                eliminating the wrong target could cause
                                unexpected double eliminations.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Trade-offs and Dilemmas
                        </h3>
                        {/* <p className="text-gray-700">
                            Example: Choosing between guarding the same pool
                            every night or spreading out increases risk of
                            sabotage.
                        </p> */}
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <li>
                                <b>Guard Placement vs. Spread:</b> Lifeguards
                                must choose between focusing guards on pools
                                they believe Patrons will target — risking
                                predictability — or spreading guards widely and
                                risking sabotage at unprotected pools.
                            </li>
                            <li>
                                <b>Reveal or Conceal:</b> Investigative roles
                                like Security, Camera Observer, or Supervisor
                                face the dilemma of revealing information early
                                to guide votes — which exposes themselves as
                                high-value targets — or keeping findings secret
                                to stay alive longer.
                            </li>
                            <li>
                                <b>Aggressive vs. Cautious Play:</b> Patrons
                                must decide whether to sabotage aggressively,
                                increasing chances of success but also raising
                                suspicion, or play passively to avoid detection
                                — risking that the game drags on unfavorably.
                            </li>
                            <li>
                                <b>Voting Choices:</b> During the Day Phase,
                                players debate whether to push for an
                                elimination based on limited information or hold
                                back and risk letting the opposing team gain the
                                upper hand. Ties or hasty votes can protect key
                                Patrons or eliminate valuable Lifeguards.
                            </li>
                            <li>
                                <b>Mute Timing:</b> Disruptor Patron must decide
                                when muting a player will do the most damage to
                                Lifeguard discussions — too early can waste the
                                ability, too late may let Lifeguards build
                                unstoppable momentum.
                            </li>
                            <li>
                                <b>Defense vs Attack Roles:</b> Lifeguards need
                                to balance defending their investigators
                                (Security, Camera Observer) with using offensive
                                roles like Rescue Diver effectively — focusing
                                too much on defense can stall progress, but
                                overly aggressive moves can expose critical
                                roles.
                            </li>
                            <li>
                                <b>Sleeper Lifeguard Protection:</b> Lifeguards
                                have to decide if protecting the Sleeper
                                Lifeguard is worth exposing patterns that
                                Patrons can exploit, or leave them vulnerable to
                                conversion by the Recruiter Patron — risking an
                                instant swing in Patron strength.
                            </li>
                            <li>
                                <b>Tethered Patron Threat:</b> Once suspected or
                                revealed, players must consider the possibility
                                that eliminating Tethered Patron could take down
                                a key Lifeguard, creating a tense dilemma where
                                no vote is truly safe.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Typical Play Duration
                        </h3>
                        <p className="text-gray-700">
                            A full game session lasts approximately 45–60
                            minutes, depending on player discussions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
