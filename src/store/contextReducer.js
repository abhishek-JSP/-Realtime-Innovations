
const contextReducer = (state, { type, payload }) => {
    console.log("======= payload", payload);
    switch (type) {
        case "ADD":
            if(payload.endDate){
                return {
                    ...state,
                    previousEmployees: [...state.previousEmployees, payload]
                }
            } else {
                return {
                    ...state,
                    currentEmployees: [...state.currentEmployees, payload]
                }
            }
        case "EDIT":
            console.log("========= payload for edit", payload, state.currentEmployees.filter(ele => ele.id === payload.id));
            if(state.currentEmployees.find(ele => ele.id === payload.id)){
                return {
                    ...state,
                    currentEmployees: state.currentEmployees.map(ele => {
                        if(ele.id === payload.id){
                            return {
                                ...ele,
                                name: payload.name,
                                position: payload.position,
                                endDate: payload.endDate,
                            }
                        }
                        return ele
                    })
                }
            } else {
                return {
                    ...state,
                    previousEmployees: state.previousEmployees.map(ele => {
                        if(ele.id === payload.id){
                            return {
                                ...ele,
                                name: payload.name,
                                position: payload.position,
                                endDate: payload.endDate,
                            }
                        }
                        return ele
                    })
                }
            }
            // if(payload.endDate){
            //     return {
            //         ...state,
            //         previousEmployees: [...state.previousEmployees, payload]
            //     }
            // } else {
            //     return {
            //         ...state,
            //         currentEmployees: [...state.currentEmployees, payload]
            //     }
            // }
        case "REMOVE":
            const filteredArr = (arr) => {
                const filteredArr = arr.filter(ele => {
                    return ele.id !== payload.id
                })
                return filteredArr;
            }
            if(payload.endDate) {
                return {
                    ...state,
                    previousEmployees: filteredArr(state.previousEmployees)
                }
            } else {
                return {
                    ...state,
                    currentEmployees: filteredArr(state.currentEmployees)
                }
            }
    }
}

export default contextReducer;