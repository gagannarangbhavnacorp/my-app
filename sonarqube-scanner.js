const scanner = require('sonarqube-scanner').customScanner;

scanner(
  {
    serverUrl : 'http://localhost:9000',
    token : "sqp_11f75d5043eca992f4a27057f7ae29758af21c1e",
    options: {
      'sonar.projectName': 'my-app',
      'sonar.projectKey':'my-app',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': './src',
      'sonar.tests': 'specs',
      'sonar.sourceEncoding':'UTF-8',
      'sonar.projectVersion':'1.0',
      'sonar.exclusions':'/node_modules/'
    }
  },
  () => process.exit()
)