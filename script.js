const statusElement = document.getElementById('status');
const hostElement = document.getElementById('host');
const portElement = document.getElementById('port');
const motdElement = document.getElementById('motd');
const playersElement = document.getElementById('players');
const maxPlayersElement = document.getElementById('maxPlayers');

const apiURL = 'https://api.mcstatus.io/v2/status/bedrock/pearl-free.falixserver.net:30545';

function updateStatus(data) {
    statusElement.textContent = data.online ? 'Online' : 'Offline';
    hostElement.textContent = data.host;
    portElement.textContent = data.port;
    motdElement.textContent = data.motd.clean;
    playersElement.textContent = data.players.online;
    maxPlayersElement.textContent = data.players.max;
}

async function fetchData() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        updateStatus(data);
    } catch (error) {
        console.error('There was a problem fetching data:', error);
        statusElement.textContent = 'Error';
    }
}

fetchData();
