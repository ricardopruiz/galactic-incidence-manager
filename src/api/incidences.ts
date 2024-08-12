import { IncidenceStatus } from "@/types/incidenceStatus";
import {
  requestChangeListCard,
  requestEditCard,
  requestNewCard,
  requestTrelloBoard,
} from "./trelloApi";
import { Incidence } from "@/types/incidence";
import { RequestIncidence } from "@/types/requestIncidence";

const boardId = process.env.NEXT_PUBLIC_BOARD_ID;

export const getIncidences = () => {
  return requestTrelloBoard(boardId!, "cards", {}).then(
    (data) => data as Incidence[]
  );
};

export const getIncidenceStatusLists = () => {
  return requestTrelloBoard(boardId!, "lists", {}).then(
    (data) => data as IncidenceStatus[]
  );
};

export const changeIncidenceStatus = (
  incidenceId: string,
  statusId: string
) => {
  return requestChangeListCard(incidenceId, { idList: statusId });
};

export const createNewIncidence = (
  name: string,
  desc: string,
  priorityId: string,
  statusId: string
) => {
  const params: RequestIncidence = {
    name,
    desc,
    idList: statusId,
    idLabels: priorityId,
    pos: "top",
  };

  return requestNewCard(params);
};

export const editIncidence = (
  id: string,
  name: string,
  desc: string,
  priorityId: string,
  statusId: string
) => {
  const params: RequestIncidence = {
    name,
    desc,
    idList: statusId,
    idLabels: priorityId,
    pos: "top",
  };

  return requestEditCard(id, params);
};
