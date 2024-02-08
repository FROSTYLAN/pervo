import './styles.css';
import '../../styles/power-factor-graphics.css';

import { useState } from 'react'
import { ResultItem } from '../../components'


const KB = 25
const KJ = 0.3
const KT = 0.7
const PI = Math.PI  

export const PowderFactor = () => {
    const [h, setH] = useState(0)
    const [d, setD] = useState(0)
    const [b, setB] = useState(0)
    const [j, setJ] = useState(0)
    const [t, setT] = useState(0)
    const [l, setL] = useState(0)
    const [cl, setCL] = useState(0)

    // methers
    const [sg, setSG] = useState(0)
    const [rho, setRHO] = useState(0)
    const [sanfo, setSANFO] = useState(0)
    const [rows, setRows] = useState(0)
    const [drillrow, setDRILLROW] = useState(0)

    // Results
    const [kh, setKH] = useState(0)
    const [ve, setVE] = useState(0)
    const [we, setWE] = useState(0)
    const [texp, setTEXP] = useState(0)
    const [tr, setTR] = useState(0)
    const [pfanfo, setPFANFO] = useState(0)

    const changeToMeters = (e) => {
        const inches = Number(e.target.value)
        const meters = Number(inches * 0.0254)
        setD(meters)
    }

    const calculate = () => {
        const bAux = Number(KB * d)
        const jAux = Number((KJ * bAux).toFixed(0))
        const tAux = Number((Math.floor(KT * bAux * 10) / 10).toFixed(1))
        const lAux = Number(h + jAux)
        const clAux = Number(lAux - tAux)

        // Results
        const khAux = Number(h / bAux).toFixed(1)
        const veAux = Number((Math.PI / 4) * Math.pow(d, 2) * (lAux - tAux)).toFixed(2);
        const weAux = Number(rho * veAux * 1000)

        setB(bAux)
        setJ(jAux)
        setT(tAux)
        setL(lAux)
        setCL(clAux)

        // Results
        setKH(khAux)
        setVE(veAux)
        setWE(weAux)
    }


    return (
        <div className='PowderFactor'>
            <h2>Power Factor</h2>
            <section style={{ display: 'flex' }}>
                <article className='methers-container'>
                    <h5>Rock</h5>
                    <div className="inp-1">
                        <span>SG</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setSG(Number(e.target.value))}
                        />
                    </div>
                    <h5>Explosive</h5>
                    <div className="inp-1">
                        <span>&rho;</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setRHO(Number(e.target.value))}
                        />
                    </div>
                    <div className="inp-1">
                        <span>Sanfo</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setSANFO(Number(e.target.value))}
                        />
                    </div>
                    <h5>Vertical drills</h5>
                    <div className="inp-1">
                        <span>Rows</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setRows(Number(e.target.value))}
                        />
                    </div>
                    <div className="inp-1">
                        <span>Drill/row</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setDRILLROW(Number(e.target.value))}
                        />
                    </div>
                </article>
                <article className='graphics-container'>
                    <div className="canvas">
                        <div className="diagonal-line"></div>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                        <div className="line-h"></div>
                        <div className="line-h-top"></div>
                        <div className="line-l"></div>
                        <div className="line-j"></div>
                        <div className="line-j-top"></div>

                        <div className="line-t"></div>
                        <div className="line-cl"></div>
                        <div className="linet-t-cl-top"></div>

                        <div className="input-container">

                            <div className="inp-1">
                                <span>H</span>
                                <input
                                    type="text"
                                    onChange={(e) => setH(Number(e.target.value))}
                                />
                            </div>
                            <div className="inp-2">
                                <span>J</span>
                                <input type="text"
                                    value={j}
                                    onChange={(e) => setJ(Number(e.target.value))}
                                />
                            </div>
                            <div className="inp-3">
                                <span>L</span>
                                <input type="text"
                                    value={l}
                                    onChange={(e) => setL(Number(e.target.value))}
                                />
                            </div>
                            <div className="inp-4">
                                <span>D</span>
                                <input
                                    type="text"
                                    onChange={changeToMeters}
                                />
                            </div>
                            <div className="inp-5">
                                <input type="text"
                                    value={t}
                                    onChange={(e) => setT(Number(e.target.value))}
                                />
                                <span>T</span>
                            </div>
                            <div className="inp-6">
                                <input type="text"
                                    value={cl}
                                    onChange={(e) => setCL(Number(e.target.value))}
                                />
                                <span>CL</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button onClick={calculate}>Calcular</button>
                    </div>
                </article>

                <article className='results-container' style={{ marginLeft: '20px' }}>
                    <ResultItem
                        text='K'
                        subText='h'
                        value={kh}
                    />
                    <ResultItem
                        text='V'
                        subText='e'
                        value={ve}
                    />
                    <ResultItem
                        text='W'
                        subText='e'
                        value={we}
                    />
                    <ResultItem
                        text='T'
                        subText='exp'
                        value={texp}
                    />
                    <ResultItem
                        text='T'
                        subText='r'
                        value={tr}
                    />
                    <ResultItem
                        text='PF'
                        subText='anfo'
                        value={pfanfo}
                    />
                </article>
            </section>
        </div>
    )
}