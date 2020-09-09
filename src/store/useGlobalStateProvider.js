import  { useReducer} from 'react';

const reducer = (state, action) => {

  switch(action.type){
    case "FILTERCOMPONENT":
console.log(action.data);
    return {
      notTp: action.data
    };
    break;
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispach] = useReducer(reducer, {
    notTp: ''
  });

  return {globalState, globalDispach};
}
export default useGlobalState;
