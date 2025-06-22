import Image from "next/image"

export default function GuardDutyGame() {
  const lifeguardRoles = [
    {
      name: "Supervisor",
      image: "/images/supervisor.png",
      description: "Investigates a player's activity at night.",
    },
    {
      name: "Regular Lifeguard",
      image: "/images/lifeguard.png",
      description: "Guard specific pools.",
    },
    {
      name: "Bodyguard",
      image: "/images/bodyguard.png",
      description: "Protects a player from elimination each round.",
    },
    {
      name: "Security",
      image: "/images/security.png",
      description: "Reveals if a player is on the Patron team or Lifeguard team.",
    },
    {
      name: "Camera Observer",
      image: "/images/camera-observer.png",
      description: "Observes a specific pool and learns if it was sabotaged.",
    },
  ]

  const patronRoles = [
    {
      name: "Leader Patron",
      image: "/images/leader-patron.png",
      description:
        "Chooses a Target Player for elimination. If a pool is sabotaged or the Leader is kicked, the Target Player is also eliminated.",
    },
    {
      name: "Patron",
      image: "/images/patron.png",
      description: "Work to sabotage pools and disrupt Lifeguards' efforts.",
    },
  ]

  const gameplaySteps = [
    {
      phase: "Action Phase (Eyes Closed)",
      description: "The Narrator calls each role in order, and players silently perform their actions",
      steps: [
        "Leader Patron: Chooses a pool to sabotage and a Target Player",
        "Patrons: Confirm which pool to sabotage",
        "Lifeguards: Assign pools to guard",
        "Supervisor: Investigates a player to learn their activity",
        "Security: Protects one player from elimination",
        "IT Specialist: Investigates a player's alignment",
        "Camera Observer: Observes a specific pool",
      ],
    },
    {
      phase: "Results Phase (Eyes Open)",
      description: "The Narrator reveals the outcomes",
      steps: [
        "Was a pool sabotaged?",
        "Who (if anyone) is eliminated?",
        "If a pool was sabotaged successfully, the assigned guard is eliminated",
        "If the Leader Patron was eliminated, their Target Player is also eliminated",
      ],
    },
    {
      phase: "Discussion Phase",
      description: "Players openly discuss and vote",
      steps: [
        "Players discuss who they suspect",
        "Share evidence and theories",
        "Vote to 'kick' one player from the game",
        "Kicked player reveals their role (optional) and is removed",
      ],
    },
  ]

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Guard Duty: Lifeguards vs. Patrons</h1>
          <p>A Hidden-Role Team-Based Deduction Game</p>
        </div>
      </header>

      <div className="main-content">
        <div className="container">
          {/* Game Overview */}
          <section className="section">
            <div className="card">
              <h2 className="card-title">Game Overview</h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  textAlign: "center",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Guard Duty is a hidden-role, team-based deduction game where players are divided into two teams:
                <strong style={{ color: "#2563eb" }}> Lifeguards</strong> (defenders of the pool) and
                <strong style={{ color: "#dc2626" }}> Patrons</strong> (saboteurs aiming to shut it down). Each team has
                unique roles, and players must strategize to achieve their goals while maintaining secrecy.
              </p>
            </div>
          </section>

          {/* Win Conditions */}
          <section className="section">
            <div className="card">
              <h2 className="card-title">Win Conditions</h2>
              <div className="win-conditions">
                <div style={{ textAlign: "center" }}>
                  <div className="badge badge-lifeguard">Lifeguards Win</div>
                  <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>• All Patrons are eliminated, OR</li>
                    <li>• The pool is kept operational for all rounds (e.g., 10 rounds)</li>
                  </ul>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className="badge badge-patron">Patrons Win</div>
                  <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      • The number of Patrons equals or exceeds the number of Lifeguards, OR
                    </li>
                    <li>• A critical number of pools (e.g., 10) are successfully sabotaged</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Roles Section */}
          <section className="section">
            <div className="card">
              <h2 className="card-title">Game Roles</h2>

              {/* Lifeguard Roles */}
              <div style={{ marginBottom: "60px" }}>
                <h3 style={{ fontSize: "2rem", color: "#2563eb", marginBottom: "30px", textAlign: "center" }}>
                  Lifeguard Team
                </h3>
                <div className="roles-grid">
                  {lifeguardRoles.map((role, index) => (
                    <div key={index} className="role-card">
                      <Image
                        src={role.image || "/placeholder.svg"}
                        alt={role.name}
                        width={200}
                        height={250}
                        className="role-image"
                      />
                      <h4 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "10px" }}>{role.name}</h4>
                      <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="separator"></div>

              {/* Patron Roles */}
              <div>
                <h3 style={{ fontSize: "2rem", color: "#dc2626", marginBottom: "30px", textAlign: "center" }}>
                  Patron Team
                </h3>
                <div className="roles-grid" style={{ maxWidth: "800px", margin: "0 auto" }}>
                  {patronRoles.map((role, index) => (
                    <div key={index} className="role-card">
                      <Image
                        src={role.image || "/placeholder.svg"}
                        alt={role.name}
                        width={200}
                        height={250}
                        className="role-image"
                      />
                      <h4 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "10px" }}>{role.name}</h4>
                      <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Gameplay Structure */}
          <section className="section">
            <div className="card">
              <h2 className="card-title">Gameplay Structure</h2>
              <div className="gameplay-steps">
                {gameplaySteps.map((phase, index) => (
                  <div key={index} className="phase">
                    <h3>{phase.phase}</h3>
                    <p className="phase-description">{phase.description}</p>
                    <div className="steps-list">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="step">
                          <div className="step-number">{stepIndex + 1}</div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                    {index < gameplaySteps.length - 1 && <div className="separator"></div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Setup Information */}
          <section className="section">
            <div className="card">
              <h2 className="card-title">Game Setup</h2>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}
              >
                <div>
                  <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>Game Board</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>• 4–5 Pools (Regular Lifeguards + 1 = number of pools)</li>
                    <li>• Pools placed on board with sabotage and guarding markers</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>Resources</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>• Role cards for each team (kept secret)</li>
                    <li style={{ marginBottom: "10px" }}>• Strategy sheets for each team</li>
                    <li>• Guarding Board for Lifeguards to assign pools</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{ fontSize: "1.2rem" }}>Ready to dive into the ultimate game of deduction and strategy?</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.75, marginTop: "10px" }}>
            Guard Duty: Lifeguards vs. Patrons - Where every decision matters!
          </p>
        </div>
      </footer>
    </div>
  )
}
