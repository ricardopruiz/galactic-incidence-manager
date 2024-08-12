const BASE_URL = "https://api.trello.com/1/";

type ParamsProps = { params?: Record<string, string | undefined> };

const getParams = ({ params }: ParamsProps) => {
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

export const requestTrelloBoard = (
  id: string,
  typeOfData: "cards" | "lists",
  params: Record<string, string | undefined>
) => {
  const urlWithParams = `${BASE_URL}boards/${id}/${typeOfData}?${getParams(
    params
  )}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  }).then((response) => response.json());
};

export const requestChangeListCard = (
  cardId: string,
  params: Record<string, string | undefined>
) => {
  const urlWithParams = `${BASE_URL}cards/${cardId}?${getParams({ params })}`;

  return fetch(urlWithParams, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const requestGetCard = (id: string) => {
  const urlWithParams = `${BASE_URL}cards/${id}?${getParams({})}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  }).then((response) => response.json());
};

export const requestNewCard = (params: Record<string, string | undefined>) => {
  const urlWithParams = `${BASE_URL}cards/?${getParams({ params })}`;

  return fetch(urlWithParams, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const requestEditCard = (
  id: string,
  params: Record<string, string | undefined>
) => {
  const urlWithParams = `${BASE_URL}cards/${id}?${getParams({ params })}`;

  return fetch(urlWithParams, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};

export const requestDeleteCard = (id: string) => {
  const urlWithParams = `${BASE_URL}cards/${id}?${getParams({})}`;

  return fetch(urlWithParams, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    cache: "no-store",
  });
};
