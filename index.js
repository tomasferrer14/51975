import antlr4 from 'antlr4';
import AnalizadorLexer from './generated/AnalizadorLexer.js';
import AnalizadorParser from './generated/AnalizadorParser.js';
import fs from 'fs';

// Cambiamos a entrada1.txt que es el que tenés abierto
const input = fs.readFileSync('entrada1.txt', 'utf-8');
const chars = new antlr4.InputStream(input);
const lexer = new AnalizadorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AnalizadorParser(tokens);

// Esto hará que el programa sea más "parlanchín" si hay errores
parser.removeErrorListeners();
parser.addErrorListeners({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
        console.log(`❌ Error en Línea ${line}:${column} - ${msg}`);
    }
});

const tree = parser.programa();

if (parser.syntaxErrorsCount === 0) {
    console.log("✅ ¡Éxito! El análisis sintáctico es correcto.");
} else {
    console.log(`\nTotal de errores encontrados: ${parser.syntaxErrorsCount}`);
}