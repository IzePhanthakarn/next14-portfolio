export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}