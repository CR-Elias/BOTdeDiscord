// archivo Index.js
const {Client, Events, Message} = require("discord.js");

//crear nuevo cliente de discord
const client = new Client ({
    intents: 53608447
});

const respuestas = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

const boss = [
    "Recaptura en ruta",
    "Revive un pokemon",
    "Usa una capsula habilidad",
    "Nada de nada",
    "Ten 5 Restaurar Todo",
    "Puedes cambiar la naturaleza (o otra capsula si no)"
];

//creando nuestro primer evento
client.on(Events.ClientReady, async () =>{
    console.log(`Conectado como ${client.user.username}!`)
});

// respuestas a mensajes
client.on(Events.MessageCreate, async(message) => {

    if(message.author.bot) return; // si el autor del mensaje es un bot nos retiramos

    if(message.content ==="Ruta"|| message.content ==="ruta")
        (message.reply(respuestas[Math.floor(Math.random() * respuestas.length)]))

    if(message.content ==="Boss"|| message.content ==="boss")
        (message.reply(boss[Math.floor(Math.random() * boss.length)]))

    if(message.content ==="Lvl"|| message.content ==="lvl")
        (message.reply("Introduzca valor de la region"))

    if(message.content === "Lvl ROZA"||message.content === "Lvl roza"||message.content === "lvl ROZA"||message.content === "lvl roza")
        (message.reply("Gym 1: Lvl 14 - Petra Ciudad Férrica\nGym 2: Lvl 16 - Marcial Pueblo Azuliza\nGym 3: Lvl 21 - Erico Ciudad Malvalona\nGym 4: Lvl 28 - Candela Pueblo Lavacalda\nGym 5: Lvl 30 - Norman Ciudad Petalia\nGym 6: Lvl 35 - Alana Ciudad Arborada\nGym 7: Lvl 45 - Vito y Leti Ciudad Algaria\nGym 8: Lvl 46 - Plubio Ciudad Arrecípolis"))
});

// conectar como cliente a nuestra aplicacion de discord
client.login("")