const Softskills = [
	{
		technologygroup:"Devops Engineer",
		technology:"bash, golang",

	},

];
const Experiences = [
	{
		title:"Devops Engineer",
		company: "Admobitec",
		startDate: "2017.10",
		endDate: "2018.07",
		description:[
			"Implementing and developing solutions enabling Development and Operations teams to build, deploy, monitor and test applications and environments.",
			"Evaluating and advising on virtualization and containerization solutions (Docker\\Vagrant\\Swarm)",
			"Creating fully automated CI build and deployment infrastructure and processes for multiple company projects (DockerHub, TravisCI)",
			"Developing Docker images to support Development and Testing Teams and their pipelines (DockerHub)",
			"Monitoring and supporting company's infrastructure(EFK\\Prometheus\\Alertmanager\\Cadvisor)",
			"Creating IAM Policy for AWS",
			"Working closely with Architecture, Development, Test, Security and IT Services teams"
		],
		goals:[
			"Creating a Redis backup system (golang\\docker\\aws-s3\\slack-push)",
			"Creating a Postgresql backup system (bash\\postgres-cli\\slack-push\\aws-s3)",
			"Improving linters for unit tests (golang\\bash)",
			"Creating a label based service discovery (traefik\\docker)",
			"Creating a a automate deployment service based on a dockerhub webhook (golang\\docker-sdk)",
			"Creating a distributed storage for  company's certificates (consul\\traefik)",
			"Creating an infrastructure as service",
			"Tuning bare metal company's servers for high load"
		],
		logo: "nccu.jpg"
	},
	{
		title:"Devops Engineer",
		company: "OneBox Company",
		startDate: "2015.09",
		endDate: "2017.09",
		description:[
			"Database clusterization and replication (MariaDB)",
			"Developing many scripts for the company(golang,bash)",
			"Building Lua based VoIp routing",
			"Integration software with API(Cloudflare, HvostingUA, TurboSMS, ClouDNS, SendPulse, AWS etc )",
			"Monitoring and supporting company's infrastructure",
			"Profiling and debuging applications for improve performance(PHP) XHProf & XHGui",
			"Supporting virtual instances (KVM)",
			"Building tests for CRM OneBox (Selenium\\Linters)"
			
		],
		goals:[
			"Building API for SaaS company services (golang)",
			"Building a mail migration service (golang)",
			"Building updater application for the CRM \"OneBox\" (shell) ",
			"Building a basic CI for the company (GitLab CI)",
			"Migrated a developer team from SVN to a GIT VCS",
			"Dockerised the CRM Onebox",
			"Create Infrastructure as Service for the company (Ansible\\Bash)",
			"Increased  a company network efficiency by > %70",
			"Increased company network services availability by > %50"
		],
		logo: "kpmg.jpg"
	},
	{
		title:"Application Integration Engineer",
		company: "Starlink Group SA",
		startDate: "2008.06",
		endDate: "2014.07",
		description:[
			"Implementing and developing solutions enabling Development and Operations teams to build, deploy, monitor and test applications and environments.",
			"Implementing monitoring and reporting solutions across a range of environments and platforms",
			"Implementing LAMP\\LEMP stack",
			"Supporting ORACLE RDBMS",
			"Supporting Multiprotocol VoIP Transit Softswitch Professional (MVTS Pro)",
			"Writing documentation and manual",
			"Writing shell\\bash\\python script for company's infrastructute"
		],
		goals:[
			"Increased the company's profitability by >= 400%",
			"Increasing automatization in company by 50%",
			"I builded low cost and easy to switch service API for a VoIP routing system",
			"Realised a backup as service",
			"Automated tests for voip routes"
		],
		logo: "nukim.jpg"
	},
	{
		title:"Software Development Engineer",
		company: "Managing Company KSK",
		startDate: "2003.07",
		endDate: "2008.06",
		description:[
			"Software integration with a LDAP\\AD ",
			"Supporting Mysql\\Mssql RDBMS",
			"Monitoring, Configuration and Health Check  a company's services"
		],
		goals:[
			"Reduction a company's software costs by 80%",
			"Increased a automatization in a company by 15%",
			"implemented of basic CI to a company's software product"
		],
		logo: "impioneer.jpg"
	},
];

export default Experiences;
