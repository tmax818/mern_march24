import React from 'react'

const Loading = () => {
    return (
        <div style={{  position: 'fixed',top: '50%',left: '50%'}}>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading