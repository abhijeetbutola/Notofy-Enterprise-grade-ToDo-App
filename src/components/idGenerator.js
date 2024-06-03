// idGenerator.js

function generateTimestampId() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36 string
  const random = Math.random().toString(36).substring(2, 7); // Generate random component
  return timestamp + random;
}

export default generateTimestampId;
