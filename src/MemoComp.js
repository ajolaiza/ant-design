import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo components')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
