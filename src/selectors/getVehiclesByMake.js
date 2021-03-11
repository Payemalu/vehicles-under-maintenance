import { vehicles } from '../data/vehicles';

export const getVehiclesByMake = ( make ) => {

    const validMakes = ['Chevrolet', 'Honda', 'Nissan', 'Volkswagen'];

    if ( !validMakes.includes( make ) ) {
        throw new Error(`Make "${ make }" no es correcto`);
    }

    return vehicles.filter( vehicle => vehicle.make === make );

}
