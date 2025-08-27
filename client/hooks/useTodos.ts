import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction
} from '@tanstack/react-query'

import { getTodos, addTodo, deleteTodo, updateTodo } from '../apis/todos'


export function useTodos() {
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  return {
    ...query
  }
}

export function useTodosMutation<TData = unknown, TVariables = unknown> (
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })
  return mutation
}

export function useAddTodo() {
  return useTodosMutation(addTodo)
}

export function useDeleteTodo() {
  return useTodosMutation(deleteTodo)
}

export function useUpdateTodo() {
  return useTodosMutation(updateTodo)
}