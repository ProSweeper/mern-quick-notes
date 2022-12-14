export default function NoteItem({note}) {
  const date = new Date(note.createdAt)
  return(
    <>
      <p>{note.text}</p>
      <hr />
      <p>Created on {date.toLocaleDateString('en-US')}</p>
    </>
  )
}