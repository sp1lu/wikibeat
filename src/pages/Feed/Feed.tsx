/** Libraries */
import { useRef, useState } from 'react';
import useEventSource from '../../hooks/useEventSource'

/** Data */
import { AUDIO } from '../../data';

/** Utils */
import AudioVisualizer, { type AudioVisualizerHandle } from '../../components/AudioVisualizer/AudioVisualizer'
import AudioManager, { type AudioManagerHandle } from '../../components/AudioManager/AudioManager'
import { filterWikimediaFeed, reduceNumber } from '../../utils'

/** Page */
function FeedPage() {
    /** Refs */
    const audioManagerRef = useRef<AudioManagerHandle>(null);
    const audioVisualizerRef = useRef<AudioVisualizerHandle>(null);

    /** States */
    const [isAudio, setIsAudio] = useState<boolean>(false);

    /** Hooks */
    const { data } = useEventSource('https://stream.wikimedia.org/v2/stream/recentchange');

    /** Methods */
    if (filterWikimediaFeed(data)) {
        let audioKey = (data.id && typeof data.id === 'number') ? reduceNumber(data.id) : 1;
        if (audioKey < 1 || audioKey > 6) audioKey = 1;

        let pitch = 1;
        if (data.length && data.length.old && data.length.new) pitch = ((Math.abs(data.length.old - data.length.new) % 2) + 2) % 2;

        audioManagerRef.current?.playNote(AUDIO.get(audioKey) ?? '/audio/C2v10.mp3', pitch);
        audioVisualizerRef.current?.playSound(AUDIO.get(audioKey) ?? '/audio/C2v10.mp3');
    }

    /** View */
    return (
        <div className='feed-page'>
            <button type="button" style={{ position: 'fixed' }} onClick={() => setIsAudio(true)}>PLAY</button>
            <AudioManager ref={audioManagerRef} isAudio={isAudio} />
            <AudioVisualizer ref={audioVisualizerRef} />
        </div>
    )
}

export default FeedPage