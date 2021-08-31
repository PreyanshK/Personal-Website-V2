import solarTracker from '../images/Solar-Tracker.jpg'
import capsOdyssey from '../images/Caps-Odyssey.png'
import launchED from '../images/LaunchED.png'
import websiteV1 from '../images/website-v1.png'
import covidTracker from '../images/covid-19-tracker.PNG'
import whatsapp from '../images/whatsapp-clone.PNG'
import Stocker from '../images/Stocker.PNG'
import NoteSense from '../images/NoteSense.jpeg'
import MyHealthPal from '../images/MyHealthPal.png'
const projectsData = [
    {
        image: [MyHealthPal],
        name: 'My Health Pal',
        desc: 'A mobile app that enables users to manage their vaccination records and prescriptions on the go.',
        tech: [
            'React Native',
            'Flask',
            'Cassandra',
            'Firebase',
        ],
        gitHub: 'https://github.com/MyHealthPal/MyHealthPalPlatform',
        project: '',
    },
    {
        image: [NoteSense],
        name: 'NoteSense (Hack the 6ix 2021)',
        desc: 'An accessibility app that aids users with impaired hearing and vision by digitizing images or audio snippets into PDF notes using speech and optical character recognition (OCR).',
        tech: [
            'React Native',
            'Flask',
            'Google Cloud Platform',
        ],
        gitHub: 'https://github.com/PreyanshK/NotesSense',
        project: 'https://devpost.com/software/notesense',
    },
    {
        image: [Stocker],
        name: 'Stocker (EngHack 2021)',
        desc: "A social stock management app that allows users to connect with other investors to showcase their stock portfolio to one another and get personalized news for the stocks you've invested in.",
        tech: [
            'React Native',
            'Flask',
            'Firebase',
            'SQLite3',
            'Yahoo Finance API',
            'NewsAPI',
        ],
        gitHub: 'https://github.com/PreyanshK/Stocker',
        project: 'https://devpost.com/software/stocker-shvkae',
    },
    {
        image: [whatsapp],
        name: 'WhatsApp Clone',
        desc: 'A real-time messaging web app which allows users to communicate in public rooms through text and emojis!',
        tech: [
            'React',
            'Express.js',
            'Node.js',
            'MongoDB',
            'Firebase',
            'Redux',
            'Pusher',
        ],
        gitHub: 'https://github.com/PreyanshK/whatsapp-mern-frontend',
        project: 'https://whatsapp-clone-9b278.web.app/',
    },
    {
        image: [covidTracker],
        name: 'Covid-19 Tracker',
        desc: 'A dashboard which fetches global COVID-19 data and displays it on a world map, and plots daily cases to showcase the global trends.',
        tech: [
            'React',
            'disease.sh',
            'Firebase',
            'Leaflet',
        ],
        gitHub: 'https://github.com/PreyanshK/covid-19-tracker-app',
        project: 'https://covid-19-tracker-dde6a.web.app/',
    },
    {
        image: [websiteV1],
        name: 'Personal Website V1',
        desc: "My first personal website built in 2020. Since then I've greatly improved my web development and design skills.",
        tech: [
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'Animate.css',
            'Wow.js',
        ],
        gitHub: 'https://github.com/PreyanshK/Personal_Website',
        project: 'https://preyanshk.github.io/Personal_Website/',
    },
    {
        image: [launchED],
        name: 'LaunchED',
        desc: 'Built a mobile app which was used by 100+ high school students for easy access to announcements, calendar, club management, and resource consolidation.',
        tech: [
            'React Native',
            'Firebase',
            'Firestore',
            'UI/UX',
        ],
        gitHub: '',
        project: '',
    },     
    {
        image: [capsOdyssey],
        name: "Cap's Odyssey",
        desc: 'A 2D platformer that provides a multi-level story mode with character powerups, interactive items, and mini puzzles.',
        tech: [
            'C#',
            'Unity',
            'UI/UX',
        ],
        gitHub: '',
        project: '',
    },
    {
        image: [solarTracker],
        name: "Autonomous Solar Tracker",
        desc: 'A dual-axis Arduino Solar Tracker which used photoresistors, servo motors, and Bluetooth to autonomously pivot the solar panel to an optimal position.',
        tech: [
            'Hardware',
            'C',
            'Arduino',
            'AutoCAD',
        ],
        gitHub: 'https://github.com/PreyanshK/Arduino_Solar_Tracker',
        project: 'https://www.youtube.com/watch?v=Bedm1EY5JDc&ab_channel=PreyanshKachhia',
    }
]

export default projectsData