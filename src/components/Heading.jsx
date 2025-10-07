function Heading({children, className}) {
    return<>

        <div
            style={{
                fontSize: "2.7rem",
            }}

            className={className}
        >
            {children}
        </div>
    
    </>
}

export default Heading;