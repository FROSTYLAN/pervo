import './styles.css';
import '../../styles/power-factor-graphics.css';

import { useState } from 'react'
import { ResultItem } from '../../components'

const PI = Math.PI

export const PowderFactorMether = () => {
    const [h, setH] = useState(0)
    const [d, setD] = useState(0)
    const [b, setB] = useState(0)
    const [j, setJ] = useState(0)
    const [t, setT] = useState(0)
    const [l, setL] = useState(0)
    const [cl, setCL] = useState(0)

    // Constants
    const [KB, setKb] = useState(25)
    const [KS, setKs] = useState(1.15)
    const [KJ, setKj] = useState(0.3)
    const [KT, setKt] = useState(0.7)

    // methers
    const [sg, setSG] = useState(0)
    const [rho, setRHO] = useState(0)
    const [sanfo, setSANFO] = useState(0)
    const [rows, setRows] = useState(0)
    const [drillrow, setDRILLROW] = useState(0)
    const [woe, setWOE] = useState(0)

    // Results
    const [kh, setKH] = useState(0)
    const [ve, setVE] = useState(0)
    const [we, setWE] = useState(0)
    const [texp, setTEXP] = useState(0)
    const [tr, setTR] = useState(0)
    const [pfanfo, setPFANFO] = useState(0)

    // Results 2
    const [wexpL, setWexpL] = useState(0)
    const [cdph, setCdph] = useState(0)
    const [newb, setNewb] = useState(0)
    const [news, setNews] = useState(0)

    const changeToMeters = (e) => {
        const inches = Number(e.target.value)
        const meters = Number(inches * 0.0254)
        setD(meters)
    }

    const calculate = () => {
        const bAux = Number(KB * d)
        console.log(bAux);
        const jAux = Number((KJ * bAux).toFixed(0))
        const tAux = Number(KT * bAux).toFixed(1)
        const lAux = Number(h + jAux)
        const clAux = Number(lAux - tAux)

        // Results
        const khAux = Number(h / bAux).toFixed(1)
        const veAux = Number(Math.PI * Math.pow((d), 2) * ((lAux - tAux) / 4)).toFixed(2);
        const weAux = Number(rho * veAux * 1000).toFixed(2)
        const texpAux = Number(weAux * rows * drillrow).toFixed(2)
        const trAux = Number(rows * drillrow * sg * h * bAux * (bAux * KS)).toFixed(2)
        const panfoAux = Number(texpAux / trAux).toFixed(2)
        const wexplAux = Number((Math.PI / 4) * Math.pow((d), 2) * rho * 1000).toFixed(1);
        const cdphlAux = Number(woe / wexplAux).toFixed(1);
        const newbAux = Number(Math.sqrt((cdphlAux * woe) / (KS * h * sg * pfanfo))).toFixed(1)
        const newsAux = Number(KS * newbAux).toFixed(1)

        setB(bAux)
        setJ(jAux)
        setT(tAux)
        setL(lAux)
        setCL(clAux)

        // Results
        setKH(khAux)
        setVE(veAux)
        setWE(weAux)
        setTEXP(texpAux)
        setTR(trAux)
        setPFANFO(panfoAux)

        // Results 2
        setWexpL(wexplAux)
        setCdph(cdphlAux)
        setNewb(newbAux)
        setNews(newsAux)
    }


    return (
        <div className='PowderFactorMether'>
            <h2>Power Factor</h2>
            <section style={{ display: 'flex' }}>
                <article className='methers-container'>
                    <div className="inp-1">
                        <span>KB</span>
                        <input
                            type="number"
                            style={{ width: '50px', margin: '0 12px 0 4px' }}
                            value={KB}
                            onChange={(e) => setKb(Number(e.target.value))}
                        />
                    </div>
                    <div className="inp-1">
                        <span>KS</span>
                        <input
                            type="number"
                            style={{ width: '50px', margin: '0 12px 0 4px' }}
                            value={KS}
                            onChange={(e) => setKs(Number(e.target.value))}
                        />
                    </div>
                    <div className="inp-1">
                        <span>KJ</span>
                        <input
                            type="number"
                            style={{ width: '50px', margin: '0 12px 0 4px' }}
                            value={KJ}
                            onChange={(e) => setKj(Number(e.target.value))}
                        />
                    </div>
                    <div className="inp-1">
                        <span>KT</span>
                        <input
                            type="number"
                            style={{ width: '50px', margin: '0 12px 0 4px' }}
                            value={KT}
                            onChange={(e) => setKt(Number(e.target.value))}
                        />
                    </div>
                </article>
                <article className='methers-container'>
                    <h5>Rock</h5>
                    <div className="inp-1">
                        <span>SG</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setSG(Number(e.target.value))}
                        />
                        <span>Ton/m³</span>
                    </div>
                    <h5>Explosive</h5>
                    <div className="inp-1">
                        <span>&rho;</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setRHO(Number(e.target.value))}
                        />
                        <span>g/cm³</span>
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
                    <h5>Deck design</h5>
                    <div className="inp-1">
                        <span>Weight of explosive</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setWOE(Number(e.target.value))}
                        />
                        <span>lb/delay</span>
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

                <article className='results-container' style={{ marginLeft: '20px', marginRight: '160px' }}>
                    <h3>Methers</h3>
                    <ResultItem
                        text='K'
                        subText='h'
                        value={kh}
                    />
                    <ResultItem
                        text='V'
                        subText='e'
                        value={ve}
                        units="m³"
                    />
                    <ResultItem
                        text='W'
                        subText='e'
                        value={we}
                        units="Kg"
                    />
                    <ResultItem
                        text='T'
                        subText='exp'
                        value={texp}
                        units="Kg"
                    />
                    <ResultItem
                        text='T'
                        subText='r'
                        value={tr}
                        units="Ton"
                    />
                    <ResultItem
                        text='PF'
                        subText='anfo'
                        value={pfanfo}
                        units="Kg/ton"
                    />
                </article>
                <article className='results-container' style={{ marginLeft: '20px' }}>
                    <h3>Stemming & Decking</h3>
                    <ResultItem
                        text='Wexp/L'
                        space='170px'
                        value={wexpL}
                        units='kg/L'
                    />
                    <ResultItem
                        text='Charge decks per hole'
                        space='170px'
                        value={cdph}
                        units="meters/deck"
                    />
                    <ResultItem
                        text='New burden (B)'
                        space='170px'
                        value={newb}
                        units="m"
                    />
                    <ResultItem
                        text='New spacing (S)'
                        space='170px'
                        value={news}
                        units="m"
                    />
                </article>
            </section>
        </div>
    )
}