pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building..."'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            mail to: 'jjhonsonvettamv1790@conestogac.on.ca',
                 subject: "SUCCESS: ${currentBuild.fullDisplayName}",
                 body: "The Jenkins pipeline build succeeded!"
        }
        failure {
            mail to: 'jjohnsonvettamv1790@conestogac.on.ca',
                 subject: "FAILURE: ${currentBuild.fullDisplayName}",
                 body: "The Jenkins pipeline build failed!"
        }
    }
}
