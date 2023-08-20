export interface CustomerCommunicationHistory {
  userId: number;
  timestamp: string;
  id: string;
  type: string;
  domain: string;
  direction: string;
  from_num: string;
  text: string;
  fromName: string;
  department?: string;
  toName: string;
  chatGPTSummary?: string;
  toDepartment?: string;
  fromDepartment?: string;
}
