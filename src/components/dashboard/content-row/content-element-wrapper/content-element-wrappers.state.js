import {assign, Machine} from 'xstate';
import {module} from "../../../../lib/api";

export default Machine(
    {
        id: 'content-element-wrapper',
        initial: 'loading',
        states: {
            loading: {
                invoke: {
                    id: 'loadAPIData',
                    src: (context) => module(context.module),
                    onDone: {
                        target: 'loaded',
                        actions: assign({data: (context, event) => event.data.data})
                    },
                    onError: {
                        target: 'error',
                        actions: assign({errorMessage: (context, event) => event.data.message})
                    },
                }
            },
            loaded: {
                on: {
                    RELOAD: 'loading',
                    ERROR: {
                        target: 'error',
                        actions: assign({errorMessage: (context, event) => event.data.message})
                    }
                }
            },
            error: {
                on: {
                    RELOAD: 'loading'
                }
            }
        },
        context: {
            module: '',
            data: undefined,
            errorMessage: undefined
        }
    },
    {}
)
