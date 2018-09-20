create table books(
    id int not null auto_increment primary key,
    isbn varchar(20) not null default '123',
    openid varchar(50) not null default '123',
    title varchar(100) default '123',
    image varchar(100) default '123',
    alt varchar(100) not null default '123',
    publisher varchar(100) not null default '123',
    summary varchar(1000) not null default '123',
    price varchar(100) default '123',
    rate float default '123',
    tags varchar(100) default '123',
    author varchar(100) default '123'
)ENGINE=InnoDB DEFAULT CHARSET=utf8