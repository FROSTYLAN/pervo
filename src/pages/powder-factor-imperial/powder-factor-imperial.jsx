import './styles.css';
import '../../styles/power-factor-graphics.css';

import { useState } from 'react'
import { ResultItem } from '../../components'

const PI = Math.PI

export const PowderFactorImperial = () => {
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
    const [news, setNews] = useState(0.0)
    const [whole, setWhole] = useState(0)
    const [yph, setYph] = useState(0.0)

    const calculate = () => {
        console.log(KB, d);
        const bAux = Number((KB * d) / 12).toFixed(1)
        const jAux = Number((KJ * bAux).toFixed(0))
        const tAux = Number(KT * bAux).toFixed(0)
        const lAux = Number(h + jAux)
        const clAux = Number(lAux - tAux)

        // Results
        const khAux = Number(h / bAux).toFixed(1)
        const veAux = Number(0.3405 * rho * Math.pow(d, 2)).toFixed(1);
        const weAux = Number(veAux * clAux).toFixed(2)
        const trAux = Number(rows * drillrow * sg * h * bAux * (bAux * KS)).toFixed(2)
        const panfoAux = Number((weAux * 27) / (h * bAux * bAux * KS)).toFixed(2)
        const texpAux = Number(weAux / panfoAux).toFixed(0)

        const cdphlAux = Number(woe / veAux).toFixed(1);
        const newbAux = Number(Math.sqrt((wexpL*woe*27)/(Number(panfoAux)*KS*h))).toFixed(0)
        const newsAux = Number(KS * newbAux).toFixed(0)
        const wholeAux = Number(wexpL * woe).toFixed(0)
        const yphAux = Number(newbAux * newsAux * h / 27).toFixed(0)

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
        setCdph(cdphlAux)
        setNewb(newbAux)
        setNews(newsAux)
        setWhole(wholeAux)
        setYph(yphAux)
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
                            type="number"
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
                        <span>kg/delay</span>
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
                                    type="number"
                                    value={d}
                                    onChange={(e) => setD(Number(e.target.value))}
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
                        text='L'
                        subText='D'
                        value={ve}
                        units="lb/ft"
                    />
                    <ResultItem
                        text='W'
                        subText='e'
                        value={we}
                        units="lb/hole"
                    />
                    <ResultItem
                        text='V'
                        subText='exp'
                        value={texp}
                        units="yd³"
                    />
                    <ResultItem
                        text='PF'
                        subText='anfo'
                        value={pfanfo}
                        units="lb/yd³"
                    />
                </article>
                <article className='results-container' style={{ marginLeft: '20px' }}>
                    <h3>Stemming & Decking</h3>
                    <div className="inp-1">
                        <span>Number decks</span>
                        <input
                            type="text"
                            style={{ width: '40px', margin: '0 12px 0 4px' }}
                            onChange={(e) => setWexpL(Number(e.target.value))}
                        />
                        <span>deck</span>
                    </div>
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
                    <ResultItem
                        text='W hole'
                        space='170px'
                        value={whole}
                        units="lb"
                    />
                    <ResultItem
                        text='Yield per hole'
                        space='170px'
                        value={yph}
                        units="yd³"
                    />
                </article>
            </section>
        </div>
    )
}