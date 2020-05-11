# Prowess_Guild

Prowess Guild Website

`Happy Place Notes --`

The idea with this is to create a fully functional website that tracks current guild Keys via the [Raider.io](https://raider.io/guilds/us/malganis/Prowess) API, along with the ability to effectively track kills and guild updates with simple JSON files that can be modified by just about anyone without any prior coding experience.

All text that should (will) be modified within the website will be hosted within JSON files that will act as a mock back-end server, holding all the text and image logic. This will then be imported and utilized by the smart components, which create dumb components that render the data.

`To-Do`

- All JSON should be hosted and moved via a singular folder.
- Import and split all JSON data at the top level, passing it to the relevant smart components that will dole it out to their smaller dumb components.
- The main roster of the guild should be stored in a JSON file, it should only require the username, raider.io, warcraftlogs, and armory links - the rest will be autofilled.
  - `NOTE: This will be pulled from the raider.io API for all the information. Links to warcraftlogs / raider.io / armory will all be done via the json file and imported accordingly.`
  - `Additionally the images will be pulled from the Battle.net links directly, this will prevent images from needing to be updated with roster changes or needing to be done by hand.`
- Homepage needs a background image that's viable, possibly a video but without a proper video it'll be much harder. Look into this?

---

Yes, these are made in MS Paint, don't judge.

Temporary Layout (Homepage)

![alt text][logo]

[logo]: https://github.com/Serrowxd/Prowess_Guild/blob/master/readme-assets/idk.png?raw=true 'Layout'

Temporary Layout (Character)

`!! Temporary !!`

![alt text][logo]

[logo]: https://github.com/Serrowxd/Prowess_Guild/blob/master/readme-assets/idk2.png?raw=true 'Layout'

Temporary Layout (News)

Temporary Layout (About)

Temporary Layout (Roster)
