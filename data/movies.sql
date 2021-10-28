-- PARA EL PROYECTO express-movies-vmc -----
drop table movie;

create database movies;
use movies;

create table movie 
(
movie_id int not null primary key auto_increment,
title varchar (100),
poster varchar(100),
synopsis varchar(255),
generes_id varchar (45),
year varchar(4),
director varchar(100),
actors json
);  

select * from movies;
insert into movie (movie_id,title,poster,synopsis,generes_id,year,director,actors) select id, title, poster, synopsis, genres, year, director, actors from movies;

select * from movie;

-- Crear procedures
create table if not exists user
(
 user_Id int primary key not null auto_increment,
 username varchar(100) not null,
 password blob,
 rol enum('user','admin')
 );
 
 create table if not exists secret
 (
	secret blob not null
 );
 insert into secret values (UNHEX(SHA2('misecreto',512)));
 select * from secret;

drop procedure insert_user;

delimiter //
create procedure insert_user(
in p_username varchar(100),
in p_password varchar(100),
in p_rol enum ('user','admin'),
out result varchar(100))
BEGIN 
-- logica del procedure
declare hashVariable binary(100);
set hashVariable = aes_encrypt(p_password, (select secret from movies.secret));
-- Control de usuario no repetido ??? ------
insert into movies.user (username, password , rol) values (p_username, hashVariable, p_rol);
-- commit;
select username into result from movies.user where username = p_username;
END //
delimiter ;

drop procedure insert_user_movies;
delimiter //
create procedure insert_user_movies(
in p_username varchar(100),
in p_password varchar(100),
in p_rol enum ('user','admin'))
BEGIN 
declare result varchar(100);
call insert_user(p_username,p_password,p_rol,result);
select result;
END //
delimiter ;

select * from user;
DELETE FROM `movies`.`user` WHERE (`user_Id` = '1');
-- select last_insert_id();
call insert_user_movies('pepe',1234,'user'); 

set global log_bin_trust_function_creators = 1;

drop function movies.check_user;

delimiter //
create function movies.check_user(
p_username varchar(100),
p_password varchar(100))
returns tinyint
not deterministic
BEGIN

declare decrypt_password varchar(100);
select cast(aes_decrypt(u.password, (select secret from movies.secret)) as char(1000) character set utf8mb4)
	into decrypt_password from movies.user u where p_username = u.username;

if ( decrypt_password != p_password or decrypt_password is null) then signal sqlstate '45000' -- signal is like a throw error 
 set message_text = 'user or password incorrect'; 
end if;

return 1;

 END //
 delimiter ;
