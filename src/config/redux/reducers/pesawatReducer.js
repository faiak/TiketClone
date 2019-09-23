
import * as types from '../actions/types';

const initialState = {
    airportFrom: 'Jakarta',
    airportTo: 'Bali-Denpasar',
    airportFromCode: 'JKTC',
    airportToCode: 'DPS',
    departedType: 'CITY',
    arrivedType: 'AIRPORT',
    dateGo: '2019-09-23',
    dateBack: '',
    penumpangDewasa: 1,
    penumpangAnak: 0,
    penumpangBayi: 0,
    cabinClass: 'ECONOMY',
    cabinClassCode: 1
};

const pesawatReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STATE:

            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default pesawatReducer;
