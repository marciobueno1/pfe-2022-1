import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

let instance = axios.create({
  headers: {
    common: {
      // can be common or any other method
      "X-Parse-Application-Id": "CQWId7FktRXCLmxy9jrhttsAAEPRAPKIQVYff8Z0",
      "X-Parse-REST-API-Key": "tzGsObG6ozWRuNdLmaQFSciyGM13ZmqUxv2OHTlx",
    },
  },
});

export function useTarefas() {
  return useQuery("tarefas", async () => {
    const { data } = await instance.get(
      "https://parseapi.back4app.com/classes/Tarefa"
    );
    return data.results;
  });
}

export function useAddTarefa() {
  const queryClient = useQueryClient();
  return useMutation(
    (novaTarefa) => {
      return instance.post(
        "https://parseapi.back4app.com/classes/Tarefa",
        novaTarefa
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tarefas");
      },
    }
  );
}

export function useRemoveTarefa() {
  return useMutation((objectID) => {
    return instance.delete(
      `https://parseapi.back4app.com/classes/Tarefa/${objectID}`
    );
  });
}
