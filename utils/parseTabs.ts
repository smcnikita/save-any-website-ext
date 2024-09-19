import type { SavedTabData } from '@t/index';

export function parseTabs(json: string | undefined): SavedTabData[] {
    let tabs: SavedTabData[] = [];

    if (json) {
        try {
            const parsed = JSON.parse(json);

            if (Array.isArray(parsed)) {
                tabs = parsed as SavedTabData[];
            }
        } catch (error) {
            console.error('Failed to parse JSON', error);
        }
    }

    return tabs;
}
