import AGF from '../images/AGF-logo.png'
import Fundserv from '../images/Fundserv-logo.png'

const experienceData = [
        {
        image: [Fundserv],
        company: 'Fundserv Inc',
        title: 'Software Developer / QA Engineer Intern',
        date: 'May 2021 - Aug 2021',
        bullets: [
            'Implemented Caffeine Cache with Spring Boot to store data from the OAuth2.0 service, decreasing the traffic to Oracle database by 20%',
            'Updated SQL queries to restrict data retrieval to less than 3 months, resulting in 5% faster load times on ASM’s search page',
            'Expanded automation test coverage for the ASM web application by refactoring 500+ test scripts, and creating new test scenarios for the global search service and file attachment feature',
            'Constructed manual and automated test cases for External API testing'
        ],
        tools:[
            'Java',
            'Spring Boot',
            'Oracle SQL Developer',
            'Jenkins',
            'Selenium',
            'Cucumber',
            'JIRA',
        ]
    },
    {
        image: [AGF],
        company: 'AGF Investments Inc.',
        title: 'Web Developer Intern',
        date: 'Sep 2020 - Dec 2020',
        bullets: [
            'Automated 400+ regression test cases for AGF.com using Selenium, Maven, and JUnit, increasing testing speeds by 40%',
            'Coded a Java application utilizing Auth0’s bulk import service to integrate 2FA for the migration of 1000+ users from our Oracle DB',
            'Analyzed Maven test reports and emended old test scripts to enhance the testing quality and documented improvements on Confluence',
        ],
        tools:[
            'Java',
            'Selenium',
            'JUnit',
            'Maven'
        ]
    },
    {
        image: [AGF],
        company: 'AGF Investments Inc.',
        title: 'IT Support Analyst Intern',
        date: 'Jan 2020 - Apr 2020',
        bullets: [
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
]

export default experienceData