create database if not exists bar;
use bar;
create table empleados(
	id INT auto_increment primary key,
    nombre VARCHAR(40) not null,
    apellido VARCHAR(40) not null 
);

alter table empleados modify column mail VARCHAR(50) not null unique;

insert into empleados (nombre, apellido, mail) values ("hernan", "gauna", "undrbug@gmail.com");
insert  into empleados set nombre="Paola", apellido="Novo", mail="paola_novo2@gmail.com";

delete from empleados where mail = "undrbug@gmail.com";

select * from empleados;

UPDATE bar.empleados SET mail = 'undrbug@gmail.com' WHERE (id = '3');
CREATE database ejercitacion;
USE ejercitacion;
CREATE TABLE usuarios (
   id INT auto_increment primary key,
   nombre VARCHAR(40) not null,
   apellido VARCHAR(40) not null,
   email varchar(40) unique not null,
   password varchar(40) not null,
   categoria enum("estudiantes", "docentes", "editores","administradores")
);
DESCRIBE cursos_usuarios;

CREATE TABLE cursos (
id INT primary key auto_increment,
titulo varchar(255) unique not null,
descripcion text not null,
imagen varchar(255),
fecha_inicio DATE not null,
fecha_finalizacion DATE not null,
cupo_max INT not null
);

CREATE TABLE unidades (
id INT primary key auto_increment,
titulo varchar(255) unique not null,
descripcion text not null,
fecha_inicio DATE not null,
id_cursos INT not null,
FOREIGN KEY (curso_id) REFERENCES cursos(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE cursos_usuarios (
curso_id INT not null,
usuario_id INT not null,
primary key ( curso_id, usuario_id),
foreign key (curso_id) references cursos(id),
foreign key (usuario_id) references usuarios(id)
);

use movies_db;
insert into genres (id, created_at, updated_at, name, ranking, active) 
	values	(default, now(), now(), 'investigacion', 13, 1);
select * from genres;    
update genres set name = 'investigacion cientifica' where id=13;
delete from genres where id=13;

select * from movies;
select * from actors;
select first_name, last_name, rating from actors;
select title as titulo from series as series;
select first_name, last_name, rating from actors where rating > 7.5;
select title, rating, awards from movies where rating > 7.5 and awards > 2;
select title, rating from movies order by rating asc;
select title from movies limit 3;
select title, rating from movies order by rating limit 5 offset 5;
select title, rating from movies order by rating desc limit 5 offset 5;
select * from actors limit 10;
select * from actors limit 10 offset 30;
select title from movies where title like '%Harry Potter%';
select * from movies where title like "%Potter y las Reliquias de la Muerte - Parte 2";
select * from actors where first_name like "%sam";
select title as titulo, year(release_date) as anio from movies where year(release_date) between 2004 and 2008 order by anio;

-- ejercitacion pg --
use musimundos;
select * from canciones order by nombre;
select * from canciones order by nombre limit 5;
select * from canciones order by nombre limit 5 offset 5;

select * from tipos_de_medio as nombres_de_medios;
/*Desde el departamento de desarrollo de Musimundos están preparando la parte de la aplicación en la cual accedemos
 a una canción en particular. Nos comentan que debajo de la imagen de la canción deberá aparecer un texto específico, 
 y necesitan nuestra ayuda. El texto tiene que ser:
"La canción " (nombre del tema) " fue compuesta por " (compositor del tema).
Hacé una consulta a nuestra base de datos que nos traiga el nombre y el compositor de cada tema, sin repeticiones y 
agregando el texto que el equipo de desarrollo nos mencionaba.
¡Ojo! Tené en cuenta los espacios dentro de los textos que nos pidieron añadir.
Ingresá el primer resultado que obtuviste, sin comillas.*/

select concat("La cancion ", nombre, " fue compuesta por ", compositor ) from canciones;

select * from facturas where id_cliente = 2 order by fecha_factura desc;

/*El encargado del equipo de UX de Musimundos solicita hacer un pequeño slide con solo tres canciones de nuestra colección. 
Además, pide que sean las tres con mayor duración. ¡Vamos con eso!
Insertá el ID del álbum de las tres canciones que obtuviste, en orden, sin espacios y separados por coma.*/
select * from canciones order by milisegundos DESC limit 3;

/*Tenemos un nuevo comunicado del departamento de UX.
En esta ocasión necesitan hacer una paginación de canciones. La primera página ya está resuelta, 
pero para la segunda debes saltear cinco canciones y traer las próximas cinco. Estas deben estar ordenadas alfabéticamente por nombre.
Insertá el compositor de la quinta canción que obtuviste.*/
select * from canciones order by nombre limit 5 offset 5;
use movies_db;
select title, first_name, last_name from movies 
inner join actor_movie on movie_id = movies.id
inner join actors on actor_id = actors.id;
/*Es la semana del rock a nivel mundial y nuestro gerente de Musimundos nos pide crear banners con canciones del género Rock.
Debemos hacer una consulta a nuestra base de datos que nos devuelva los nombres de las canciones que tengan género rock.
Seleccioná la cuarta canción que te devuelva la consulta.*/
use musimundos;
describe canciones;

select canciones.nombre, generos.nombre from canciones, generos where canciones.id_genero = generos.id order by generos.nombre;
select * from canciones 
inner join generos on canciones.id_genero = generos.id and generos.nombre = "rock";
/*En el salón Musimundos tenemos un cliente fanático de Deep Purple, este quiere comprar todos los álbumes que tengan como "artista" 
a Deep Purple. Debemos hacer una consulta a nuestra base de datos que nos traiga el título del álbum y el autor para saber si, 
lo que le estamos vendiendo, es correcto.
Ingresá el título del álbum en la posición número 10.*/
select * from albumes
inner join artistas on albumes.id_artista = artistas.id and artistas.nombre = "Deep Purple";

/*En el departamento de desarrollo de Musimundos están creando la nueva aplicación móvil, 
en la cual vamos a poder escuchar música online de nuestros artistas favoritos. 
Para evitar posibles problemas de compatibilidad, los desarrolladores decidieron que 
solo van a subir canciones que tengan el tipo de medio "MPEG audio file". 
Debemos ayudar al equipo y obtener una lista en las cuales tengamos el nombre de las canciones que tengan ese tipo de medio.*/
select canciones.nombre, tipos_de_medio.nombre from canciones
inner join tipos_de_medio on id_tipo_de_medio = tipos_de_medio.id;

/*
Desde el sector de recursos humanos de Musimundos nos están solicitando una lista de todos los cargos que tienen los empleados. 
Realizá una consulta a nuestra base de datos que nos brinde el título de los cargos que tengan todos los empleados sin repetirse medio.
Ingresá el título que figura en la posición 4.
*/
select * from empleados;
select distinct titulo from empleados;

/*Genera una consulta a la base Musimundos que cuente todas las canciones por genero y las agrupe por id_genero. 
Seleccioná el total del quinto registro.*/
select generos.nombre, count(*) from canciones 
inner join generos on generos.id = id_genero
group by generos.nombre;

select count(*) from canciones;

/*El área de estrategia de Musimundos está analizando cómo implementar una acción de marketing en la 
cual tiene que destinar un presupuesto acorde a la cantidad de clientes que tenga cada país. Por esto 
nos pide que los ayudemos a identificar la cantidad de clientes que son de Brazil.
Generá una consulta en la base de datos que traiga la cuenta de todos los clientes que son de Brazil.
Ingresá el número que te dio como resultado.*/
select count(*) from clientes where pais = "brazil";

/*Es época de balances y en Musimundos quieren saber cuánto es el dinero que la gente lleva gastado en la empresa.
Hacé una consulta a la base de datos que sume el total de todas las facturas que emitió la empresa.
ngresá el número que obtuviste.*/
select sum(total) from facturas;

/*
En el equipo de desarrollo están mudando de servidor a nuestra aplicación y 
quieren saber cuál es el peso de cada archivo de canciones para buscar un servidor adecuado con capacidad suficiente.
Hacé una consulta a la base de datos para saber cuál es el archivo con menor peso en bytes.
Ingresá el número que obtuviste.
*/
select min(bytes) from canciones;

/*
Se acerca el gerente de Marketing y nos comenta que buscan analizar las facturas que Ingresos está generando por cada país, 
PERO le interesa los países que hayan generado un total superior a 100.
Ingresá el país correspondiente al segundo registro de la respuesta a la consulta.
TIP: debes utilizar el GROUP BY, el SUM y HAVING para llegar a esta respuesta. Recordá ingresar el país con la primera letra en mayúscula y sin tildes.
*/
select sum(total), pais_de_facturacion from facturas group by pais_de_facturacion having sum(total) > 100;

/*
Es por esto que nos piden un informe donde mostremos, por ciudad, cuántos clientes hay, 
pero solo contando las ciudades que tengan 2 o más clientes (sabemos que suena poco, pero en estos momentos para la empresa es un montón).
Ingresá la ciudad correspondiente al primer registro de la respuesta a tu consulta.
TIP: debes utilizar el GROUP BY, el COUNT y HAVING para llegar a esta respuesta. Recordá ingresar la ciudad con la primera letra en mayúscula y sin tildes.
*/
select ciudad, count(*) as cantidad from clientes group by ciudad having cantidad >=2 order by ciudad;
/*
En musimundos estamos muy atentos a que nuestros usuarios encuentren una cantidad apropiada de canciones del estilo que quieran escuchar, 
es por eso que en esta oportunidad nos están solicitando una lista de cuantas canciones tenemos por género. 
Hacé una consulta a la base de datos que traiga el nombre del género y la cantidad de canciones que posee.
ingresá el número que te dio como resultado las canciones de género Blues.
*/
select generos.nombre, count(generos.nombre) from canciones
inner join generos on id_genero = generos.id
group by generos.nombre;

/*
colocando al pie de cada álbum el promedio de duración de cada álbum. 
Tomemos como ejemplo a la banda AC/DC y consulta a la base de datos el álbum 'Let There Be Rock' , lista sus canciones , 
su duración y saca un promedio de duracion de las mismas. 
insertá el número que obtuviste 
*/
select c.nombre, c.milisegundos from canciones as c, albumes as a where a.titulo = 'Let There Be Rock';

select avg(milisegundos), titulo from albumes
inner join canciones on albumes.id = canciones.id_album group by titulo having titulo = 'Let There Be Rock';

/*
En el salón de Musimundos, estamos ofreciendo una promoción para los clientes regulares donde regalamos un 20% de descuento 
en su compra si alguna vez el cliente hizo una compra con un total de más de 12. El cliente número 48 acaba de entrar 
por la puerta y el vendedor quiere corroborar si el descuento se aplica.
Hacé una consulta a la base de datos que nos traiga el total de la factura más cara que tenga el cliente número 48.
Insertá el número que obtuviste.
*/