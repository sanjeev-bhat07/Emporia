# Emporia

A beginner focussed trading education game. 

This file lists what each folder and file in the repo is for.

## Root

| Path | Purpose |
|---|---|
| `README.md` | This file |
| `docker-compose.yml` | Starts the project's services together |
| `.gitignore` | Files git should not track |
| `.gitattributes` | Keeps line endings consistent across operating systems |

## engine/

The C++ matching engine. It only knows about orders, trades and the order book.

| Path | Purpose |
|---|---|
| `CMakeLists.txt` | Build configuration for the engine, its tests, and the Python module built from `backend/engine_bridge/bindings.cpp` |
| `src/` | Order book and matching logic, plus the public headers that define the engine's interface |
| `tests/` | Engine unit tests |

## backend/

The Python backend: API, game rules, and the simulated markets.

| Path | Purpose |
|---|---|
| `Dockerfile` | Builds the backend, including the compiled engine |
| `requirements.txt` | Pinned Python dependencies |
| `main.py` | Backend entry point |

### backend/api/

The only part of the backend the frontend talks to.

| Path | Purpose |
|---|---|
| `rest_routes.py` | REST endpoints, such as placing an order and getting the portfolio |
| `websocket_handler.py` | Streams best bid/ask and trades to the client |
| `mock_server.py` | Fake backend that serves the same message shapes as the real API, so the frontend can be built without the real backend |

### backend/game_logic/

Game rules on top of the market.

| Path | Purpose |
|---|---|
| `levels.py` | Loads level definitions from `content/` and applies their rules |
| `progress.py` | Checks progress criteria after trades and handles level-ups |
| `portfolio.py` | Tracks each player's cash and positions |

### backend/world_runner/

Runs the market for each player.

| Path | Purpose |
|---|---|
| `registry.py` | Maps each account to its own world (engine instance, bots, clock, random seed) |
| `scheduler.py` | Session clock and tick loop that drives the bots |
| `bots/calm_market_maker.py` | Bot that keeps a narrow, steady bid/ask spread |

### backend/engine_bridge/

Connects Python to the C++ engine.

| Path | Purpose |
|---|---|
| `bindings.cpp` | pybind11 code that exposes the engine to Python |
| `fake_engine.py` | Pure-Python stand-in with the same interface as the engine. Used until the real engine is ready, and afterwards as a reference to check it against |
| `bridge_smoke_test.py` | Standalone script that places a few orders through the bridge and prints the results |

### backend/db/

| Path | Purpose |
|---|---|
| `schema.sql` | SQLite schema: users, orders, trades, wallets and portfolio |

## frontend/

The React and TypeScript web app.

| Path | Purpose |
|---|---|
| `package.json` | JavaScript dependencies and scripts |
| `index.html` | The page the app loads into |
| `tsconfig.json` | TypeScript settings |
| `vite.config.ts` | Dev server and build configuration |

### frontend/src/

| Path | Purpose |
|---|---|
| `main.tsx` | App entry point |
| `App.tsx` | Top-level layout |
| `components/OrderEntry.tsx` | Market and limit order form |
| `components/PriceChart.tsx` | Price chart |
| `components/BidAskReadout.tsx` | Current best bid and ask |
| `components/Portfolio.tsx` | Cash, position and unrealised profit/loss |
| `lib/apiClient.ts` | REST calls to the backend (plain TypeScript, no React) |
| `lib/wsClient.ts` | WebSocket connection handling (plain TypeScript, no React) |

## content/

Game content as JSON files. Anyone can edit these without touching code.

| Path | Purpose |
|---|---|
| `levels/level_1.json` | Level 1: tradable company, active bot profile, allowed order types, progress criteria |
| `companies/placeholder_guild.json` | First guild/company definition (placeholder) |

## docs/

Shared documents the whole team builds against.

| Path | Purpose |
|---|---|
| `engine_interface_spec.md` | Every function the engine exposes |
| `message_contracts.md` | JSON shapes of all API and WebSocket messages |
| `decisions_log.md` | Dated record of design decisions and the reasons for them |
