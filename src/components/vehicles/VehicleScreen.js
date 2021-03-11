import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getVehiclesById } from '../../selectors/getVehiclesById';

export const VehicleScreen = ({ history }) => {

  const { vehiculoId } = useParams();

  const vehicle = useMemo(() => getVehicleById( vehiculoId ), [ vehiculoId ]);

  if ( !vehicle ) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {

    if( history.length <=2 ) {
      history.push('/');
    } else {
      history.goBack();
    }

  }

  const {
    description,
    make,
    model,
    estimatedate,
    km,
  } = vehicle;

  return (
    <div className="row mt-5">
      <div className="col-4">
                <img
                    src={ `../assets/autos/${ vehiculoId }.jpg` }
                    alt={ model }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { model } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Descripción: </b> { description } </li>
                    <li className="list-group-item"> <b> Marca: </b> { make } </li>
                    <li className="list-group-item"> <b> Día estimado: </b> { estimatedate } </li>
                </ul>

                <h5> model </h5>
                <p> { model } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
