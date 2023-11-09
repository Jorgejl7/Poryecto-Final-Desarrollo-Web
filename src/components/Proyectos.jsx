
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <div>
      <div className="row mt-4">
        <h2 className="text-white text-center mx-auto" >Proyectos</h2>
        <div className="card mb-3 mx-auto mt-4" style={{ width: '590px' }}>
          <div className="row g-0 mx-auto">
            <div className="col-md-4 mx-auto">
              <img src="https://blog.tiraquelibras.com/wp-content/uploads/2019/08/Flask.png" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pagina Dinamica con Flask</h5>
                <p className="card-text">
                  Este proyecto consta de una pagina estatica para manejo de productos utilizando flask python
                </p>
                <Link to="https://github.com/Jorgejl7/Tecnology-Flask" className="btn btn-red">Visitar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card mb-3 mx-auto mt-4" style={{ width: '590px' }}>
          <div className="row g-0 mx-auto">
            <div className="col-md-4 mx-auto">
              <img src="https://raw.githubusercontent.com/Olivers11/Images/master/Iglesias_foto.png" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">ChurchApp</h5>
                <p className="card-text">
                  Esta es una aplicacion de la Iglesia Adventista, para geolocalizar Iglesias mas cercanas a ti
                </p>
                <Link className="btn btn-red" to="https://github.com/Olstertecn11/ChurchApp">Visitar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card mb-3 mx-auto mt-4" style={{ width: '590px' }}>
          <div className="row g-0 mx-auto">
            <div className="col-md-4 mx-auto">
              <img src="https://lh6.googleusercontent.com/ZxyfulJwn8L_adFi8_qzfEu_UCNwT57JnWcYLFCmQOWfWjEku_s_ICI_zXa0hd_OdqA2Mj-nrHdp2wR-emI8d4K20CpSV61j1TNKR4rfQtDqKJNDb9ZT-ZcggIRsITK6il3g9aQN" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sensor temperatura Arduino</h5>
                <p className="card-text">
                  programa hecho en arduino para poder medir la temperatura y mostrarla en tiempo real utilizando Python y Arduino
                </p>
                <Link className="btn btn-red" to="https://github.com/Jorgejl7/Laboratorio4sensor-de-temperatura">Visitar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Proyectos;
