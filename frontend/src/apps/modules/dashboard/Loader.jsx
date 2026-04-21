import React from 'react'

function Loader() {
    return (
        <div className="row bg-light bg-opacity-75 hight-1">
            <div className="col-sm-12 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-secondary border-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader