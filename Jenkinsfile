pipeline {
    agent any

    environment {
        IMAGE_NAME = "ev-car-recommender"
        CONTAINER_NAME = "ev-car-recommender-container"
        CI = "true"
    }

    stages {

        stage('Clone Repository') {
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

        stage('ESLint Code Quality Check') {
            steps {
                echo 'Running ESLint via Jenkins'
                bat '''
                npx eslint src || echo ESLint finished with warnings
                '''
            }
        }

        stage('Unit Tests with Coverage') {
            steps {
                bat 'npm run test:coverage -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Install Trivy (Jenkins-only)') {
            steps {
                bat '''
                if not exist trivy (
                  powershell -Command "Invoke-WebRequest -Uri https://github.com/aquasecurity/trivy/releases/latest/download/trivy_0.49.1_windows-64bit.zip -OutFile trivy.zip"
                  powershell -Command "Expand-Archive trivy.zip -DestinationPath trivy"
                )
                '''
            }
        }

        stage('Trivy Image Scan') {
            steps {
                bat '''
                trivy\\trivy.exe image --severity HIGH,CRITICAL --exit-code 0 %IMAGE_NAME%
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || echo Not running
                docker rm %CONTAINER_NAME% || echo Not found
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
            echo '✅ CI Pipeline Completed Successfully'
            echo '🧹 ESLint Code Quality Check Done'
            echo '🧪 Unit Tests with Coverage Done'
            echo '🔐 Trivy Security Scan Done'
            echo '🌐 App running at http://localhost:3000'
        }

        failure {
            echo '❌ Pipeline Failed'
        }
    }
}
