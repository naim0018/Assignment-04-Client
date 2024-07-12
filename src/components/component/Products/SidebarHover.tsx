

// From Sidebar
const SidebarHover:React.FC<{option:string}> = ({option}) => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <input type="checkbox" />
      <label className='text-start hover:text-black'>{option}</label>
    </div>
  )
}

export default SidebarHover