/** Libraries */
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

/** Models */
interface AudioManagerProps {
    isAudio: boolean
}

export interface AudioManagerHandle {
    playNote: (url: string, pitch: number, pan?: -1 | 0 | 1) => void;
}

/** Component */
const AudioManager = forwardRef((props: AudioManagerProps, ref: React.ForwardedRef<AudioManagerHandle>) => {
    const { isAudio } = props;

    /** Ref */
    const audioCtx = useRef<AudioContext>(null);
    const bufferCache = useRef<Map<string, AudioBuffer>>(new Map<string, AudioBuffer>());

    /** Hooks */
    useEffect(() => {
        if (isAudio) {
            audioCtx.current = new window.AudioContext();
        } else {
            audioCtx.current?.close();
            audioCtx.current = null;
        }

        return () => {
            audioCtx.current?.close();
            audioCtx.current = null;
        };
    }, [isAudio]);

    useImperativeHandle(ref, () => ({
        playNote: (url: string, pitch: number, pan: -1 | 0 | 1 = 0) => {
            if (!audioCtx.current) return;

            const audioBuffer: AudioBuffer | undefined = bufferCache.current.get(url);

            if (!audioBuffer) {
                fetch(url)
                    .then((res: Response) => res.arrayBuffer())
                    .then((arrayBuffer: ArrayBuffer) => audioCtx.current!.decodeAudioData(arrayBuffer))
                    .then((audioBuffer: AudioBuffer) => {
                        bufferCache.current.set(url, audioBuffer);
                    })
                    .catch((err: any) => {
                        console.error('Errore nel caricamento del file audio', err);
                        return;
                    })
            }

            const source: AudioBufferSourceNode = audioCtx.current!.createBufferSource();
            source.buffer = audioBuffer ?? null;
            source.playbackRate.value = pitch;

            const panner: StereoPannerNode = audioCtx.current.createStereoPanner();
            panner.pan.value = pan;

            source.connect(panner);
            panner.connect(audioCtx.current!.destination);
            source.start();

            source.onended = () => source.disconnect();
        }
    }));


    /** View */
    return null;
})

export default AudioManager