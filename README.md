# Microservices for a cinema

<p>
The microservices project for a cinema platform that tries to simulate a microservices architecture, has three microservices: movie listing services, movie address services, and movie trailer services. Each of these microservices has independent functions such as:
  
- **List movies:** Get a list of available movies containing the movie in Json format.
- **List cinemas:** obtain the addresses of cinemas that are registered in the franchise.
- **Movie trailers:** play the different movie trailers.

It should be noted that this is just a microservices project.Dockerfile and Docker-compose are also used to create Docker images.Git Actions automates the creation of images, uploading them to Docker Hub and then deploying them to EC2.
</p>

### How to install and run the project? :wrench:
Node.js technologies are used with the Express.js framework, as well as Dockerfile and Docker-compose.
The project must first be downloaded or cloned:
- `git clone https://github.com/JaviQuilumba/MicroservicesCinemas.git`
  
The following steps are to install dependencies and run the project:
- `npm install`

Steps to build Docker-compose:
- `docker-compose build`
- `docker-compose up`

Command to shut down the container:
- `docker-compose down`

### How to use the project :white_check_mark:
<p>
To use the project you must execute the commands described in the previous point. When you run it in the terminal, you will be able to find URLs that you can open locally and you will be able to see the different services it offers, such as listing the different cinemas, listing the movies and movie trailer videos.
</p>

![Captura de pantalla 2024-07-06 121849](https://github.com/JaviQuilumba/MicroservicesCinemas/assets/167824357/51da0d8a-9c86-4cac-b5a8-bdbbea5981a5)
![Captura de pantalla 2024-07-06 121922](https://github.com/JaviQuilumba/MicroservicesCinemas/assets/167824357/2d890ea4-3e93-4eb8-846f-dc554e73d742)
![Captura de pantalla 2024-07-06 122016](https://github.com/JaviQuilumba/MicroservicesCinemas/assets/167824357/127ddf0e-8f23-4ad9-a6ac-6a6c9ed4a761)

The links:

http:localhost:8082/api/cinemas

http:localhost:8083/api/moviesList

http:localhost:8084/api/video/1

http:localhost:8084/api/video/2

## Warning:
<p>
The above instructions are for local execution with Docker Desktop.
To deploy to AWS EC2, the following requirements must be taken into account:
</p>

 - Cuenta en DockerHub
 - Cuenta en AWS
 - Creación de una instancia en AWS EC2

 Since we will need the following variables stored in the GitActions for its correct execution:

- secrets.EC2_HOST: IP instance.
- secrets.DOCKERHUB_USERNAME: user of the DockerHub account.
- secrets.DOCKERHUB_TOKEN: DockerHub login token.
- secrets.AWS_PRIVATE_KEY: AWS generated key pair.

###  Collaborators :boy:
Carlos Daniel Tapia Ortiz
https://github.com/cdto17

###  License :page_facing_up: 
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
