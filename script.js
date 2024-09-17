const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  // Encode the string into bytes
  const encoded = encoder.encode(str);
  // Return the length of the encoded byte array
  return encoded.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
