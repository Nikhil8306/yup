function Description({children, className, styles}) {
    return <>

        <div style={{
            ...styles,
            fontSize: "1.45rem",
            color: "var(--c4)"
            }}
            
            className={className}
            >
                {children}
            </div>

    </>
}

export default Description;