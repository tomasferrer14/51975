grammar Analizador;

// Reglas sintácticas 
programa      : (declaracion | asignacion)+ ;
declaracion   : ('Definir' | 'Declarar') ID (',' ID)* 'como' tipo ';' ;
asignacion    : ID '=' expresion ';' ;
expresion     : termino (('+' | '-') termino)* ;
termino       : factor (('*' | '/') factor)* ;
factor        : '(' expresion ')' | ID | NUMERO ;
tipo          : 'Entero' | 'Real' | 'Cadena' | 'Booleano' ;

// Reglas léxicas (en MAYÚSCULA)
ID      : [a-zA-Z] [a-zA-Z0-9_]* ;
NUMERO  : '-'? [0-9]+ ;
WS      : [ \t\r\n]+ -> skip ; 