import { RECEIVE_POLLS, ADD_POLL} from "../actions/polls"
import { ADD_ANSWER} from "../actions/answers"
import authedUser from "./auhedUsers";


export default function polls (state={}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            }
        case ADD_POLL :
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        case ADD_ANSWER :
            const { answer, id, authedUser } = action
            const poll = state[id]
            const voteKey = answer + 'Votes'
            return {
                ...state,
                [action.id]: {
                    ...poll,
                    [voteKey]: poll[voteKey].concat([authedUser])
                }
            }


        default:
            return state
    }
}