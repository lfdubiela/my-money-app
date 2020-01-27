PWD:= $(shell pwd -L)
USR:= $(shell whoami)
DOCKER_RUN:= docker run --rm --net=host -it -v ~/.gitconfig:/home/jenkins/.gitconfig -v ~/.git-credentials:/home/jenkins/.git-credentials -v "${PWD}":/app registry.boacompra.intranet/boacompra-build-php:7.2-fpm-phalcon-3.3.1

.PHONY: test

install-image-mongodb:
	- docker pull mongo:4.0.4

run-mongodb:
	- docker run -p 27017-27019:27017-27019 --name mongodb -d mongo:4.0.4

stop-mongodb: 
	- docker rm --force mongodb	

connect-mongodb:
	- docker exec -it mongodb bash