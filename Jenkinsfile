pipeline {
    agent any

    environment {
        DOCKER = "C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe"
        IMAGE_NAME = "ev-car-recommender"
        CONTAINER_NAME = "ev-car-recommender-container"
        SONAR_HOST_URL = "https://sonarcloud.io"
        CI = "true"
    }

    stages {

        stage('Checkout Code') {
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

        stage('ESLint Code Quality') {
            steps {
                echo 'Running ESLint'
                bat 'npx eslint src || echo ESLint completed with warnings'
            }
        }

        stage('Unit Tests with Coverage') {
            steps {
                bat 'npm run test:coverage -- --watchAll=false --passWithNoTests'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'coverage/**', fingerprint: true
                }
            }
        }

        stage('SonarCloud Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonarcloud-token')
            }
            steps {
                bat '''
                npx sonar-scanner ^
                  -Dsonar.projectKey=Ketan2605chavan_ev-car-recommender ^
                  -Dsonar.organization=ketan2605chavan ^
                  -Dsonar.sources=src ^
                  -Dsonar.tests=src ^
                  -Dsonar.exclusions=coverage/**,**/*.test.js ^
                  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info ^
                  -Dsonar.host.url=https://sonarcloud.io ^
                  -Dsonar.token=%SONAR_TOKEN%
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '"%DOCKER%" build -t %IMAGE_NAME% .'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                bat '''
                "%DOCKER%" run --rm ^
                  -v /var/run/docker.sock:/var/run/docker.sock ^
                  aquasec/trivy:latest ^
                  image %IMAGE_NAME%
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                "%DOCKER%" stop %CONTAINER_NAME% || exit 0
                "%DOCKER%" rm %CONTAINER_NAME% || exit 0
                "%DOCKER%" run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline Completed Successfully'
            echo '🧪 ESLint + Tests + Coverage Completed'
            echo '🔐 Trivy Image Scan Completed'
            echo '🌐 App running at http://localhost:3000'
        }
        failure {
            echo '❌ Pipeline Failed'
        }
    }
}
