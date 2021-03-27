import React from "react"
import BackgroundTicketGroup from "../components/background-ticket-group"
import LandingNav from "../components/landing-nav"
import LandingFooter from "../components/landing-footer"

function Price(props) {
  return (
    <>
      <LandingNav />
      <h1 className="container important-heading">Sobre el pago por uso</h1>

      <section className="container price-planner">
        <h1>Si eres el planificador del evento</h1>

        <p>
          Debes pagar 7 dólares americanos por evento creado, puedes crear una cuenta
          de usuario en cualquier momento pero para crear un evento deberas pagar la cuota antes mencionada. El dinero debes pagarlo por transferencia bancaria al numero de cuenta 00000000.
        </p>

        <p>
          Luego de depositar el pago, seremos notificados de ello y activaremos la posibilidad de que puedas crear un evento, al crear un evento
          se te va a entregar el codigo QR de acceso, que los asistentes de tu evento podran analizar con su smartphone el dia
          del evento, para poder entrar al evento que has organizado. el codigo QR lo podras descargar e imprimir para usarlo
          el dia del evento, puedes descargarlo las veces que quieras e imprimirlo las veces que quieras.
        </p>

        <p>
          El dinero pagado por las personas que compraran boletos para tu evento, sera recibido por nosotros y sera depositado
          a la cuenta bancaria que hayas registrado en la cuenta de usuario que hayas creado en la aplicacion.
        </p>
      </section>

      <section className="container price-assistant">
        <h1>Si eres una persona que quiere comprar un boleto</h1>

        <p>
          Para comprar boletos solo debes hacer una transferencia al numero de cuenta 0000000. el monto a pagar
          va a depender de cuantos boletos va a comprar y el precio del boleto que ha fijado el anfitrion del evento.
        </p>
        <p>
          Cuando realices el pago, introduce el numero de transferencia bancaria que se te solicitara al hacer click en el boton
          "ADQUIRIR ASISTENCIA".
        </p>
        <p>
          Luego de este paso el proceso de pago habra finalizado, veras la compra de tus boletos reflejada en la aplicacion en cuestion
          de un par de minutos.
        </p>
      </section>
      <LandingFooter/>

    </>
  )
}

export default Price;