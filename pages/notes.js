import NoteCard from '../components/NoteCard'

import notesStyles from '../styles/Notes.module.css'
import Link from 'next/link'

// for images, use 350x270 pixel image
const allNotes = [
  {
    title: 'Max Wofford',
    sub: 'Episode 1',
    link: 'https://devenjadhav.notion.site/Max-Interview-Details-be41671482e349abbc73e69965dd44b9',
    image: '/note-assets/msw.png'
  },
  {
    title: 'Zach Latta',
    sub: 'Episode 2',
    link: 'https://devenjadhav.notion.site/ZRL-d54d720fe8ba410da3d1c531b0c2dae3',
    image: '/note-assets/zach_latta.png'
  },
  {
    title: 'Zach Fogg',
    sub: 'Episode 3',
    link: 'https://devenjadhav.notion.site/ZFogg-c16aacb03369415c9a7beb4c8823dd98',
    image: '/note-assets/zfogg.png'
  },
   {
    title: 'Ekaterina',
    sub: 'Episode 4',
    link: 'https://devenjadhav.notion.site/ZFogg-c16aacb03369415c9a7beb4c8823dd98',
    image: 'https://ca.slack-edge.com/T0266FRGM-UM19V8U79-fdd7ff6d4c23-512'
  }
]

export default function Notes() {
  return (
    <div className={notesStyles.container}>
      <h1 className={notesStyles.title}>
        Notes from{' '}
        <span className={notesStyles.titleHighlight}>
          <Link href="/">The Orpheus Show</Link>
        </span>
      </h1>

      <h3 className={notesStyles.subtitle}>
        Our documents for prep and episode planning, all open sourced!
      </h3>

      <div className={notesStyles.cardDiv}>
        {allNotes.map((note, i) => (
          <NoteCard notes={note} key={i} />
        ))}
      </div>
    </div>
  )
}
