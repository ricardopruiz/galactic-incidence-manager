import { Incidence } from "@/types/incidence";
import { IncidenceStatus } from "@/types/incidenceStatus";

const BASE_URL = "https://api.trello.com/1";
const boardId = process.env.NEXT_PUBLIC_BOARD_ID;

type IncidenceData = {
  name: string;
  desc: string;
  priorityId: string;
  statusId: string;
};

const getParams = (params?: Record<string, string | undefined>) => {
  const API_KEY = process.env.NEXT_PUBLIC_TRELLO_API_KEY;
  const API_TOKEN = process.env.NEXT_PUBLIC_TELLO_TOKEN;

  const filteredParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([, value]) => value !== undefined && value !== ""
        )
      )
    : {};

  return new URLSearchParams({
    key: API_KEY!,
    token: API_TOKEN!,
    ...filteredParams,
  }).toString();
};

export const fetchIncidences = (): Promise<Incidence[]> => {
  const urlWithParams = `${BASE_URL}/boards/${boardId}/cards?${getParams()}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
    next: {
      tags: ["incidence-list"],
    },
  }).then((response) => response.json());
};

export const fetchStatusesList = (): Promise<IncidenceStatus[]> => {
  const urlWithParams = `${BASE_URL}/boards/${boardId}/lists?${getParams()}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
    next: {
      tags: ["incidence-list"],
    },
  }).then((response) => response.json());
};

export const updateIncidenceStatus = (cardId: string, statusId: string) => {
  const urlWithParams = `${BASE_URL}/cards/${cardId}?${getParams({
    idList: statusId,
  })}`;

  return fetch(urlWithParams, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const fetchIncidence = (id: string): Promise<Incidence> => {
  const urlWithParams = `${BASE_URL}/cards/${id}?${getParams()}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  }).then((response) => response.json());
};

export const postNewIncidence = ({
  name,
  desc,
  priorityId,
  statusId,
}: IncidenceData) => {
  const urlWithParams = `${BASE_URL}/cards/?${getParams({
    name,
    desc,
    idLabels: priorityId,
    idList: statusId,
    pos: "top",
  })}`;

  return fetch(urlWithParams, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const updateIncidence = (
  id: string,
  { name, desc, priorityId, statusId }: IncidenceData
) => {
  const urlWithParams = `${BASE_URL}/cards/${id}?${getParams({
    name,
    desc,
    idLabels: priorityId,
    idList: statusId,
    pos: "top",
  })}`;

  return fetch(urlWithParams, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const deleteIncidence = (id: string) => {
  const urlWithParams = `${BASE_URL}/cards/${id}?${getParams({})}`;

  return fetch(urlWithParams, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};
