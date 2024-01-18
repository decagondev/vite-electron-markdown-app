import React, { useCallback } from 'react'


interface Props {
    initialDoc: string,
    onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
    const { onChange, initialDoc } = props;
    const handleChange = useCallback(state => onChange(state.doc.toString()), [onChange]);


    return (
        <div>
            Editor
        </div>
    )
}
export default Editor