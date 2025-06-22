/** Libraries */
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

/** Models */
interface AudioManagerProps {
    isAudio: boolean
}

export interface AudioManagerHandle {
    playNote: (url: string, pitch: number) => void;
}

/** Component */
const AudioManager = forwardRef((props: AudioManagerProps, ref: React.ForwardedRef<AudioManagerHandle>) => {
    const { isAudio } = props;

    /** Ref */
    const audioCtx = useRef<AudioContext>(null);

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
        playNote: (url: string, pitch: number) => {
            if (!audioCtx.current) return;

            fetch(url)
                .then((res: Response) => res.arrayBuffer())
                .then((arrayBuffer: ArrayBuffer) => audioCtx.current!.decodeAudioData(arrayBuffer))
                .then((audioBuffer: AudioBuffer) => {
                    const source = audioCtx.current!.createBufferSource();
                    source.buffer = audioBuffer;
                    source.playbackRate.value = pitch;
                    source.connect(audioCtx.current!.destination);
                    source.start();

                    source.onended = () => source.disconnect();
                })
        }
    }));


    /** View */
    return null;
})

export default AudioManager