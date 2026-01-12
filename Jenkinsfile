pipeline {
    agent any

    environment {
        IMAGE_NAME = "ev-car-recommender"
        CONTAINER_NAME = "ev-car-recommender-container"
    }

    stages {

        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ketan2605chavan/ev-car-recommender.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Container (if exists)') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || echo Container not running
                docker rm %CONTAINER_NAME% || echo Container not found
                exit /b 0
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Jenkins pipeline completed successfully!'
            echo '🌐 Application running at http://localhost:3000'
        }
        failure {
            echo '❌ Jenkins pipeline failed!'
        }
    }
}
