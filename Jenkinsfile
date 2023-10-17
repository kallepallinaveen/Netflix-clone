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
}