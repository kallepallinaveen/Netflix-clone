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
                   -Dsonar.host.url=http://54.83.121.97:9000 \
                   -Dsonar.token=sqp_b8b147647fe21d659ebe85291552642422324e1c"
               }
            }
        }
    }
}