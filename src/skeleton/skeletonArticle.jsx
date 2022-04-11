import Shimmer from "./shimer";
import SkeletonELement from "./skeletonElement"

const SkeletonArticle = ({theme})=>{
    const themeClass = theme || "light"
    return(
        <div className={`skeleton-wrapper ${theme}`}>
            <div className="skeleton-article">
            <SkeletonELement type="title" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            </div>
            <Shimmer />
        </div>

    )
}

export default SkeletonArticle;