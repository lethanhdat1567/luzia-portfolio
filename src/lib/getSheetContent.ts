// lib/getSheetContent.ts
export async function getSheetContent(page: string) {
    const res = await fetch(
        `https://opensheet.elk.sh/1BHu_4np52dHSkPzTKsR7U7CE2C-cFo1m1Bw01lb27Ng/${page}`,
        { next: { revalidate: 0 } }, // web tự update sau 60s
    );

    const sheetData = await res.json();

    // Chuyển mảng thành object { key: value }, xử lý khoảng trắng, bỏ line trống
    const content: Record<string, string> = {};

    sheetData.forEach((item: any, index: number) => {
        if (!item.key || !item.value) return; // bỏ dòng trống
        const key = String(item.key).trim();
        const value = String(item.value).trim();

        if (!key) return; // bỏ key rỗng
        content[key] = value;
    });

    return content;
}
