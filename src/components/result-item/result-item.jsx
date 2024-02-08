import './styles.css'

export const ResultItem = ({ text, subText, value }) => {
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
                    left: '48px'
                }}
                type='text'
            >
                {value}
            </section>
        </div>
    )
}