# Midterm Report

# Feb 15st, 2023
## Work
I began development on the Spotify Wrapper. I reaserched ways of implementing the module, and settled on a method similar to MongoDB clients, and other node libraries; in that you would call a function like:

```javascript
const { createSpotify } = require("spotify.js");
const spotify = new Spotify({ auth options });

function getTrack(trackid){
  var track = spotify.track(trackid).get();
}
```
This structure was also inspired by [KnexJS](https://knexjs.org/), which is an SQL query builder library, and uses a syntax I find quite readable. I will need to research how to chain functions, and made a module that can be instantiated with the `new` keyword. 

I have decided to use callback functions for the mean time as they are the easiest to implement; `await/async` requires setting up `Promises`, which are a concept I am familiar with using, but not setting up. Once I have the callback functions working, I will look into supporting `Promises`.

I worked to restructure the Github Repo as noted in the Retrospective, so it can avoid Tree conflicts in the future. I have updated my branch with my scaffolded project.

## Meetings
Lead by: Danyal | Notes by: Gajendra
### Standup

Working in detail with CSS -blocking:doing research to fix the error -NS:getting scritp going Danyal

working on JS coding blocking:no blocking NS: doing research to fix the JavaScript Logic Shavin -start working into project

blocking: no blocking yet NS: start coding Andrew

blocking: working on the project NS: getting a script going Najib (sport team tracker)

HTML, CSS part -blocking:No blocking NSS: HTML CSS Anurag -Working with the Web Scrapping project -Using Python for the coding -blocking:researching to get the spread data -NS:working on project

### Retrospective
The github repo is not effective, the current setup will cause issues when merging into a single main branch in the future

- currently, there is a single repo and README, that everyone is editing and updating, on individual branch
- will need to restructure to account for future merging
- create a main README that will act as the team meeting
- create individual work folders that wewill place our individual work into
- place README in each folder, which will be individual notes
- create branches off of main and only put our work in OUR folder
- protect the github main branch from being modified
- The KANBAN Trello board is not being used, feature tracking is not available

will need to identify features to add to the board

<hr>

# Feb 8st, 2023
## Work
This week I decided t o build out an API for Spotify only. The goal for the Spotify API Wrapper is that you will be able to import a plainJS script into any project, and use the library. Because it is in PureJS, it will work in any JS framework such as React and Vue. I needed help with identifying which endpoints to include in the library, which Danyal helped me identify. the Endpoints will include:

- Tracks Data
- Artists Information
- linking Tracks to Playlist
- top charts lists

This week I plan to research how these endpoints work. I am already familiar with the structure, but I will need to look into how to use the fetch() API to natively call endpoints, and consume the results. 

I do not want to include any UI components in the project, as the module itself will not be visible on the front end; all it will be used for is translating requests to the api and back. I have however looked into making the process readable for a develop to use, and one that avoids the complext nesting of `fetch()` handling.

I am not certain if I want to use `async/await` or `callback()` functions. 

## Meetings
Lead by: Gajendra | Notes by: Shavin

Switch OTP (one time password)
one time password authorization
NS: build HTML & JS

Danyal

- made html, css js
- in researching, phase not yet in dev
- Next Steps: Build Logic to compare tally points

Shavin

- blocking: research for uses of Spotify Api
- NS: getting user research

Andrew

- blocking: learn Logic coding environment
- NS: getting a script going

Najib (sport team tracker)

- blocking: Research
- NSS: HTML CSS

<hr>

# Feb 1st, 2023
## Work
This week I worked on Researching which API tool I wanted to build a Wrapper Module around. Initally, the goal was to create a suite of API Authnetication flow modules, that I would work on over time. That play included Youtube, Discord and Spotify; 3 API's I work the most with. However, during the week I realized that it would be too complicated to build effectivly, due to the range of abilities of the APIs. 

## Meetings
Lead by: Najib | Notes by: Andrew
Daynal

brainstorming and come up with chess traking idea.
Shavin

Researching what platform he want to use. Leaning towards Spotify.
Najib

researching, deciding if wants to track multiple sports or just one.
Gajendra

working on wire framing and researching on OTP web app developing
