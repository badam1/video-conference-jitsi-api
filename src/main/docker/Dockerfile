FROM java:8-jre
EXPOSE 80 443
#install Spring Boot artifact
ADD video-conference-0.0.1-SNAPSHOT.jar video-conference.jar
ADD /etc/letsencrypt/live/adam.progmasters.net/keystore.p12 /cert/keystore.p12
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/video-conference.jar"]