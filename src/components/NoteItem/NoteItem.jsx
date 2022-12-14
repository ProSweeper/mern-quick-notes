import './NoteItem.css'

export default function NoteItem({note}) {
  const date = new Date(note.createdAt)
  return(
    <div className='note'>
      <p>{note.text}</p>
      <hr />
      <p>Created on {date.toLocaleDateString('en-US')}</p>
    </div>
  )
}