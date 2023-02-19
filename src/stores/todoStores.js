import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useTodosStore = create(
  persist(
    (set, get) => ({
      todos: [
        {
          id: 0,
          title: 'Groceries',
          todos: [
            {
              id: 0,
              title: 'Tomato'
            },
            {
              id: 0,
              title: 'Broccoli'
            }
          ]
        }
      ],
      addTodos: (todo) => set({ todos: [...get().todos, todo] }),
    }),
    {
      name: 'todos',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)