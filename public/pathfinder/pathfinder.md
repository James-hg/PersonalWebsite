# 🗺️ Pathfinder Travel Advisor

![Planner home showing AI assistant, map, and stop list](61800279-12EB-4996-A27F-729E76E58BD2.png)

Pathfinder is a collaborative travel planner built for **StormHacks 2025**. Describe the vibe of your day, personalize stops with an AI travel coach, and visualize the whole route in one polished interface powered by Google Maps and Gemini.

## Quick Links

- 🌐 **Live demo:** [Website](http://hoyongj.github.io/StormHacks2025) (frontend mock mode)

## Why Pathfinder?

- 🧭 **AI-guided itineraries** - Gemini suggests, adds, renames, or reorders stops on demand.
- 🌐 **Context-rich routing** - Google Maps renders every route, estimated travel time, and stop order.
- 📚 **Plan management** - Organize itineraries in folders, duplicate favorites, and revisit past days.
- 🎯 **Trip motivations** - Curate plans by mood (Food, Nature, Architecture, Nightlife, and more).
- ⚙️ **Configurable stack** - Run fully in Docker or explore locally with mock data until API keys are ready.

## Interface Tour

### Planner Home

Everything you need-map, active stops, trip advisor, and AI chat-lives on one screen.

![Planner dashboard with map and widgets](9EA51966-BE47-4FD8-B504-D32FA592FB5C.png)

### Start a New Adventure

Capture start/end points, travel dates, and motivations in seconds.

![Create plan modal with location inputs and motivations](5FAE7D98-874A-4724-9A68-D96AB1172B21.png)

### Curate Stops

Use the Upcoming Stops panel to add, reorder, or remove waypoints while the Today’s Stops view highlights what’s next.

![Upcoming stops panel with reorder controls](1F50C543-1500-4924-BCB7-116FEAC6ADA3.png)
![Today’s stops summary cards](8B86C042-0FFE-4BE5-A3D1-02AD661DBAE8.png)

### Visualize the Journey

Google Maps powers live routing so you can see how everything connects before you head out.

![Route preview on Google Maps with numbered stops](F9737645-BD80-40E2-A0D9-FA076F2ABC6C.png)

### Discover Nearby Gems

The Trip Advisor module surfaces restaurants, attractions, and stay options around each stop.

![Trip advisor suggestions grouped by category](ABCAD2AB-7E52-47F5-BDBB-32F099A596DA.png)

### Chat with the AI Travel Coach

Talk naturally to adjust your itinerary or ask for British Columbia ideas tailored to your vibe.

![AI travel coach panel with quick prompt chips](6E0E1E27-4194-43B1-A483-D86889764DDA.png)

### Keep Plans Organized

Browse every itinerary from a library page or jump straight to favorites via the sidebar widget.

![Plan library overview with saved itineraries](9EA51966-BE47-4FD8-B504-D32FA592FB5C.png)
![Sidebar widget showing quick access to plans](1B85E571-3581-4DB7-B3B6-4711D7806731.png)

## Architecture at a Glance

- **Frontend:** React + Vite single-page app served by Nginx, backed by Google Maps JavaScript SDK.
- **Backend:** FastAPI orchestrates Gemini and Google Maps Directions APIs for AI coaching and travel times.
- **Mock mode:** Frontend ships with seeded data so the demo works even without API keys.
- **Infrastructure:** Docker Compose spins up Nginx (frontend) and FastAPI (backend) services with a shared `.env`.

## Built for StormHacks 2025

Created by **Team pathfinder** to streamline trip planning with conversational AI and intuitive visuals. Explore, fork, and adapt it for your next hackathon or travel hack!

## Team members

- Hoyong Jung
- James Hoang
- Jeehoon Yu
- Julia Kristensen

## 📄 License

This project is released under the **MIT License**.
