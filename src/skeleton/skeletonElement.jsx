import "./skeleton.css"

const SkeletonELement = ({type})=>{
    const classes = `skeleton ${type}`
    return(
        <div className={classes}></div>
    )
}

export default SkeletonELement;