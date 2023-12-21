// import React, { useState } from 'react'

export default function About(props) {
    // const [btnState, setBtnState] = useState("enable light mode")
    // const [Mystyle1, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let Mystyle = {
        color: props.mode === 'dark'?'white':' rgb(33, 37, 41)',
        backgroundColor: props.mode === 'dark'?' rgb(33, 37, 41)':'white'
    }
    let Mystyle1 = {
        color: props.mode === 'dark'?'white':' rgb(86, 100, 114)',
        backgroundColor: props.mode === 'dark'?' rgb(86, 100, 114)':'white'
    }
    // const toggleStyle=()=>{
    //     if(Mystyle1.color === "black"){
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnState("enable light mode");
    //     }else{
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
    //         setBtnState("enable dark mode");
    //     }
    // }

    return (
        <>
        <body>
            <div className='container' style={Mystyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mystyle1}>
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle1}>
                                It is used to analyze your text efficiently and quickly with many features
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={Mystyle1}>
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle1}>
                                It provides instant character count and word count statistics in real time. Also, the content is previewd with the reading time required
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mystyle1}>
                                <strong>Browser compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={Mystyle1}>
                                It easily works on any web Browser like chrome, firefox, safari, internet explorer etc as well as on other devices like mobile phones because it is responsive.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="button_container">
                    <button onClick={toggleStyle} type="button" className="btn btn-success my-3">{btnState}</button>
                </div> */}
            </div>
        </body>
        </>
    )
}
