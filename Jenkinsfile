pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        nodejs(nodeJSInstallationName: 'node-14.15.3') {
          sh 'npm install'
        }
      }
    }
    stage("test") {
      steps {
        nodejs(nodeJSInstallationName: 'node-14.15.3') {
          sh 'npm test'
        }
      }
    }
  }
}
