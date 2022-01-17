import UserInput from "../components/users/UserInput";
import UserCard from "../components/users/UserCard";
import RoomCode from "../components/room/RoomCode";
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {Howl, Howler} from 'howler'
import ClickSound from '../audioclips/click.wav'

// Socket io implement
import socketIOClient from "socket.io-client"


function Room() {
    const [translations, setTranslations] = useState({
        'kmn':['Ke mana','Where to'],
        'gmn':['Bagaimana', 'How'],
        'bgmn':['Bagaimana', 'How'],
    })

    const [translated, setTranslated] = useState([])

    // Play a sound with src
    const SoundPlay = (src) => {
        const sound = new Howl({src})
        sound.play()
    }

    // Establish socket connection with server
    useEffect(() => {
        Howler.volume(0.5)
    }, [])


    // Check if theres any dictionary match, update answer
    const askQuestion = (question) => {
        const answer = translations[question]
        answer ? setTranslated(answer) : setTranslated('')
    }

  return (
      <div>
          {/* Display room code */}
          <RoomCode />
          <h1 className="text-2xl mb-10"> {!translated.length ? 'There is currently no translation for this word.' : 'A translation was found' }</h1>

          {/* Question input */}
          <UserInput askQuestion={askQuestion}/>

            {/* Display questions */}
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            <UserCard username="Translated word (English)" text={translated[1]} />
            <UserCard username="Full Word (Indonesian)" text={translated[0]} type={'translated'} />
           </div>
      </div>
  );
}

export default Room;
