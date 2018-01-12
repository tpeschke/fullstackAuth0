-- sim3 107E

update users
set first_name = $1, last_name = $2
where id = $3;

select * from users
where id = $3