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
                            fracture the Lifeguards' trust. Both teams navigate
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
                                stalling the opposing team's momentum and
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
                                Rescue Diver's one-time elimination power can be
                                a game changer if used soon after sabotage, but
                                waiting too long risks missing the opportunity
                                entirely.
                            </li>
                            <li>
                                Protecting the Sleeper Lifeguard is a critical
                                dilemma for Lifeguards, as losing them to the
                                Recruiter Patron can instantly swing the game in
                                the Patrons' favor.
                            </li>
                            <li>
                                Tethered Patron introduces high risk stakes to
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
                                <b>Guard Placement vs. Spread:</b>
                                <br />
                                Lifeguards must choose between focusing guards
                                on pools they believe Patrons will target,
                                risking predictability, or spreading guards
                                widely and risking sabotage at unprotected
                                pools.
                            </li>
                            <li>
                                <b>Reveal or Conceal:</b>
                                <br />
                                Investigative roles like Security, Camera
                                Observer, or Supervisor face the dilemma of
                                revealing information early to guide votes,
                                which exposes themselves as high-value targets,
                                or keeping findings secret to stay alive longer.
                            </li>
                            <li>
                                <b>Aggressive vs. Cautious Play:</b>
                                <br />
                                Patrons must decide whether to sabotage
                                aggressively, increasing chances of success but
                                also raising suspicion, or play passively to
                                avoid detection, risking that the game drags on
                                unfavorably.
                            </li>
                            <li>
                                <b>Voting Choices:</b>
                                <br />
                                During the Day Phase, players debate whether to
                                push for an elimination based on limited
                                information or hold back and risk letting the
                                opposing team gain the upper hand. Ties or hasty
                                votes can protect key Patrons or eliminate
                                valuable Lifeguards.
                            </li>
                            <li>
                                <b>Mute Timing:</b>
                                <br />
                                Disruptor Patron must decide when muting a
                                player will do the most damage to Lifeguard
                                discussions, too early can waste the ability,
                                too late may let Lifeguards build unstoppable
                                momentum.
                            </li>
                            <li>
                                <b>Defense vs Attack Roles:</b>
                                <br />
                                Lifeguards need to balance defending their
                                investigators (Security, Camera Observer) with
                                using offensive roles like Rescue Diver
                                effectively, focusing too much on defense can
                                stall progress, but overly aggressive moves can
                                expose critical roles.
                            </li>
                            <li>
                                <b>Sleeper Lifeguard Protection:</b>
                                <br />
                                Lifeguards have to decide if protecting the
                                Sleeper Lifeguard is worth exposing patterns
                                that Patrons can exploit, or leave them
                                vulnerable to conversion by the Recruiter
                                Patron, risking an instant swing in Patron
                                strength.
                            </li>
                            <li>
                                <b>Tethered Patron Threat:</b>
                                <br />
                                Once suspected or revealed, players must
                                consider the possibility that eliminating
                                Tethered Patron could take down a key Lifeguard,
                                creating a tense dilemma where no vote is truly
                                safe.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">
                            Typical Play Duration & Game Flow
                        </h3>

                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                            🌙 Night Phase (~4 min)
                        </h4>
                        <p className="text-gray-700 mb-2 font-semibold">
                            Patron Roles Called in Order:
                        </p>
                        <ul className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                            <li>
                                Leader Patron - Choose sabotage pool & target
                                player (15s)
                            </li>
                            <li>
                                Disruptor Patron - Select player to mute (15s)
                            </li>
                            <li>
                                Recruiter Patron - Attempt conversion (if not
                                yet used) (15s)
                            </li>
                            <li>
                                Tethered Patron - Choose player to tether (15s)
                            </li>
                            <li>All Patrons - Confirm sabotage (30s)</li>
                        </ul>

                        <p className="text-gray-700 mb-2 font-semibold">
                            Lifeguard Roles Called in Order:
                        </p>
                        <ul className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
                            <li>
                                Lifeguards - Assign guards to pools (each 15s,
                                total ~45s)
                            </li>
                            <li>
                                Security - Investigate player alignment (15s)
                            </li>
                            <li>Security Bodyguard - Protect a player (15s)</li>
                            <li>
                                Doctor - Protect a player from elimination (15s)
                            </li>
                            <li>
                                Rescue Diver - Optionally eliminate (if
                                unlocked) (15s)
                            </li>
                            <li>Whistle Marshal - Silence a player (15s)</li>
                            <li>Camera Observer - Observe one pool (15s)</li>
                            <li>
                                Supervisor - Learn if a player performed an
                                action (15s)
                            </li>
                        </ul>

                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                            📣 Results Phase (~30s)
                        </h4>
                        <p className="text-gray-700 mb-1">
                            Narrator announces:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                            <li>Eliminated player(s) (if any)</li>
                            <li>Mutes or silences triggered</li>
                            <li>
                                Pools sabotaged (if observed by Camera Observer)
                            </li>
                        </ul>
                        <p className="text-gray-700 mb-1">
                            Narrator checks for victory conditions:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                            <li>
                                Lifeguards win if all Patrons eliminated or
                                rounds goal met
                            </li>
                            <li>
                                Patrons win if Patrons ≥ Lifeguards or sabotage
                                goal met
                            </li>
                        </ul>

                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                            💬 Discussion Phase (~4 min)
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                            <li>
                                Open discussion: Players debate, accuse, and
                                defend (2 min)
                            </li>
                            <li>
                                Initial vote: Players vote to nominate one
                                player (30s)
                            </li>
                            <li>
                                If tie or no nomination → skip to next Night
                                Phase
                            </li>
                            <li>
                                Defense: Nominated player has 60 seconds to
                                plead their case (1 min)
                            </li>
                            <li>
                                Final vote: Players vote to either kick
                                (eliminate) or spare the nominated player (30s)
                            </li>
                        </ul>

                        <strong>
                            <p className="text-gray-700 text-xl">
                                Each day: max 9 mins per day. <br />
                                Assume 10 days to win → max ~90 mins (1h30).{" "}
                                <br />
                                However, most playtesting ends between 60-90
                                mins, depending on player's discussions,
                                eliminations, and information retrieves from
                                Lifeguards investigators.
                            </p>
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
}
