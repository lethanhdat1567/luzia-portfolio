export function convertDriveLinkToDirect(link: string): string | null {
    if (!link) return null;

    // Kiểm tra nếu là Google Drive link
    const driveMatch = link.match(/\/d\/([a-zA-Z0-9_-]+)\//);
    if (driveMatch && driveMatch[1]) {
        const fileId = driveMatch[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    // Nếu không phải Drive, trả về nguyên link (Unsplash, Picsum,…)
    return link;
}
