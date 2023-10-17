pipeline{
    agent any
    environment{
        SCANNER_HOME = tool 'sonar'
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
               withSonarQubeEnv('sonar-scanner') {
                    sh" ${SCANNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=netflex \
                    -Dsonar.sources=. "
               }
            }
        }
    }
}