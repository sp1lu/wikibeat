/** Libraries */
import { useEffect, useState } from 'react'

/** Hook */
const useEventSource = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {

        const eventSource: EventSource = new EventSource(url);

        eventSource.onopen = () => {
            setIsOpen(true);
        }

        eventSource.onmessage = (event: MessageEvent) => {
            setData(JSON.parse(event.data));
        }

        eventSource.onerror = (err: any) => {
            setError(err);
            setIsOpen(false);
            console.error('EventSource failed:', err);
        };

        return () => {
            eventSource.close();
        }

    }, [url]);

    return { data, error, isOpen };
}

export default useEventSource