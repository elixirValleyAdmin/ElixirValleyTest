import { CallRecordData } from "./callRecordCommunication.type";
import { CustomerCommunicationHistory } from "./customerCommunication.type";

export interface DataPayload {
  customerCommunicationData: CustomerCommunicationHistory[];
  callRecord: CallRecordData;
}

// My final data should map with type check for DataPayload
export interface FinalResultPayload {
  data: DataPayload[];
}

// My final result should be like this: Here data from customerCommunication maps with call record based on the user ID
// Arrange the customer communication data based on timestamp, (the newest communication should display first).
// Based on the newest customer communication, append the type in the callRecord
// If the customer communication type is chat, then the callRecord type should be chat
// If the customer communication type is missed_call, then the callRecord type should be missed_call
// If the customer communication type is call, then the callRecord type should be call
// If the customer communication type is voicemail, then the callRecord type should be voicemail
// See line 65 here the type is chat because based on the customerCommunicationData (asc order) the most recent communication is a chat

// example:
// Endpoint: `/masterData`
const result: DataPayload[] = [
  {
    customerCommunicationData: [
      {
        userId: 1,
        id: "420e3dc4-f0cb-407e-ab59-478dc18434a5",
        type: "chat",
        domain: "Sales",
        direction: "inbound",
        from_num: "+1234567890",
        text: "Thank you for providing that information. Let me check the account and see what the issue might be.",
        fromName: "Gus Dakas",
        department: "Sales",
        toName: "Jane Doe",
        timestamp: "2022-12-27T06:15:00.000Z",
      },
      {
        id: "e39c96f4-2bf7-42ee-8888-c5a1b92d0218",
        userId: 1,
        type: "missed_call",
        domain: "",
        direction: "inbound",
        from_num: "+1234567890",
        text: "",
        fromName: "Jane Doe",
        toName: "Gus Dakas",
        toDepartment: "Sales",
        fromDepartment: "Customer",
        timestamp: "2022-12-29T03:15:00.000Z",
      },
      // .....
    ],
    callRecord: {
      name: "Jane Doe",
      phoneNumber: "+1234567890",
      id: 1,
      startTime: "2022-12-27T06:15:00.000Z",
      callType: "chat",
    },
  },
  //.. Same goes for other record
];

// Endpoint: /callrecord
