import { vehicles } from '../data/vehicles';

export const getVehicleById = ( idv ) => {

    return vehicles.find( vehicle => vehicle.idv === idv );

}
