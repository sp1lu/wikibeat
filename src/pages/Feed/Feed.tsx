/** Libraries */
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import useEventSource from '../../hooks/useEventSource'

/** Styles */
import './Feed.css'

/** Data */
import { AUDIOS, LANGUAGES } from '../../data';

/** Components */
import DialogMenu from '../../components/DialogMenu/DialogMenu';
import AudioManager, { type AudioManagerHandle } from '../../components/AudioManager/AudioManager'
import AudioVisualizer, { type AudioVisualizerHandle } from '../../components/AudioVisualizer/AudioVisualizer'

/** Utils */
import { filterWikimediaFeed, reduceNumber } from '../../utils'
import Credit from '../../components/Credit/Credit';

/** Page */
function FeedPage() {
    /** Refs */
    const audioManagerRef = useRef<AudioManagerHandle>(null);
    const audioVisualizerRef = useRef<AudioVisualizerHandle>(null);
    const lastEditRef = useRef<HTMLParagraphElement>(null);

    /** States */
    const [isAudio, setIsAudio] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>(Array.from(LANGUAGES.keys())[0]);
    const [edits, setEdits] = useState<{ id: string, title: string, url: string }[]>([]);

    /** Hooks */
    const { data } = useEventSource('https://stream.wikimedia.org/v2/stream/recentchange');

    useEffect(() => {
        if (filterWikimediaFeed(data, selectedLanguage)) {
            setEdits((oldValue: { id: string, title: string, url: string }[]) => [...oldValue, { id: data['id'], title: data['title'], url: data['title_url'] }]);

            let audioKey = (data.id && typeof data.id === 'number') ? reduceNumber(data.id) : 1;
            if (audioKey < 1 || audioKey > 6) audioKey = 1;

            // console.log(data);

            let pitch = 1;
            if (data.length && data.length.old && data.length.new) pitch = ((Math.abs(data.length.old - data.length.new) % 2) + 2) % 2;

            audioManagerRef.current?.playNote(AUDIOS.get(audioKey) ?? '/audio/C2v10.mp3', pitch);
            audioVisualizerRef.current?.playSound(AUDIOS.get(audioKey) ?? '/audio/C2v10.mp3');
        }
    }, [data, selectedLanguage]);

    useEffect(() => {
        setEdits([]);
    }, [selectedLanguage]);

    useEffect(() => {
        if (lastEditRef.current) lastEditRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [edits]);

    /** Events */
    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value: string = (event.target as HTMLSelectElement).value;
        setSelectedLanguage(value);
    }

    /** View */
    return (
        <div className='feed-page'>
            {
                !isAudio ?
                    <div className='toggle-audio'>
                        <button type="button" style={{ position: 'fixed' }} onClick={() => setIsAudio(true)} className='toggle-audio__btn pulse'>Click to toggle audio</button>
                    </div> :
                    null
            }

            <DialogMenu buttonText='Credits' buttonStyle={{position: 'fixed', top: '24px', right: '24px'}}>
                <div>
                    <Credit role='Designer' name='Davide Rivolta' />
                    <Credit role='Developer' name='Davide Rivolta' />
                    <Credit role='Inspired by' name='Listen to Wikipedia' url='http://listen.hatnote.com/' />
                    <Credit role='' name='BitListen' url='https://www.bitlisten.com/' />
                    <Credit role='Icosahedron by' name='Wael Yasmina' url='https://waelyasmina.net/articles/how-to-create-a-3d-audio-visualizer-using-three-js/' />
                    <Credit role='Tech stack' name='React' />
                    <Credit role='' name='Three js' />
                    <Credit role='' name='Typescript' />
                </div>
            </DialogMenu>

            <select className='select' onChange={(e) => onSelectChange(e)}>
                {
                    Array.from(LANGUAGES).map(([k, v]: [string, string]) => (
                        <option key={k} value={k} defaultValue={0}>{v}</option>
                    ))
                }
            </select>

            {
                isAudio ?
                    <div className='edits'>
                        {edits.map((e: { id: string, title: string, url: string }, i: number) => (
                            <p key={e.id} ref={(i === edits.length - 1) ? lastEditRef : null} className='edit'>
                                <a href={e.url} target='_blank' className='edit__url'>{e.title}</a>
                            </p>
                        ))}
                    </div> :
                    null
            }

            <AudioManager ref={audioManagerRef} isAudio={isAudio} />
            <AudioVisualizer ref={audioVisualizerRef} />
        </div>
    )
}

export default FeedPage