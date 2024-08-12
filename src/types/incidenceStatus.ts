export type IncidenceStatus = {
  id: string;
  name: string;
  closed: boolean;
  pos: number;
  softLimit: string;
  idBoard: string;
  subscribed: boolean;
  limits: Limits;
};

export type Limits = {
  attachments: Attachments;
};

export type Attachments = {
  perBoard: PerBoard;
};

export type PerBoard = {};
