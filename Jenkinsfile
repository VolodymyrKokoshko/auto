pipeline {
    agent any

    tools {
        // Використовуємо ім'я, яке ми дали в налаштуваннях Tools на Кроці 3
        nodejs 'node-20'
    }

    stages {
        stage('Checkout') {
            steps {
                // Якщо ви використовуєте GitHub, тут буде git url: '...'
                // Для локального тестування просто переконайтеся, що файли є
                echo 'Checking out code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Встановлюємо залежності (якщо вони є)
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Запускаємо тест, описаний у package.json
                sh 'npm test'
            }
        }
    }
}
