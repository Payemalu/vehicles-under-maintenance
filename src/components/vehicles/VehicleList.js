import React, { useMemo } from 'react';
import { getVehiclesByMake } from '../../selectors/getVehiclesByMake';
import { VehicleCard } from './VehicleCard';

export const VehicleList = ({ make }) => {

    const vehicles = useMemo(() => getVehiclesByMake(make), [make]);

    return (
		<div className = "card-columns animate__animated animate__fadeIn">
			{
				vehicles.map(vehicle => ( <VehicleCard key = { vehicle.idv } {...vehicle } /> ))
			}
		</div>
    )
}
