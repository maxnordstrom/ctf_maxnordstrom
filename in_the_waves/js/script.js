function revealMessage() {
    
    const blob = "XQQ4RWshRzA6bn1TVSd8NkIiZRBAO3IwYG9OEFY6ZDBvOjxASCFmfnthSx9jMSowOyh5Hlw/eyV0NjNeZT08NlUqKENNJnE2ViFcXTB8fTcyK0ofUjtLKk1jOkRKOlchVmNJR2kzPDJVKz5DO30mZD1lIxBCCWEpSSppBXshVjFvIy8QSz10Im5uPkI/M1wgTycyXzpyUDdgJ21XcTwzJUIiUm0=";

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