function revealMessage() {
    // Base64 blob — decoding this directly (e.g. CyberChef "From Base64")
    // gives raw scrambled/non-printable bytes, not the message.
    const blob = "XQQ4RWshRzA6bn1TVSd8NkIiZRBAO3IwYG9OEFY6ZDBvOjxASCFmfnthSx9jMSowOyh5Hlw/eyV0NjNeZT08NlUqKENNJnE2ViFcXTB8fTcyK0ofUnJLb01uOmtKP1cgVntJQ2knPClVbj5fOzQmZD08I1FCNmEtSSFpEHshVi1vKS9eSzN0KG4T";

    // Step 1: base64 decode -> byte array
    const raw = atob(blob);
    const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));

    // Step 2: deinterleave — real signal is on the odd-indexed bytes,
    // noise bytes sit on the even indices
    const scrambled = [];
    for (let i = 1; i < bytes.length; i += 2) {
        scrambled.push(bytes[i]);
    }

    // Step 3: XOR-decode the whole scrambled message with the key
    // (the entire message was garbled with this key, not just parts of it)
    const key = "N0RD";
    let message = "";
    for (let i = 0; i < scrambled.length; i++) {
        const keyByte = key.charCodeAt(i % key.length);
        message += String.fromCharCode(scrambled[i] ^ keyByte);
    }

    console.log(message);
    return message;
}