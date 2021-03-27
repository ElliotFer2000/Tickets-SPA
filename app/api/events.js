function events(database) {

    return Object.freeze({
        createEvent
    });

    async function createEvent(businessName, date, time, accessCode, pricePerTicket, depositeCode) {
        
        return true
    }
}


/**
 *
 * Para crear un evento ¿Que requisitos del negocio se deben cumplir?
 *
 * 1. Haber depositado en un numero de cuenta
 * 2. Yo tengo que ser notificado de ese deposito para registrarlo en el sistema
 * 3. El cliente introduce el codigo de deposito
 * 4. se verifica que hay un numero de deposito con un deposito de 7 dolares registrado en el sistema
 * 5. Se crea el evento.
 *
 */