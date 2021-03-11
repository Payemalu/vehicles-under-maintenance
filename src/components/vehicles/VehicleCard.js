import React from 'react';
import { Link } from 'react-router-dom';

export const VehicleCard = ({
  description,
  model,
  estimatedate,
  id,
  idv,
  km,
}) => {

  return (
    <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={ `./assets/vehicles/${ idv }.jpg` } className="card-img" alt={ model } />
        </div>
        <div className="col-md-8">

          <div className="card-body">
            <h5 className="card-title"> { model } </h5>
            <p className="card-text"> { description } </p>
            {
              ( description !== model )
              && <p className="card-text"> { model } </p>
            }
            <p className="card-text">
              <small className="text-muted"> { estimatedate } </small>
            </p>

            <Link to={ `./vehicle/${ idv }` }>
              Más...
            </Link>
          </div>

        </div>
      </div>
    </div>
  )

}
