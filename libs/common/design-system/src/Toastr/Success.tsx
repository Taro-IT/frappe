import ToastrMessage from '.'
import {ToastrProps} from './index'
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
  return (
    <ToastrMessage
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
          <svg
            className="w-5 h-5 flex mb-auto mr-auto text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-1 flex-col w-full">
          {typeof content === 'string' && <p className="text-sm">{content}</p>}
          {typeof content === 'object' && content}
        </div>
        <svg
          onClick={() => {
            toggleToastr ? toggleToastr(false) : ''
          }}
          className="ml-auto mr-0 my-auto h-6 w-6 text-gray-800 hover:text-gray-700 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </ToastrMessage>
  )
}

export default SuccessToastrMessage
