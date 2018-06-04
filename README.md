# WeatherAPI in node.js

Run a simple RestAPI with [Express](http://expressjs.com/) app. We'll get there in the following steps.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

Run `docker-compose build`. It will pull a base image from the Docker registry and install [express-generator](https://github.com/expressjs/generator) globally in your container. The rest can be ignored for now.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

## How to use

Endpoint for getting weather for city
`http://localhost:3030/weather?city=cityName&email=correctEmailAddress`

Current params:
* city - only allowed "London" or "New York"
* email - should be a correct email address