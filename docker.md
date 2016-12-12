docker run <image>   (any image, create new container, and start container, run four times, create four images)
docker start <name|id>  (start an existing container that is not running)
docker stop <name|id>
docker ps [-a include stopped containers] 
docker rm <name|id> (remove/delete a container)

/etc/host
add host to ip to simplify things
rsa key


docker login (docker hub/quay.io/private repository)

docker run -p 8080:80
expose port
map containers port of 80, to web server of 8080
target-port:source-port

docker run -d --name web1 -p 8081:80
-d run as daemon


boot2docker (help run docker on mac/windows, brew install boot2docker)
connect to a docker daemon
boot2docker up (boot docker vm)
$(boot2docker shellinit)  # run for every new terminal window


serve files with nginx

FROM (base image on another image)
RUN
ADD
EXPOSE
CMD

docker build -t <repository-name> .
docker run -d -p 80:80
boot2docker ip # get virtual ip

docker push <repository-name>