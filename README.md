# FrisbyJS Demo

Hello, this project is a sample FrisbyJS Project
It realizes the Restful API testing. There are three scenarios. You can find the under the path of `src/tests` 

## Installation

 You can run project with two ways. These are
 - Using Docker
 - Using Node

Both of the running way have their own advantages. When you choose the Docker way to run the project, you will not need anything except Docker. Docker will handle all installations of node and dependencies.

When you choose the Node way to run, of course you need npm and node.

## Running of the Project

### Docker

There is a file named `docker-compose.yml` This compose file includes the information about the running of the container, tests will be run according to the `DEPLOY_TYPE` parameter which is given by environment variable in docker-compose:

* `docker-compose up` 
* `docker-compose up -d`
* `docker-compose --build`
* `docker-compoe --build -d`

### Node

First of all, you need to install dependencies executing the command below:

* `npm install`

Now you can run the project using the commands below:

* `npm run start:dev`
* `npm run start:prod`

---
* You can make the configurations using the files under the config
	* `config/dev.json`
	* `config/prod.json`

* Artifacts will be restored in the `output/` directory.

## Video Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/QkdwnVpan0M/0.jpg)](https://www.youtube.com/watch?v=QkdwnVpan0M&ab_channel=BilgehanNAL)