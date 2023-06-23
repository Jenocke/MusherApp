# MusherApp

software for musher race management

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
With those processed lists, the app is able to compare them and display any discrepancie between them, helping the staff to spot any musher that may have broken the rules
