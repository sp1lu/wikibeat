/** Libraries */
import AudioVisualizer from '../../components/AudioVisualizer'
import useEventSource from '../../hooks/useEventSource'

/** Utils */
import { filterWikimediaFeed } from '../../utils';

/** Page */
function FeedPage() {
    const { data } = useEventSource('https://stream.wikimedia.org/v2/stream/recentchange');

    if (filterWikimediaFeed(data)) console.log(data);

    return (
        <div className='feed-page'>
            <AudioVisualizer />
        </div>
    )
}

export default FeedPage