import { useReducer } from 'react';

const reducer = (state, action) => {

	switch (action.type) {
		case "FILTERCOMPONENT":
			return {
				bi_value: action.bi_value,
				isPhantomic: action.isPhantomic,
				isInPSK: action.isInPSK,
				data_for_item_not_found: action.data_for_item_not_found,
				balance_index: action.balance_index,
				isClean: action.isClean,
				objSelected: action.objSelected,
				building_address: action.building_address,
				obj_from: action.obj_from,
				balance_index_array: action.balance_index_array,
				zoom_level: action.zoom_level,
				position: action.position,
			};
			break;
			case "BUBD":
			return{
				isOpenSidebar: action.isOpenSidebar,
				markerValue:	action.markerValue
			}
      default: {
			return state;
		}
	}
};

const useGlobalState = () => {
	const [globalState, globalDispach] = useReducer(reducer, {
		bi_value: '',
		isPhantomic: false,
		balance_index_array: [],
		balance_index: '',
		zoom_level: 16,
		position: [60.04506711185432, 30.39647037897212],
		isClean: '',
		obj_from: '',
		objSelected: false,
		data_for_item_not_found: false,
		isInPSK: false,
		isOpenSidebar: false,
		building_address: "",
		markerValue: []
	});

	return { globalState, globalDispach };
}
export default useGlobalState;
