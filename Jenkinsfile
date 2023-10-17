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
                sonar-scanner \
               -Dsonar.projectKey=netflex \
               -Dsonar.sources=src \
               -Dsonar.host.url=http://192.168.29.181:9000/ \
               -Dsonar.token=sqp_2243550e4559367d0e2ac8f2531d48a52bde5e09
            }
        }
    }
}