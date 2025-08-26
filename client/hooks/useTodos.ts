import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction
} from '@tanstack/react-query'

import { getTodos, addTodo, deleteTodo } from '../apis/todos'

export function useTodos() {
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  return {
    ...query
  }
}

export function useTodosMutation (
  mutationFn: MutationFunction,
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