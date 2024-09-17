
use movies_db;

/*
Micro desafío - Paso 1:
Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el
nombre del género de todas las series de la base de datos. 
Por otro, necesitamos listar los
títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada
uno de ellos.
*/

select s.title, g.name 
	from series as s
    inner join genres as g on g.id = s.genre_id;

select e.title, a.first_name, a.last_name
	from episodes as e
    inner join actor_episode as AE on e.id = AE.episode_id
    inner join actors as a on a.id = AE.actor_id;
    
/*
Micro desafío - Paso 2:
Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz.
*/
select distinct a.first_name, a.last_name 
	from actors as a 
    inner join actor_movie on a.id = actor_movie.actor_id
    inner join movies as m on m.id = actor_movie.movie_id
    where m.title like "%guerra%";

/*
Micro desafío - Paso 3:
Debemos listar los títulos de cada película con su género correspondiente. En el caso de
que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
Podemos encontrar más información haciendo click acá.
*/

select m.title, coalesce(g.name, "no tiene genero")
	from movies as m
    left join genres as g on m.genre_id = g.id;
    
/*
Micro desafío - Paso 4:
Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con
la particularidad de que a la columna que mostrará dicha cantidad la renombraremos:
“Duración”. Por ejemplo:
*/
select s.title, datediff(end_date, release_date) as "Duracion" 
	from series as s;

/*
Micro desafío - Paso 5:
Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.
Debemos mostrar la cantidad total de los episodios guardados en la base de datos.
Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total
de temporadas que tiene cada una de ellas.
Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.
*/
-- Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.
select a.first_name, a.last_name
	from actors as a
    where length(a.first_name) > 6
    order by a.first_name;
-- Debemos mostrar la cantidad total de los episodios guardados en la base de datos.
select count(id) as "cantidad de episodios"
	from episodes;
    
select count(title) as "cantidad de episodios"
	from episodes;
-- Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total de temporadas que tiene cada una de ellas.
select s.title, count(t.id) 
	from series as s
    inner join seasons as t on s.id = t.serie_id
    group by s.title;
-- Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor o igual a 3.
select g.name, count(m.id)
	from genres as g
    inner join movies as m on m.genre_id = g.id
    group by g.name
    having count(m.id) >= 3;