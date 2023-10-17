pipeline{
    agent any
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
                nodejs(nodeJSInstallationName: 'nodejs12.22.9') { 
                    withSonarQubeEnv('sonar'){
                        sh "npm install sonar-scanner"
                        sh "npm run sonar"
                    }
                 }
            }
        }
    }
}