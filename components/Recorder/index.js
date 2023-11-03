import { useState, useEffect } from 'react'
import RecordRTC, { invokeSaveAsDialog, StereoAudioRecorder } from 'recordrtc';
import styles from '../../styles/Home.module.css'
export default function Recorder() {
    const [audioBlob, setAudioBlob] = useState();
    const [recorder,setRecorder]=useState();
    const [titleText,setTitleText]=useState();
    useEffect(() => {
        if (audioBlob) {
            var data = new FormData()
            data.append('file', audioBlob, 'file')
            fetch(`http://localhost:5000/transcript`, {
                method: "POST",
                body: data,
                mode: 'cors'
            })
            .then(response => response.json())
            .then(res => { 
                setTitleText( <div className={styles.description}>
                    {`Summary:${res[0]}` }<br></br><br></br>
                    {' '}
                    {`Transcript:${res[1]}`}
            </div>)
            })
            .catch(err => console.log(err));

        }
    }, [audioBlob])
    function handleRecordClick() {
        if(recorder){
            recorder.stopRecording(function () {
                let blob = recorder.getBlob();
                setAudioBlob(blob)
            });
            setRecorder()
            setButtonColor('orange')
            setButtonText('RECORD')
            return
        }
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(async function (stream) {
            let nrecorder = RecordRTC(stream, {
                type: 'audio',
                recorderType: StereoAudioRecorder,
                mimeType: 'audio/wav',
            });
            nrecorder.startRecording();
            setRecorder(nrecorder)
            
        });
        if (buttonText === 'RECORD') {
            setButtonColor('cyan')
            setButtonText('RECORDING')
        }
    }
    const [buttonText, setButtonText] = useState('RECORD')
    const [buttonColor, setButtonColor] = useState('orange')
    return (<div className={styles.main}>
        <div className={styles.voicesection}>
        <button onClick={handleRecordClick} style={{ backgroundColor: buttonColor }}>{buttonText}</button>
    </div>
   {titleText}
   </div>)
}
