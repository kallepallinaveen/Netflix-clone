pipeline{
    agent any
    environment{
        SCANNER_HOME = tool 'sonar-scanner'
    }
    stages{
        stage('cleanworkspace'){
            steps{
                cleanWs()
            }
        }
        stage('Build Packages'){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs12.22.9') {
                    sh 'npm install'
                }
            }
        }
        stage('sonarqube Anyslsis'){
            steps{
               withSonarQubeEnv('sonar') {
                    sh" ${SCANNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=netflex \
                    -Dsonar.sources=. "
               }
            }
        }
    }
}