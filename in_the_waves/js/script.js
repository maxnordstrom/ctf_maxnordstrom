function revealMessage() {
    
    const blob = "XQQ4RWshRzA6bn1TVSd8NkIiZRBAO3IwYG9OEFY6ZDBvOjxASCFmfnthSx9jMSowOyh5Hlw/eyV0NjNeZT08NlUqKENNJnE2ViFcXTB8fTcyK0ofUnJLb01uOmtKP1cgVntJQ2knPClVbj5fOzQmZD08I1FCNmEtSSFpEHshVi1vKS9eSzN0KG4T";

    const raw = atob(blob);
    const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));

    const scrambled = [];
    for (let i = 1; i < bytes.length; i += 2) {
        scrambled.push(bytes[i]);
    }

    const key = "N0RD";
    let message = "";
    for (let i = 0; i < scrambled.length; i++) {
        const keyByte = key.charCodeAt(i % key.length);
        message += String.fromCharCode(scrambled[i] ^ keyByte);
    }

    console.log(message);
    return message;
}