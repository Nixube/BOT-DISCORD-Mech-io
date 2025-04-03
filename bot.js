const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('¡Bot está en línea!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // Evita que el bot responda a sí mismo

    const content = message.content.toLowerCase(); // Convierte el mensaje a minúsculas

    if (content === '!hola') {
        message.reply('¡Hola! ¿Cómo estás?');
    } else if (content === '!webs') {
        message.reply('Opciones disponibles:\n1. TFG Nixube: https://tcgtournaments.hopto.org/\n2. Portfolio Nixube: https://nixube.hopto.org/\n3. GitHub Nixube: https://github.com/Nixube');
    } else if (content === '!dado') {
        const dado = Math.floor(Math.random() * 20) + 1;
        message.reply(`🎲 Has sacado un ${dado}`);
    } else if (content === '!si') {
        message.reply('¡No!');
    } else if (content === '!gay') {
        const porcentaje = Math.floor(Math.random() * 101);
        message.reply(`🏳️‍🌈 Eres un ${porcentaje}% gay`);
    } else if (content === '!comandos') {
        message.reply('Comandos disponibles:\n!hola - Saluda al bot\n!webs - Muestra enlaces útiles\n!dado - Lanza un dado de 20 caras\n!si - ¿Si?\n!gay - ¿Esto es ciencia pura?\n!comandos - Muestra esta lista de comandos\n!pitilin - Muestra tu enorme trompa');
    } else if (content === '!pitilin') {
        // Generar un número aleatorio entre 1 y 22 (en cm) como entero
        const pitilin = Math.floor(Math.random() * (22 - 1 + 1)) + 1; // Rango entre 1 y 22 cm, sin decimales

        // Construir la cadena "8=" y agregar "=" por cada 2 (ahora en cm)
        let pitilinString = "8=";
        const cantidadDeIguales = Math.floor(pitilin / 2); // Cada 2 cm agregamos un "="
        pitilinString += "=".repeat(cantidadDeIguales);

        message.reply(`El pitilín mide ${pitilin} cm y es: ${pitilinString}D`);
    }
});


// Inicia el bot con el token
client.login('Token-id');
