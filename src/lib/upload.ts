export function convertDriveLinkToDirect(link: string) {
    // Regex lấy fileId
    const match = link.match(/\/d\/(.*?)\//);
    if (!match || !match[1]) return null;

    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
