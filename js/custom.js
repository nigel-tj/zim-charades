$("#theword").fitText();
$("#playtime").fitText(1.35);
var seconds = 150;
var wiH = $(window).height();
var twH = $("#theword").height();
var twT = (wiH*0.5)-twH;
$("#worddiv").css('top',twT);
//var words = [];
//words[1] = 'Anjing &#128021;';
//words[2] = 'Babi &#128055'; // 128023
//words[3] = 'Kampret';
//words[3] = 'Tikus &#128000';
//words[4] = 'Wedhus &#128016 ';
//words[4] = 'Kambing &#128016 ';
//words[5] = 'Monyet &#128053';
 var words = ["ReactJS","Python ",
	      "JSON",
	      "Slack",
	      "Amazon",
	      "Google",
	      "Stackoverflow",
	      "Github",
	      "TensorFlow",
	      "Frontend",
	      "Backend",
	      "DevOps",
	      "Kubernetes",
	      "Docker",
	      "Vagrant",
	      "NodeJS",
	      "JavaScript",
	      "ES6",
	      "HTML",
	      "Diversity",
	      "Developer Circles",
	      "Machine Learning",
	      "Tech for Good",
	      "VueJS",
	      "Facebook",
	      "Apple",
	      "Huawei",
	      "Java",
	      "Ruby",
	      "Data Science",
	      "R",
	      "Clang",
	      "MicroService",
	      "API",
	      "Yoco",
	      "Pytorch",
	      "Angular",
	      "Amazon Web Services",
	      "Take a lot",
	      "Google Cloud Services",
	      "Azure",
	      "Microsoft",
	      "Big Data",
	      "Mobicel",
	      "Uber",
	      "Sweep South",
	      "FinTech",
	      "Design",
	      "Data Model",
	      "Binary",
	      "Turing",
	      "Code Academy",
	      "FreeCodeCamp",
	      "Yiego",
	      "Deep Learning",
	      "Artificial Intelligence",
	      "OfferZen",
	      "Andela",
	      "JUMO",
	      "PayStack",
	      "MSurvey",
	      "Tesla",
	      "Bootstrap",
	      "The Cloud",
	      "Deprecated",
	      "Disrupt",
	      "Don’t be Evil",
	      "GDPR",
	      "Incubator",
	      "IPO",
	      "Privacy",
	      "Condition Statements",
	      "Strongly typed",
	      "Database",
	      "Scale",
	      "Sharing Economy",
	      "UX Design",
	      "Linux",
	      "Agile",
	      "Algorithm",
	      "Progressive Web App",
	      "Data Structure",
	      "Data Types",
	      "Documentation",
	      "Silos",
	      "Minification",
	      "Mobile First",
	      "MVP",
	      "MySQL",
	      "IDE",
	      "The intern",
	      "Open Source",
	      "Web Crawler",
	      "Big O",
	      "Trees",
	      "Sprint",
	      "BurnOut",
	      "GraphQL",
	      "Scala",
	      "Sort Algorithms",
	      "Divide and Conquer",
	      "Threading",
	      "Shell",
	      "SSH",
	      "Start-Up",
	      "Sunshine in my Code",
	      "Celery",
	      "Native",
	      "Androids",
	      "Swift",
	      "Social Auth",
	      "S3 Bucket",
	      "Vim",
	      "IntelliJ",
	      "BackTrace",
	      "Emacs",
	      "Recursive",
	      "Tensor Comprehension",
	      "Concurrency",
	      "Offline First",
	      "Functional Programming",
	      "Design Patterns",
	      "MVC",
	      "Cache Miss",
	      "Executable",
	      "Compiler",
	      "DeadLock",
	      "Immutable",
	      "ICO",
	      "Hack",
	      "Elixir",
	      "Unix",
	      "Women in Tech[a][b][c][d]",
	      "Women in STEM",
	      "Neural Schema",
	      "Reinforcement Learning",
	      "Bayesian Network",
	      "Hermes",
	      "Flipper",
	      "Litho",
	      "Fresco",
	      "Digital Ocean",
	      "VS Code",
	      "Sublime",
	      "Coffee",
	      "Spectrum",
	      "FastText",
	      "Detectron",
	      "Data Prophet",
	      "TorchCraftAI",
	      "Presto",
	      "GraphQL",
	      "RocksDB",
	      "MyRocks",
	      "Haxl",
	      "Katran",
	      "Mcrouter",
	      "Immutable.js",
	      "Folly",
	      "Nuclide",
	      "Docusaurus",
	      "Zstd",
	      "Watchman",
	      "Jest",
	      "Prepack",
	      "Flux",
	      "Draft.js",
	      "Chisel",
	      "Xctool",
	      "ComponentKit",
	      "Flow",
	      "Reason",
	      "Bpf[e]",
	      "Btrfs",
	      "Netconsd",
	      "Cgroup2",
	      "Psi",
	      "Oomd",
	      "Osquery",
	      "FBCTF",
	      "React 360",
	      "Spark AR",
	      "Git Stash",
	      "Git Reflog",
	      "Git Blame",
	      "OOP",
	      "Framework",
	      "SDK",
	      "Semicolon",
	      "Chef.io",
	      "Jenkins",
	      "Travis",
	      "Continuous Integration",
	      "Continuous Delivery",
	      "Self Driving",
	      "Image Recognition",
	      "Deployment Pipeline",
	      "Recruiters",
	      "Imposter Syndrome",
	      "Just In Time",
	      "Source Control",
	      "Method",
	      "Function",
	      "Lambda",
	      "Serverless",
	      "Array",
	      "Variable",
	      "Run",
	      "Loop",
	      "Debug",
	      "APK",
	      "Libra",
	      "Move",
	      "Containers",
	      "Virtual Machine",
	      "EC2",
	      "Technical Interview",
	      "Cultural Fit",
	      "Talent",
	      "People",
	      "Users",
	      "Test Driven Development",
	      "Static",
	      "Virtual Reality",
	      "Augmented Reality",
	      "Bug",
	      "Object",
	      "Stand Up",
	      "Code Review",
	      "Pull Request",
	      "Retro Meeting",
	      "Sprint Planning",
	      "EPIC",
	      "Quality Assurance",
	      "Scope",
	      "Error",
	      "404",
	      "Not Found",
	      "README",
	      "Markup",
	      "Yaml",
	      "PyPI",
	      "Object",
	      "Class",
	      "Polymorphism",
	      "Super",
	      "Override",
	      "Inheritance",
	      "Void",
	      "Public",
	      "Abstract",
	      "Encapsulate",
	      "Extends",
	      "High Level",
	      "Low Level",
	      "Distributed",
	      "Parallel",
	      "Analyst",
	      "Syntax",
	      "C#",
	      "Type",
	      "Arduino",
	      "Raspberry Pi",
	      "Chipset",
	      "Prototype",
	      "Input",
	      "Microcontroller",
	      "Perl",
	      "Interpreted",
	      "DOM",
	      "Cryptocurrency",
	      "Component",
	      "NPM",
	      "OnClick",
	      "Expression",
	      "Firebase",
	      "Deploy",
	      "FireBase",
	      "Alias",
	      "Request",
	      "Anonymous User",
	      "Foo Bar",
	      "Hello World",
	      "Windows",
	      "Kernel",
	      "Locahost",
	      "Web Socket",
	      "Query",
	      "Template",
	      "Flux",
	      "Diagram",
	      "Digital Crime",
	      "Dump",
	      "Iterator",
	      "Index",
	      "If statement",
	      "Merge Sort",
	      "Embedded",
	      "Serializer",
	      "URL",
	      "Model",
	      "Recycle Bin",
	      "Instance",
	      "Memory",
	      "Rubber Ducking",
	      "Peer Programming",
	      "Squad",
	      "Filters",
	      "Snapchat",
	      "Replicate",
	      "QA",
	      "Ethics",
	      "Human Rights",
	      "Environmental awareness",
	      "Green Computing",
	      "Redis",
	      "Broker",
	      "DROP",
	      "NoSQL",
	      "Whatsapp",
	      "Telegram",
	      ".Net",
	      "Run Time",
	      "Constructor",
	      "Destructor",
	      "Retrieve",
	      "Update",
	      "Destroy",
	      "isAuthenticated",
	      "Atom",
	      "IntelliJ",
	      "Eclipse",
	      "Git Cola",
	      "Metadata",
	      "Namespace",
	      "SegFault",
	      "Agent",
	      "Exception",
	      "TypeScript",
	      "Automated",
	      "Boolean",
	      "Character",
	      "False",
	      "True",
	      "Integer",
	      "Pointer",
	      "Interface",
	      "Equals Equals",
	      "Constant",
	      "C++",
	      "Backlog",
	      "Steve Jobs",
	      "Elon Musk",
	      "Context",
	      "Command Line",
	      "Flexbox",
	      "Subscription",
	      "Package",
	      "Library",
	      "Localization",
	      "Onboard",
	      "Haskell",
	      "MacOS",
	      "Electron",
	      "MongoDB",
	      "Visualization",
	      "Squash",
	      "Ice cream",
	      "Unicorn",
	      "Funding",
	      "Happiness",
	      "Production",
	      "Remote",
	      "Mobile",
	      "Null",
	      "Output",
	      "Project",
	      "Idea",
	      "Creative",
	      "Innovative",
	      "Medium",
	      "Wakanda",
	      "Iron Man",
	      "Infinity Stones",
	      "Nokia",
	      "Blackberry",
	      "Garbage Collector",
	      "Engine",
	      "Runtime",
	      "Client",
	      "Optimize",
	      "Cleaning",
	      "Outlier",
	      "Excel",
	      "Powerpoint",
	      "Wordpress",
	      "Elastic",
	      "Simple",
	      "Methodology",
	      "Assembly",
	      "Youtube",
	      "SEO",
	      "Feature phones",
	      "Zero rated",
	      "Reviews",
	      "Zamatoe",
	      "Egonomics",
	      "Mental Health",
	      "Growth",
	      "Login",
	      "Register",
	      "Ant",
	      "BongoHive",
	      "Experience",
	      "Breadcrumb",
	      "NavBar",
	      "Modal",
	      "Queen",
	      " Katherine Jonson",
	      "Wikipedia",
	      "USB",
	      ]
var mn = 1;
var mx = words.length;
window.localStorage.clear();
//localStorage.removeItem("runs");
initData(mn,mx);
randomRun(mn,mx);
function initData(min,max){	
	for(g=min;g<=max;g++){
		localStorage.setItem("words["+g+"]",words[g]);
		localStorage.setItem("ranks["+g+"]",0);
		localStorage.setItem("stats["+g+"]",0);
	}
	localStorage.setItem("startgame",0);
	localStorage.setItem("runs",min);
}
function getRanks(run){
	return localStorage.getItem("ranks["+run+"]")
}
function existRuns(min,cur,run){
	var exist = false;
	for(i=min;i<=cur;i++){
		er = localStorage.getItem('ranks['+i+']');
		if(er==run){
			exist = true;
		}
	}
	return exist;
}
function randomRun(min,max){
	var runs = [];
	var r = randomInt(min,max);
	for(j=min;j<=max;j++){
		do {
			r = randomInt(min,max);
		} while (existRuns(min,j,r)==true);
		runs[j] = r;
		localStorage.setItem('ranks['+j+']',runs[j]);
	}
	return runs;
}
function randomInt(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

var origin, updown;
function setOrigin(eve) {
	return origin = Math.floor(eve.alpha);
}
function setUpDown(eve) {
	updown = Math.floor(eve.alpha);
	deviceOrientationHandler(origin,updown,mn,mx);
	return updown;
}

if(window.DeviceOrientationEvent){
	window.addEventListener('deviceorientation', setOrigin, false);
	setTimeout(function() {
		window.removeEventListener('deviceorientation', setOrigin, false);
		window.addEventListener('deviceorientation', setUpDown, false);		
		window.addEventListener('deviceorientation', setOrigin, false);
    }, 3000);
} else {
	$('h1').text('Your browser sucks! Not Supported');
}
var cr = mn;
function deviceOrientationHandler(o,orientation,min,max){	
	if((orientation>=135)&&(o<135)){
		$('body').css('background','#197cd9');
		if(localStorage.getItem("startgame")==0){
			localStorage.setItem("startgame",1);
			$('.tobehide').hide();
			$("#playtime").countdown(getSecFromNow(seconds), function(event) {
			    $(this).html(event.strftime('%M:%S'));
			}).on('finish.countdown', function(event) {
				timeIsUp();
			});			
		} 
		updData(min,max);
		localStorage.setItem("stats["+cr+"]",1);
		//console.log(o+' '+orientation);
	}	
	if((orientation<=45)&&(o>45)){	
		if(localStorage.getItem("startgame")!=0){
			updData(min,max);
			$('body').css('background','#f57f2f');
		}
	}
}
function getSecFromNow(sec) {
	return new Date(new Date().valueOf() + sec * 1000);
}
function updData(min,max){
	var timeleft = $("#playtime").text();
	var completed = getCompleted(min,max);
	if(completed!=((max-min)+1)){
		if(timeleft!='00:00'){
			cr = parseInt(localStorage.getItem("runs")); //current runs
			if(cr<max){
				do {
					cr = cr + 1;
				} while ((localStorage.getItem("stats["+cr+"]")==1));
			} else {
				cr = min;
			}
			$('#theword').html(localStorage.getItem("words["+getRanks(cr)+"]"));
			localStorage.setItem("runs",cr);
		} else {
			timeIsUp();
		}
	} else {
		$("#playtime").countdown('stop');
		//$('#playtime').text(timeleft);
		$('h1.tobehide').text('Sisa waktu:').show();
		$('#theword').text('Selamat, semua kejawab!'); 
		$('body').css('background','#197cd9');
	}
}
function getCompleted(min,max){
	var tc = 0;	
	for(c=min;c<=max;c++){
		tc = tc + parseInt(localStorage.getItem('stats['+c+']'));
	}
	return tc;
}
function timeIsUp(){
	$('#theword').text('Waktu Habis!'); //time's up
	$('body').css('background','#f57f2f');
}
