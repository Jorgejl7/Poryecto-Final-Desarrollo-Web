

import './css/Inicio.css';


const Inicio = () => {

  return (
    <div>
      <div className="row inicio-container" >
        <div className="col-md-5 mx-auto">
          <div className="card card-inicio">
            <img src="https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/347002309_1299759800612054_9136620021319802590_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aMvqdTaZKigAX_OiPTu&_nc_ht=scontent.fgua3-3.fna&cb_e2o_trans=q&oh=00_AfALRDYkXGGInoVzY6xzxmxBio4eN8cQhorqSOzisAy6Mw&oe=6551E8CB" className='img-inicio' />
            <h2 className='text-center title-inicio'>Jorge <b>Elmar</b></h2>
            <p className='text-white' >
              Soy una persona apasionada por el fútbol, disfruto viendo partidos y siguiendo a mi equipo favorito. Me encanta la emoción de los juegos y la camaradería que el deporte puede generar.

              Además, soy un entusiasta de la programación. Me siento atraído por la resolución de problemas y la creación de soluciones a través del código.
            </p>
            <button className='btn' >Contáctame</button>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Inicio;
