import React from 'react'

const MainContainer = () => {
    return (
        <div> <div className="container text-center">
            <h3>What We Do</h3><br />
            <div className="row">
                <div className="col-sm-4">
                    <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: "100%" }} alt="" />
                    <p>Current Project</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{ width: "100%" }} alt="" />
                    <p>Project 2</p>
                </div>
                <div className="col-sm-4">
                    <div className="well">
                        <p>Some text..</p>
                    </div>
                    <div className="well">
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        </div><br /></div>
    )
}

export default MainContainer