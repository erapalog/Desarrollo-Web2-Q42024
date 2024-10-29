-- Active: 1705366816117@@localhost@5432@desarrollo_web_2t
create DATABASE Desarrollo_web_2t

Create Table tbl_Contacto
(
    id SERIAL PRIMARY KEY ,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    descripcion VARCHAR(2000)
    
);







SELECT * from tbl_Contacto

Delete From tbl_Contacto

--DELETE FROM tbl_accesorios WHERE accesorio_id = '14'; para algo especifico 


drop Table tbl_Contacto