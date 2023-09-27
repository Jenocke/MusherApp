# MusherApp

Software for musher race management made in javascript.
This app tracks the sled dog team organization of differents teams during a sled dog race.

# Situation

Intended for use in sled dog races.
Those races extends on multiple days, usually one leg/day.The musher can only start the next leg with the same dogs he did the previous one with. No exchange, no addition.
For that purpose, the dogs are usually tagged or scanned.

# Application description

This application is used with the scan technique.
The mushers have a chip watch. After arrival, that watch is scanned, then their dogs.
The scan device generate a text file.

The app is able to retrieve that text file and process it to extract the data.
Then it process those data to create the arrival list of each leg.
With those processed lists, the app is able to compare them and display any discrepancie between them, helping the staff to spot any musher that may
have broken the rules

# Screenshots
Arrival list
![arrivals](https://github.com/Jenocke/MusherApp/assets/16962591/8d71c7e7-bfb3-4c7e-bcad-fa7d015a9d97)

Disparencies
![disparencies](https://github.com/Jenocke/MusherApp/assets/16962591/c5ae0e24-636d-4f83-ac9b-ce50c84fb3a3)

# Command lines cheatsheet

start server : npx json-server --watch database.json -p 4000
start app : npm start
