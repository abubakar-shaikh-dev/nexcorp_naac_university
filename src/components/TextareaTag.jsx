export default function TextareaTag(props) {
    return (
      <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
          {props.label}
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name={props.name}
            id={props.name}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={props.default || ''}
            {...props}
          />
        </div>
      </div>
    )
  }