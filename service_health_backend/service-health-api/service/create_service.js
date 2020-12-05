import * as uuid from "uuid";
import handler from "../libs/handler_lib";
import dynamoDb from "../libs/dynamodb_lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      user_id: event.requestContext.identity.cognitoIdentityId,
      service_id: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});