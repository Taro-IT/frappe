import {Toastr} from './'
import {ToastrProps} from './index'
import {CheckCircleIcon, XIcon} from '@heroicons/react/solid'
type SuccessToastrMessageprops = Omit<ToastrProps, 'type'>

const SuccessToastrMessage = ({
  top,
  bottom,
  left,
  right,
  width,
  content,
  onClick,
  toggleToastr,
  time,
  ...props
}: SuccessToastrMessageprops) => {
  const closeToastr = () => {
    toggleToastr(false)
  }
  return (
    <Toastr
      type="success"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      toggleToastr={toggleToastr}
      time={time}
      width={width}
      onClick={onClick}
    >
      <div className="flex flex-row font-dm">
        <div className="flex w-8">
          <CheckCircleIcon className="w-5 h-5 flex mb-auto mr-auto text-green-500"/>
        </div>
        <div className="flex flex-1 flex-col w-full">
          {typeof content === 'string' && <p className="text-sm">{content}</p>}
          {typeof content === 'object' && content}
        </div>
        <XIcon
          onClick={closeToastr}
          className="ml-3 mr-0 my-auto h-5 w-5 text-gray-400 hover:text-gray-700 cursor-pointer"/>
      </div>
    </Toastr>
  )
}

export default SuccessToastrMessage
