import handler from "../libs/handler_lib";
import dynamoDb from "../libs/dynamodb_lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "user_id = :user_id",
    ExpressionAttributeValues: {
      ":user_id": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});