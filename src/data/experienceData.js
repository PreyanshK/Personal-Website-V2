import AGF from '../images/AGF-logo.png'
import Fundserv from '..images/Fundserv-logo.png'

const experienceData = [
    {
        image: [AGF],
        company: 'AGF Investments Inc.',
        title: 'IT Support Analyst',
        data: 'Jan 2020 - Apr 2020',
        bullet: [
            'Improved initialization time by 15% by integrating a PowerShell script which added group policies on Active Directory',
            'Facilitated 200+ employees to work remotely during the COVID-19 pandemic by imaging Windows 10 workstations using PXE Boot and SCCM to deploy software',
            'Performed end-user support via Remote Desktop and CLI to resolve technical issues, install operating systems, and run system diagnosis on workstations'
        ],
        tools:[
            'Active Directory',
            'SCCM',
            'CloneZilla'
        ]
    },
    {
        image: [AGF],
        company: 'AGF Investments Inc.',
        title: 'Web Developer',
        data: 'Sep 2020 - Dec 2020',
        bullet: [
            'Built web applications on the server-side using Java and Spring Boot and integrated Spring Security to validate users',
            'Performed regression testing using JUnit and Selenium to validate the frontend and RESTful web services of AGF.com',
            'Automated regression tests using Maven to reduce the duration by 40%',
            'Incorporated 2FA for AGF.com by migrating users on the Oracle database to the Auth0 platform'
        ],
        tools:[
            'Java',
            'Spring Boot',
            'Selenium',
            'JUnit',
            'Maven'
        ]
    },
    {
        image: [Fundserv],
        company: 'Fundserv Inc',
        title: 'Software Developer',
        data: 'May 2021 - Aug 2021',
        bullet: [

        ],
        tools:[
            'Angular',
            'TypeScript',
            'HTML / CSS',
            'Java',
            'Selenium',
        ]
    },
]

export default experienceData