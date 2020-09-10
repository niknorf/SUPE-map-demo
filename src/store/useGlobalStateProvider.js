import { useReducer } from 'react';

const reducer = (state, action) => {

	switch (action.type) {
		case "FILTERCOMPONENT":
			return {
				bi_value: action.bi_value,
				isPhantomic: action.isPhantomic,
				bg_index_array: action.bg_index_array,
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
		bg_index_array: [],
		isOpenSidebar: false,
		markerValue: []
	});

	return { globalState, globalDispach };
}
export default useGlobalState;
