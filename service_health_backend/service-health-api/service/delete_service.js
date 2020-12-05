import handler from "../libs/handler_lib";
import dynamoDb from "../libs/dynamodb_lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      user_id: event.requestContext.identity.cognitoIdentityId,
      service_id: event.pathParameters.service_id,
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});