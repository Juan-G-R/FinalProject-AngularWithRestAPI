DROP USER if exists 'userAdministrator'@'%' ;

CREATE USER 'userAdministrator'@'%' IDENTIFIED BY 'userAdministrator';

GRANT ALL PRIVILEGES ON * . * TO 'userAdministrator'@'%';