export default function radioSelector (
    {
        fieldId,
        fieldName,
        choices,
        choicesSlug,
        defaultValue = ''
    }: {
        fieldId: string,
        fieldName: string,
        choices: string[],
        choicesSlug: string[],
        defaultValue: string
    }) {
    return (
        <div>
            <legend className="mb-2 block text-sm font-medium">
            Set the { fieldName }
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                <div className="flex gap-4">
                    {choices.map((choice, index) => {
                        let defaultC: boolean;
                        defaultC=false;
                        if (defaultValue == choicesSlug[index]) defaultC = true;
                        return (
                            <div key={index} className="flex items-center">
                                <input
                                    id={fieldId + '_' + choicesSlug[index]}
                                    name={fieldId}
                                    type="radio"
                                    defaultChecked={defaultC}
                                    value={choicesSlug[index]}
                                    className="text-white-600 h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 focus:ring-2"
                                />
                                <label
                                    htmlFor={fieldId + '_' + choicesSlug[index]}
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    {choice}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}