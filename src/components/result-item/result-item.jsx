import './styles.css'

export const ResultItem = ({ text, subText, value, space, units }) => {
    return (
        <div style={{display: 'flex', position: 'relative' }}>
            <section>
                {text}
                <span style={{ position: 'absolute', fontSize: '.8rem', bottom: '-2px' }}>
                    {subText}
                </span>


            </section>
            <section
                style={{
                    position: 'absolute',
                    left: space || '48px',
                    whiteSpace: 'nowrap'
                }}
                type='text'
            >
                {String(value) + ' ' + (units || '')}
            </section>
        </div>
    )
}