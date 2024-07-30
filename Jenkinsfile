pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
    }
    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("pranjal284/nodeapp")
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKER_HUB_CREDENTIALS') {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    } 
}
