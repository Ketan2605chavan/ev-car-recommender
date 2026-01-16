pipeline {
    agent any

    environment {
        IMAGE_NAME = "ev-car-recommender"
        CONTAINER_NAME = "ev-car-recommender-container"
        CI = "true"
    }

    stages {

        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ketan2605chavan/ev-car-recommender.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Verify Test Files (Debug)') {
            steps {
                bat '''
                echo ===== Listing src folder =====
                dir src
                echo ===== Listing test files =====
                dir src\\__tests__
                '''
            }
        }

        stage('Unit Tests with Coverage') {
            steps {
                // CI-safe Jest execution
                bat 'npm run test:coverage -- --watchAll=false --passWithNoTests'
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
            echo '🧪 Unit tests executed with coverage'
            echo '🌐 Application running at http://localhost:3000'
        }

        failure {
            echo '❌ Jenkins pipeline failed'
        }
    }
}
