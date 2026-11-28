import { createContext, useContext, useReducer, type ReactNode } from "react";

const initialState = {
  data: [{ id: 1, name: "Ahmad", status: false }],
};

type Action =
  | { key: "delete"; value: number }
  | { key: "edit" | "add"; value: (typeof initialState.data)[number] };

function reducer(state: typeof initialState, action: Action) {
  if (action.key == "delete") {
    return { ...state, data: state.data.filter((e) => e.id != action.value) };
  }

  if (action.key == "edit") {
    return {
      ...state,data: state.data.map((e) => e.id == action.value.id ? action.value : e)
    }
  }

  if (action.key == "add") {
    return { ...state, data: [...state.data, action.value] };
  }
  return state
}

const TodoContext = createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
} | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext)!;
}