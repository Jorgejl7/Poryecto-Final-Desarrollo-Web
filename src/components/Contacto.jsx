


const Contacto = () => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-5 mx-auto" style={{ border: 'solid 1px white', padding: 40, borderRadius: 55 }}>
          <h2 className="text-white"> Contacto</h2>
          <div className="form-group">
            <div className="form-group mt-4">
              <label htmlFor="" className="text-white"> <b>Nombre</b></label>
              <input type="text" className="form-control mt-2" placeholder="Nombre" />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="" className="text-white"> <b>Correo</b></label>
              <input type="text" className="form-control mt-2" placeholder="example@gmail.com" />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="" className="text-white"><b>Mensaje</b></label>
              <textarea style={{ border: 'none', borderRadius: 8 }} cols="62" rows="6" placeholder="Hola, ¿Como estas? ..." className="mt-2"></textarea>
            </div>
            <button className="btn  btn-red mt-2">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
