pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Build Stage - Node.js app ready!'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        success {
            mail to: 'jjohnsonvettamv1790@conestogac.on.ca',
                 subject: "✅ Success - ${currentBuild.fullDisplayName}",
                 body: "Jenkins CI/CD pipeline passed!"
        }
        failure {
            mail to: 'jjohnsonvettamv1790@conestogac.on.ca',
                 subject: "❌ Build Failed - ${currentBuild.fullDisplayName}",
                 body: "Build failed. Please check the Jenkins logs."
        }
    }
}
