# untitled-tactics-game

## Concept

A turn-based tactical deck-building war-game with multiple components:

- A strategic "command" level, where players control territories.
- A meta-gaming "drafting" level, where players enlist new units and abilities.
- A tactical "battle" level, where players attack and defend territories.

The overall emphasis in this game in the early stages is on the battle level,
and is focused on 1v1 PvP and 1vAI PvE battles on small tactical maps (~20 or
so tiles/cells).

### Tile

Each tile (or cell) has any of the following properties:

- A `{x, y}` associated coordinate.
- A `terrain` type.
- 0 to 2 units (0 = Empty, 1 = Standard, 2 = Melee Engagement).

### Terrain

Terrain in this game is simple and (currently) completely 2D. Terrain can be:

- `Normal`: No other conditions.
- `Difficult`: Some units must stop movement entering/exiting the terrain.
- `Impassable`: Most units cannot enter or cross the terrain.

Additionally, terrain can have _cover_ properties:

- `None`: This terrain grants no cover bonus.
- `Barricade`: This terrain grants a cover bonus to units inside of it.
- `Area`: This terrain grants a cover bonus to units attacked _through_ it.

Additionally, terrain can have _line of sight_ properties:

- `Clear`: This terrain does not alter line of sight.
- `Obscured`: This terrain limits line of sight for most units.
- `Blocked`: The terrain completely blocks line of sight for most units.

## TODO

- [x] Generate a grid.
- [ ] Make tiles selectable with a side menu.
