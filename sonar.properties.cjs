const sonarqubeScanner = require('sonar-scanner');

sonarqubeScanner({
	serverUrl: 'http://192.168.29.181:9000/',
		 options : {
		  'sonar.projectDescription': 'This is a Node JS application',
		  'sonar.projectName': 'Netflix',
		  'sonar.projectKey': 'Netflex',
		  'sonar.login': 'sqp_2243550e4559367d0e2ac8f2531d48a52bde5e09',
		  //'sonar.login': 'admin',
		  //'sonar.password': 'admin123',
			  'sonar.projectVersion':'1.0',
		  'sonar.language':'js',
			  'sonar.sourceEncoding':'UTF-8',
			  'sonar.sources': '.',
		//'sonar.tests': 'specs',
			//'sonar.inclusions' : 'src/**'
		 },
  } ); 