
const platformUserIdentifier = document.getElementById('gamertag');
const platform = document.getElementById('platform');
const searchBtn = document.getElementById('search-button');



function searchGamertag() {
    const platformValue = platform.value;
    const platformUserIdentifierValue = platformUserIdentifier.value;

    fetch(`https://public-api.tracker.gg/apex/v1/standard/profile/{platformValue}/{platformUserIdentifierValue}`, {
        method: "GET",
        headers: {
          "TRN-Api-Key": "ed406e7a-58b7-4cb9-811a-53c42a4e253b",
          "Access-Control-Allow-Origin": "https://tracker.gg",
        },
    })
     .then(response => response.json())
     .then(data => console.log(data))
}



searchBtn.addEventListener('submit', searchGamertag);

searchGamertag();

