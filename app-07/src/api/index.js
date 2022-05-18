import axios from "axios";
import { useQuery, useMutation } from "react-query";

/*
curl -X GET \
-H "X-Parse-Application-Id: CQWId7FktRXCLmxy9jrhttsAAEPRAPKIQVYff8Z0" \
-H "X-Parse-REST-API-Key: tzGsObG6ozWRuNdLmaQFSciyGM13ZmqUxv2OHTlx" \
-G \
--data-urlencode "where={ \"descricao\":\"A string\",\"concluida\":true }" \
https://parseapi.back4app.com/classes/Tarefa
*/

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

export function useMutateTarefa() {
  return useMutation((novaTarefa) => {
    return instance.post(
      "https://parseapi.back4app.com/classes/Tarefa",
      novaTarefa
    );
  });
}
