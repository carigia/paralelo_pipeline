pipeline {   //cargar multiples archivos multiples procesos 
    agent any
 
    tools {nodejs "node"} //utiliza node 
 
    stages { //instancias 
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"  //nombre configuracion de nodo creada en jenkins
                    }
                    steps {
                        git url: 'https://github.com/carigia/paralelo_pipeline.git' //descarga url d etu repositorio
                        bat 'npm install' //instala todo lo necesario
                        bat 'npm update'  //actualizalo                     
                        bat 'npx cypress run --record --key 9527236a-19c3-42d9-844e-9fbc2db6cc5a --parallel'
                    
                    }
                }
          
            }
             
        }
 
    }
            
}
