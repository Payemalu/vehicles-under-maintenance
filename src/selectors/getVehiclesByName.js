import { vehicles } from '../data/vehicles';


export const getVehiclesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return vehicles.filter( vehicle => vehicle.model.toLocaleLowerCase().includes( name )  );

}
