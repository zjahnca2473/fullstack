// Script de un solo uso: ejecuta database.sql contra la base de datos de Railway
// Uso: node run-sql.js
// Después de correrlo, puedes borrar este archivo.

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const connectionString = 'postgresql://postgres:PYbrLVmENsfXnniiXqsyJiioIbbwsyos@turntable.proxy.rlwy.net:43474/railway';

const sql = fs.readFileSync(path.join(__dirname, 'database.sql'), 'utf8');

const client = new Client({ connectionString });

(async () => {
  try {
    await client.connect();
    console.log('Conectado. Ejecutando database.sql...');
    await client.query(sql);
    console.log('✅ Listo. Tablas creadas correctamente.');
  } catch (err) {
    console.error('❌ Error ejecutando el SQL:', err.message);
  } finally {
    await client.end();
  }
})();