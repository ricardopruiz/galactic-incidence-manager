export type Incidence = {
  id: string;
  badges: Badges;
  checkItemStates: any[];
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: Date | string;
  desc: string;
  descData: DescData;
  due: null;
  dueReminder: null;
  email: null;
  idBoard: string;
  idChecklists: any[];
  idList: string;
  idMembers: any[];
  idMembersVoted: any[];
  idShort: number;
  idAttachmentCover: null;
  labels: Label[];
  idLabels: string[];
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortURL?: string;
  shortUrl?: string;
  start: null;
  subscribed: boolean;
  url: string;
  cover: Cover;
  isTemplate: boolean;
  cardRole: null;
};

export type Badges = {
  attachmentsByType: AttachmentsByType;
  externalSource: null;
  location: boolean;
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  attachments: number;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  checkItemsEarliestDue: null;
  comments: number;
  description: boolean;
  due: null;
  dueComplete: boolean;
  lastUpdatedByAi: boolean;
  start: null;
};

export type AttachmentsByType = {
  trello: Trello;
};

export type Trello = {
  board: number;
  card: number;
};

export type Cover = {
  idAttachment: null;
  color: null;
  idUploadedBackground: null;
  size: string;
  brightness: string;
  idPlugin: null;
};

export type DescData = {
  emoji: {};
};

export type Label = {
  id: string;
  idBoard: string;
  name: "ALTA" | "BAJA" | "CRÍTICA" | "MEDIA";
  color: "blue" | "orange" | "red" | "yellow";
  uses: number;
};
